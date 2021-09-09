(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://static.decoupled-django.com/billing/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3d80":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InvoiceCreate")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Create a new invoice")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("div",{staticClass:"form"},[n("div",{staticClass:"form__aside"},[n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"user"}},[t._v("Select a client")]),n("select",{attrs:{id:"user",name:"user",required:""}},[n("option",{attrs:{value:"--"}},[t._v("--")]),t._l(t.users,(function(e){return n("option",{key:e.email,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" - "+t._s(e.email)+" ")])}))],2)]),t._m(0),t._m(1)]),n("div",{staticClass:"form__main"},[t._l(t.children,(function(t,e){return[n(t,{key:e,ref:"item",refInFor:!0,tag:"component"})]}))],2),n("button",{staticClass:"button__bottom",on:{click:function(e){return t.add()}}},[t._v("Add Another")])]),t._m(2)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"date"}},[t._v("Date")]),n("input",{attrs:{id:"date",name:"date",type:"date",required:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"due_date"}},[t._v("Due date")]),n("input",{attrs:{id:"due_date",name:"due_date",type:"date",required:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__buttons"},[n("button",{attrs:{type:"submit"}},[t._v("Create invoice")]),n("button",{attrs:{disabled:""}},[t._v("Send email")])])}],l=(n("c1f9"),n("159b"),n("a4d3"),n("e01a"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item__field"},[n("div",{staticClass:"form__field"},[n("div",{staticClass:"container__field"},[n("input",{ref:"quantity",staticClass:"container__input",attrs:{id:"quantity",name:"quantity",type:"number",min:"0",max:"10",placeholder:"Qty",required:""}}),n("label",{staticClass:"container__label",attrs:{for:"quantity"}},[t._v("Qty")])])]),n("div",{staticClass:"form__field"},[n("div",{staticClass:"container__field"},[n("input",{ref:"description",staticClass:"container__input",attrs:{id:"description",name:"description",type:"text",placeholder:"Description",required:""}}),n("label",{staticClass:"container__label",attrs:{for:"description"}},[t._v("Description")])])]),n("div",{staticClass:"form__field"},[n("div",{staticClass:"container__field"},[n("input",{ref:"price",staticClass:"container__input",attrs:{id:"price",name:"price",type:"number",min:"0",step:"0.01",placeholder:"Price",required:""}}),n("label",{staticClass:"container__label",attrs:{for:"price"}},[t._v("Price")])])]),n("div",{staticClass:"form__field"},[n("label",{staticClass:"switch"},[n("input",{ref:"taxed",attrs:{id:"taxed",name:"taxed",type:"checkbox"}}),n("span",{staticClass:"slider round"})]),n("label",[t._v("Taxed")])])])}),c=[],u=n("2877"),d={},f=Object(u["a"])(d,l,c,!1,null,null,null),p=f.exports,_={name:"InvoiceCreate",data:function(){return{users:[{id:1,name:"xadrg",email:"xadrg@acme.io"},{id:2,name:"olcmf",email:"olcmf@xyz.dev"}],children:[p]}},methods:{handleSubmit:function(t){var e=new FormData(t.target),n=Object.fromEntries(e);n.items=[];var r=this.$refs.item;r.forEach((function(t){return n.items.push({quantity:t.$refs.quantity.value,description:t.$refs.description.value,price:t.$refs.price.value,taxed:Boolean(t.$refs.taxed.value)})}));var i=this.$cookies.get("csrfToken");fetch("/billing/api/invoices/",{method:"POST",headers:{"Content-Type":"application/json",CSRFToken:i},body:JSON.stringify(n)}).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){console.log(t)})).catch((function(t){return console.log(t)}))},mounted:function(){var t=this;fetch("/billing/api/clients").then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(e){t.users=e}))},add:function(){this.children.push(p)}}},m=_,v=(n("cd89"),Object(u["a"])(m,s,o,!1,null,null,null)),b=v.exports,h={name:"App",components:{InvoiceCreate:b}},y=h,C=Object(u["a"])(y,i,a,!1,null,null,null),g=C.exports,x=n("2b27"),j=n.n(x);r["a"].use(j.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},cd89:function(t,e,n){"use strict";n("3d80")}});
//# sourceMappingURL=app.370edda4.js.map