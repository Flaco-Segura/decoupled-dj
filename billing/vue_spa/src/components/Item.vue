<template>
  <div class="item__field">
    <div class="form__field">
      <div class="container__field">
        <input
          id="quantity"
          name="quantity"
          ref="quantity"
          type="number"
          min="0"
          max="10"
          class="container__input"
          placeholder="Qty"
          required
        />
        <label for="quantity" class="container__label">Qty</label>
      </div>
    </div>
    <div class="form__field">
      <div class="container__field">
        <input id="description" name="description" ref="description" type="text" placeholder="Description" class="container__input" required />
        <label for="description" class="container__label">Description</label>
      </div>
    </div>
    <div class="form__field">
      <div class="container__field">
        <input
          id="price"
          name="price"
          ref="price"
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          class="container__input"
          required
        />
        <label for="price" class="container__label">Price</label>
      </div>
    </div>
    <div class="form__field">
      <label class="switch">
        <input id="taxed" name="taxed" ref="taxed" type="checkbox">
        <span class="slider round"></span>
      </label>
      <label>Taxed</label>
    </div>  
  </div> 
</template>