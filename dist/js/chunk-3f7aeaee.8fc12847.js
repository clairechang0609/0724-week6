(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7aeaee"],{"45fc":function(t,a,n){"use strict";var e=n("23e7"),s=n("b727").some,i=n("a640"),c=n("ae40"),o=i("some"),r=c("some");e({target:"Array",proto:!0,forced:!o||!r},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},d2f1:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-menu"},[e("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),e("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[e("li",[e("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),e("li",[e("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),e("li",[e("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),e("span",[t._v("("+t._s(t.cart.length)+")")])])]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(a){t.opensearch=!0}}},[e("i",{staticClass:"fas fa-search search-icon"})])]),e("li",{staticClass:"ham-btn",on:{click:function(a){a.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[e("span"),e("span"),e("span")])]),e("shopping",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen},on:{deleteProduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),e("ul",{staticClass:"top__main-menu"},[t._m(1),e("li",[e("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.getProducts("All"),t.openMainMenu=!t.openMainMenu}}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])]),e("li",{staticClass:"top__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▸")]),e("span",[t._v("分類單品 ▸")])]),e("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Sofa"),t.openMainMenu=!t.openMainMenu}}},[t._v("Sofa")])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Chair"),t.openMainMenu=!t.openMainMenu}}},[t._v("Chair")])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Table"),t.openMainMenu=!t.openMainMenu}}},[t._v("Table")])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Cabinet"),t.openMainMenu=!t.openMainMenu}}},[t._v("Cabinet")])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Side Table"),t.openMainMenu=!t.openMainMenu}}},[t._v("Side Table")])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Lighting"),t.openMainMenu=!t.openMainMenu}}},[t._v("Lighting")])])])]),e("li",[e("a",{attrs:{href:"index.html"},on:{click:function(a){a.preventDefault(),t.getProducts("Sale"),t.openMainMenu=!t.openMainMenu}}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])]),t._m(2),t._m(3)]),e("search",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),t._m(4),e("div",{staticClass:"header"},[e("ul",{staticClass:"header__main-menu main-menu-nobanner"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("HOME")]),e("span",[t._v("首頁")])])],1),e("li",[e("router-link",{attrs:{to:"/products/All-Products"}},[e("span",[t._v("ALL PRODUCTS")]),e("span",[t._v("所有商品")])])],1),e("li",{staticClass:"header__all-product"},[e("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[e("span",[t._v("PRODUCT CATEGORY ▾")]),e("span",[t._v("分類單品 ▾")])]),e("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Sofa"}},[e("img",{attrs:{src:n("259b"),alt:""}}),e("p",[t._v("Sofa")])])],1),e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Chair"}},[e("img",{attrs:{src:n("1c39"),alt:""}}),e("p",[t._v("Chair")])])],1),e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Table"}},[e("img",{attrs:{src:n("9cb8"),alt:""}}),e("p",[t._v("Table")])])],1),e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Cabinet"}},[e("img",{attrs:{src:n("ec17"),alt:""}}),e("p",[t._v("Cabinet")])])],1),e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Side Table"}},[e("img",{attrs:{src:n("6707"),alt:""}}),e("p",[t._v("Side Table")])])],1),e("li",{on:{click:function(a){t.openMenu=!t.openMenu}}},[e("router-link",{attrs:{to:"/products/Lighting"}},[e("img",{attrs:{src:n("5470"),alt:""}}),e("p",[t._v("Lighting")])])],1)])]),e("li",[e("router-link",{attrs:{to:"/products/Sale"}},[e("span",[t._v("SALE")]),e("span",[t._v("限時特價")])])],1),e("li",[e("router-link",{attrs:{to:"/guide"}},[e("span",[t._v("SHIPPING GUIDE")]),e("span",[t._v("運送須知")])])],1),t._m(5)])]),e("div",{staticClass:"content contents-product"},[e("div",{staticClass:"product-main"},[e("div",{staticClass:"pics"},[e("img",{staticClass:"show-pic",attrs:{src:t.selectPic,alt:""}}),e("div",{staticClass:"other-pic"},t._l(t.showProduct.imageUrl,(function(a,n){return e("img",{key:t.showProduct.id+n,attrs:{src:a},on:{click:function(n){t.selectPic=a}}})})),0)]),e("div",{staticClass:"discription"},[e("h3",{staticClass:"title"},[t._v(t._s(t.showProduct.title)+" "),e("span",[t._v("design by "+t._s(t.brand))])]),e("p",{staticClass:"sale-price"},[t._v("NT$"+t._s(t._f("thousands")(t.price))),t.showProduct.price!==t.showProduct.origin_price?e("span",{staticClass:"sale-icon"},[t._v("sale")]):t._e()]),t.showProduct.price!==t.showProduct.origin_price?e("p",{staticClass:"origin-price"},[t._v("NT$"+t._s(t._f("thousands")(t.showProduct.origin_price)))]):t._e(),t._m(6),e("form",{staticClass:"select_qty"},[e("div",{staticClass:"input-group"},[e("button",{staticClass:"decrease-btn",attrs:{type:"button",disabled:0===t.productQty},on:{click:function(a){t.productQty=t.productQty-1}}},[e("i",{staticClass:"fa fa-minus"})]),e("input",{staticClass:"product-number",attrs:{type:"number"},domProps:{value:t.productQty},on:{input:function(a){t.productQty=parseInt(a.target.value)}}}),e("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(a){t.productQty=t.productQty+1}}},[e("i",{staticClass:"fa fa-plus"})])])]),e("button",{staticClass:"add-cart",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addToCart(t.showProduct.id,t.productQty)}}},[t._v("加入購物車")])])]),e("div",{staticClass:"product-detail"},[e("div",{staticClass:"description"},[t._m(7),e("p",[t._v(t._s(t.showProduct.description))])]),e("div",{staticClass:"content"},[t._m(8),e("p",[t._v(t._s(t.showProduct.content))])])]),e("div",{staticClass:"related"},[t._m(9),e("ul",{staticClass:"items"},t._l(t.relatedProducts,(function(a){return e("li",{key:a.id,staticClass:"item",on:{click:function(a){t.getSingleProduct(),t.getRelatedProducts()}}},[e("router-link",{attrs:{to:"/product/"+a.id}},[e("div",{staticClass:"card-img",style:"background-image: url("+a.imageUrl[0]+")"},[e("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.addToCart(a.id,1)}}},[t._v("Add to Cart")])]),e("div",{staticClass:"card-text"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),e("p",{staticClass:"sale-price"},[t._v("NT$"+t._s(t._f("thousands")(a.price))),a.price!==a.origin_price?e("span",{staticClass:"sale-icon"},[t._v("sale")]):t._e()]),a.price!==a.origin_price?e("p",{staticClass:"origin-price"},[t._v("NT$"+t._s(t._f("thousands")(a.origin_price)))]):t._e()])])],1)})),0)])]),t._m(10),e("gotop",{tag:"div"}),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",{staticClass:"top__icon"},[n("li",[n("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),n("li",[n("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),n("li",[n("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("a",{attrs:{href:"#"}},[n("span",[t._v("HOME")]),n("span",[t._v("首頁")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("a",{attrs:{href:"#"}},[n("span",[t._v("SHIPPING GUIDE")]),n("span",[t._v("運送須知")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("a",{attrs:{href:"#"}},[n("span",[t._v("CONTACT")]),n("span",[t._v("聯絡我們")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"logo-wrap"},[n("div",{staticClass:"logo-frame"}),n("h1",[n("a",{staticClass:"logo",attrs:{href:"#"}},[t._v("Hurley Furniture")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("a",{attrs:{href:"#"}},[n("span",[t._v("CONTACT")]),n("span",[t._v("聯絡我們")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",{staticClass:"delivery-sale"},[n("span"),t._v(" 全店購物滿 NT$10,000 全台免運")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",[n("span",[t._v("產品描述")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",[n("span",[t._v("規格說明")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",[n("span",[t._v("相關產品")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer"},[n("div",{staticClass:"text"},[n("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),n("p",[t._v("圖片為練習使用，無商業用途。")])])])}],i=(n("99af"),n("4160"),n("45fc"),n("159b"),n("d9b9")),c=n("3712"),o=n("9e6f"),r={components:{shopping:i["a"],search:c["a"],gotop:o["a"]},data:function(){return{products:[],showProduct:[],brand:"",price:0,selectPic:"",relatedProducts:[],category:"",openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:{},productQty:1}},created:function(){var t=this;this.getCart(),this.getSingleProduct(),this.getRelatedProducts();var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/products");this.$http.get(a).then((function(a){t.isLoading=!1,t.products=a.data.data})).catch((function(a){t.isLoading=!1,console.log(a)}))},methods:{getRelatedProducts:function(){var t=this;this.relatedProducts=[];var a=this.$route.params.id,n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/product/").concat(a);this.isLoading=!0,this.$http.get(n).then((function(n){t.isLoading=!1,t.products.forEach((function(e){e.category===n.data.data.category&&e.id!==a&&t.relatedProducts.push(e)}))})).catch((function(a){t.isLoading=!1,console.log(a)}))},getSingleProduct:function(){var t=this,a=this.$route.params.id;this.showProduct=[],this.brand="",this.price=0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/product/").concat(a);this.isLoading=!0,this.$http.get(n).then((function(a){t.isLoading=!1,t.showProduct=a.data.data,t.selectPic=t.showProduct.imageUrl[4],t.brand=t.showProduct.options.brand,t.price=t.showProduct.price})).catch((function(a){t.isLoading=!1,console.log(a)}))},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(a).then((function(a){t.isLoading=!1,t.cart=a.data.data,console.log(t.cart)})).catch((function(a){t.isLoading=!1,console.log(a)}))},deleteCartItem:function(t){var a=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(n).then((function(){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))},addToCart:function(t,a){var n=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping"),s={product:t,quantity:a},i=this.cart.some((function(e){if(e.product.id===t)return n.qtyUpdate(t,e.quantity+a),!0}));i||this.$http.post(e,s).then((function(){n.isLoading=!1,n.getCart()})).catch((function(t){n.isLoading=!1,console.log(t.response.data.errors)}))},qtyUpdate:function(t,a){var n=this;this.isLoading=!0;var e={product:t,quantity:a};if(0===a){var s="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(s).then((function(){n.isLoading=!1,n.getCart()})).catch((function(t){n.isLoading=!1,console.log(t)}))}else{var i="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(i,e).then((function(){n.isLoading=!1,n.getCart()})).catch((function(t){n.isLoading=!1,console.log(t)}))}},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},l=r,u=n("2877"),p=Object(u["a"])(l,e,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3f7aeaee.8fc12847.js.map