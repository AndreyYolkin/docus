import{u as d}from"./asyncData.57bcea0c.js";import{d as l,ap as f,L as p,q as v,G as m,aq as g,X as h,ar as y,W as s,E as _}from"./entry.ec3affcb.js";const L=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=f(u),n=p(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>s(_,{to:e._path},()=>e.title),t=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),t(r.children,i+1)]):s("li",null,o(r)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{L as default};
