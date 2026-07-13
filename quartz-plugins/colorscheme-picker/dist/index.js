// src/components/scripts/colorscheme.inline.ts
var colorscheme_inline_default = 'var r=[{name:"Morioh",light:{light:"#faf8f8",lightgray:"#e5e5e5",gray:"#b8b8b8",darkgray:"#4e4e4e",dark:"#2b2b2b",secondary:"#284b63",tertiary:"#84a59d",highlight:"rgba(143, 159, 169, 0.15)",textHighlight:"#fff23688"},dark:{light:"#1a1b26",lightgray:"#292633",gray:"#646464",darkgray:"#c0caf5",dark:"#c0caf5",secondary:"#bb9af7",tertiary:"#2ac3de",highlight:"rgba(143, 159, 169, 0.15)",textHighlight:"#b3aa0288"}},{name:"Ros\\xE9",light:{light:"#fffaf3",lightgray:"#f2e9e1",gray:"#9893a5",darkgray:"#575279",dark:"#575279",secondary:"#d7827e",tertiary:"#b4637a",highlight:"rgba(215, 130, 126, 0.15)",textHighlight:"#f6c17788"},dark:{light:"#191724",lightgray:"#26233a",gray:"#6e6a86",darkgray:"#e0def4",dark:"#e0def4",secondary:"#ebbcba",tertiary:"#eb6f92",highlight:"rgba(235, 188, 186, 0.15)",textHighlight:"#f6c17766"}},{name:"Forest",light:{light:"#f4f6f2",lightgray:"#dde5d8",gray:"#9caf92",darkgray:"#3a4a34",dark:"#26331f",secondary:"#4f772d",tertiary:"#90a955",highlight:"rgba(79, 119, 45, 0.13)",textHighlight:"#c9e26588"},dark:{light:"#12180f",lightgray:"#1e2a18",gray:"#5c6b52",darkgray:"#d8e6cf",dark:"#e6efdd",secondary:"#90a955",tertiary:"#c9e265",highlight:"rgba(144, 169, 85, 0.15)",textHighlight:"#90a95566"}},{name:"Nord",light:{light:"#eceff4",lightgray:"#d8dee9",gray:"#9aa5b5",darkgray:"#3b4252",dark:"#2e3440",secondary:"#5e81ac",tertiary:"#88c0d0",highlight:"rgba(94, 129, 172, 0.13)",textHighlight:"#ebcb8b88"},dark:{light:"#2e3440",lightgray:"#3b4252",gray:"#616e88",darkgray:"#d8dee9",dark:"#eceff4",secondary:"#88c0d0",tertiary:"#8fbcbb",highlight:"rgba(136, 192, 208, 0.15)",textHighlight:"#ebcb8b55"}},{name:"Gruvbox",light:{light:"#fbf1c7",lightgray:"#ebdbb2",gray:"#a89984",darkgray:"#3c3836",dark:"#282828",secondary:"#af3a03",tertiary:"#427b58",highlight:"rgba(175, 58, 3, 0.12)",textHighlight:"#d7992188"},dark:{light:"#282828",lightgray:"#3c3836",gray:"#665c54",darkgray:"#ebdbb2",dark:"#fbf1c7",secondary:"#fabd2f",tertiary:"#8ec07c",highlight:"rgba(250, 189, 47, 0.14)",textHighlight:"#d7992166"}}],n="colorscheme",c="colorscheme-override";function l(e){return Object.keys(e).map(a=>`--${a}:${e[a]};`).join("")}function o(e){return`:root{${l(e.light)}}\n:root[saved-theme="dark"]{${l(e.dark)}}`}function h(e){let a=r.find(g=>g.name===e)??r[0],t=document.getElementById(c);t||(t=document.createElement("style"),t.id=c,document.head.appendChild(t)),t.textContent=o(a),localStorage.setItem(n,a.name)}var s=localStorage.getItem(n)??r[0].name;h(s);function y(){let e=localStorage.getItem(n)??r[0].name;h(e),document.querySelectorAll("select.colorscheme-picker").forEach(t=>{if(t.options.length===0)for(let d of r){let i=document.createElement("option");i.value=d.name,i.textContent=d.name,t.appendChild(i)}t.value=e;let g=()=>h(t.value);t.addEventListener("change",g),window.addCleanup(()=>t.removeEventListener("change",g))})}document.addEventListener("nav",y);\n';

// src/components/styles/colorscheme.scss
var colorscheme_default = ".colorscheme-picker {\n  appearance: none;\n  -webkit-appearance: none;\n  background: transparent;\n  border: 1px solid var(--lightgray);\n  border-radius: 4px;\n  color: var(--darkgray);\n  font-family: var(--bodyFont, inherit);\n  font-size: 0.8rem;\n  padding: 2px 20px 2px 6px;\n  cursor: pointer;\n  max-width: 8rem;\n  flex-shrink: 0;\n  background-image: linear-gradient(45deg, transparent 50%, var(--gray) 50%), linear-gradient(135deg, var(--gray) 50%, transparent 50%);\n  background-position: calc(100% - 12px) center, calc(100% - 7px) center;\n  background-size: 5px 5px, 5px 5px;\n  background-repeat: no-repeat;\n}\n.colorscheme-picker:hover {\n  border-color: var(--gray);\n  color: var(--dark);\n}\n.colorscheme-picker option {\n  color: var(--dark);\n  background: var(--light);\n}";
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

// src/components/ColorSchemePicker.tsx
var ColorSchemePicker = ({ displayClass }) => {
  return /* @__PURE__ */ u2(
    "select",
    {
      class: ["colorscheme-picker", displayClass].filter(Boolean).join(" "),
      "aria-label": "Color scheme",
      title: "Color scheme"
    }
  );
};
ColorSchemePicker.beforeDOMLoaded = colorscheme_inline_default;
ColorSchemePicker.css = colorscheme_default;
var ColorSchemePicker_default = (() => ColorSchemePicker);

export { ColorSchemePicker_default as ColorSchemePicker };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map