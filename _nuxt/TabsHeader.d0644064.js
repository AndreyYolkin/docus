import{d as b,r as l,R as m,c as a,e as s,F as v,aa as g,f as u,g as x,N as y,n as k,t as I,p as T,k as S,ae as C,l as $}from"./entry.ec3affcb.js";const N=t=>(T("data-v-c723ab1e"),t=t(),S(),t),w={class:"tabs-header"},B=["onClick"],H=N(()=>u("span",{class:"tab"},null,-1)),R=[H],U=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,c)=>{_("update:activeTabIndex",c),C(()=>i(e.target))};return m(n,e=>{e&&setTimeout(()=>{i(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:k([t.activeTabIndex===o?"active":"not-active"]),onClick:f=>h(f,o)},I(d),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},R,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const F=$(U,[["__scopeId","data-v-c723ab1e"]]);export{F as default};
