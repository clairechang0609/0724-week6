(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00c49b9a"],{"45fc":function(t,a,n){"use strict";var o=n("23e7"),s=n("b727").some,e=n("a640"),i=n("ae40"),c=e("some"),r=i("some");o({target:"Array",proto:!0,forced:!c||!r},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"81b1":function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"wrap"},[o("div",{staticClass:"top-menu"},[o("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),o("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[o("li",[o("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),o("li",[o("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),o("li",[o("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),o("span",[t._v("("+t._s(t.cart.length)+")")])])]),o("li",[o("a",{attrs:{href:"#"},on:{click:function(a){t.opensearch=!0}}},[o("i",{staticClass:"fas fa-search search-icon"})])]),o("li",{staticClass:"ham-btn",on:{click:function(a){a.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[o("span"),o("span"),o("span")])]),o("shoppingcart",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen,totalprice:t.totalPrice},on:{deleteproduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),o("ul",{staticClass:"top__main-menu"},[o("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/"}},[o("span",[t._v("HOME")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/All-Products"}},[o("span",[t._v("ALL PRODUCTS")])])],1),o("li",{staticClass:"top__all-product"},[o("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[o("span",[t._v("PRODUCT CATEGORY ▸")])]),o("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Sofa"}},[t._v("Sofa")])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Chair"}},[t._v("Chair")])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Table"}},[t._v("Table")])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Cabinet"}},[t._v("Cabinet")])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Side Table"}},[t._v("Side Table")])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Lighting"}},[t._v("Lighting")])],1)])]),o("li",{on:{click:function(a){t.getProducts(),t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/products/Sale"}},[o("span",[t._v("SALE")])])],1),o("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/guide"}},[o("span",[t._v("SHIPPING GUIDE")])])],1),o("li",{on:{click:function(a){t.openMainMenu=!t.openMainMenu}}},[o("router-link",{attrs:{to:"/contact"}},[o("span",[t._v("CONTACT")])])],1)]),o("searchbox",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),o("div",{staticClass:"logo-wrap"},[o("div",{staticClass:"logo-frame"}),o("h1",[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Hurley Furniture")])],1)]),o("div",{staticClass:"header"},["All Products"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/RicPuejiLodrHaduVFdQc5v78XYm6yFvsm1GxlPWhXqZsCFVwFP72PpC7om2awvVWdNelSoIXvDd2wUyyi6cL1mRukYFkDGUjUa6upf8AVuF3COH5scojPZclsoZSJ28.png)"}):t._e(),"Sofa"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QX5PwspL4EOfN31jH6CaeBZw0z02SL2k6Xpz5sFL3slupCLC0MiLaQMv8GA4RGXDekdDLbkbYo3YWIi7gaQ4Z69iDGD7JJaVULahtozTK5mMJjcD7pu1Y7gZEtdfA7JA.png)"}):t._e(),"Chair"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WPmmZqeGhI9sc1miP8sZZl6ctmwk2BBElca8glts2IEYxJBWjtirGV88FIOrmjhepKrgbhtNToKOWWkd7IPIspciw10D1jXsJKqlBQXDML6bQUdivcjEjOlUHty1JoxJ.png)"}):t._e(),"Table"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4ZfMR8ZJlsFMzYRxtWYbvxH22wLSh3MwH1MAi80qOvaeguW8mESyG3YIhSj0GrvqmLmI2KYFRN7laJvauope71JoXkREPpPOfo8gwJVDBhwvoNf9lofADUSFC5gyAykQ.png)"}):t._e(),"Cabinet"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/yadCEP0C3ZuMPF71NAkDkrxGW0bpsAPUm1R8MsZ6EFoxql68vK0m5Z76PvqBjhRTxgxuNJbSd4QEpYBGXlzm7FrnuvoHZGb8PV9VqG4FFHciY7uRgY1DHaiMdM8jj24t.png)"}):t._e(),"Side Table"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BjER2FoqTXryiLcfFaxHykPBXmA04nW8ruVWzNKvwS5StQFQYDvQL5B95zJg8LqyZ5tlh3sZdMvNvh0cI6mJ4DKToAww2wATKiMXOYeeolClxdGdkXNQP3p2zdAQY8DJ.png)"}):t._e(),"Lighting"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qNxWrR8xT5oIazVQxFVaJjk7ZXVaTSXaipNRKpqznJpNZDKNhp9Lr5HFTvlCfUX1RdVKAtiW75sssLPy3nlWQZKA2xdxp5kVTEPe7x33EK4NCWp2Oj44jJUXN12I3FdB.png)"}):t._e(),"Sale"===t.category?o("div",{staticClass:"header__banner-products",style:"background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Kh7FD1D2iVZTBZ8lbyse8nTU3TYjWvMGz3ETQ9UnDiT33BJarorP8LdfZ7IrvU7d90ghasCwWLvZqxmywbMtGi6oOHAko1ZCSiAJzn1iAbw5FZbPlrTpMfPwWdabPCbo.png)"}):t._e(),o("ul",{staticClass:"header__main-menu"},[o("li",{on:{click:function(a){t.openMenu=!1}}},[o("router-link",{attrs:{to:"/"}},[o("span",[t._v("HOME")]),o("span",[t._v("首頁")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!1}}},[o("router-link",{attrs:{to:"/products/All-Products"}},[o("span",[t._v("ALL PRODUCTS")]),o("span",[t._v("所有商品")])])],1),o("li",{staticClass:"header__all-product"},[o("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openMenu=!t.openMenu}}},[o("span",[t._v("PRODUCT CATEGORY ▾")]),o("span",[t._v("分類單品 ▾")])]),o("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Sofa"}},[o("img",{attrs:{src:n("259b"),alt:""}}),o("p",[t._v("Sofa")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Chair"}},[o("img",{attrs:{src:n("1c39"),alt:""}}),o("p",[t._v("Chair")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Table"}},[o("img",{attrs:{src:n("9cb8"),alt:""}}),o("p",[t._v("Table")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Cabinet"}},[o("img",{attrs:{src:n("ec17"),alt:""}}),o("p",[t._v("Cabinet")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Side Table"}},[o("img",{attrs:{src:n("6707"),alt:""}}),o("p",[t._v("Side Table")])])],1),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!t.openMenu}}},[o("router-link",{attrs:{to:"/products/Lighting"}},[o("img",{attrs:{src:n("5470"),alt:""}}),o("p",[t._v("Lighting")])])],1)])]),o("li",{on:{click:function(a){t.getProducts(),t.openMenu=!1}}},[o("router-link",{attrs:{to:"/products/Sale"}},[o("span",[t._v("SALE")]),o("span",[t._v("限時特價")])])],1),o("li",{on:{click:function(a){t.openMenu=!1}}},[o("router-link",{attrs:{to:"/guide"}},[o("span",[t._v("SHIPPING GUIDE")]),o("span",[t._v("運送須知")])])],1),o("li",{on:{click:function(a){t.openMenu=!1}}},[o("router-link",{attrs:{to:"/contact"}},[o("span",[t._v("CONTACT")]),o("span",[t._v("聯絡我們")])])],1)])]),o("div",{staticClass:"content contents-products"},[o("h4",[t._v(t._s(t.category))]),o("ul",{staticClass:"items"},t._l(t.showProducts,(function(a){return o("li",{key:a.id,staticClass:"item"},[o("router-link",{attrs:{to:"/product/"+a.id}},[o("div",{staticClass:"card-img",style:"background-image: url("+a.imageUrl[0]+")"},[o("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.addToCart(a.id)}}},[t._v("Add to Cart")])]),o("div",{staticClass:"card-text"},[o("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),o("p",{staticClass:"sale-price"},[t._v("NT$"+t._s(t._f("thousands")(a.price))),a.price!==a.origin_price?o("span",{staticClass:"sale-icon"},[t._v("sale")]):t._e()]),a.price!==a.origin_price?o("p",{staticClass:"origin-price"},[t._v("NT$"+t._s(t._f("thousands")(a.origin_price)))]):t._e()])])],1)})),0)]),t._m(1),o("gotop",{tag:"div"}),o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),o("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(a){a.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",{staticClass:"top__icon"},[n("li",[n("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),n("li",[n("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),n("li",[n("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer"},[n("div",{staticClass:"text"},[n("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),n("p",[t._v("圖片為練習使用，無商業用途。")])])])}],e=(n("99af"),n("4160"),n("45fc"),n("159b"),n("d9b9")),i=n("3712"),c=n("9e6f"),r={components:{Shoppingcart:e["a"],Searchbox:i["a"],Gotop:c["a"]},data:function(){return{products:[],showProducts:[],category:"",openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:[],totalPrice:0}},created:function(){this.getProducts(),this.getCart()},methods:{getProducts:function(){var t=this,a=this.$route.params.category;this.showProducts=[];var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/products?paged=40");this.isLoading=!0,this.$http.get(n).then((function(n){t.isLoading=!1,t.products=n.data.data,t.products.forEach((function(n){a===n.category?(t.showProducts.push(n),t.category=a):"All-Products"===a?(t.showProducts=t.products,t.category="All Products"):"Sale"===a&&(n.price<n.origin_price&&t.showProducts.push(n),t.category=a)}))})).catch((function(){}))},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(a).then((function(a){t.isLoading=!1,t.cart=a.data.data,t.totalPrice=0,t.cart.forEach((function(a){t.totalPrice+=a.product.price*a.quantity}))})).catch((function(){}))},deleteCartItem:function(t){var a=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(n).then((function(){a.isLoading=!1,a.getCart()})).catch((function(){}))},addToCart:function(t){var a=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping"),o={product:t,quantity:1},s=this.cart.some((function(n){if(n.product.id===t)return a.qtyUpdate(t,n.quantity+1),!0}));s||this.$http.post(n,o).then((function(){a.isLoading=!1,a.getCart()})).catch((function(){}))},qtyUpdate:function(t,a){var n=this;this.isLoading=!0;var o={product:t,quantity:a};if(0===a){var s="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(s).then((function(){n.isLoading=!1,n.getCart()})).catch((function(){}))}else{var e="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(e,o).then((function(){n.isLoading=!1,n.getCart()})).catch((function(){}))}},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},u=r,p=n("2877"),l=Object(p["a"])(u,o,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-00c49b9a.8252b42f.js.map