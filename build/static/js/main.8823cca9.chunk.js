(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{159:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(28),a=c.n(r),i=(c(109),c(110),c(22)),l=c(30),j=c(39),d=c(10),b=c(208),o=c(202),h=c(201),x=c(210),O=c(203),u=c(206),p=c(205),m=c(197),f=c(209),v=c(0);function g(){var e=s.useState(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],r=s.useRef(null),a=function(e){r.current&&r.current.contains(e.target)||n(!1)};function l(e){"Tab"===e.key?(e.preventDefault(),n(!1)):"Escape"===e.key&&n(!1)}var g=s.useRef(c);return s.useEffect((function(){!0===g.current&&!1===c&&r.current.focus(),g.current=c}),[c]),Object(v.jsx)(m.a,{direction:"row",spacing:2,children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(b.a,{ref:r,id:"composition-button","aria-controls":c?"composition-menu":void 0,"aria-expanded":c?"true":void 0,"aria-haspopup":"true",onClick:function(){n((function(e){return!e}))},style:{color:"white"},children:[Object(v.jsx)(f.a,{src:"https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/apoVHSeCqmI/6noSHuprqylAI-s_8GqFIA.jpg",alt:"Avatar"})," ",Object(v.jsx)("p",{children:"Mon profil"})]}),Object(v.jsx)(O.a,{open:c,anchorEl:r.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,s=e.placement;return Object(v.jsx)(h.a,Object(j.a)(Object(j.a)({},t),{},{style:{transformOrigin:"bottom-start"===s?"left top":"left bottom"},children:Object(v.jsx)(x.a,{children:Object(v.jsx)(o.a,{onClick:a,children:Object(v.jsxs)(p.a,{autoFocusItem:c,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:l,children:[Object(v.jsx)(i.b,{to:"/users",children:Object(v.jsx)(u.a,{children:"Profile"})}),Object(v.jsx)(i.b,{to:"/users",children:Object(v.jsx)(u.a,{children:"Profile"})}),Object(v.jsx)(i.b,{to:"/users",children:Object(v.jsx)(u.a,{children:"Profile"})})]})})})}))}})]})})}var y=c(33),k=c.n(y),w=c(50),S=c(61),C=c.n(S),N=c(26),I=c(21),A=Object(N.b)("users/getAllUsers",Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("http://localhost:5000/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),L=function(){var e=Object(I.b)();Object(s.useEffect)((function(){e(A())}),[e]);var t=Object(I.c)((function(e){return e.users.users})).map((function(e){return Object(v.jsx)("div",{},e._id)}));return Object(v.jsx)("div",{children:t})},P=function(){return Object(v.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top",style:{backgroundColor:"green"},children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("a",{className:"navbar-brand",href:"/",children:"Yecoom"}),Object(v.jsx)(L,{}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[Object(v.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(i.b,{className:"nav-link",to:"/users",children:"Mon Compte"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(i.b,{className:"nav-link",to:"/newProducts",children:"Vendre un produit"})})]}),Object(v.jsx)(g,{})]})]})})},E=C.a.create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"}}),H=Object(N.b)("products/getAllProducts",Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/api/data");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),M=(Object(N.b)("products/getById",function(){var e=Object(w.a)(k.a.mark((function e(t){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/api/data/".concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H),R=(c(159),c(6)),D=c(94),T=c.n(D),q=c(207),G=c(211),_=c(212),B=c(213),F=Object(R.a)((function(e){return Object(v.jsx)(q.a,Object(j.a)({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var t=e.theme;return{border:"1px solid ".concat(t.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),U=Object(R.a)((function(e){return Object(v.jsx)(G.a,Object(j.a)({expandIcon:Object(v.jsx)(T.a,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}})),V=Object(R.a)(_.a)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}));function J(){var e=s.useState("panel1"),t=Object(d.a)(e,2),c=t[0],n=t[1],r=function(e){return function(t,c){n(!!c&&e)}};return Object(v.jsxs)("div",{children:[Object(v.jsxs)(F,{expanded:"panel1"===c,onChange:r("panel1"),children:[Object(v.jsx)(U,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(v.jsx)(B.a,{children:"Collapsible Group Item #1"})}),Object(v.jsx)(V,{children:Object(v.jsx)(B.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(v.jsxs)(F,{expanded:"panel2"===c,onChange:r("panel2"),children:[Object(v.jsx)(U,{"aria-controls":"panel2d-content",id:"panel2d-header",children:Object(v.jsx)(B.a,{children:"Collapsible Group Item #2"})}),Object(v.jsx)(V,{children:Object(v.jsx)(B.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),Object(v.jsxs)(F,{expanded:"panel3"===c,onChange:r("panel3"),children:[Object(v.jsx)(U,{"aria-controls":"panel3d-content",id:"panel3d-header",children:Object(v.jsx)(B.a,{children:"Collapsible Group Item #3"})}),Object(v.jsx)(V,{children:Object(v.jsx)(B.a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}var Y=function(){var e=Object(I.b)();Object(s.useEffect)((function(){e(M())}),[e]);var t=Object(I.c)((function(e){return e.posts.posts})).map((function(e){return Object(v.jsxs)("article",{className:"post-excerpt",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{float:"right",marginRight:50},children:[Object(v.jsx)(f.a,{alt:"Avatar"}),Object(v.jsx)("p",{children:e.user})]}),Object(v.jsxs)("div",{style:{marginLeft:50},children:[Object(v.jsx)("h2",{children:e.titre}),Object(v.jsxs)("p",{children:[e.price," $"]}),Object(v.jsx)("p",{children:e.description})]}),Object(v.jsx)(J,{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)(i.b,{to:"/posts/".concat(e._id),className:"button muted-button",children:Object(v.jsx)(b.a,{variant:"contained",children:"Voir Plus"})}),Object(v.jsx)("div",{children:Object(v.jsx)("br",{})})]}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{style:{float:"right"}})]},e._id)}));return Object(v.jsxs)("section",{className:"posts-list",children:[Object(v.jsx)("h2",{style:{textAlign:"center"},children:"Accueil"}),Object(v.jsx)("div",{className:"HomeBox",children:t})]})},z=(c(162),function(e){e.match;var t=Object(l.g)().postId,c=Object(I.b)();Object(s.useEffect)((function(){c(M())}),[c]);var n=Object(I.c)((function(e){return e.posts.posts.find((function(e){return e._id===t}))}));return console.log(n),Object(v.jsx)("div",{className:"single-post-page",children:Object(v.jsx)("div",{class:"container-fluid",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("nav",{id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",children:Object(v.jsxs)("div",{class:"position-sticky pt-3",children:[Object(v.jsxs)("ul",{class:"nav flex-column",children:[Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link active","aria-current":"page",href:"/",children:[Object(v.jsx)("span",{"data-feather":"home"}),"Dashboard"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"file"}),"Orders"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"shopping-cart"}),"Products"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"users"}),"Customers"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"bar-chart-2"}),"Reports"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"layers"}),"Integrations"]})})]}),Object(v.jsxs)("h6",{class:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:[Object(v.jsx)("span",{children:"Saved reports"}),Object(v.jsx)("a",{class:"link-secondary",href:"/","aria-label":"Add a new report",children:Object(v.jsx)("span",{"data-feather":"plus-circle"})})]}),Object(v.jsxs)("ul",{class:"nav flex-column mb-2",children:[Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"file-text"}),"Current month"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"file-text"}),"Last quarter"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"file-text"}),"Social engagement"]})}),Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsxs)("a",{class:"nav-link",href:"/",children:[Object(v.jsx)("span",{"data-feather":"file-text"}),"Year-end sale"]})})]})]})}),Object(v.jsxs)("main",{class:"col-md-9 ms-sm-auto col-lg-10 px-md-4",children:[Object(v.jsxs)("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:[Object(v.jsx)("h1",{class:"h2",children:"Dashboard"}),Object(v.jsxs)("div",{class:"btn-toolbar mb-2 mb-md-0",children:[Object(v.jsxs)("div",{class:"btn-group me-2",children:[Object(v.jsx)("button",{type:"button",class:"btn btn-sm btn-outline-secondary",children:"Share"}),Object(v.jsx)("button",{type:"button",class:"btn btn-sm btn-outline-secondary",children:"Export"})]}),Object(v.jsxs)("button",{type:"button",class:"btn btn-sm btn-outline-secondary dropdown-toggle",children:[Object(v.jsx)("span",{"data-feather":"calendar"}),"This week"]})]})]}),Object(v.jsx)("canvas",{class:"my-4 w-100",id:"myChart",width:"900",height:"380"}),Object(v.jsx)("h2",{children:"Section title"}),Object(v.jsx)("div",{class:"table-responsive",children:Object(v.jsxs)("table",{class:"table table-striped table-sm",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Header"}),Object(v.jsx)("th",{scope:"col",children:"Header"}),Object(v.jsx)("th",{scope:"col",children:"Header"}),Object(v.jsx)("th",{scope:"col",children:"Header"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,001"}),Object(v.jsx)("td",{children:"random"}),Object(v.jsx)("td",{children:"data"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"text"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,002"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"irrelevant"}),Object(v.jsx)("td",{children:"visual"}),Object(v.jsx)("td",{children:"layout"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,003"}),Object(v.jsx)("td",{children:"data"}),Object(v.jsx)("td",{children:"rich"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"tabular"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,003"}),Object(v.jsx)("td",{children:"information"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"illustrative"}),Object(v.jsx)("td",{children:"data"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,004"}),Object(v.jsx)("td",{children:"text"}),Object(v.jsx)("td",{children:"random"}),Object(v.jsx)("td",{children:"layout"}),Object(v.jsx)("td",{children:"dashboard"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,005"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"irrelevant"}),Object(v.jsx)("td",{children:"text"}),Object(v.jsx)("td",{children:"placeholder"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,006"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"illustrative"}),Object(v.jsx)("td",{children:"rich"}),Object(v.jsx)("td",{children:"data"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,007"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"tabular"}),Object(v.jsx)("td",{children:"information"}),Object(v.jsx)("td",{children:"irrelevant"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,008"}),Object(v.jsx)("td",{children:"random"}),Object(v.jsx)("td",{children:"data"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"text"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,009"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"irrelevant"}),Object(v.jsx)("td",{children:"visual"}),Object(v.jsx)("td",{children:"layout"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,010"}),Object(v.jsx)("td",{children:"data"}),Object(v.jsx)("td",{children:"rich"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"tabular"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,011"}),Object(v.jsx)("td",{children:"information"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"illustrative"}),Object(v.jsx)("td",{children:"data"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,012"}),Object(v.jsx)("td",{children:"text"}),Object(v.jsx)("td",{children:"placeholder"}),Object(v.jsx)("td",{children:"layout"}),Object(v.jsx)("td",{children:"dashboard"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,013"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"irrelevant"}),Object(v.jsx)("td",{children:"text"}),Object(v.jsx)("td",{children:"visual"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,014"}),Object(v.jsx)("td",{children:"dashboard"}),Object(v.jsx)("td",{children:"illustrative"}),Object(v.jsx)("td",{children:"rich"}),Object(v.jsx)("td",{children:"data"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"1,015"}),Object(v.jsx)("td",{children:"random"}),Object(v.jsx)("td",{children:"tabular"}),Object(v.jsx)("td",{children:"information"}),Object(v.jsx)("td",{children:"text"})]})]})]})})]})]})})})}),K=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(d.a)(r,2),i=a[0],l=a[1],j=Object(s.useState)(""),b=Object(d.a)(j,2),o=b[0],h=b[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"User Form"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:c,email:i,password:o};E.post("/api/users",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(v.jsx)("label",{children:"Name"}),Object(v.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{type:"text",value:o,onChange:function(e){return h(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})]})};var W,$,Q=function(){return Object(v.jsxs)(i.a,{children:[Object(v.jsx)(P,{}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{})]}),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsx)(Y,{})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/posts/:postId",component:z}),Object(v.jsx)(l.b,{path:"/users",component:K}),Object(v.jsx)(l.a,{to:"/"})]})})]})},X=c(5),Z=Object(N.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducer:function(e,t){e.push(t.payload)},extraReducers:(W={},Object(X.a)(W,M.fulfilled,(function(e,t){e.posts=t.payload})),Object(X.a)(W,M.pending,(function(e,t){e.loading=!0})),Object(X.a)(W,M.rejected,(function(e,t){e.error=t.payload})),W)}).reducer,ee=Object(N.c)({name:"users",initialState:{users:[],error:null},extraReducers:($={},Object(X.a)($,A.pending,(function(e,t){e.loading=!0})),Object(X.a)($,A.fulfilled,(function(e,t){e.users=t.payload})),Object(X.a)($,A.rejected,(function(e,t){e.error=t.payload})),$)}).reducer,te=Object(N.a)({reducer:{posts:Z,users:ee}});a.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(I.a,{store:te,children:Object(v.jsx)(Q,{})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.8823cca9.chunk.js.map