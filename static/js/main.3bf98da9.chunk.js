(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/loading.3f259006.gif"},13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),s=(t(18),t(2)),o=(t(19),t(4)),i=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Newsify"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/business"},"Business")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/general"},"General")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/sports"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/technology"},"Technology")))))))},m=t(5),u=t.n(m),g=t(7),p=function(e){return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{style:{display:"flex",position:"absolute",justifyContent:"flex-end",right:"0"}},r.a.createElement("span",{className:"badge rounded-pill bg-danger"},e.source)),r.a.createElement("img",{src:e.imgUrl,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},e.desc,"..."),r.a.createElement("a",{href:e.newsUrl,target:"/blank",className:"btn btn-danger md-1"},"Read More"),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"By ",e.author?e.author:"Unknown"," On ",e.date," ")))))},E=t(10),d=t.n(E),b=function(){return r.a.createElement("div",{className:"text-center my-5"},r.a.createElement("img",{src:d.a,alt:""}))},y=t(11),v=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(!0),i=Object(s.a)(o,2),m=i[0],E=i[1],d=Object(n.useState)(1),v=Object(s.a)(d,2),h=v[0],f=v[1],N=Object(n.useState)(0),x=Object(s.a)(N,2),k=x[0],S=x[1],w=function(){var a=Object(g.a)(u.a.mark(function a(){var t,n,r;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.setProgress(10),t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=00273428cb0f4f969a3209b7475996e8&page=").concat(h,"&pageSize=").concat(e.pageSize),E(!0),e.setProgress(30),a.next=6,fetch(t);case 6:return n=a.sent,a.next=9,n.json();case 9:r=a.sent,e.setProgress(60),l(r.articles),S(r.totalResults),E(!1),e.setProgress(100);case 15:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)(function(){w()},[]);var j,P=function(){var a=Object(g.a)(u.a.mark(function a(){var t,n,r;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=00273428cb0f4f969a3209b7475996e8&page=").concat(h+1,"&pageSize=").concat(e.pageSize),f(h+1),a.next=4,fetch(t);case 4:return n=a.sent,a.next=7,n.json();case 7:r=a.sent,l(c.concat(r.articles)),E(!1),S(r.totalResults);case 11:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center",style:{margin:"25px 25px",marginTop:"90px"}},"Newsify - Top ",(j=e.category).charAt(0).toUpperCase()+j.slice(1)," Headlines  "),m&&r.a.createElement(b,null),r.a.createElement(y.a,{dataLength:c.length,next:P,hasMore:c.length!==k,loader:r.a.createElement(b,null)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},c.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(p,{title:e.title,desc:e.description?e.description.slice(0,88):"",imgUrl:e.urlToImage?e.urlToImage:"https://images.indianexpress.com/2021/11/GettyImages-diabetes-1200.jpg",newsUrl:e.url,author:e.author,date:e.publishedAt.slice(0,10),source:e.source.name}))})))))};v.defaultProps={country:"in",pageSize:6,category:"sports"};var h=v,f=t(1),N=t(12),x=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(N.a,{height:3,color:"#f11946",progress:t}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",element:r.a.createElement(h,{setProgress:c,key:"general",pageSize:"6",country:"in",category:"general"})}),r.a.createElement(f.a,{exact:!0,path:"/business",element:r.a.createElement(h,{setProgress:c,key:"business",pageSize:"6",country:"in",category:"business"})}),r.a.createElement(f.a,{exact:!0,path:"/entertainment",element:r.a.createElement(h,{setProgress:c,key:"entertainment",pageSize:"6",country:"in",category:"entertainment"})}),r.a.createElement(f.a,{exact:!0,path:"/general",element:r.a.createElement(h,{setProgress:c,key:"general",pageSize:"6",country:"in",category:"general"})}),r.a.createElement(f.a,{exact:!0,path:"/health",element:r.a.createElement(h,{setProgress:c,key:"health",pageSize:"6",country:"in",category:"health"})}),r.a.createElement(f.a,{exact:!0,path:"/science",element:r.a.createElement(h,{setProgress:c,key:"science",pageSize:"6",country:"in",category:"science"})}),r.a.createElement(f.a,{exact:!0,path:"/sports",element:r.a.createElement(h,{setProgress:c,key:"sports",pageSize:"6",country:"in",category:"sports"})}),r.a.createElement(f.a,{exact:!0,path:"/technology",element:r.a.createElement(h,{setProgress:c,key:"technology",pageSize:"6",country:"in",category:"technology"})}))))},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),k()}},[[13,1,2]]]);
//# sourceMappingURL=main.3bf98da9.chunk.js.map