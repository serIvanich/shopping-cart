(this["webpackJsonptest-hlt"]=this["webpackJsonptest-hlt"]||[]).push([[0],{12:function(e,t,n){e.exports={itemBox:"Item_itemBox__P_ikZ",blockWithButton:"Item_blockWithButton__J06lJ",priceBox:"Item_priceBox__2vdET",logoPrice:"Item_logoPrice__1b78r"}},19:function(e,t,n){e.exports={itemsViewContainer:"ItemsViewContainer_itemsViewContainer__10MNz",itemsBlock:"ItemsViewContainer_itemsBlock__3F1Bm",buttonContainer:"ItemsViewContainer_buttonContainer__1nthU"}},32:function(e,t,n){e.exports={preloaderContainer:"Preloader_preloaderContainer__3P2EY"}},40:function(e,t,n){},41:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"selectorStatus",(function(){return w})),n.d(r,"selectorError",(function(){return N}));var a={};n.r(a),n.d(a,"selectorItems",(function(){return F}));var o=n(0),c=n.n(o),s=n(15),i=n.n(s),u=(n(40),n(7)),l=(n(41),n(12)),d=n.n(l),p=n(1),b=function(e){var t=e.item,n=e.show,r=e.onShowModal,a=e.isModalItems,o=t.name,c=t.category,s=t.price,i={fontSize:"16px",textTransform:"uppercase"},u=a?{height:"180px",margin:"0",paddingTop:"20px",alignItems:"center",justifyContent:"space-between",border:"none"}:null;return Object(p.jsxs)("div",{className:d.a.itemBox,style:u||{},children:[Object(p.jsx)("div",{style:i,children:c}),Object(p.jsx)("div",{style:{fontSize:"40px"},children:o}),Object(p.jsxs)("div",{className:d.a.blockWithButton,children:[Object(p.jsxs)("div",{className:d.a.priceBox,children:[Object(p.jsx)("span",{className:d.a.logoPrice,children:"$"}),s]}),!a&&Object(p.jsx)("button",{style:i,disabled:n,onClick:function(){r(t)},children:n?"(=)":"buy"})]})]})},m=n(6),j=n(19),h=n.n(j),x=n.p+"static/media/1486.279ed7ee.gif",f=n(32),O=n.n(f),g=function(){return Object(p.jsx)("div",{className:O.a.preloaderContainer,children:Object(p.jsx)("img",{src:x,alt:"preload..."})})},v=n(3);var _=n(18),I=function(e){return Math.floor(Math.random()*e)},y=n(2),w=function(e){return e.app.status},N=function(e){return e.app.error},S=n(5),C={setAppStatus:Object(S.b)("app/setAppStatus"),setAppError:Object(S.b)("app/setAppError")},E=Object(S.d)({name:"app",initialState:{status:"idle",error:""},reducers:{},extraReducers:function(e){e.addCase(C.setAppStatus,(function(e,t){e.status=t.payload.status})).addCase(C.setAppError,(function(e,t){e.error=t.payload.error}))}}),B=E.reducer,F=(Object(y.a)({},E.actions),function(e){return e.items.itemsArray}),k=n(22),M=n.n(k),A=n(33),z=n(34),T=n.n(z).a.create({baseURL:"https://run.mocky.io/v3/",withCredentials:!0}),P=function(){return T.get("b7d36eea-0b3f-414a-ba44-711b5f5e528e").then((function(e){return e.data}))},V=n(17),R=function(e,t,n,r,a){var o=function(e,t){a((function(n){return Object(y.a)(Object(y.a)({},n),{},Object(V.a)({},"".concat(e,"Error"),t))}))};"name"===e&&(t?/^[a-zA-Z]+$/i.test(t)||o(e,"Only letters allowed"):o(e,"This field in required")),"phoneNumber"===e&&(n?/^[0-9]+$/i.test(n)?12!==n.length&&o(e,"Should contain 12 characters"):o(e,"Only numbers allowed"):o(e,"This field in required"))},W=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n&&t.dispatch(C.setAppError({error:e.message?e.message:"Some error occurred"})),t.dispatch(C.setAppStatus({status:"failed"})),t.rejectWithValue({errors:[e.message],fieldsErrors:void 0})},J=Object(S.c)("items/getItems",function(){var e=Object(A.a)(M.a.mark((function e(t,n){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(C.setAppStatus({status:"loading"})),e.prev=1,e.next=4,P();case 4:return r=e.sent,n.dispatch(C.setAppStatus({status:"success"})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",W(e.t0,n));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),L={getItems:J},Z=Object(S.d)({name:"items",initialState:{itemsArray:[]},reducers:{},extraReducers:function(e){e.addCase(J.fulfilled,(function(e,t){var n;(n=e.itemsArray).push.apply(n,Object(_.a)(t.payload))}))}}),$=Z.reducer,q=Object(y.a)(Object(y.a)({},L),Z.actions),D=function(e){var t=e.show,n=e.onShowModal,c=Object(o.useState)([]),s=Object(u.a)(c,2),i=s[0],l=s[1],d=function(e){var t=Object(m.b)();return Object(o.useMemo)((function(){return Object(v.b)(e,t)}),[e,t])}(q).getItems;Object(o.useEffect)((function(){d()}),[d]);var j=Object(m.c)(a.selectorItems),x=Object(m.c)(r.selectorStatus);if(!j.length)return Object(p.jsx)(g,{});!i.length&&l((function(){return function(e,t){var n=Object(_.a)(e),r=[],a=0;if(0<t<e.length)for(;a<t;){++a;var o=I(n.length);r.push(n[o]),n.splice(o,1)}else r=e.slice(a,t);return r}(j,6)}));return Object(p.jsxs)("div",{className:h.a.itemsViewContainer,children:["loading"===x&&Object(p.jsx)(g,{}),Object(p.jsx)("div",{className:h.a.itemsBlock,children:i.map((function(e,r){return Object(p.jsx)(b,{item:e,show:t,onShowModal:n},r)}))}),Object(p.jsx)("button",{className:h.a.buttonContainer,onClick:function(){var e=i.reduce((function(e,t){return e.price&&e.price<t.price?e:t}),{});n(e)},disabled:"failed"===x||t,children:"Buy cheapest"})]})},Q=function(e){var t=e.enableBackground,n=e.backgroundStyle,r=e.closeModalOnClick,a=e.width,o=e.height,c=e.show,s=e.children,i="calc(50vh - ".concat(o/2,"px)"),u="calc(50vw - ".concat(a/2,"px)");return c?Object(p.jsxs)(p.Fragment,{children:[t&&Object(p.jsx)("div",{style:Object(y.a)({position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh",background:"black",opacity:.35,zIndex:20},n)}),Object(p.jsxs)("div",{style:{position:"fixed",top:i,left:u,width:a,height:o,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",borderRadius:"24px",background:"#FFFFFF",zIndex:21},children:[s,Object(p.jsx)("div",{style:{width:"30px",height:"30px",position:"absolute",right:"-10px",top:"-10px",borderRadius:"50%",textAlign:"center",fontSize:"20px",backgroundColor:"#F2F2F2",zIndex:22},onClick:r,children:"x"})]})]}):null},U=n(8),H=n.n(U),K=n(35),X=n(9),Y=n.n(X),G=["type","error","name","className","onChangeText","errorTextClassName","onFocusInput"],ee=function(e){var t=e.type,n=e.error,r=e.name,a=e.className,o=e.onChangeText,c=e.errorTextClassName,s=e.onFocusInput,i=Object(K.a)(e,G),u="".concat(Y.a.textError," ").concat(c||""),l="".concat(n?Y.a.errorInput:Y.a.generalInput," ").concat(a," "),d="visibility"==="".concat(n?"visibility":"hidden")?{zIndex:"20"}:null;return Object(p.jsxs)("div",{className:Y.a.inputContainer,children:[Object(p.jsx)("input",Object(y.a)({type:t,name:r,onChange:function(e){o&&o(e.currentTarget.value)},className:l,onFocus:function(e){s(e.target.name)}},i)),Object(p.jsx)("small",{className:u,style:d,children:n}),Object(p.jsx)("div",{className:Y.a.closeError,onClick:function(e){var t=e.target.previousElementSibling.previousElementSibling.name;s(t,!0)},style:d,children:"\u0445"})]})},te=function(e){var t=e.currentItem,n=e.show,r=e.setShow,a=Object(o.useState)(""),c=Object(u.a)(a,2),s=c[0],i=c[1],l=Object(o.useState)(""),d=Object(u.a)(l,2),m=d[0],j=d[1],h=Object(o.useState)({nameError:"",phoneNumberError:""}),x=Object(u.a)(h,2),f=x[0],O=x[1],g=!s||!!f.nameError,v=!m||!!f.phoneNumberError,_=g||v,I=function(e){R(e.target.name,s,m,0,O)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"name"===e?f.nameError&&(O(Object(y.a)(Object(y.a)({},f),{},{nameError:""})),t&&i("")):"phoneNumber"===e&&f.phoneNumberError&&(O(Object(y.a)(Object(y.a)({},f),{},{phoneNumberError:""})),t&&j(""))};return Object(p.jsx)("div",{children:Object(p.jsx)(Q,{enableBackground:!0,closeModalOnClick:function(){r(!1),O({nameError:"",phoneNumberError:""}),i(""),j("")},width:384,height:536,show:n,children:Object(p.jsxs)("div",{className:H.a.settingModal,children:[Object(p.jsx)(b,{item:t,isModalItems:!0}),Object(p.jsxs)("form",{className:H.a.settingModalForm,onSubmit:function(e){if(e.preventDefault(),g&&R("name",s,m,0,O),v&&R("phoneNumber",s,m,0,O),!_){var t="name: ".concat(s,"  tel: ").concat(m);console.log(t)}},children:[Object(p.jsxs)("div",{className:H.a.inputBox,children:[Object(p.jsx)(ee,{name:"name",value:s,type:"text",error:f.nameError,className:H.a.classNameInput,onChangeText:i,placeholder:"Name",onFocusInput:w,onBlur:I}),Object(p.jsx)(ee,{name:"phoneNumber",value:m,type:"text",error:f.phoneNumberError,className:H.a.classNameInput,onChangeText:j,placeholder:"Number",onFocusInput:w,onBlur:I})]}),Object(p.jsx)("button",{className:H.a.buttonFormSubmit,type:"submit",children:"order"})]})]})})})},ne=function(e){var t=e.error;return Object(p.jsx)("div",{style:{padding:"5vh",position:"absolute",top:"40vh",left:"40vw",border:"3px solid red",borderRadius:"15px",color:"red",fontSize:"26px"},children:t})},re=function(){var e=Object(m.c)(r.selectorError),t=Object(o.useState)({}),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(!1),i=Object(u.a)(s,2),l=i[0],d=i[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(D,{show:l,onShowModal:function(e){c(e),d(!0)}}),Object(p.jsx)(te,{currentItem:a,show:l,setShow:d}),e&&Object(p.jsx)(ne,{error:e})]})},ae=Object(v.c)({app:B,items:$}),oe=n(11),ce=Object(S.a)({reducer:ae,middleware:function(e){return e().prepend(oe.a)}});window.store=ce;var se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(m.a,{store:ce,children:Object(p.jsx)(re,{})})}),document.getElementById("root")),se()},8:function(e,t,n){e.exports={settingModal:"ModalBuy_settingModal__7XZcB",settingModalForm:"ModalBuy_settingModalForm__1Lfzk",inputBox:"ModalBuy_inputBox__9IQwz",buttonFormSubmit:"ModalBuy_buttonFormSubmit__1HQfS",classNameInput:"ModalBuy_classNameInput__iVj0z"}},9:function(e,t,n){e.exports={generalInput:"Input_generalInput__uOazK",errorInput:"Input_errorInput__o7BIS",inputContainer:"Input_inputContainer__17R6g",textError:"Input_textError__28Ep8",closeError:"Input_closeError__3W4c3"}}},[[68,1,2]]]);
//# sourceMappingURL=main.ebbb8b17.chunk.js.map