// src/components/scripts/recent-notes-collapse.inline.ts
var recent_notes_collapse_inline_default = 'var c="recent-notes-collapsed";function d(){let a=document.querySelectorAll(".recent-notes"),l=localStorage.getItem(c)==="true";a.forEach(n=>{let e=n.querySelector("h3");if(!e)return;n.classList.toggle("is-collapsed",l),e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-expanded",String(!l));let o=()=>{let t=!n.classList.contains("is-collapsed");document.querySelectorAll(".recent-notes").forEach(s=>s.classList.toggle("is-collapsed",t)),document.querySelectorAll(".recent-notes h3").forEach(s=>s.setAttribute("aria-expanded",String(!t))),localStorage.setItem(c,String(t))},r=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),o())};e.addEventListener("click",o),e.addEventListener("keydown",r),window.addCleanup(()=>{e.removeEventListener("click",o),e.removeEventListener("keydown",r)})})}document.addEventListener("nav",d);\n';

// src/components/styles/recent-notes-collapse.scss
var recent_notes_collapse_default = '.recent-notes > h3 {\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.recent-notes > h3::before {\n  content: "";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid currentColor;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  transform: rotate(90deg);\n  transition: transform 0.15s ease;\n  opacity: 0.7;\n}\n.recent-notes.is-collapsed > h3::before {\n  transform: rotate(0deg);\n}\n.recent-notes.is-collapsed > .recent-ul, .recent-notes.is-collapsed > .see-more {\n  display: none;\n}';

// src/components/RecentNotesCollapse.tsx
var RecentNotesCollapse = () => null;
RecentNotesCollapse.afterDOMLoaded = recent_notes_collapse_inline_default;
RecentNotesCollapse.css = recent_notes_collapse_default;
var RecentNotesCollapse_default = (() => RecentNotesCollapse);

export { RecentNotesCollapse_default as RecentNotesCollapse };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map