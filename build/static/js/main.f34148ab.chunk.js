(this.webpackJsonptemporal=this.webpackJsonptemporal||[]).push([[0],{144:function(e,t,a){e.exports=a(251)},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(149),a(143)),i=a(31),m=a(54),u=a(49),s=a.n(u),E=a(65),f=a(9),p=a(253),b=a(254),d=a(255),g=a(141),v=a(258),h=a(260),j=a(261),y=a(262),O=function(){return"true"===localStorage.getItem("login")},k=function(){return localStorage.getItem("email")},S=function(){var e=Object(i.g)(),t=Object(n.useState)("N/A"),a=Object(f.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){var e=k();e&&c(e)}),[l]),r.a.createElement("div",null,r.a.createElement(v.a,{mode:"horizontal"},r.a.createElement(v.a.Item,null,r.a.createElement(m.b,{to:"/dashboard"},r.a.createElement(h.a,{style:{marginRight:"5px"}}),"Dashboard")),r.a.createElement(v.a.Item,{style:{float:"right"},onClick:function(){localStorage.removeItem("login"),localStorage.removeItem("email"),e.replace("/")}},r.a.createElement(j.a,{style:{marginRight:"5px"}}),"D\xe9connexion"),r.a.createElement(v.a.Item,{style:{float:"right"}},r.a.createElement(y.a,{style:{marginRight:"5px"}}),l,"@temporal.com")))},w=a(97),C=a.n(w),x=a(30),I=a(256),D=a(257),M=function(e){var t=e.sujet,a=e.from,l=e.message,c=e.date,o=Object(n.useState)(!1),i=Object(f.a)(o,2),m=i[0],u=i[1],s=function(){u(!m)};return r.a.createElement("div",null,r.a.createElement(x.a,{onClick:s},"Consulter l'email"),r.a.createElement(I.a,{visible:m,closable:!1,footer:[r.a.createElement(x.a,{key:"back",onClick:s},"Lu")]},r.a.createElement("p",null,t),r.a.createElement("p",null,c),r.a.createElement(D.a,{disabled:!0,value:a}),r.a.createElement("p",null,l)))},B=a(259),Y=a(137),L=a.n(Y),N=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(""),p=Object(f.a)(u,2),b=p[0],d=p[1],g=Object(n.useState)(""),v=Object(f.a)(g,2),h=v[0],j=v[1],y=D.a.TextArea,O=function(){var e=Object(E.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k(),e.next=3,L.a.post("http://172.22.247.155:8888/api/email/send",{emailFrom:t,emailDesti:b,sujet:i,message:h});case 3:"200"===e.sent.data.status&&(B.a.success("Votre email est envoy\xe9 !"),l(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){l(!a)};return r.a.createElement("div",{style:{marginLeft:"1%"}},r.a.createElement(x.a,{onClick:S,style:{marginTop:"1%"},type:"primary"},"Envoyer un email"),r.a.createElement(I.a,{visible:a,title:"Envoyer un email",closable:!1,footer:[r.a.createElement(x.a,{key:"cancel",onClick:S},"Cancel"),r.a.createElement(x.a,{key:"submit",type:"primary",onClick:O},"Envoyer")]},r.a.createElement(D.a,{style:{marginBottom:"1%"},placeholder:"Sujet",value:i,onChange:function(e){m(e.target.value)}}),r.a.createElement(D.a,{style:{marginBottom:"1%"},placeholder:"Destinataire",value:b,onChange:function(e){d(e.target.value)}}),r.a.createElement(y,{rows:4,placeholder:"Message",value:h,onChange:function(e){j(e.target.value)}})))},R=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=(t[1],function(){var e=Object(E.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(N,null),r.a.createElement(p.a,null),a&&a.map((function(e){return r.a.createElement(b.a,{key:e.date,author:e.from,style:{marginLeft:"1%"},avatar:r.a.createElement(d.a,{src:"https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-512.png",alt:"Exp\xe9diteur"}),actions:[r.a.createElement(M,{sujet:e.sujet,from:e.from,message:e.message,date:e.date})],content:r.a.createElement("p",null,e.sujet),datetime:r.a.createElement(g.a,{title:C()().format("YYYY-MM-DD HH:mm:ss")},r.a.createElement("span",null,C()().fromNow()))})&&r.a.createElement(p.a,null)})))},z=(a(250),function(){var e=Object(i.g)(),t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),m=Object(f.a)(o,2),u=m[0],s=m[1],E=function(){var t;t=l,localStorage.setItem("email",t),localStorage.setItem("login","true"),e.replace("/dashboard")};return Object(n.useEffect)((function(){O()&&s(!0)}),[]),r.a.createElement("div",{className:"bg-modal"},u&&r.a.createElement(i.a,{to:"/dashboard"}),r.a.createElement(I.a,{footer:[r.a.createElement(x.a,{key:"submit",type:"primary",onClick:E},"V\xe9rifier les mails")],title:" Saisissez le mail jetable de votre choix",visible:!0,closable:!1},r.a.createElement(D.a,{required:!0,placeholder:"@temporal.com",value:l,onPressEnter:E,onChange:function(e){c(e.target.value)}})))}),A=function(){var e=function(e){var t=e.component,a=Object(o.a)(e,["component"]),n=!1;O()&&(n=!0);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/"}})}}))};return r.a.createElement(m.a,null,r.a.createElement(i.d,null,r.a.createElement(e,{path:"/dashboard/",component:R}),r.a.createElement(i.b,{path:"/",exact:!0,component:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.f34148ab.chunk.js.map