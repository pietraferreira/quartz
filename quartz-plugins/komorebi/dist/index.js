// src/components/scripts/komorebi.inline.ts
var komorebi_inline_default = 'var I="#ffe6a8";function h(t){let n=t.trim(),r=n.startsWith("#")?n.slice(1):n;if(r.length===3){let i=parseInt(r[0]+r[0],16),c=parseInt(r[1]+r[1],16),u=parseInt(r[2]+r[2],16);return[i,c,u]}if(r.length>=6){let i=parseInt(r.slice(0,2),16),c=parseInt(r.slice(2,4),16),u=parseInt(r.slice(4,6),16);if(!Number.isNaN(i)&&!Number.isNaN(c)&&!Number.isNaN(u))return[i,c,u]}return[128,128,128]}function f(t,n,r){return[Math.round(t[0]+(n[0]-t[0])*r),Math.round(t[1]+(n[1]-t[1])*r),Math.round(t[2]+(n[2]-t[2])*r)]}function p(t,n){return getComputedStyle(t).getPropertyValue(n)}function S(t){let n=document.createElement("canvas");t.appendChild(n);let r=n.getContext("2d"),i,c,u;function M(){let e=document.documentElement,o=h(p(e,"--light")||"#faf8f8"),s=h(p(e,"--tertiary")||"#84a59d"),a=h(p(e,"--secondary")||"#284b63");i=f(o,a,.5),c=s,u=f(h(I),o,.15)}M();let l=0,d=0;function R(){let e=t.getBoundingClientRect(),o=1;l=Math.max(1,Math.ceil(e.width/7)),d=Math.max(1,Math.ceil(e.height/7)),n.width=l*o,n.height=d*o,n.style.width=e.width+"px",n.style.height=e.height+"px"}R();function L(e,o,s){let a=l/2,b=d/2,m=0;return m+=Math.sin(e*.35+s*.7),m+=Math.sin(o*.45-s*.5),m+=Math.sin((e+o)*.25+s*.9),m+=Math.sin(Math.hypot(e-a,o-b)*.3-s*1.1),m/4}function B(e){return e<.55?f(i,c,e/.55):f(c,u,(e-.55)/.45)}let g=0,y=0,x=1e3/30,C=performance.now();function v(e){if(g=requestAnimationFrame(v),e-y<x)return;y=e;let o=(e-C)/1e3;for(let s=0;s<d;s++)for(let a=0;a<l;a++){let b=L(a,s,o),m=Math.pow(Math.max(0,Math.min(1,(b+1)/2)),2.4),[G,N,F]=B(m);r.fillStyle=`rgb(${G},${N},${F})`,r.fillRect(a,s,1,1)}}g=requestAnimationFrame(v);let w=new ResizeObserver(()=>R());w.observe(t);let E=()=>M();return document.addEventListener("themechange",E),()=>{cancelAnimationFrame(g),w.disconnect(),document.removeEventListener("themechange",E),n.remove()}}function k(){let t=document.querySelector(".komorebi");if(!t||t.dataset.komorebiReady==="true")return;t.dataset.komorebiReady="true";let n=S(t);window.addCleanup(()=>{delete t.dataset.komorebiReady,n()})}document.addEventListener("nav",k);\n';

// src/components/styles/komorebi.scss
var komorebi_default = ".komorebi {\n  box-sizing: border-box;\n  width: 100%;\n  height: 180px;\n  margin: 0 0 1.5rem;\n  border: 2px solid var(--lightgray);\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--lightgray);\n}\n.komorebi canvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  animation: komorebi-fade 0.8s ease forwards;\n}\n\n@keyframes komorebi-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 800px) {\n  .komorebi {\n    height: 120px;\n  }\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Komorebi.tsx
var Komorebi = ({ fileData }) => {
  const slug = fileData.slug ?? "";
  if (slug !== "index") return null;
  return /* @__PURE__ */ u2("div", { class: "komorebi", "aria-hidden": "true" });
};
Komorebi.afterDOMLoaded = komorebi_inline_default;
Komorebi.css = komorebi_default;
var Komorebi_default = (() => Komorebi);

export { Komorebi_default as Komorebi };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map