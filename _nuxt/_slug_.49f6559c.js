import{_ as j}from"./nuxt-picture.f8fedd66.js";import{r as H,g as U,h as $,i as V,j as G,k as z,u as Q,s as J,o as h,c as b,a as E,t as v,l as o,b as g,F as W,v as q,m as X,x as F,n as w,y as Z,q as P,p as x,f as ee,_ as te}from"./entry.e49909a5.js";import{p as Y}from"./parseRichText.8a40c875.js";var k={};(function(p){Object.defineProperty(p,"__esModule",{value:!0});var _=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof H<"u"?H:typeof self<"u"?self:{};function L(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function B(r,t){return t={exports:{}},r(t,t.exports),t.exports}var e=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(n){n.DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))});L(e),e.BLOCKS;var f=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(n){n.HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))});L(f),f.INLINES;var m=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0});var n;(function(c){c.BOLD="bold",c.ITALIC="italic",c.UNDERLINE="underline",c.CODE="code",c.SUPERSCRIPT="superscript",c.SUBSCRIPT="subscript"})(n||(n={})),t.default=n});L(m);var i=B(function(r,t){var n=_&&_.__spreadArray||function(s,D,a){if(a||arguments.length===2)for(var l=0,d=D.length,O;l<d;l++)(O||!(l in D))&&(O||(O=Array.prototype.slice.call(D,0,l)),O[l]=D[l]);return s.concat(O||Array.prototype.slice.call(D))},c=_&&_.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},u;Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=c(m);t.TOP_LEVEL_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE,e.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[e.BLOCKS.TABLE,e.BLOCKS.TABLE_ROW,e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[e.BLOCKS.HR,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=(u={},u[e.BLOCKS.OL_LIST]=[e.BLOCKS.LIST_ITEM],u[e.BLOCKS.UL_LIST]=[e.BLOCKS.LIST_ITEM],u[e.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,u[e.BLOCKS.QUOTE]=[e.BLOCKS.PARAGRAPH],u[e.BLOCKS.TABLE]=[e.BLOCKS.TABLE_ROW],u[e.BLOCKS.TABLE_ROW]=[e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],u[e.BLOCKS.TABLE_CELL]=[e.BLOCKS.PARAGRAPH],u[e.BLOCKS.TABLE_HEADER_CELL]=[e.BLOCKS.PARAGRAPH],u),t.HEADINGS=[e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([e.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[e.BLOCKS.DOCUMENT,e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.LIST_ITEM,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,f.INLINES.HYPERLINK,f.INLINES.ENTRY_HYPERLINK,f.INLINES.ASSET_HYPERLINK,f.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[S.default.BOLD,S.default.CODE,S.default.ITALIC,S.default.UNDERLINE]});L(i),i.V1_MARKS,i.V1_NODE_TYPES,i.TEXT_CONTAINERS,i.HEADINGS,i.CONTAINERS,i.VOID_BLOCKS,i.TABLE_BLOCKS,i.LIST_ITEM_BLOCKS,i.TOP_LEVEL_BLOCKS;var M=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0})});L(M);var K=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0})});L(K);var A=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:e.BLOCKS.DOCUMENT,data:{},content:[{nodeType:e.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n});L(A);var C=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;function n(s,D){for(var a=0,l=Object.keys(s);a<l.length;a++){var d=l[a];if(D===s[d])return!0}return!1}function c(s){return n(f.INLINES,s.nodeType)}t.isInline=c;function u(s){return n(e.BLOCKS,s.nodeType)}t.isBlock=u;function S(s){return s.nodeType==="text"}t.isText=S});L(C),C.isText,C.isBlock,C.isInline;var T=B(function(r,t){var n=_&&_.__createBinding||(Object.create?function(a,l,d,O){O===void 0&&(O=d);var N=Object.getOwnPropertyDescriptor(l,d);(!N||("get"in N?!l.__esModule:N.writable||N.configurable))&&(N={enumerable:!0,get:function(){return l[d]}}),Object.defineProperty(a,O,N)}:function(a,l,d,O){O===void 0&&(O=d),a[O]=l[d]}),c=_&&_.__setModuleDefault||(Object.create?function(a,l){Object.defineProperty(a,"default",{enumerable:!0,value:l})}:function(a,l){a.default=l}),u=_&&_.__exportStar||function(a,l){for(var d in a)d!=="default"&&!Object.prototype.hasOwnProperty.call(l,d)&&n(l,a,d)},S=_&&_.__importStar||function(a){if(a&&a.__esModule)return a;var l={};if(a!=null)for(var d in a)d!=="default"&&Object.prototype.hasOwnProperty.call(a,d)&&n(l,a,d);return c(l,a),l},s=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return e.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return f.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return s(m).default}}),u(i,t),u(M,t),u(K,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return s(A).default}});var D=S(C);t.helpers=D});L(T);var I=T.helpers;T.EMPTY_DOCUMENT,T.MARKS,T.INLINES,T.BLOCKS;function y(r,t){return t===void 0&&(t=" "),!r||!r.content?"":r.content.reduce(function(n,c,u){var S;if(I.isText(c))S=c.value;else if((I.isBlock(c)||I.isInline(c))&&(S=y(c,t),!S.length))return n;var s=r.content[u+1],D=s&&I.isBlock(s),a=D?t:"";return n+S+a},"")}p.documentToPlainTextString=y})(k);const R=p=>(x("data-v-68b8dc1a"),p=p(),ee(),p),ne={class:"article container container--thinner"},ie={class:"article__title"},ae={class:"article__tags"},le={class:"article__date"},re=R(()=>E("strong",null,"Posted: ",-1)),oe=["datetime","title"],_e=["innerHTML"],se=["innerHTML"],ce={class:"article__share"},ue=["href"],de=R(()=>E("span",{class:"sr-only"},"Share on Twitter",-1)),Ee=["href"],Le=R(()=>E("span",{class:"sr-only"},"Share on LinkedIn",-1)),fe=R(()=>E("span",{class:"sr-only"},"Copy link",-1)),Se=U({__name:"[slug]",async setup(p){let _,L;const B=$(),e=V(),f=F(),m=([_,L]=G(()=>w(`article-${e.params.slug}`,T=>T.$contentful.getEntries({content_type:"article",limit:1,"fields.slug":e.params.slug}))),_=await _,L(),_),i=z(m.data.value.items[0]),K=([_,L]=G(()=>w(T=>T.$contentful.getEntries({content_type:"blogDetails",limit:1,select:["fields.articleDisclaimer"]}),"$rpzcfBTaqR")),_=await _,L(),_).data.value.items[0],A=k.documentToPlainTextString(i.fields.body);function C(){navigator.clipboard.writeText(`${f.public.BASE_URL}${e.path}`),window.alert("Link copied")}return Q({title:`${i.fields.title} | Blog`,meta:[{name:"author",content:"Jack Domleo"},{name:"description",content:i.fields.description},{property:"og:description",content:i.fields.description},{property:"og:image",content:J(i.fields.image.fields.file.url)},{property:"og:image:type",content:i.fields.image.fields.file.contentType},{property:"og:type",content:"article"},{property:"article:author",content:"Jack Domleo"},{property:"article:published_time",content:new Date(i.fields.publishDate).toString()},{property:"article:tags",content:i.fields.tags.join(", ")},{name:"twitter:title",content:`${i.fields.title} | Blog | Jack Domleo`},{name:"twitter:description",content:i.fields.description},{name:"twitter:image",content:i.fields.image.fields.file.url}],link:[{rel:"canonical",href:`${f.public.BASE_URL}/blog/${e.params.year}/${e.params.slug}`}],script:[...A.includes("CodePen: ")?[{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}]:[],...A.includes("Twitter: ")||A.includes("Tweet: ")?[{async:!0,src:"https://platform.twitter.com/widgets.js"}]:[]]}),(T,I)=>{const y=j,r=Z;return h(),b("article",ne,[E("header",null,[E("h1",ie,v(o(i).fields.title),1)]),g(y,{class:"article__img",provider:"contentful",src:o(i).fields.image.fields.file.url,alt:o(i).fields.image.fields.description,width:"768",height:"403",sizes:"4kdesktop:768px",preload:""},null,8,["src","alt"]),E("ul",ae,[(h(!0),b(W,null,q(o(i).fields.tags,t=>(h(),b("li",{key:t,class:"tag"},v(t),1))),128))]),E("p",le,[re,E("time",{datetime:o(P)(new Date(o(i).fields.publishDate)).format("YYYY-MM-DD"),title:o(P)(new Date(o(i).fields.publishDate)).format("dddd D MMMM YYYY")},v(o(P)(new Date(o(i).fields.publishDate)).format("MMMM D, YYYY")),9,oe)]),E("div",{class:"rich-text article__content",innerHTML:o(Y)(o(i).fields.body,{$img:o(B)})},null,8,_e),o(K).fields.articleDisclaimer?(h(),b("div",{key:0,class:"article__disclaimer",innerHTML:o(Y)(o(K).fields.articleDisclaimer)},null,8,se)):X("",!0),E("ul",ce,[E("li",null,[E("a",{href:`https://twitter.com/intent/tweet?text=${o(i).fields.title} by @jackdomleo7&url=${o(f).public.BASE_URL}${o(e).path}`,rel:"nofollow noopener",target:"_blank","data-cooltipz-dir":"top","aria-label":"Share on Twitter"},[g(r,{name:"twitter"}),de],8,ue)]),E("li",null,[E("a",{href:`https://www.linkedin.com/shareArticle?mini=true&url=${o(f).public.BASE_URL}${o(e).path}&title=${o(i).fields.title}&summary=${o(i).fields.title} by Jack Domleo&source=${o(f).public.BASE_URL}${o(e).path}`,rel:"nofollow noopener",target:"_blank","data-cooltipz-dir":"top","aria-label":"Share on LinkedIn"},[g(r,{name:"linkedin"}),Le],8,Ee)]),E("li",null,[E("button",{"data-cooltipz-dir":"top","aria-label":"Copy link",onClick:I[0]||(I[0]=t=>C())},[g(r,{name:"link"}),fe])])])])}}});const De=te(Se,[["__scopeId","data-v-68b8dc1a"]]);export{De as default};
