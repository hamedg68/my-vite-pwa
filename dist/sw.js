if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),c={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.baec7821.js",revision:null},{url:"assets/index.f0ced7b7.css",revision:null},{url:"index.html",revision:"fe4d4b19a096a4cd13cffd51ec13dbd7"},{url:"registerSW.js",revision:"fe241c9166521279dddf230695885253"},{url:"manifest.webmanifest",revision:"c9c3484aabcee2fdcd2f8d700f87e27a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
