import{a7 as G,a8 as K,l as P,W as O,A as g,J as S,g as J,L as R,o as h,c as k,a as _,t as A,D as V,H as U,b as j,B as D,C as M,F as Q,v as X,m as Y,d as Z,y as ee,p as te,f as oe,_ as le}from"./CIHLGy2V.js";function ae(t){return G()?(K(t),!0):!1}function W(t){return typeof t=="function"?t():P(t)}const N=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ne=Object.prototype.toString,ie=t=>ne.call(t)==="[object Object]",L=()=>{},se=ue();function ue(){var t,r;return N&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((r=window==null?void 0:window.navigator)==null?void 0:r.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function C(t){var r;const s=W(t);return(r=s==null?void 0:s.$el)!=null?r:s}const T=N?window:void 0;function B(...t){let r,s,o,f;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,o,f]=t,r=T):[r,s,o,f]=t,!r)return L;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const d=[],p=()=>{d.forEach(x=>x()),d.length=0},e=(x,y,i,c)=>(x.addEventListener(y,i,c),()=>x.removeEventListener(y,i,c)),v=O(()=>[C(r),W(f)],([x,y])=>{if(p(),!x)return;const i=ie(y)?{...y}:y;d.push(...s.flatMap(c=>o.map(m=>e(x,c,m,i))))},{immediate:!0,flush:"post"}),w=()=>{v(),p()};return ae(w),w}let F=!1;function re(t,r,s={}){const{window:o=T,ignore:f=[],capture:d=!0,detectIframe:p=!1}=s;if(!o)return L;se&&!F&&(F=!0,Array.from(o.document.body.children).forEach(i=>i.addEventListener("click",L)),o.document.documentElement.addEventListener("click",L));let e=!0;const v=i=>f.some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(m=>m===i.target||i.composedPath().includes(m));{const m=C(c);return m&&(i.target===m||i.composedPath().includes(m))}}),x=[B(o,"click",i=>{const c=C(t);if(!(!c||c===i.target||i.composedPath().includes(c))){if(i.detail===0&&(e=!v(i)),!e){e=!0;return}r(i)}},{passive:!0,capture:d}),B(o,"pointerdown",i=>{const c=C(t);e=!v(i)&&!!(c&&!i.composedPath().includes(c))},{passive:!0}),p&&B(o,"blur",i=>{setTimeout(()=>{var c;const m=C(t);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&r(i)},0)})].filter(Boolean);return()=>x.forEach(i=>i())}function ce(t,r={}){const{initialValue:s=!1,focusVisible:o=!1}=r,f=g(!1),d=S(()=>C(t));B(d,"focus",e=>{var v,w;(!o||(w=(v=e.target).matches)!=null&&w.call(v,":focus-visible"))&&(f.value=!0)}),B(d,"blur",()=>f.value=!1);const p=S({get:()=>f.value,set(e){var v,w;!e&&f.value?(v=d.value)==null||v.blur():e&&!f.value&&((w=d.value)==null||w.focus())}});return O(d,()=>{p.value=s},{immediate:!0,flush:"post"}),{focused:p}}function de(t,r){let s=-1;r=r.toLowerCase().trim(),t=t.toLowerCase();for(let o=0;o<r.length;o++)if(!~(s=t.indexOf(r[o],s+1)))return!1;return!0}const pe=t=>(te("data-v-5a0dbf31"),t=t(),oe(),t),fe=["for"],ve={class:"combobox__wrapper"},me=["aria-expanded","aria-owns"],be=["id","value","placeholder","aria-activedescendant"],we=pe(()=>_("span",{class:"sr-only"},"Clear",-1)),xe=["id","aria-multiselectable"],ye=["id","aria-selected","data-value","onClick"],ge={key:0,class:"combobox__tickbox"},he=J({__name:"ComboboxInput",props:{id:{type:String,required:!0,validator:t=>!/\s/g.test(t)},label:{type:String,required:!0},options:{type:Array,required:!0},multiselectable:{type:Boolean,default:!1},value:{type:[Array,null],default:null}},emits:["selectedOptions","focus"],setup(t,{emit:r}){var $;const s=r,o=t,f=g(!1),d=g(!1),p=g(0),e=g(""),v=g(($=e.value.split(",").at(-1))==null?void 0:$.trim()),w=g(null);re(w,()=>c()),O(()=>o.value,()=>{x()}),O(()=>e.value,()=>{var a;v.value=(a=e.value.split(",").at(-1))==null?void 0:a.trim()}),R(()=>{x()});function x(){o.value&&o.value.length>0?(e.value=o.options.filter(a=>o.value.includes(a)).map(a=>a.text).join(", "),o.multiselectable||(e.value=e.value.split(",")[0].trim(),p.value=o.options.indexOf(o.options.find(a=>a.text===e.value)))):e.value="",s("selectedOptions",e.value.split(",").map(a=>a.trim()).filter(Boolean))}function y(){e.value="",s("selectedOptions",[])}function i(){if(f.value){f.value=!1,ce(document.getElementById(o.id),{initialValue:!0});return}c()}function c(){d.value=!1,p.value=0,document.getElementById(`${o.id}-listbox`).scrollTop=0;const a=e.value.split(",").map(u=>u.trim()),n=[...o.options.map(u=>u.text.toLowerCase()),...o.options.map(u=>u.value.toLowerCase())];for(const u of a)n.includes(u.toLowerCase())?e.value=e.value.replace(u,o.options.find(l=>l.text.toLowerCase()===u.toLowerCase()||l.value.toLowerCase()===u.toLowerCase()).text):e.value=e.value.replace(u,"");e.value=e.value.split(",").map(u=>u.trim()).filter(Boolean).join(", "),s("selectedOptions",e.value.split(",").map(u=>u.trim()).filter(Boolean))}function m(a){e.value=a.target.value;const n=e.value.split(",").map(l=>l.trim().toLowerCase()),u=[...o.options.map(l=>l.text.toLowerCase()),...o.options.map(l=>l.value.toLowerCase())];for(const l of n)u.includes(l)?(e.value=e.value.replace(l,o.options.find(b=>b.text.toLowerCase()===l||b.value.toLowerCase()===l).text),s("selectedOptions",e.value.split(",").map(b=>b.trim()).filter(Boolean))):s("selectedOptions",e.value.toLowerCase().replace(l,"").split(",").map(b=>b.trim()).filter(Boolean))}function q(a){const n=o.options.length-1,u=()=>{const l=document.getElementById(`${o.id}-listbox`),b=document.getElementById(`${o.id}-option-${p.value}`);l.scrollTop=b.offsetTop-l.clientHeight/2+b.clientHeight/2};switch(d.value||(d.value=!0),a.key){case"ArrowDown":a.preventDefault(),p.value!==n&&(p.value++,u());break;case"ArrowUp":a.preventDefault(),p.value!==0&&(p.value--,u());break;case"Enter":a.preventDefault(),E(o.options[p.value])}}function E(a){p.value=o.options.indexOf(a),o.multiselectable?I(a)?(e.value=e.value.replace(a.text,"").split(",").map(n=>n.trim()).filter(Boolean).join(", "),e.value.split(",").map(n=>n.trim()).filter(Boolean).length>0&&(e.value+=", ")):e.value=[...e.value.split(","),a.text].map(n=>n.trim()).filter(Boolean).join(", ")+", ":(d.value=!1,e.value=[...e.value.split(","),a.text].map(n=>n.trim()).join(", ")),s("selectedOptions",e.value.split(",").map(n=>n.trim()).filter(Boolean))}function I(a){return e.value.split(",").map(n=>n.trim()).includes(a.text)}function z(a){return o.options[p.value]===a}return(a,n)=>{const u=ee;return h(),k("div",{ref_key:"combobox",ref:w,class:"combobox"},[_("label",{for:t.id,class:"sr-only"},A(t.label),9,fe),_("div",ve,[_("div",{class:V(["combobox__header",{"combobox__header--open":d.value}]),role:"combobox","aria-haspopup":"listbox","aria-expanded":`${d.value}`,"aria-owns":`${t.id}-listbox`},[_("input",{id:t.id,value:e.value,"aria-autocomplete":"list",autocomplete:"off",type:"text",placeholder:t.label,"aria-activedescendant":`${t.id}-option-${p.value}`,onClick:n[0]||(n[0]=l=>!!e.value&&!!e.value.split(",").map(b=>b.trim()).at(-1)&&(e.value+=", ")),onFocus:n[1]||(n[1]=l=>{d.value=!0,s("focus")}),onBlur:i,onInput:n[2]||(n[2]=l=>m(l)),onKeydown:n[3]||(n[3]=l=>q(l))},null,40,be),e.value?(h(),k("button",{key:1,class:"combobox__header-icon combobox__cross",onClick:n[4]||(n[4]=l=>y())},[j(u,{name:"cross"}),we])):(h(),U(u,{key:0,class:"combobox__header-icon combobox__chevron",name:"chevron_down"}))],10,me),D(_("div",{id:`${t.id}-listbox`,class:"combobox__menu",role:"listbox","aria-multiselectable":`${t.multiselectable}`},[(h(!0),k(Q,null,X(t.options,(l,b)=>D((h(),k("div",{id:`${t.id}-option-${b}`,key:l.value,class:V(["combobox__option",{"combobox__option--selected":I(l),"combobox__option--current":z(l)}]),role:"option","aria-selected":`${I(l)}`,"data-value":l.value,onClick:H=>E(l),onMousedown:n[5]||(n[5]=H=>f.value=!0)},[t.multiselectable?(h(),k("div",ge,[j(u,{name:"tick"})])):Y("",!0),Z(" "+A(l.text),1)],42,ye)),[[M,P(de)(l.text,v.value||"")]])),128))],8,xe),[[M,d.value]])])],512)}}}),Ce=le(he,[["__scopeId","data-v-5a0dbf31"]]);export{Ce as default};
