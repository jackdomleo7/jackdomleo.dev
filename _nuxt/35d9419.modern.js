(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,e,r){"use strict";function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,"a",(function(){return n}))},324:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(323);function o(t){Object(n.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},334:function(t,e,r){"use strict";r.d(e,"a",(function(){return w})),r.d(e,"b",(function(){return x}));var n=r(324),o=r(323);function c(t,e){Object(o.a)(2,arguments);var r=Object(n.a)(t),c=Object(n.a)(e),m=r.getFullYear()-c.getFullYear(),d=r.getMonth()-c.getMonth();return 12*m+d}function m(t,e){Object(o.a)(2,arguments);var r=Object(n.a)(t),c=Object(n.a)(e),m=r.getTime()-c.getTime();return m<0?-1:m>0?1:m}function d(t){Object(o.a)(1,arguments);var e=Object(n.a)(t);return e.setHours(23,59,59,999),e}function l(t){Object(o.a)(1,arguments);var e=Object(n.a)(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function _(t){Object(o.a)(1,arguments);var e=Object(n.a)(t);return d(e).getTime()===l(e).getTime()}function h(t,e){Object(o.a)(2,arguments);var r,d=Object(n.a)(t),l=Object(n.a)(e),h=m(d,l),f=Math.abs(c(d,l));if(f<1)r=0;else{1===d.getMonth()&&d.getDate()>27&&d.setDate(30),d.setMonth(d.getMonth()-h*f);var v=m(d,l)===-h;_(Object(n.a)(t))&&1===f&&1===m(t,l)&&(v=!1),r=h*(f-Number(v))}return 0===r?0:r}var f={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function v(t){return t?f[t]:f.trunc}var w="#{NO_OF_YEARS_EXPERIENCE}";function x(){var t=new Date("2018-09-03"),e=Math.abs(function(t,e,r){Object(o.a)(2,arguments);var n=h(t,e)/3;return v(null==r?void 0:r.roundingMethod)(n)}(t,new Date)),r=Math.floor(e/4),n=e%4;return 1===n?"just over ".concat(r):2===n?"".concat(r," and a half"):3===n?"nearly ".concat(r+1):"".concat(r)}},338:function(t,e,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("446d11a0",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";r(338)},348:function(t,e,r){var n=r(20)(!1);n.push([t.i,".header__title[data-v-5eb0c5aa]{margin-top:0;margin-bottom:1rem;font-size:var(--text-title)}@media(min-width:62.5em){.header__title[data-v-5eb0c5aa]{margin-bottom:2rem}}.header__intro[data-v-5eb0c5aa]{font-size:var(--text-body)}.about[data-v-5eb0c5aa]{margin-top:2rem;display:flex;flex-direction:column;grid-gap:4rem;gap:4rem}@media(min-width:62.5em){.about[data-v-5eb0c5aa]{margin-top:4rem}}.about__section[data-v-5eb0c5aa]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:1rem;gap:1rem}@media(min-width:62.5em){.about__section[data-v-5eb0c5aa]{flex-direction:row;grid-gap:4rem;gap:4rem}.about__section *[data-v-5eb0c5aa]{flex-basis:50%}}@media(min-width:62.5em){.about__section--reverse[data-v-5eb0c5aa]{flex-direction:row-reverse}}.about__images[data-v-5eb0c5aa]{display:grid;align-items:center;justify-items:center;place-items:center}.about__images img[data-v-5eb0c5aa]{max-width:90%;border-radius:2.5rem;filter:drop-shadow(0 8px 12px rgba(0,0,0,.25))}@media(min-width:62.5em){.about__images img[data-v-5eb0c5aa]{max-width:100%}}@media(min-width:62.5em)and (max-width:85.375em){.about__images--2[data-v-5eb0c5aa]{margin-left:6rem;margin-right:6rem}}.about__images--2 img[data-v-5eb0c5aa]{position:relative;max-width:70%}@media(min-width:62.5em){.about__images--2 img[data-v-5eb0c5aa]{max-width:100%}}.about__images--2 img[data-v-5eb0c5aa]:first-child{top:2rem;left:-3rem;z-index:2}@media(min-width:62.5em){.about__images--2 img[data-v-5eb0c5aa]:first-child{top:4rem;left:-6rem}}.about__images--2 img[data-v-5eb0c5aa]:nth-child(2){bottom:2rem;right:-3rem;z-index:1}@media(min-width:62.5em){.about__images--2 img[data-v-5eb0c5aa]:nth-child(2){bottom:4rem;right:-6rem}}.about__text[data-v-5eb0c5aa]{max-width:44rem}",""]),t.exports=n},369:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(18),r(31),r(0)),c=r(334),m=o.a.extend({name:"About",asyncData:t=>Object(n.a)((function*(){var{$prismic:e,error:r}=t,n=yield e.api.getSingle("about");if(n)return n.data.about_sections[0].text=n.data.about_sections[0].text.map((t=>(t.text=t.text.replace(c.a,Object(c.b)()),t))),{about:n};r({statusCode:404,message:"Page not found"})}))(),head:()=>({title:"About"}),methods:{imageDimensions:section=>section.image_1.url&&section.image_2.url?360:440}}),d=(r(347),r(11)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"container container--header header"},[r("h1",{staticClass:"header__title"},[t._v("About")]),t._v(" "),r("prismic-rich-text",{staticClass:"header__intro",attrs:{field:t.about.data.about_intro}})],1),t._v(" "),r("div",{staticClass:"container about"},t._l(t.about.data.about_sections,(function(section,e){return r("div",{key:"about_section_"+e,staticClass:"about__section",class:{"about__section--reverse":"right"===section.image_position}},[r("div",{staticClass:"about__images",class:{"about__images--2":section.image_1.url&&section.image_2.url}},[section.image_1.url?r("nuxt-img",{attrs:{provider:"prismic",src:section.image_1.url,alt:section.image_1.alt,height:t.imageDimensions(section),width:t.imageDimensions(section),loading:"lazy"}}):t._e(),t._v(" "),section.image_2.url?r("nuxt-img",{attrs:{provider:"prismic",src:section.image_2.url,alt:section.image_2.alt,height:t.imageDimensions(section),width:t.imageDimensions(section),loading:"lazy"}}):t._e()],1),t._v(" "),r("prismic-rich-text",{staticClass:"about__text",attrs:{field:section.text}})],1)})),0)])}),[],!1,null,"5eb0c5aa",null);e.default=component.exports}}]);