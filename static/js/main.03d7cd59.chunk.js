(this["webpackJsonpamazon-clone-project"]=this["webpackJsonpamazon-clone-project"]||[]).push([[0],{19:function(e,a){},30:function(e,a,t){e.exports=t(55)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),i=(t(35),t(36),t(9)),o=t(2),s=t(4),m=(t(37),t(25)),u=t.n(m),_=t(26),d=t.n(_),g=Object(n.createContext)(),p=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(g)};var h=function(){var e=E(),a=Object(s.a)(e,1)[0].basket;return console.log(a),c.a.createElement("nav",{className:"header"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(i.b,{to:"/login",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello Daniel,"),c.a.createElement("span",{className:"header__optionLineTwo"},"Sign In"))),c.a.createElement(i.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement(i.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(i.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===a||void 0===a?void 0:a.length)))))},v=t(27);t(44);var f=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=E(),o=Object(s.a)(i,2);Object(v.a)(o[0]);var m=o[1];return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add to basket"))};t(45);var b=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255120_1316018_US_PD20_3296365_1500x600_2X_US_en.jpg._CB406287657_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(f,{id:"100000",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}),c.a.createElement(f,{id:"120000",title:"New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Space Gray",price:1249,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71HI3U9ZwZL._AC_SL1500_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(f,{id:"13000",title:"Python Crash Course, 2nd Edition",price:21.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/510-dE3N1PL._SX376_BO1,204,203,200_.jpg"}),c.a.createElement(f,{id:"140000",title:"A Game of Thrones: Bookset 1-5",price:39.99,rating:4,image:"https://m.media-amazon.com/images/I/91HSa7sG8tL._AC_UY218_.jpg"}),c.a.createElement(f,{id:"150000",title:"Kindle Paperwhite \u2013 with 2x the Storage",price:129.99,rating:3,image:"https://m.media-amazon.com/images/I/61eAq6gg-XL._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(f,{id:"160000",title:"Razer Huntsman Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Customizable Chroma RGB Lighting - Programmable Macro Functionality - Classic Black",price:89.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71FJGmeJ2GL._AC_SL1500_.jpg"})))},N=(t(46),t(47),t(28)),k=t.n(N),O=t(20),C=t(13),j=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},A=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(O.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(O.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant't remove product (id: ".concat(a.id,") as it's not in basket")),Object(C.a)(Object(C.a)({},e),{},{basket:t});default:return e}};var w=function(){var e=E(),a=Object(s.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(k.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimal:2,value:j(t),displayType:"text",thousandSeperator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to Checkout"))};t(52);var S=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=E(),o=Object(s.a)(i,2),m=(o[0].basket,o[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))};var y=function(){var e=E(),a=Object(s.a)(e,2),t=a[0],n=t.basket;return t.user,a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, Daniel"),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return c.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(w,null)))},P=(t(53),t(19));var B=function(){var e=Object(o.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),_=u[0],d=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:_,onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),P.auth.signInWithEmailAndPassword(r,_).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),P.auth.createUserWithEmailAndPassword(r,_).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};var z=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/checkout"},c.a.createElement(h,null),c.a.createElement(y,null)),c.a.createElement(o.a,{path:"/login"},c.a.createElement(B,null)),c.a.createElement(o.a,{path:"/"},c.a.createElement(h,null),c.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,{initialState:{basket:[],user:null},reducer:A},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.03d7cd59.chunk.js.map