(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5d5f"],{"95d1":function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top-menu"},[i("div",{staticClass:"top",class:{show:t.openMainMenu}},[t._m(0),i("ul",{staticClass:"top__menu",class:{hide:t.opensearch}},[i("li",[i("router-link",{attrs:{to:"/admin"}},[t._v("ADMIN LOGIN")])],1),i("li",[i("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),i("li",[i("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!0}}},[t._v(" CART "),i("span",[t._v("("+t._s(t.cart.length)+")")])])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(n){t.opensearch=!0}}},[i("i",{staticClass:"fas fa-search search-icon"})])]),i("li",{staticClass:"ham-btn",on:{click:function(n){n.preventDefault(),t.openMainMenu=!t.openMainMenu}}},[i("span"),i("span"),i("span")])]),i("shoppingcart",{tag:"div",attrs:{shoppingcart:t.cart,shoppingcartopen:t.shoppingCartOpen,totalprice:t.totalPrice},on:{deleteproduct:t.deleteCartItem,qtyupdate:t.qtyUpdate,shoppingcartclose:t.shoppingCartClose}}),i("ul",{staticClass:"top__main-menu"},[i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/"}},[i("span",[t._v("HOME")])])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/All-Products"}},[i("span",[t._v("ALL PRODUCTS")])])],1),i("li",{staticClass:"top__all-product"},[i("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[i("span",[t._v("PRODUCT CATEGORY ▸")])]),i("ul",{staticClass:"top__all-product-list",class:{show:t.openMenu}},[i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Sofa"}},[t._v("Sofa")])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Chair"}},[t._v("Chair")])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Table"}},[t._v("Table")])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Cabinet"}},[t._v("Cabinet")])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Side Table"}},[t._v("Side Table")])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Lighting"}},[t._v("Lighting")])],1)])]),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/products/Sale"}},[i("span",[t._v("SALE")])])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/guide"}},[i("span",[t._v("SHIPPING GUIDE")])])],1),i("li",{on:{click:function(n){t.openMainMenu=!t.openMainMenu}}},[i("router-link",{attrs:{to:"/contact"}},[i("span",[t._v("CONTACT")])])],1)]),i("searchbox",{tag:"div",attrs:{search:t.opensearch},on:{changesearch:t.changeSearch}})],1)]),i("div",{staticClass:"logo-wrap"},[i("div",{staticClass:"logo-frame"}),i("h1",[i("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Hurley Furniture")])],1)]),i("div",{staticClass:"header"},[i("ul",{staticClass:"header__main-menu main-menu-nobanner"},[i("li",{on:{click:function(n){t.openMenu=!1}}},[i("router-link",{attrs:{to:"/"}},[i("span",[t._v("HOME")]),i("span",[t._v("首頁")])])],1),i("li",{on:{click:function(n){t.openMenu=!1}}},[i("router-link",{attrs:{to:"/products/All-Products"}},[i("span",[t._v("ALL PRODUCTS")]),i("span",[t._v("所有商品")])])],1),i("li",{staticClass:"header__all-product"},[i("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.openMenu=!t.openMenu}}},[i("span",[t._v("PRODUCT CATEGORY ▾")]),i("span",[t._v("分類單品 ▾")])]),i("ul",{staticClass:"header__all-product-list",class:{show:t.openMenu}},[i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Sofa"}},[i("img",{attrs:{src:a("259b"),alt:""}}),i("p",[t._v("Sofa")])])],1),i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Chair"}},[i("img",{attrs:{src:a("1c39"),alt:""}}),i("p",[t._v("Chair")])])],1),i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Table"}},[i("img",{attrs:{src:a("9cb8"),alt:""}}),i("p",[t._v("Table")])])],1),i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Cabinet"}},[i("img",{attrs:{src:a("ec17"),alt:""}}),i("p",[t._v("Cabinet")])])],1),i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Side Table"}},[i("img",{attrs:{src:a("6707"),alt:""}}),i("p",[t._v("Side Table")])])],1),i("li",{on:{click:function(n){t.openMenu=!t.openMenu}}},[i("router-link",{attrs:{to:"/products/Lighting"}},[i("img",{attrs:{src:a("5470"),alt:""}}),i("p",[t._v("Lighting")])])],1)])]),i("li",{on:{click:function(n){t.openMenu=!1}}},[i("router-link",{attrs:{to:"/products/Sale"}},[i("span",[t._v("SALE")]),i("span",[t._v("限時特價")])])],1),i("li",{on:{click:function(n){t.openMenu=!1}}},[i("router-link",{attrs:{to:"/guide"}},[i("span",[t._v("SHIPPING GUIDE")]),i("span",[t._v("運送須知")])])],1),i("li",{on:{click:function(n){t.openMenu=!1}}},[i("router-link",{attrs:{to:"/contact"}},[i("span",[t._v("CONTACT")]),i("span",[t._v("聯絡我們")])])],1)])]),i("div",{staticClass:"content content-guide"},[i("h3",[t._v("SHIPPING GUIDE")]),i("ul",{staticClass:"guide-wrap"},[i("li",{staticClass:"faq-list"},[i("div",{staticClass:"faq-title",on:{click:function(n){return t.showAnswer()}}},[i("h4",[t._v("商品到貨日期 / 時間")]),i("i",{staticClass:"icon fas fa-angle-down"})]),i("div",{staticClass:"faq-answer"},[i("p",[t._v("出貨後約 3-4 個工作天可送達指定地址。")]),i("p",[t._v("如需指定出貨日期，請在備註上註明或"),i("router-link",{attrs:{to:"/contact",target:"_blank"}},[t._v("來電通知")]),t._v("。實際到貨時間依照物流公司安排車趟為主，恕無法指定到貨時段。")],1)])]),i("li",{staticClass:"faq-list"},[i("div",{staticClass:"faq-title",on:{click:function(n){return t.showAnswer()}}},[i("h4",[t._v("保固期限 / 服務")]),i("i",{staticClass:"icon fas fa-angle-down"})]),t._m(1)]),i("li",{staticClass:"faq-list"},[i("div",{staticClass:"faq-title",on:{click:function(n){return t.showAnswer()}}},[i("h4",[t._v("退換貨說明")]),i("i",{staticClass:"icon fas fa-angle-down"})]),i("div",{staticClass:"faq-answer"},[i("p",[t._v("收到商品後七天內，請確認商品是否為「瑕疵、損壞、誤寄商品」任一情況，並"),i("router-link",{attrs:{to:"/contact",target:"_blank"}},[t._v("來電或來信")]),t._v("詢問。")],1),i("p",[t._v("完成退換貨申請後，請將商品連同完整外盒、配件、說明書、發票備妥，由客服人員與您安排商品取回時間，待我們收到商品確認商品完整且無使用痕跡，即可安排後續換貨／退款事宜。")])])]),i("li",{staticClass:"faq-list"},[i("div",{staticClass:"faq-title",on:{click:function(n){return t.showAnswer()}}},[i("h4",[t._v("使用折扣代碼退換貨須知")]),i("i",{staticClass:"icon fas fa-angle-down"})]),t._m(2)]),i("li",{staticClass:"faq-list"},[i("div",{staticClass:"faq-title",on:{click:function(n){return t.showAnswer()}}},[i("h4",[t._v("組裝服務說明")]),i("i",{staticClass:"icon fas fa-angle-down"})]),i("div",{staticClass:"faq-answer"},[i("p",[t._v("商品包裝內均提供完整組裝說明，按步驟組裝即可。")]),i("p",[t._v("若有組裝服務需求，我們亦提供專業組裝服務，歡迎"),i("router-link",{attrs:{to:"/contact",target:"_blank"}},[t._v("來電詢問")]),t._v("組裝服務的相關資訊與費用。")],1)])])])]),t._m(3),i("gotop",{tag:"div"}),i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),i("div",{staticClass:"mask",class:{open:t.shoppingCartOpen},on:{click:function(n){n.preventDefault(),t.shoppingCartOpen=!t.shoppingCartOpen}}})],1)},e=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",{staticClass:"top__icon"},[a("li",[a("a",{staticClass:"fab fa-twitter twitter",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-facebook-f facebook",attrs:{href:"#"}})]),a("li",[a("a",{staticClass:"fab fa-instagram ig",attrs:{href:"#"}})])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"faq-answer"},[a("p",[t._v("根據原廠銷售及服務條款之規定，以購買日期算起提供標準原廠兩年保固期限。消費者須保存出貨簽收單及發票，始得享有保固服務。")]),a("p",[t._v("若商品在符合正常使用狀況，且符合保固範圍及條件，本公司將提供商品維修或更換。待消費者將物品送回本公司後，將依循原廠保固原則進行修繕服務事宜。")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"faq-answer"},[a("p",[t._v("部份退貨時，退款金額將依據使用折扣代碼的比例進行攤提。")]),a("p",[t._v("舉例說明：")]),a("p",[t._v("原訂單兩件商品，A商品金額 NT$1,000、B商品金額 NT$500，使用九折優惠碼後實際付款 NT1,350")]),a("ol",[a("li",[t._v("若欲辦理A商品退貨，實際退款金額為 NT$1,000 X 0.9 = NT$900")]),a("li",[t._v("若欲辦理B商品退貨，實際退款金額為 NT$500 X 0.9 = NT$450")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"footer footer-white"},[a("div",{staticClass:"text"},[a("p",[t._v("© Hurley Furniture 2020 All Rights Reserved.")]),a("p",[t._v("圖片為練習使用，無商業用途。")])])])}],o=(a("99af"),a("4160"),a("159b"),a("d9b9")),s=a("3712"),c=a("9e6f"),r={components:{Shoppingcart:o["a"],Searchbox:s["a"],Gotop:c["a"]},data:function(){return{openMainMenu:!1,openMenu:!1,opensearch:!1,isLoading:!1,shoppingCartOpen:!1,cart:[],totalPrice:0}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.get(n).then((function(n){t.isLoading=!1,t.cart=n.data.data,t.totalPrice=0,t.cart.forEach((function(n){t.totalPrice+=n.product.price*n.quantity}))})).catch((function(){}))},deleteCartItem:function(t){var n=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(a).then((function(){n.isLoading=!1,n.getCart()})).catch((function(){}))},qtyUpdate:function(t,n){var a=this;this.isLoading=!0;var i={product:t,quantity:n};if(0===n){var e="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping/").concat(t);this.$http.delete(e).then((function(){a.isLoading=!1,a.getCart()})).catch((function(){}))}else{var o="".concat("https://course-ec-api.hexschool.io/api/").concat("9fbd3898-4d4d-4c65-a3cf-6af8511169fb","/ec/shopping");this.$http.patch(o,i).then((function(){a.isLoading=!1,a.getCart()})).catch((function(){}))}},showAnswer:function(){"faq-title"===event.target.className?event.target.parentNode.classList.toggle("show"):"I"!==event.target.nodeName&&"H4"!==event.target.nodeName||event.target.parentNode.parentNode.classList.toggle("show")},changeSearch:function(){this.opensearch=!1},shoppingCartClose:function(){this.shoppingCartOpen=!1}}},l=r,p=a("2877"),u=Object(p["a"])(l,i,e,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e5d5f.1f16f297.js.map