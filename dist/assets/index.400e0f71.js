import{m as e}from"./vendor.08e71d21.js";let t;const r={},o=function(e,o){if(!o)return e();if(void 0===t){const e=document.createElement("link").relList;t=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(o.map((e=>{if(e in r)return;r[e]=!0;const o=e.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const _=document.createElement("link");return _.rel=o?"stylesheet":t,o||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),o?new Promise(((e,t)=>{_.addEventListener("load",e),_.addEventListener("error",t)})):void 0}))).then((()=>e()))};e({component:()=>o((()=>import("./App.faacdee1.js")),void 0),rootSelector:"#root",globalImports:["React",o((()=>import("./vendor.08e71d21.js").then((function(e){return e.i}))),void 0),"ReactDOM",o((()=>import("./index.6ce0775a.js").then((function(e){return e.i}))),["/assets/index.6ce0775a.js","/assets/vendor.08e71d21.js"]),o((()=>import("./vendor.08e71d21.js").then((function(e){return e.a}))),void 0),o((()=>import("./index.573c44e9.js")),["/assets/index.573c44e9.js","/assets/vendor.08e71d21.js","/assets/index.6ce0775a.js"]),"marked",o((()=>import("./marked.d300425d.js").then((function(e){return e.m}))),["/assets/marked.d300425d.js","/assets/vendor.08e71d21.js"]),"Markdown",o((()=>import("./Markdown.bc2be0fc.js")),void 0),"MainNav",o((()=>import("./MainNav.9742febe.js")),void 0),"Footer",o((()=>import("./Footer.7bbced2e.js")),void 0),"foutFight",o((()=>import("./foutFight.ab963760.js")),void 0),o((()=>import("./copier.62c8dc05.js")),void 0),"npmInfo",o((()=>import("./npmInfo.96590fdf.js")),void 0)]});