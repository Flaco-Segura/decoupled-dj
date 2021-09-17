<template>
  <div class="container">
    <h2>Create a new invoice</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form">
        <div class="form__aside">
          <div class="form__field">
            <label for="user">Select a client</label>
            <select id="user" name="user" required>
              <option value="--">--</option>
              <option v-for="user in users" :key="user.email" :value="user.id">
                {{ user.name }} - {{ user.email }}
              </option>
            </select>
          </div>
          <div class="form__field">
            <label for="date">Date</label>
            <input id="date" name="date" type="date" required />
          </div>
          <div class="form__field">
            <label for="due_date">Due date</label>
            <input id="due_date" name="due_date" type="date" required />
          </div>
        </div>
        <div class="form__main">
          <template v-for="(child, index) in children">
            <component :is="child" :key="index" ref="item"></component>
          </template>
        </div>
        
        <button @click="add()" class="button__bottom">Add Another</button>
      </div>
      <div class="form__buttons">
        <button type="submit">Create invoice</button>
        <button disabled>Send email</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Item from "@/components/Item.vue"

  export default {
    name: "InvoiceCreate",
    data: function() {
      return {
        users: [
          { id: 1, name: "xadrg", email: "xadrg@acme.io" },
          { id: 2, name: "olcmf", email: "olcmf@xyz.dev" }
        ],
        children: [
          Item
        ]
      }
    },
    methods: {
      handleSubmit: function(event) {
        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData);
        data.items = []
        const items = this.$refs.item
        items.forEach(item =>
          data.items.push(
            {
              quantity: item.$refs.quantity.value,
              description: item.$refs.description.value,
              price: item.$refs.price.value,
              taxed: Boolean(item.$refs.taxed.value)
            }
          )
        )

        const csrfToken = this.$cookies.get("csrfToken");

        fetch("/billing/api/invoices/", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "CSRFToken": csrfToken
          },
          body: JSON.stringify(data)
        }).then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        }).then( json => {
          console.log(json);
        }).catch(err => console.log(err));
      },
      add() {
        this.children.push(Item);
      }
    },
    mounted() {
      fetch("/billing/api/clients/")
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        }).then(json => {
          this.users = json;
        })
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Nunito:wght@300;400&display=swap");
  h2 {
    /*font-family: "Balsamiq Sans", cursive;*/
    font-size: 2em;
    margin-bottom: 2em;
  }
  .container {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 20px;
    max-width: 900px;
    margin: auto;
  }
  .form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .form__field {
    margin-bottom: 2em;
  }
  .form__field label {
    display: block;
  }
  .form__field input,
  select {
    height: 30px;
    margin-bottom: 1em;
    margin-right: 1em;
  }
  .form__field select {
    font-size: 0.6em;
  }
  .form__field input[type="date"] {
    font-size: 0.6em;
  }
  #quantity {
    width: 30px;
  }
  .form__aside {
    display: flex;
    flex-direction: column;
  }
  .form__main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex: 1 0 0;
  }
  @media screen and (min-width: 960px) {
    #description {
      max-width: 1000px;
    }
  }
  .form__buttons {
    float: right;
  }
  .form__buttons button {
    border: 2px solid #222;
    box-shadow: 5px 5px 0 #222;
    font: inherit;
    font-size: 16px;
    background-color: transparent;
    width: 150px;
    height: 40px;
    margin-right: 0.9em;
    margin-top: 0.9em;
    padding: 2px;
  }
  .container__input:not(:placeholder-shown) + .container__label {
    background: #FFF;
    transform: translate(0, -50%);
    opacity: 1;
  }

  .container__label {
    left: 8px;
    position: absolute;
    top: 0;
    font-size: 12px;

    opacity: 0;
    transition: all 200ms;
  }

  .container__field {
    position: relative
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .item__field {
    display: flex;
  }

  .button__bottom {
    width: 100%;
    height: auto;
    opacity: 0.6;
  }
</style>