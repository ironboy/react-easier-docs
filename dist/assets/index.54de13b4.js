import{m as e}from"./vendor.7a5bf8e8.js";let t;const r={},o=function(e,o){if(!o)return e();if(void 0===t){const e=document.createElement("link").relList;t=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(o.map((e=>{if(e in r)return;r[e]=!0;const o=e.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const _=document.createElement("link");return _.rel=o?"stylesheet":t,o||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),o?new Promise(((e,t)=>{_.addEventListener("load",e),_.addEventListener("error",t)})):void 0}))).then((()=>e()))};e({component:()=>o((()=>import("./App.372a2f43.js")),void 0),rootSelector:"#root",globalImports:["React",o((()=>import("./vendor.7a5bf8e8.js").then((function(e){return e.i}))),void 0),"ReactDOM",o((()=>import("./index.16fd8fc6.js").then((function(e){return e.i}))),["/assets/index.16fd8fc6.js","/assets/vendor.7a5bf8e8.js"]),o((()=>import("./vendor.7a5bf8e8.js").then((function(e){return e.a}))),void 0),o((()=>import("./index.5a449808.js")),["/assets/index.5a449808.js","/assets/vendor.7a5bf8e8.js","/assets/index.16fd8fc6.js"]),"marked",o((()=>import("./marked.0fb7f0f1.js").then((function(e){return e.m}))),["/assets/marked.0fb7f0f1.js","/assets/vendor.7a5bf8e8.js"]),"Markdown",o((()=>import("./Markdown.5dcd5c93.js")),void 0),"MainNav",o((()=>import("./MainNav.fd03b2c6.js")),void 0),"Footer",o((()=>import("./Footer.2d8669e8.js")),void 0),"foutFight",o((()=>import("./foutFight.80ed682f.js")),void 0),o((()=>import("./copier.0766311c.js")),void 0),"npmInfo",o((()=>import("./npmInfo.da65e39f.js")),void 0)]});