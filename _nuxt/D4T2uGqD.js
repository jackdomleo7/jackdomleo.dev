import{_ as b}from"./BqLBzAA_.js";import{f as L,i as H,k as T,u as C,c as a,a as e,l as N,t as i,m as n,F as Y,s as D,j as V,o,b as j,n as d,_ as B}from"./Dnyl59BH.js";import{p as y}from"./Dazs5LwV.js";const E={class:"work"},F={class:"container"},R={class:"work__title"},z=["innerHTML"],A={class:"container"},S={class:"work__places"},q={class:"place__details"},I={class:"place__name"},O={class:"place__duration"},P={class:"place__roles"},W={class:"role__name"},G={class:"role__dates"},J=["innerHTML"],K=L({__name:"work",async setup(Q){let _,h;const $=([_,h]=H(()=>V(u=>u.$contentful.getEntries({content_type:"work",limit:1,include:10}),"$jbkNDqv9OF")),_=await _,h(),_),r=T($.data.value.items[0]);return C({title:"Work"}),(u,U)=>{const g=b;return o(),a("div",E,[e("header",F,[e("h1",R,i(n(r).fields.title),1),n(r).fields.description?(o(),a("div",{key:0,class:"work__description",innerHTML:n(y)(n(r).fields.description)},null,8,z)):N("",!0)]),e("div",A,[e("ul",S,[(o(!0),a(Y,null,D(n(r).fields.workPlaces,(t,M)=>{var k,p,w;return o(),a("li",{key:t==null?void 0:t.fields.name,class:"place"},[e("div",q,[j(g,{class:"place__logo",provider:"contentful",src:(p=(k=t==null?void 0:t.fields.logo)==null?void 0:k.fields.file)==null?void 0:p.url,alt:(w=t==null?void 0:t.fields.logo)==null?void 0:w.fields.description,width:"80",height:"80",sizes:"largemobile:40px standardtablet:80px",preload:M===0,loading:M!==0?"lazy":void 0},null,8,["src","alt","preload","loading"]),e("h2",I,i(t==null?void 0:t.fields.name),1),e("p",O,i((()=>{const s=t.fields.workRoles,c=n(d)(s.at(-1).fields.startDate),l=s.at(0).fields.endDate?n(d)(new Date(s.at(0).fields.endDate)):n(d)(),f=Math.floor(l.diff(c,"months")/12),v=f>1?"years":"year",m=l.diff(c,"months")%12,x=m>1?"months":"month";return`${f>0?`${f} ${v}`:""} ${m>0?`${m} ${x}`:""} | ${c.format("MMMM YYYY")} - ${s.at(0).fields.endDate?l.format("MMMM YYYY"):"present"}`})()),1)]),e("ul",P,[(o(!0),a(Y,null,D(t.fields.workRoles,s=>(o(),a("li",{key:s==null?void 0:s.fields.title,class:"role"},[e("h3",W,i(s==null?void 0:s.fields.title),1),e("p",G,i(n(d)(new Date(s==null?void 0:s.fields.startDate)).format("MMMM YYYY"))+" - "+i(s!=null&&s.fields.endDate?n(d)(new Date(s==null?void 0:s.fields.endDate)).format("MMMM YYYY"):"present"),1),e("div",{class:"rich-text role__description",innerHTML:n(y)(s==null?void 0:s.fields.description)},null,8,J)]))),128))])])}),128))])])])}}}),ts=B(K,[["__scopeId","data-v-5d7ea8d7"]]);export{ts as default};
