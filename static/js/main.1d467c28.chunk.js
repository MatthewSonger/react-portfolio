(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{31:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(10),s=c(2),i=c(0),r=Object(a.createContext)(),l=function(e){var t=e.children,c=Object(a.useState)("light"),n=Object(s.a)(c,2),l=n[0],o=n[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=c.p+"static/media/0.139ee96d.png",j=c.p+"static/media/1.d99b59e4.png",d=c.p+"static/media/2.8430e202.png",b=c.p+"static/media/3.9d18f970.png",h=c.p+"static/media/4.84e584a5.png",u=c.p+"static/media/5.95d1bcba.png",m="null",p="Matt Songer",O="Matt Songer",x="Full Stack Web Developer",g="Hey, I'm Matt. I enjoy building websites! I've used computers most of my life and love using them to create. Web Devleopment is where my creative side meets my logical side. ",f="contact me",v={linkedin:"https://www.linkedin.com/in/matthewsonger.com",github:"https://github.com/MatthewSonger"},k=[{name:"Run Buddy",id:1,photo:o,description:"",stack:["HTML, CSS"],sourceCode:"https://github.com/MatthewSonger/run-buddy.git",livePreview:"https://matthewsonger.github.io/run-buddy/"},{name:"Sip and Read",id:2,photo:j,description:"",stack:["HTML, CSS, JavaScript, Tailwind"],sourceCode:"https://github.com/MatthewSonger/sip-and-read.git",livePreview:"https://kimberlyannyo.github.io/sip-and-read/"},{name:"The Story Keepers",id:3,photo:d,description:"",stack:["HTML, CSS, JavaScript, Bootstrap"],sourceCode:"https://github.com/Matt658041/The-Story-Keepers.git",livePreview:"http://storykeepers.herokuapp.com/"},{name:"Rock Paper Scissors",id:4,photo:b,description:"",stack:["HTML, CSS, JavaScript"],sourceCode:"https://github.com/MatthewSonger/Rock-Paper-Scissors.git",livePreview:"https://matthewsonger.github.io/Rock-Paper-Scissors/"},{name:"Task Manager",id:5,photo:h,description:"",stack:["HTML, CSS, JavaScript"],sourceCode:"https://github.com/MatthewSonger/taskinator.git",livePreview:"https://matthewsonger.github.io/taskinator/"},{name:"Penny For Your Thoughts",id:6,photo:u,description:"",stack:["React, Node, MongoDB, Express, Bootstrap, GraphQL"],sourceCode:"https://github.com/Matt658041/Penny-for-your-thoughts.git",livePreview:"http://penny-thoughts.herokuapp.com/"}],N=["HTML","CSS","JavaScript","React","Node","Express","SQL","MongoDB","Bootstrap","Git","GitHub"],S="matt91893@gmail.com",_=c(18),w=c.n(_),y=c(16),C=c.n(y),M=c(20),P=c.n(M),T=c(19),L=c.n(T),B=(c(31),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,l=Object(a.useState)(!1),o=Object(s.a)(l,2),j=o[0],d=o[1],b=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[k.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,N.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,S?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(i.jsx)(C.a,{}):Object(i.jsx)(w.a,{})}),Object(i.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(L.a,{}):Object(i.jsx)(P.a,{})})]})}),H=(c(35),function(){var e=m,t=p;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{className:"link",children:t}):t}),Object(i.jsx)(B,{})]})}),R=c(12),E=c.n(R),F=c(21),J=c.n(F),D=c.p+"static/media/Headshot.2d1c115a.jpeg",I=(c(36),function(){var e=O,t=x,c=g,a=f,n=v;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),Object(i.jsx)("img",{className:"about_headshot",src:D}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[a&&Object(i.jsx)("a",{href:"#contact",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Contact"})}),n&&Object(i.jsxs)(i.Fragment,{children:[n.github&&Object(i.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),n.linkedin&&Object(i.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(J.a,{})})]})]})]})}),A=c(8),z=c.n(A),G=c(22),V=c.n(G),Y=(c(38),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:t.photo})},t.id),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},z()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(V.a,{})})]})}),K=(c(39),function(){return k.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:k.map((function(e){return Object(i.jsx)(Y,{project:e},z()())}))})]}):null}),Q=(c(40),function(){return N.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:N.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},z()())}))})]}):null}),W=c(23),Z=c.n(W),q=(c(41),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(Z.a,{fontSize:"large"})})}):null}),$=c(4),U=c(15);c(42);var X=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),o=l[0],j=l[1],d=c.name,b=c.email,h=c.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(n(Object(U.a)(Object(U.a)({},c),{},Object($.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(i.jsxs)("section",{className:"contact-section",id:"contact",children:[Object(i.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(i.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",c)},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"name"}),Object(i.jsx)("input",{className:"contact-field",type:"text",name:"name",defaultValue:d,onBlur:u,placeholder:"Name"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"email"}),Object(i.jsx)("input",{className:"contact-field",type:"email",name:"email",defaultValue:b,onBlur:u,placeholder:"Email Address"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"message"}),Object(i.jsx)("textarea",{className:"contact-field",name:"message",rows:"5",defaultValue:h,onBlur:u,placeholder:"Message"})]}),o&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error-text",children:o})}),Object(i.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},ee=(c(43),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{className:"link footer__link",children:"Built with React by Matthew Songer"})})}),te=c.p+"static/media/Resume.cb46e35b.pdf",ce=c(24),ae=(c(45),function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{className:"my_resume",onClick:function(){Object(ce.saveAs)(te,"Resume.pdf")},children:"Download My Resume"})})}),ne=(c(46),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(H,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(I,{}),Object(i.jsx)(K,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(ae,{}),Object(i.jsx)(X,{})]}),Object(i.jsx)(q,{}),Object(i.jsx)(ee,{})]})});c(47);Object(n.render)(Object(i.jsx)(l,{children:Object(i.jsx)(ne,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1d467c28.chunk.js.map