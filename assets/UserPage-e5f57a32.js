import{_,C as d,o,c as a,a as e,Y as u,a1 as h,h as g,H as r,W as b,V as v,g as x,S as w,b as S,X as k,E as y,ac as $,t as E,v as I}from"./index-c68ba107.js";const L=[{name:"Github",icon:"https://www.freeimg.cn/i/2024/01/04/65966aa95fca4.png",tip:"去 Github 看看",url:"https://github.com/baixie-g"},{name:"BiliBili",icon:"https://www.freeimg.cn/i/2024/01/04/65966aa8ebdf1.png",tip:"(゜-゜)つロ 干杯 ~",url:"https://space.bilibili.com/351224620"},{name:"QQ",icon:"https://www.freeimg.cn/i/2024/01/04/65966aa946c21.png",tip:" Q我一下 ~",url:"https://res.abeim.cn/api/qq/?qq=2039279630"},{name:"Email",icon:"https://www.freeimg.cn/i/2024/01/04/65966aa92cd75.png",tip:"来封 Email ~",url:"mailto:2039279630@qq.com?subject=The%20subject%20of%20the%20mail&body=The%20content%20of%20the%20mail"}];const V={class:"social"},q={class:"link"},B=["href","onMouseenter"],T=["src"],P={class:"tip"},M={__name:"SocialLinks",setup(i){const s=d("通过这里联系我吧");return(p,n)=>(o(),a("div",V,[e("div",q,[(o(!0),a(u,null,h(g(L),t=>(o(),a("a",{key:t.name,href:t.url,target:"_blank",onMouseenter:c=>s.value=t.tip,onMouseleave:n[0]||(n[0]=c=>s.value="通过这里联系我吧")},[e("img",{class:"icon",src:t.icon,height:"24",alt:"?"},null,8,T)],40,B))),128))]),e("span",P,r(s.value),1)]))}},O=_(M,[["__scopeId","data-v-40856cda"]]);const U=i=>(E("data-v-bf13641a"),i=i(),I(),i),W={class:"message"},j={class:"logo"},C=["src"],G={class:k({name:!0,"text-hidden":!0,long:!0})},H=["href"],N=U(()=>e("span",{class:"bg"},"郭灵杰",-1)),Q=[N],z={class:"content"},D={class:"text"},F={__name:"UserPage",setup(i){const s=b(),p=d("https://baixie-g.github.io"),n="https://www.freeimg.cn/i/2024/01/07/659a58fd0d420.jpg";v(()=>"https://baixie-g.github.io".split("."));const t=x({logoName:"G0J缝合怪",hello:"Hello World !",text:"这是一个基于 | Vue3 + Vite4 + TypeScript +Sass + Pinia + Element-plus + Icon-park 的网站， | 欢迎您的光临".split("|")}),c=()=>{s.getInnerWidth>=990?s.boxOpenState=!s.boxOpenState:y({message:"当前页面宽度不足以开启盒子",grouping:!0,icon:$(Error,{theme:"filled",fill:"#efefef"})})};return w(()=>s.boxOpenState,l=>{l?(t.hello="Oops !",t.text="哎呀，这都被你发现了（ 再点击一次可关闭 ）"):(t.hello="Hello World !",t.text="这是一个基于 | Vue3 + Vite4 + TypeScript +Sass + Pinia + Element-plus + Icon-park 的网站， | 欢迎您的光临")}),(l,J)=>(o(),a("div",W,[e("div",j,[e("img",{class:"logo-img",src:g(n),alt:"logo"},null,8,C),e("div",G,[e("a",{href:p.value},Q,8,H)])]),e("div",{class:"description cards",onClick:c},[e("div",z,[e("div",D,[e("p",null,r(t.hello),1),(o(!0),a(u,null,h(t.text,(m,f)=>(o(),a("p",{key:f},r(m),1))),128))])])]),S(O)]))}},X=_(F,[["__scopeId","data-v-bf13641a"]]);export{X as default};
