(this.webpackJsonptravelo=this.webpackJsonptravelo||[]).push([[0],{99:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a.n(c),n=a(17),i=a.n(n),l=a(6),r=a(5),o=a.n(r),d={e:"__",m:"_"},j=a(2),m=function(){var e=Object(l.withNaming)(d)("navigation"),t=o()(e());return Object(j.jsx)("nav",{className:t,children:Object(j.jsxs)("ul",{className:e("list"),children:[Object(j.jsx)("li",{className:e("item"),children:Object(j.jsx)("a",{href:"/travelo",className:e("link active"),children:"Home"})}),Object(j.jsx)("li",{className:e("item"),children:Object(j.jsx)("a",{href:"/travelo",className:e("link"),children:"About"})}),Object(j.jsx)("li",{className:e("item"),children:Object(j.jsx)("a",{href:"/travelo",className:e("link"),children:"Places"})}),Object(j.jsx)("li",{className:e("item"),children:Object(j.jsx)("a",{href:"/travelo",className:e("link"),children:"Careers"})}),Object(j.jsx)("li",{className:e("item"),children:Object(j.jsx)("a",{href:"/travelo",className:e("link"),children:"Blog"})})]})})},b=function(e){var t=e.theme,a=e.size,c=e.type,s=e.disabled,n=e.className,i=e.children,r=e.onClick;var d=o()(Object(l.cn)("button")({theme:t,size:a,type:c,disabled:s}),n);return Object(j.jsx)("button",{type:c,disabled:s,onClick:function(e){r&&r(e)},className:d,children:i})},h=function(){var e=Object(l.withNaming)(d)("header"),t=o()(e());return Object(j.jsxs)("header",{className:t,children:[Object(j.jsx)("a",{href:"/travelo",className:e("link"),children:Object(j.jsx)("img",{className:e("logo"),src:"/travelo/images/logo.png",alt:"logo"})}),Object(j.jsx)(m,{}),Object(j.jsx)(b,{theme:"primary",size:"small",type:"button",children:"Connect"})]})},u=a(11),O=a(20),x=a.n(O),p=a(16),v=a(36),N=a.n(v),f=a(37),y=a(38),g=a(42),w=a(41),k=function(e){Object(g.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(f.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleHide=function(t){var a=e.props.onHide;a&&a(t)},e}return Object(y.a)(a,[{key:"componentWillUnmount",value:function(){!function(){var e=document.body.style.top;document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,0),window.scrollTo(0,-1*parseInt(e||"0",10))}()}},{key:"render",value:function(){var e=this.props,t=e.isShow,a=e.children,c=Object(l.withNaming)(d)("modal"),s=o()(c());return t?("fixed"!==document.body.style.position&&function(){var e=window.scrollY;document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top="-".concat(e||"0","px")}(),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:c("overlay"),onClick:this.handleHide}),Object(j.jsxs)("div",{className:s,children:[Object(j.jsx)(b,{theme:"transparent",size:"small",type:"button",className:c("close"),onClick:this.handleHide,children:Object(j.jsx)(p.b,{className:c("icon")})}),Object(j.jsx)("div",{className:c("content"),children:a})]})]})):null}}]),a}(c.Component),C=(a(52),function(){var e=Object(l.withNaming)(d)("search"),t=o()(e()),a="Field is empty",s=Object(c.useState)(""),n=Object(u.a)(s,2),i=n[0],r=n[1],m=Object(c.useState)(null),h=Object(u.a)(m,2),O=h[0],v=h[1],f=Object(c.useState)(null),y=Object(u.a)(f,2),g=y[0],w=y[1],C=Object(c.useState)(""),S=Object(u.a)(C,2),F=S[0],D=S[1],Y=Object(c.useState)(""),M=Object(u.a)(Y,2),T=M[0],z=M[1],H=Object(c.useState)(""),P=Object(u.a)(H,2),B=P[0],A=P[1],I=Object(c.useState)(!1),L=Object(u.a)(I,2),W=L[0],E=L[1],_=O&&x()(O).add(1,"d").toDate();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:t,onSubmit:function(e){return e.preventDefault(),i&&i.trim()?O?g?(F||T||B||E(!0),!1):(A(a),!1):(z(a),!1):(D(a),!1)},children:[Object(j.jsxs)("div",{className:e("fields"),children:[Object(j.jsxs)("div",{className:e("field"),children:[Object(j.jsx)("h4",{className:e("title"),children:"Where You Want to go"}),Object(j.jsxs)("div",{className:e("input-wrapper"),children:[Object(j.jsx)(p.d,{className:e("input-icon")}),Object(j.jsx)("input",{type:"text",placeholder:"Search your Location",className:e("input"),value:i,onChange:function(e){var t=e.target.value;r(t),D("")}})]}),F&&Object(j.jsx)("span",{className:e("error"),children:F})]}),Object(j.jsxs)("div",{className:e("field"),children:[Object(j.jsx)("h4",{className:e("title"),children:"Check-in"}),Object(j.jsx)(N.a,{className:e("datepicker"),selected:O,minDate:x()().toDate(),onChange:function(e){v(e),g&&e>=g&&w(null),z("")},placeholderText:"Add Date",dateFormat:"yyyy-MM-dd"}),T&&Object(j.jsx)("span",{className:e("error"),children:T})]}),Object(j.jsxs)("div",{className:e("field"),children:[Object(j.jsx)("h4",{className:e("title"),children:"Check-out"}),Object(j.jsx)(N.a,{className:e("datepicker"),selected:g,minDate:_,onChange:function(e){w(v&&e<=v?null:e),A("")},placeholderText:"Add Date",dateFormat:"yyyy-MM-dd"}),B&&Object(j.jsx)("span",{className:e("error"),children:B})]})]}),Object(j.jsx)(b,{theme:"primary",size:"large",className:e("button"),type:"submit",children:"Explore Now"})]}),W&&Object(j.jsxs)(k,{isShow:W,onHide:function(){E(!1)},children:[Object(j.jsx)("h4",{className:e("modal-title"),children:"Info"}),Object(j.jsxs)("div",{className:e("modal-info"),children:[Object(j.jsx)(p.c,{className:e("modal-icon")}),Object(j.jsx)("span",{className:e("modal-text"),children:i})]}),Object(j.jsxs)("div",{className:e("modal-info"),children:[Object(j.jsx)(p.a,{className:e("modal-icon")}),Object(j.jsxs)("span",{className:e("modal-text"),children:[x()(O).format("YYYY-MM-DD")," ","\u2014"," ",x()(g).format("YYYY-MM-DD")]})]})]})]})}),S=function(){var e=Object(l.withNaming)(d)("explore"),t=o()(e());return Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("h1",{className:e("title"),children:"Travel to explore"}),Object(j.jsx)("span",{className:e("description"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris."}),Object(j.jsx)(C,{})]})},F=function(){var e=Object(l.withNaming)(d)("benefits"),t=o()(e());return Object(j.jsx)("div",{className:t,children:[{title:"Get Best Prices",description:"Pay through our application and save thousands and get amazing rewards",icon:"/travelo/images/prices.svg"},{title:"Covid Safe",description:"We have all the curated hotels that have all the precaution for a corvid safe environment",icon:"/travelo/images/covid.svg"},{title:"Flexible Payment",description:"Enjoy the flexible payment through our app and get rewards on every payment",icon:"/travelo/images/payment.svg"},{title:"Find The Best Near You",description:"Find the best hotels and places to visit near you in a single click",icon:"/travelo/images/nearby.svg"}].map((function(t){return Object(j.jsxs)("div",{className:e("benefit"),children:[Object(j.jsx)("div",{className:e("icon"),children:Object(j.jsx)("img",{src:t.icon,alt:t.title})}),Object(j.jsx)("h3",{className:e("title"),children:t.title}),Object(j.jsx)("span",{className:e("description"),children:t.description})]},t.title)}))})},D=function(){var e=Object(l.withNaming)(d)("main"),t=o()(e());return Object(j.jsxs)("main",{className:t,children:[Object(j.jsx)(S,{}),Object(j.jsx)(F,{})]})},Y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(D,{})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),M()}},[[99,1,2]]]);
//# sourceMappingURL=main.0f19f428.chunk.js.map