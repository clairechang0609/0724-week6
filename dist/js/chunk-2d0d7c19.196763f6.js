(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c19"],{"77be":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-menu"},[e("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),e("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[e("li",[e("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),e("li",[e("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),e("span",[t._v("("+t._s(t.cart.length)+")")])])]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(n){t.opensearch=!0}}},[e("i",{staticClass:"fas fa-search search-icon"})])]),e("li",{staticClass:"ham-btn",on:{click:function(n){n.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[e("span"),e("span"),e("span")])]),e("shopping",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen},on:{deleteproduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),e("ul",{staticClass:"top__main-menu"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("HOME")]),e("span",[t._v("首頁")])])],1),e("li",[e("router-link",{attrs:{to:"/products/All-Products"}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])],1),e("li",{staticClass:"top__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▸")]),e("span",[t._v("分類單品 ▸")])]),e("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Sofa"}},[t._v("Sofa")])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Chair"}},[t._v("Chair")])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Table"}},[t._v("Table")])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Cabinet"}},[t._v("Cabinet")])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Side Table"}},[t._v("Side Table")])],1),e("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[e("router-link",{attrs:{to:"/products/Lighting"}},[t._v("Lighting")])],1)])]),e("li",{on:{click:function(n){return t.getProducts()}}},[e("router-link",{attrs:{to:"/products/Sale"}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])],1),e("li",[e("router-link",{attrs:{to:"/guide"}},[e("span",[t._v("SHIPPING GUIDE")]),e("span",[t._v("運送須知")])])],1),t._m(1)]),e("search",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),e("div",{staticClass:"logo-wrap"},[e("div",{staticClass:"logo-frame"}),e("h1",[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Hurley Furniture")])],1)]),e("div",{staticClass:"header"},[e("ul",{staticClass:"header__main-menu main-menu-nobanner"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("HOME")]),e("span",[t._v("首頁")])])],1),e("li",[e("router-link",{attrs:{to:"/products/All-Products"}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])],1),e("li",{staticClass:"header__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▾")]),e("span",[t._v("分類單品 ▾")])]),e("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Sofa"}},[e("img",{attrs:{src:a("259b"),alt:""}}),e("p",[t._v("Sofa")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Chair"}},[e("img",{attrs:{src:a("1c39"),alt:""}}),e("p",[t._v("Chair")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Table"}},[e("img",{attrs:{src:a("9cb8"),alt:""}}),e("p",[t._v("Table")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Cabinet"}},[e("img",{attrs:{src:a("ec17"),alt:""}}),e("p",[t._v("Cabinet")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Side Table"}},[e("img",{attrs:{src:a("6707"),alt:""}}),e("p",[t._v("Side Table")])])],1),e("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Lighting"}},[e("img",{attrs:{src:a("5470"),alt:""}}),e("p",[t._v("Lighting")])])],1)])]),e("li",[e("router-link",{attrs:{to:"/products/Sale"}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])],1),e("li",[e("router-link",{attrs:{to:"/guide"}},[e("span",[t._v("SHIPPING GUIDE")]),e("span",[t._v("運送須知")])])],1),t._m(2)])]),t._m(3),t._m(4),e("gotop",{tag:"div"}),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),e("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",{staticClass:"top__icon"},[a("li",[a("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[t._v("CONTACT")]),a("span",[t._v("聯絡我們")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[t._v("CONTACT")]),a("span",[t._v("聯絡我們")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content content-guide"},[a("h2",{staticStyle:{"font-size":"25px","text-align":"center"}},[t._v("這裡是 Accout")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"footer"},[a("div",{staticClass:"text"},[a("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),a("p",[t._v("圖片為練習使用，無商業用途。")])])])}],o=(a("99af"),a("4160"),a("159b"),a("d9b9")),s=a("3712"),c=a("9e6f"),r={components:{shopping:o["a"],search:s["a"],gotop:c["a"]},data:function(){return{openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:[]}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(n).then((function(n){t.isLoading=!1,t.cart=n.data.data,t.getTotalPrice()})).catch((function(n){t.isLoading=!1,console.log(n)}))},getTotalPrice:function(){var t=this;this.totalPrice=0,this.cart.forEach((function(n){t.totalPrice+=n.product.price*n.quantity})),this.totalPrice>3e3?this.deliveryFee=0:this.deliveryFee=350},deleteCartItem:function(t){var n=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(a).then((function(){n.isLoading=!1,n.getCart()})).catch((function(t){n.isLoading=!1,console.log(t)}))},qtyUpdate:function(t,n){var a=this;this.isLoading=!0;var e={product:t,quantity:n};if(0===n){var i="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(i).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))}else{var o="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(o,e).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))}},createOrder:function(){var t=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/orders"),a=Object.assign({},this.form);this.$http.post(n,a).then((function(n){n.data.data.id&&(t.isLoading=!1,t.getCart())})).catch((function(n){t.isLoading=!1,console.log(n.response.data.errors)}))},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},l=r,p=a("2877"),u=Object(p["a"])(l,e,i,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d7c19.196763f6.js.map