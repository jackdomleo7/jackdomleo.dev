(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{473:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(167),r(38),r(66),r(44),r(26),r(48);function n(text,e){var t=function(e){if(e.length<=0)return"";if(1===e.length)return e[0];var t=e.splice(-1)[0];return"".concat(e.join(", ")," and ").concat(t)}(e);return""===t?text:text=text.map((function(e){return e.text=e.text.replace("#{AFFILIATE_PROVIDERS}",t),e}))}},481:function(e,t,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("3a4670bc",content,!0,{sourceMap:!1})},496:function(e,t,r){"use strict";r(481)},497:function(e,t,r){var n=r(36)(!1);n.push([e.i,".header[data-v-63404e13]{display:flex;flex-direction:column}.header__title[data-v-63404e13]{margin-top:0;margin-bottom:1rem;font-size:var(--text-title)}@media(min-width:48em){.header__title[data-v-63404e13]{margin-bottom:2rem}}.header__intro[data-v-63404e13]{font-size:var(--text-body);max-width:70rem;margin-left:auto;margin-right:auto}.header__intro[data-v-63404e13]  p:first-of-type{margin-top:0}.header__intro[data-v-63404e13]  p:last-of-type{margin-bottom:0}.header__legal[data-v-63404e13]{max-width:70rem;font-style:italic;font-size:var(--text-small)}.header__legal[data-v-63404e13],.uses[data-v-63404e13]{margin-left:auto;margin-right:auto}.uses[data-v-63404e13]{max-width:50rem}.uses__content[data-v-63404e13]{display:flex;flex-direction:column;align-items:center;grid-gap:2rem;gap:2rem;font-size:var(--text-large)}.uses__content[data-v-63404e13]  li{margin-top:.5rem;margin-bottom:.5rem}.uses__content[data-v-63404e13]  li:first-of-type{margin-top:0}.uses__content[data-v-63404e13]  li:last-of-type{margin-bottom:0}",""]),e.exports=n},537:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(46),r(0)),l=r(473),d=o.a.extend({name:"About",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$prismic,n=e.error,t.next=3,r.api.getSingle("uses");case 3:return o=t.sent,t.next=6,r.api.getSingle("affiliate_legal");case 6:if(d=t.sent,!o){t.next=13;break}return o.data.uses=r.asText(o.data.uses),d.data.legal_text=Object(l.a)(d.data.legal_text,["Amazon"]),t.abrupt("return",{uses:o,affiliateLegal:d});case 13:n({statusCode:404,message:"Page not found"});case 14:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Uses"}}}),c=(r(496),r(16)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"uses"},[r("header",{staticClass:"container container--header header"},[r("h1",{staticClass:"header__title"},[e._v("Uses")]),e._v(" "),r("prismic-rich-text",{staticClass:"header__intro",attrs:{field:e.uses.data.intro}}),e._v(" "),r("prismic-rich-text",{staticClass:"header__legal",attrs:{field:e.affiliateLegal.data.legal_text}})],1),e._v(" "),r("div",{staticClass:"container uses__content"},[r("div",{domProps:{innerHTML:e._s(e.$md.render(e.uses.data.uses))}}),e._v(" "),r("nuxt-img",{attrs:{provider:"prismic",src:e.uses.data.office_setup.url,alt:e.uses.data.office_setup.alt,width:"756",height:"397",loading:"lazy"}})],1)])}),[],!1,null,"63404e13",null);t.default=component.exports}}]);