import{_ as U}from"./nuxt-picture.76536763.js";import{s as P,b as Y,e as $,f as V,w as H,h as z,i as Q,v as J,o as h,j as R,k as d,t as v,u as _,x as g,F as W,y as q,m as X,z as F,p as G,a as Z,q as w,A as x,B as ee,r as te}from"./entry.cbc091f9.js";import{p as k}from"./parseRichText.be9d7ff2.js";var j={};(function(C){Object.defineProperty(C,"__esModule",{value:!0});var o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof P<"u"?P:typeof self<"u"?self:{};function L(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function B(r,t){return t={exports:{}},r(t,t.exports),t.exports}var e=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(n){n.DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))});L(e),e.BLOCKS;var f=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(n){n.HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))});L(f),f.INLINES;var m=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0});var n;(function(c){c.BOLD="bold",c.ITALIC="italic",c.UNDERLINE="underline",c.CODE="code",c.SUPERSCRIPT="superscript",c.SUBSCRIPT="subscript"})(n||(n={})),t.default=n});L(m);var i=B(function(r,t){var n=o&&o.__spreadArray||function(s,D,a){if(a||arguments.length===2)for(var l=0,E=D.length,O;l<E;l++)(O||!(l in D))&&(O||(O=Array.prototype.slice.call(D,0,l)),O[l]=D[l]);return s.concat(O||Array.prototype.slice.call(D))},c=o&&o.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},u;Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=c(m);t.TOP_LEVEL_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE,e.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[e.BLOCKS.TABLE,e.BLOCKS.TABLE_ROW,e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[e.BLOCKS.HR,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=(u={},u[e.BLOCKS.OL_LIST]=[e.BLOCKS.LIST_ITEM],u[e.BLOCKS.UL_LIST]=[e.BLOCKS.LIST_ITEM],u[e.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,u[e.BLOCKS.QUOTE]=[e.BLOCKS.PARAGRAPH],u[e.BLOCKS.TABLE]=[e.BLOCKS.TABLE_ROW],u[e.BLOCKS.TABLE_ROW]=[e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],u[e.BLOCKS.TABLE_CELL]=[e.BLOCKS.PARAGRAPH],u[e.BLOCKS.TABLE_HEADER_CELL]=[e.BLOCKS.PARAGRAPH],u),t.HEADINGS=[e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([e.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[e.BLOCKS.DOCUMENT,e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.LIST_ITEM,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,f.INLINES.HYPERLINK,f.INLINES.ENTRY_HYPERLINK,f.INLINES.ASSET_HYPERLINK,f.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[S.default.BOLD,S.default.CODE,S.default.ITALIC,S.default.UNDERLINE]});L(i),i.V1_MARKS,i.V1_NODE_TYPES,i.TEXT_CONTAINERS,i.HEADINGS,i.CONTAINERS,i.VOID_BLOCKS,i.TABLE_BLOCKS,i.LIST_ITEM_BLOCKS,i.TOP_LEVEL_BLOCKS;var M=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0})});L(M);var K=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0})});L(K);var A=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:e.BLOCKS.DOCUMENT,data:{},content:[{nodeType:e.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n});L(A);var p=B(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;function n(s,D){for(var a=0,l=Object.keys(s);a<l.length;a++){var E=l[a];if(D===s[E])return!0}return!1}function c(s){return n(f.INLINES,s.nodeType)}t.isInline=c;function u(s){return n(e.BLOCKS,s.nodeType)}t.isBlock=u;function S(s){return s.nodeType==="text"}t.isText=S});L(p),p.isText,p.isBlock,p.isInline;var T=B(function(r,t){var n=o&&o.__createBinding||(Object.create?function(a,l,E,O){O===void 0&&(O=E);var N=Object.getOwnPropertyDescriptor(l,E);(!N||("get"in N?!l.__esModule:N.writable||N.configurable))&&(N={enumerable:!0,get:function(){return l[E]}}),Object.defineProperty(a,O,N)}:function(a,l,E,O){O===void 0&&(O=E),a[O]=l[E]}),c=o&&o.__setModuleDefault||(Object.create?function(a,l){Object.defineProperty(a,"default",{enumerable:!0,value:l})}:function(a,l){a.default=l}),u=o&&o.__exportStar||function(a,l){for(var E in a)E!=="default"&&!Object.prototype.hasOwnProperty.call(l,E)&&n(l,a,E)},S=o&&o.__importStar||function(a){if(a&&a.__esModule)return a;var l={};if(a!=null)for(var E in a)E!=="default"&&Object.prototype.hasOwnProperty.call(a,E)&&n(l,a,E);return c(l,a),l},s=o&&o.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return e.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return f.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return s(m).default}}),u(i,t),u(M,t),u(K,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return s(A).default}});var D=S(p);t.helpers=D});L(T);var I=T.helpers;T.EMPTY_DOCUMENT,T.MARKS,T.INLINES,T.BLOCKS;function y(r,t){return t===void 0&&(t=" "),!r||!r.content?"":r.content.reduce(function(n,c,u){var S;if(I.isText(c))S=c.value;else if((I.isBlock(c)||I.isInline(c))&&(S=y(c,t),!S.length))return n;var s=r.content[u+1],D=s&&I.isBlock(s),a=D?t:"";return n+S+a},"")}C.documentToPlainTextString=y})(j);const b=C=>(x("data-v-830acf54"),C=C(),ee(),C),ne={class:"article container container--thinner"},ie={class:"article__title"},ae={class:"article__tags"},le={class:"article__date"},re=b(()=>d("strong",null,"Posted: ",-1)),oe=["datetime"],_e=["innerHTML"],se=["innerHTML"],ce={class:"article__share"},ue=["href"],Ee=b(()=>d("span",{class:"sr-only"},"Share on Twitter",-1)),de=["href"],Le=b(()=>d("span",{class:"sr-only"},"Share on LinkedIn",-1)),fe=b(()=>d("span",{class:"sr-only"},"Copy link",-1)),Se=Y({__name:"[slug]",async setup(C){let o,L;const B=$(),e=V(),f=F(),m=([o,L]=H(()=>G(`article-${e.params.slug}`,T=>T.$contentful.getEntries({content_type:"article",limit:1,"fields.slug":e.params.slug}))),o=await o,L(),o),i=z(m.data.value.items[0]),K=([o,L]=H(()=>G(T=>T.$contentful.getEntries({content_type:"blogDetails",limit:1,select:["fields.articleDisclaimer"]}),"$rpzcfBTaqR")),o=await o,L(),o).data.value.items[0],A=j.documentToPlainTextString(i.fields.body);function p(){navigator.clipboard.writeText(`${f.public.BASE_URL}${e.path}`),window.alert("Link copied")}return Q({title:`${i.fields.title} | Blog`,meta:[{name:"author",content:"Jack Domleo"},{name:"description",content:i.fields.description},{property:"og:description",content:i.fields.description},{property:"og:image",content:J(i.fields.image.fields.file.url)},{property:"og:image:type",content:i.fields.image.fields.file.contentType},{property:"og:type",content:"article"},{property:"article:author",content:"Jack Domleo"},{property:"article:published_time",content:new Date(i.fields.publishDate).toString()},{property:"article:tags",content:i.fields.tags.join(", ")},{name:"twitter:title",content:`${i.fields.title} | Blog | Jack Domleo`},{name:"twitter:description",content:i.fields.description},{name:"twitter:image",content:i.fields.image.fields.file.url}],link:[{rel:"canonical",href:`${f.public.BASE_URL}/blog/${e.params.year}/${e.params.slug}`}],script:[...A.includes("CodePen: ")?[{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}]:[],...A.includes("Twitter: ")||A.includes("Tweet: ")?[{async:!0,src:"https://platform.twitter.com/widgets.js"}]:[]]}),(T,I)=>{const y=U,r=Z;return h(),R("article",ne,[d("header",null,[d("h1",ie,v(_(i).fields.title),1)]),g(y,{class:"article__img",provider:"contentful",src:_(i).fields.image.fields.file.url,alt:_(i).fields.image.fields.description,width:"768",height:"403",sizes:"4kdesktop:768px",preload:""},null,8,["src","alt"]),d("ul",ae,[(h(!0),R(W,null,q(_(i).fields.tags,t=>(h(),R("li",{key:t,class:"tag"},v(t),1))),128))]),d("p",le,[re,d("time",{datetime:_(w)(new Date(_(i).fields.publishDate)).format("YYYY-MM-DD")},v(_(w)(new Date(_(i).fields.publishDate)).format("MMMM D, YYYY")),9,oe)]),d("div",{class:"rich-text article__content",innerHTML:_(k)(_(i).fields.body,{$img:_(B)})},null,8,_e),_(K).fields.articleDisclaimer?(h(),R("div",{key:0,class:"article__disclaimer",innerHTML:_(k)(_(K).fields.articleDisclaimer)},null,8,se)):X("",!0),d("ul",ce,[d("li",null,[d("a",{href:`https://twitter.com/intent/tweet?text=${_(i).fields.title} by @jackdomleo7&url=${_(f).public.BASE_URL}${_(e).path}`,rel:"nofollow noopener",target:"_blank","data-cooltipz-dir":"top","aria-label":"Share on Twitter"},[g(r,{name:"twitter"}),Ee],8,ue)]),d("li",null,[d("a",{href:`https://www.linkedin.com/shareArticle?mini=true&url=${_(f).public.BASE_URL}${_(e).path}&title=${_(i).fields.title}&summary=${_(i).fields.title} by Jack Domleo&source=${_(f).public.BASE_URL}${_(e).path}`,rel:"nofollow noopener",target:"_blank","data-cooltipz-dir":"top","aria-label":"Share on LinkedIn"},[g(r,{name:"linkedin"}),Le],8,de)]),d("li",null,[d("button",{"data-cooltipz-dir":"top","aria-label":"Copy link",onClick:I[0]||(I[0]=t=>p())},[g(r,{name:"link"}),fe])])])])}}});const De=te(Se,[["__scopeId","data-v-830acf54"]]);export{De as default};
