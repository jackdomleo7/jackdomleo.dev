(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{111:function(t,e,r){"use strict";var o=r(0).a.extend({name:"Btn",props:{href:{type:String,default:void 0},square:{type:Boolean,default:!1},type:{type:String,default:"button",validator:t=>["button","submit","reset"].includes(t)}}}),n=(r(270),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.href?t.href.startsWith("https://")||t.href.startsWith("#")?r("a",{staticClass:"btn",class:{"btn--square":t.square},attrs:{href:t.href,target:"_blank"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2):r("nuxt-link",{staticClass:"btn",class:{"btn--square":t.square},attrs:{to:t.href},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2):r("button",{staticClass:"btn",class:{"btn--square":t.square},attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"82303d48",null);e.a=component.exports},149:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("42f45677",content,!0,{sourceMap:!1})},150:function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("1a619504",content,!0,{sourceMap:!1})},151:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("070b7e86",content,!0,{sourceMap:!1})},152:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("0d396132",content,!0,{sourceMap:!1})},154:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("0f264ea5",content,!0,{sourceMap:!1})},155:function(t,e,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5ea9a5f0",content,!0,{sourceMap:!1})},185:function(t,e,r){"use strict";var o=r(0),n=o.a.extend({name:"ThemeSwitcher",props:{id:{type:String,required:!0}}}),l=(r(264),r(11)),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",[r("legend",[t._v("Switch theme")]),t._v(" "),r("div",{staticClass:"theme-options"},[r("div",{staticClass:"theme-option"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:t.id+"-theme-system",type:"radio",name:t.id+"-theme",value:"system"},domProps:{checked:t._q(t.$colorMode.preference,"system")},on:{change:function(e){return t.$set(t.$colorMode,"preference","system")}}}),t._v(" "),r("svg-icon",{attrs:{name:"monitor"}})],1),t._v(" "),r("label",{attrs:{for:t.id+"-theme-system"}},[t._v("System")])]),t._v(" "),r("div",{staticClass:"theme-option"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:t.id+"-theme-light",type:"radio",name:t.id+"-theme",value:"light"},domProps:{checked:t._q(t.$colorMode.preference,"light")},on:{change:function(e){return t.$set(t.$colorMode,"preference","light")}}}),t._v(" "),r("svg-icon",{attrs:{name:"sun"}})],1),t._v(" "),r("label",{attrs:{for:t.id+"-theme-light"}},[t._v("Light")])]),t._v(" "),r("div",{staticClass:"theme-option"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$colorMode.preference,expression:"$colorMode.preference"}],attrs:{id:t.id+"-theme-dark",type:"radio",name:t.id+"-theme",value:"dark"},domProps:{checked:t._q(t.$colorMode.preference,"dark")},on:{change:function(e){return t.$set(t.$colorMode,"preference","dark")}}}),t._v(" "),r("svg-icon",{attrs:{name:"moon"}})],1),t._v(" "),r("label",{attrs:{for:t.id+"-theme-dark"}},[t._v("Dark")])])])])}),[],!1,null,"49392bb8",null).exports,d=o.a.extend({name:"Navigation",components:{ThemeSwitcher:c},data:()=>({isMobile:!1,isTouchscreen:!1,showMobileNav:!1,navItems:[{text:"Home",url:"/",icon:"home"},{text:"About",url:"/about",icon:"person"},{text:"Projects",url:"/projects",icon:"code"},{text:"Blog",url:"/blog",icon:"blog"},{text:"More",url:null,submenu:[]}]}),watch:{$route(){this.showMobileNav=!1}},mounted(){this.setResponsiveness(),window.addEventListener("resize",this.setResponsiveness)},destroyed(){window.removeEventListener("resize",this.setResponsiveness)},methods:{setResponsiveness(){var t=window.getComputedStyle(document.querySelector("nav.nav")).getPropertyValue("--nav-break");this.isMobile=!window.matchMedia("(min-width: ".concat(t,")")).matches,this.isTouchscreen=!window.matchMedia("(hover: hover)").matches}}}),m=(r(266),Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav"},[o("div",{staticClass:"nav__wrapper"},[o("nuxt-link",{staticClass:"nav__name",attrs:{to:"/"}},[t._v("\n      Jack Domleo\n      "),o("span",{staticClass:"sr-only"},[t._v(" - Home")])]),t._v(" "),o("nuxt-img",{staticClass:"nav__logo",attrs:{src:r(82),alt:""}}),t._v(" "),o("div",{staticClass:"nav__primary"},[o("ul",{staticClass:"nav__primary-list"},t._l(t.navItems,(function(e,r){return o("li",{key:e.text,staticClass:"nav__item",attrs:{hidden:t.isMobile&&r===t.navItems.length-1||!t.isMobile&&0===r}},[e.url?o("nuxt-link",{class:{"is-home":"home"===e.text.toLowerCase()},attrs:{to:e.url}},[e.icon?o("svg-icon",{attrs:{name:e.icon}}):t._e(),t._v(" "),o("span",[t._v(t._s(e.text))])],1):o("a",{attrs:{href:"javascript:void(0);"}},[o("span",[t._v(t._s(e.text))]),t._v(" "),o("svg-icon",{staticClass:"nav__item-chevron",attrs:{name:"chevron-down"}})],1),t._v(" "),e.submenu?o("ul",[t._l(e.submenu,(function(e){return o("li",{key:e.text},[e.url?o("nuxt-link",{attrs:{to:e.url}},[t._v("\n                "+t._s(e.text)+"\n              ")]):t._e()],1)})),t._v(" "),"More"===e.text?o("li",{attrs:{role:"presentation"}},[o("theme-switcher",{attrs:{id:"desktop"}})],1):t._e()],2):t._e()],1)})),0),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticClass:"nav__hamburger",class:{"nav__hamburger--open":t.showMobileNav},on:{click:function(e){t.showMobileNav=!t.showMobileNav}}},[o("span"),t._v(" "),t._m(0),t._v(" "),o("span",{staticClass:"sr-only"},[t._v("Show "+t._s(t.showMobileNav?"more":"less"))])])]),t._v(" "),o("ul",{staticClass:"nav__more",class:{"nav__more--mobile-open":t.isMobile&&t.showMobileNav}},[o("li",[o("nuxt-link",{attrs:{to:"/"}},[o("nuxt-img",{attrs:{src:r(82),alt:""}})],1)],1),t._v(" "),t._l(t.navItems.find((function(t){return"More"===t.text})).submenu,(function(e){return o("li",{key:e.text},[e.url?o("nuxt-link",{attrs:{to:e.url}},[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e()],1)})),t._v(" "),o("li",{attrs:{role:"presentation"}},[o("theme-switcher",{attrs:{id:"mobile"}})],1)],2)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav__hamburger-icon"},[r("span"),t._v(" "),r("span"),t._v(" "),r("span"),t._v(" "),r("span")])}],!1,null,"364c5b50",null).exports),v=r(108),f=r(179),h=r(59),_=o.a.extend({name:"TextInput",props:{label:{type:String,required:!0},id:{type:String,required:!0,validator:t=>Object(h.a)(t)},value:{type:String,default:void 0},type:{type:String,default:"text",validator:t=>["text","email"].includes(t)&&Object(h.a)(t)},inputmode:{type:String,default:void 0,validator:t=>["text","email"].includes(t)&&Object(h.a)(t)},required:{type:Boolean,default:!1},hideRequiredAsterisk:{type:Boolean,default:!1},name:{type:String,default:void 0,validator:t=>Object(h.a)(t)},placeholder:{type:String,default:void 0},autocomplete:{type:String,default:void 0},helpText:{type:String,default:void 0},errorMsg:{type:String,default:void 0}}}),x=(r(268),Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-input"},[r("label",{staticClass:"text-input__label",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n    "),t.required?[t.hideRequiredAsterisk?t._e():r("span",{staticClass:"text-input__asterisk",attrs:{"aria-hidden":"true"}},[t._v("\n        *\n      ")]),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("\n        (required)\n      ")])]:t._e()],2),t._v(" "),r("p",{staticClass:"text-input__help"},[t._v("\n    "+t._s(t.helpText)+"\n  ")]),t._v(" "),r("span",{staticClass:"text-input__entry",class:{"text-input__entry--error":t.errorMsg}},[r("input",{attrs:{id:t.id,name:t.name,type:t.type,inputmode:t.inputmode,autocomplete:t.autocomplete,placeholder:t.placeholder,required:t.required,"aria-invalid":t.errorMsg?"true":"false","aria-describedby":t.errorMsg&&t.id+"--error"},domProps:{value:t.value},on:{change:function(e){return t.$emit("change",e.target.value)},input:function(e){return t.$emit("input",e.target.value)},blur:function(e){return t.$emit("blur",e.target.value)}}})]),t._v(" "),r("p",{staticClass:"text-input__error",attrs:{id:t.id+"--error",role:t.errorMsg&&"alert","aria-hidden":t.errorMsg?"false":"true"}},[t._v("\n    "+t._s(t.errorMsg)+"\n  ")])])}),[],!1,null,"522865a6",null).exports),y=r(111),w=o.a.extend({name:"SiteFooter",components:{TextInput:x,Btn:y.a},mixins:[f.validationMixin],validations:{newsletter:{email:{email:v.email,required:v.required}}},data:()=>({showNewsletterSubscribe:!1,newsletter:{email:""}}),computed:{quickLinks:()=>[{text:"Home",url:"/"},{text:"Projects",url:"/projects"},{text:"Blog",url:"/blog"},{text:"Book",url:"/products/level-up-your-career-today-developer-edition"}],socialLinks:()=>[{text:"Twitter",url:"https://twitter.com/jackdomleo7",icon:"twitter"},{text:"LinkedIn",url:"https://linkedin.com/in/jackdomleo7/",icon:"linkedin"},{text:"GitHub",url:"https://github.com/jackdomleo7",icon:"github"},{text:"CodePen",url:"https://codepen.io/jackdomleo7",icon:"codepen"}]},methods:{touch(t){return this.$v.newsletter[t].$touch()}}}),M=(r(296),Object(l.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[t.showNewsletterSubscribe?o("form",{staticClass:"footer__subscribe",attrs:{id:"mc-embedded-subscribe-form",action:"https://dev.us10.list-manage.com/subscribe/post?u=5db0c80170083cdaab0b17f84&id=2f05546818",method:"post",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[o("TextInput",{staticClass:"footer__subscribe-input",attrs:{id:"mce-EMAIL",type:"email",name:"EMAIL",label:"Newsletter",placeholder:"Enter your email","help-text":"No spam. Unsubscribe anytime.",required:"","hide-required-asterisk":"","error-msg":t.$v.newsletter.email.$dirty&&t.$v.newsletter.email.$invalid?"Please provide a valid email":void 0},on:{input:function(e){return t.touch("email")},blur:function(e){return t.touch("email")}},model:{value:t.newsletter.email,callback:function(e){t.$set(t.newsletter,"email",e)},expression:"newsletter.email"}}),t._v(" "),o("Btn",{staticClass:"footer__subscribe-btn",attrs:{square:"",type:"submit",disabled:t.$v.newsletter.$invalid,"aria-label":t.$v.newsletter.$invalid?"Please provide a valid email before subscribing":void 0}},[t._v("\n      Subscribe\n    ")])],1):t._e(),t._v(" "),o("nuxt-img",{staticClass:"footer__logo",attrs:{src:r(82),alt:""}}),t._v(" "),o("ul",{staticClass:"footer__quick-links"},t._l(t.quickLinks,(function(e){return o("li",{key:e.url},[e.url.startsWith("https://")?o("a",{attrs:{href:e.url,rel:"noopener"}},[t._v("\n        "+t._s(e.text)+"\n      ")]):o("nuxt-link",{attrs:{to:e.url}},[t._v("\n        "+t._s(e.text)+"\n      ")])],1)})),0),t._v(" "),o("ul",{staticClass:"footer__social"},t._l(t.socialLinks,(function(e){return o("li",{key:e.url},[o("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[o("svg-icon",{attrs:{name:e.icon}}),t._v(" "),o("span",{staticClass:"sr-only"},[t._v(t._s(e.text))])],1)])})),0),t._v(" "),o("p",{staticClass:"footer__legal"},[t._v("\n    ©"+t._s((new Date).getFullYear())),o("br",{staticClass:"footer__legal-br"}),t._v(" All rights reserved."),o("br",{staticClass:"footer__legal-br"}),t._v(" Jack Domleo\n  ")])],1)}),[],!1,null,"72b540e6",null).exports),k=o.a.extend({name:"Default",components:{Navigation:m,SiteFooter:M},data:()=>({isMobile:!1,blogRedirects:["/i-wrote-an-ebook-here-is-what-i-learned","/why-the-term-t-shaped-is-better-than-the-term-full-stack","/how-i-optimised-my-online-presence-to-get-opportunities","/an-apprenticeship-interview","/focused-creativity-dont-lose-focus","/hover-css-media-query","/a-st-st-stuttering-developer","/how-i-went-from-a-retail-assistant-at-17-to-landing-a-developer-role-at-19","/why-to-not-support-internet-explorer","/learning-neumorphic-design","/all-day-hey-2020","/to-blog-or-not-to-blog"]}),created(){this.blogRedirects.forEach((t=>{"/blog".concat(t)===this.$route.path&&this.$router.push("/blog/2020".concat(t))}))},mounted(){this.setResponsiveness(),window.addEventListener("resize",this.setResponsiveness)},destroyed(){window.removeEventListener("resize",this.setResponsiveness)},methods:{setResponsiveness(){var t=window.getComputedStyle(document.querySelector("nav.nav")).getPropertyValue("--nav-break");this.isMobile=!window.matchMedia("(min-width: ".concat(t,")")).matches}}}),N=(r(298),Object(l.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page",class:{"w-nav":t.isMobile}},[r("Navigation"),t._v(" "),r("main",[r("Nuxt")],1),t._v(" "),r("SiteFooter")],1)}),[],!1,null,"271ad125",null));e.a=N.exports},188:function(t,e,r){t.exports=r(189)},249:function(t,e,r){var content=r(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("0b3fb090",content,!0,{sourceMap:!1})},250:function(t,e,r){var o=r(23),n=r(251),l=r(252),c=r(253),d=r(254),m=r(255),v=r(256),f=r(257),h=r(258),_=r(259),x=r(260),y=r(261),w=r(262),M=r(263),k=o(!1),N=n(l),j=n(c),z=n(d),C=n(m),L=n(v),S=n(f),A=n(h),I=n(_),T=n(x),D=n(y),O=n(w),$=n(M);k.push([t.i,':root{--colour-primary:#f54c0f;--colour-primary-faint:#feede7;--colour-accent:#1b78a8;--colour-highlight:rgba(27,120,168,0.3);--colour-error:#de1d02;--colour-success:#168333;--colour-text-primary:#27242b;--colour-text-secondary:#8a898e;--colour-text-button:#fff;--colour-text-button-inverse:#27242b;--colour-background:#fbfaf9;--colour-foreground-1:#fff}.theme--dark{--colour-primary:#e69e6c;--colour-primary-faint:#3a281b;--colour-accent:#558de6;--colour-highlight:rgba(85,141,230,0.7);--colour-error:#e67160;--colour-success:#83e6b7;--colour-text-primary:#fff;--colour-text-secondary:#f4f3f9;--colour-text-button:#000;--colour-text-button-inverse:#fff;--colour-background:#18181a;--colour-foreground-1:#27242b}:root{color-scheme:light dark;--font-family-montserrat:"Montserrat",Arial,Helvetica,sans-serif;--responsive-small-mobile:21.25em;--responsive-standard-mobile:24.375em;--responsive-large-mobile:28.125rem;--responsive-small-tablet:40em;--responsive-standard-tablet:48em;--responsive-large-tablet:62.5em;--responsive-small-desktop:85.375em;--responsive-standard-desktop:120em;--responsive-large-desktop:180em;--responsive-4k-desktop:240em;--text-title:2rem;--text-subtitle:1.5rem;--text-heading:1.25rem;--text-large:1.125rem;--text-body:0.875rem;--text-small:0.75rem}@font-face{font-family:"Montserrat";src:local("Montserrat"),url('+N+') format("woff2"),url('+j+') format("woff"),url('+z+') format("truetype");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:local("Montserrat"),url('+C+') format("woff2"),url('+L+') format("woff"),url('+S+') format("truetype");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:local("Montserrat"),url('+A+') format("woff2"),url('+I+') format("woff"),url('+T+') format("truetype");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Montserrat";src:local("Montserrat"),url('+D+') format("woff2"),url('+O+') format("woff"),url('+$+') format("truetype");font-weight:700;font-style:normal;font-display:swap}@media(min-width:48em){:root{--text-title:3rem;--text-subtitle:2.5rem;--text-heading:1.5rem;--text-large:1.25rem;--text-body:1.125rem;--text-small:0.875rem}}:root{--standard-animation-timing:240ms;--quick-animation-timing:160ms}::-moz-selection{text-shadow:none;color:#27242b;color:var(--colour-text-primary);background-color:rgba(27,120,168,.3);background-color:var(--colour-highlight)}::selection{text-shadow:none;color:#27242b;color:var(--colour-text-primary);background-color:rgba(27,120,168,.3);background-color:var(--colour-highlight)}html{font-family:sans-serif;font-size:100%;box-sizing:border-box}@media(prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}*,:after,:before{box-sizing:inherit}body{background-color:#fbfaf9;background-color:var(--colour-background);color:#27242b;color:var(--colour-text-primary);font-family:"Montserrat",Arial,Helvetica,sans-serif;font-family:var(--font-family-montserrat);text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden}img{height:auto;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a,button{touch-action:manipulation;color:inherit}svg{fill:currentColor;pointer-events:none}iframe,svg{height:100%;width:100%}[hidden]{display:none!important}a{color:#1b78a8;color:var(--colour-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}:root{--shadow-standard:0 0.25rem 0.25rem rgba(0,0,0,0.1);--shadow-standard-reverse:0 -0.25rem 0.25rem rgba(0,0,0,0.1)}.theme--dark{--shadow-standard:0 0.25rem 0.25rem rgba(0,0,0,0.8);--shadow-standard-reverse:0 -0.25rem 0.25rem rgba(0,0,0,0.8)}.sr-only{border:0!important;clip:rect(1px,1px,1px,1px)!important;-webkit-clip-path:inset(50%)!important;clip-path:inset(50%)!important;height:1px!important;overflow:hidden!important;margin:-1px!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important}.sr-only--focusable:active,.sr-only--focusable:focus{clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;height:auto!important;margin:auto!important;overflow:visible!important;position:static!important;width:auto!important;white-space:normal!important}.container{max-width:91.25rem;padding:1rem;margin-left:auto;margin-right:auto}@media(min-width:62.5em){.container{padding-left:2rem;padding-right:2rem}}.container--header{margin-top:2rem}@media(min-width:85.375em){.container--header{margin-top:7rem}}.tag{background-color:#feede7;background-color:var(--colour-primary-faint);font-weight:700;padding:.1875rem .5rem}.tag,.tag--inverted{color:#f54c0f;color:var(--colour-primary);font-size:.75rem;font-size:var(--text-small);display:inline-flex}.tag--inverted{font-weight:300;text-transform:uppercase}:root{--cooltipz-bg-color:var(--colour-text-button-inverse);--cooltipz-border-color:var(--colour-text-button-inverse);--cooltipz-text-color:var(--colour-text-button)}.blockquote{background-color:#fff;background-color:var(--colour-foreground-1);padding:1.5rem 3rem;box-shadow:0 .25rem .25rem rgba(0,0,0,.1);box-shadow:var(--shadow-standard);display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem}.blockquote,.blockquote>*{margin:0;position:relative}.blockquote>*{z-index:1}.blockquote:after,.blockquote:before{position:absolute;color:#f54c0f;color:var(--colour-primary);font-size:2.5rem;z-index:0}.blockquote:before{content:"❝";top:.5rem;left:1rem}.blockquote:after{content:"❞";bottom:0;right:1rem}.twitter-tweet{margin:1.5rem auto!important}.twitter-tweet>iframe{width:100%!important}',""]),t.exports=k},252:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Light.woff2"},253:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Light.woff"},254:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Light.ttf"},255:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Regular.woff2"},256:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Regular.woff"},257:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Regular.ttf"},258:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Semibold.woff2"},259:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Semibold.woff"},260:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Semibold.ttf"},261:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Bold.woff2"},262:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Bold.woff"},263:function(t,e,r){t.exports=r.p+"assets/fonts/Montserrat/Montserrat-Bold.ttf"},264:function(t,e,r){"use strict";r(149)},265:function(t,e,r){var o=r(23)(!1);o.push([t.i,"fieldset[data-v-49392bb8]{border:none}legend[data-v-49392bb8]{font-size:var(--text-body);margin-bottom:.5rem}.theme-options[data-v-49392bb8]{display:flex;grid-gap:1rem;gap:1rem}.theme-option[data-v-49392bb8]{display:flex;grid-gap:.25rem;gap:.25rem;font-size:var(--text-small)}.theme-option[data-v-49392bb8],.theme-option>div[data-v-49392bb8]{flex-direction:column;align-items:center}.theme-option>div[data-v-49392bb8]{display:inline-flex;position:relative}.theme-option svg[data-v-49392bb8]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60%;color:var(--colour-text-secondary)}.theme-option input[data-v-49392bb8]{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:grid;align-items:center;justify-items:center;place-items:center;height:3rem;width:3rem;border:2px solid var(--colour-text-secondary);border-radius:.625rem;cursor:pointer}.theme-option input[data-v-49392bb8]:checked{border-color:var(--colour-primary);background-color:var(--colour-primary-faint)}.theme-option input:checked+svg[data-v-49392bb8]{color:var(--colour-primary)}",""]),t.exports=o},266:function(t,e,r){"use strict";r(150)},267:function(t,e,r){var o=r(23)(!1);o.push([t.i,'.nav[data-v-364c5b50]{--nav-break:85.375em;position:fixed;z-index:999;width:100vw;background-color:var(--colour-foreground-1)}@media(max-width:85.3125em){.nav[data-v-364c5b50]{bottom:0}.nav__logo[data-v-364c5b50],.nav__name[data-v-364c5b50]{display:none}.nav__primary[data-v-364c5b50]{position:relative;z-index:2;box-shadow:var(--shadow-standard-reverse);background-color:var(--colour-foreground-1)}.nav__primary-list[data-v-364c5b50]{display:flex;justify-content:center;padding-left:0;margin:0;list-style-type:none}.nav__item[data-v-364c5b50]{width:20%}.nav__item[data-v-364c5b50]:nth-child(2){margin-right:auto}.nav__item a[data-v-364c5b50]{height:4rem;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:var(--text-small);text-decoration:none;text-align:center;color:var(--colour-text-secondary);will-change:color,background-color;transition-property:color,background-color;transition:var(--standard-animation-timing) ease}.nav__item svg[data-v-364c5b50]{height:2rem;width:2rem}.nav__hamburger[data-v-364c5b50]{cursor:pointer;display:flex;align-items:center;justify-content:center;position:absolute;bottom:25%;left:50%;transform:translateX(-50%);width:3.375rem;height:1.9375rem;background-color:var(--colour-primary);border:none;margin:1rem 0;box-shadow:0 0 8px rgba(0,0,0,.4)}.nav__hamburger[data-v-364c5b50]:after,.nav__hamburger[data-v-364c5b50]:before{content:"";position:absolute;z-index:1;width:2.375rem;height:2.375rem;transform:scaleY(.5774) rotate(-45deg);background-color:inherit;left:.5rem;box-shadow:0 0 8px rgba(0,0,0,.4)}.nav__hamburger[data-v-364c5b50]:before{top:-1.1875rem}.nav__hamburger[data-v-364c5b50]:after{bottom:-1.1875rem}.nav__hamburger>span[data-v-364c5b50]{display:block;position:absolute;top:0;left:0;width:3.375rem;height:1.9375rem;z-index:2;background:inherit}.nav__hamburger-icon[data-v-364c5b50]{width:1.3rem;height:1.1rem;position:relative;z-index:2;transform:rotate(0deg);cursor:pointer}.nav__hamburger-icon span[data-v-364c5b50]{display:block;position:absolute;height:.25rem;width:100%;background-color:var(--colour-text-button);border-radius:.5rem;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out}.nav__hamburger-icon span[data-v-364c5b50]:first-child{top:0}.nav__hamburger-icon span[data-v-364c5b50]:nth-child(2),.nav__hamburger-icon span[data-v-364c5b50]:nth-child(3){top:45%}.nav__hamburger-icon span[data-v-364c5b50]:nth-child(4){top:90%}.nav__hamburger--open .nav__hamburger-icon span[data-v-364c5b50]:first-child,.nav__hamburger--open .nav__hamburger-icon span[data-v-364c5b50]:nth-child(4){top:45%;width:0;left:50%}.nav__hamburger--open .nav__hamburger-icon span[data-v-364c5b50]:nth-child(2){transform:rotate(45deg)}.nav__hamburger--open .nav__hamburger-icon span[data-v-364c5b50]:nth-child(3){transform:rotate(-45deg)}.nav__more[data-v-364c5b50]{position:fixed;z-index:1;top:100%;transition:top .4s ease;will-change:top;background-color:var(--colour-foreground-1);box-shadow:0 0 8px 2px rgba(0,0,0,.2);height:calc(100vh - 4rem);overflow-y:auto;margin:0;padding:2rem 0;list-style-type:none;width:100vw}.nav__more--mobile-open[data-v-364c5b50]{top:0}.nav__more img[data-v-364c5b50]{width:4rem;margin-left:auto;margin-right:auto}.nav__more li[data-v-364c5b50]{max-width:100%;width:100%;overflow:hidden;max-height:3rem;transition:max-height .16s ease;will-change:max-height}.nav__more li[data-v-364c5b50]:nth-last-child(2){margin-bottom:2rem}.nav__more li[role=presentation][data-v-364c5b50]{max-height:unset;margin-top:5rem}.nav__more>li[data-v-364c5b50]:first-of-type{max-height:unset;max-width:18rem;margin-left:auto;margin-right:auto;border-bottom-color:transparent}.nav__more a[data-v-364c5b50]{text-decoration:none;display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;position:relative;z-index:12;color:var(--colour-text-primary)}}@media(min-width:85.375em){.nav[data-v-364c5b50]{color:var(--colour-text-primary);z-index:99;box-shadow:var(--shadow-standard);position:fixed;height:4rem}.nav__wrapper[data-v-364c5b50]{max-width:104rem;margin-left:auto;margin-right:auto;display:flex;align-items:stretch;grid-gap:1rem;gap:1rem;justify-content:space-between;padding:.25rem 10rem}.nav__name[data-v-364c5b50]{color:var(--colour-text-primary)!important;font-weight:700;font-size:var(--text-large);text-decoration:none;cursor:pointer;display:inline-flex;align-items:center}.nav__logo[data-v-364c5b50]{width:3.5rem;position:relative;left:10%}.nav__primary[data-v-364c5b50]{display:flex}.nav__primary-list[data-v-364c5b50]{list-style-type:none;padding-left:0;margin:0}.nav__primary svg[data-v-364c5b50]:not(.nav__item-chevron){display:none}.nav__item[data-v-364c5b50]{display:inline-flex;font-weight:700;font-size:var(--text-large);height:100%}.nav__item:hover ul[data-v-364c5b50],.nav__item[focus-within] ul[data-v-364c5b50]{opacity:1;visibility:visible}.nav__item:focus-within ul[data-v-364c5b50],.nav__item:hover ul[data-v-364c5b50]{opacity:1;visibility:visible}.nav__item svg[data-v-364c5b50]{height:2rem;width:2rem}.nav__item a[data-v-364c5b50]{display:inline-flex;align-items:center;justify-content:center;padding:.25rem;height:100%;width:100%;min-width:6.5rem;text-align:center;text-decoration:none;cursor:pointer;border-radius:.625rem;color:var(--colour-text-primary);will-change:color,background-color;transition-property:color,background-color;transition:var(--standard-animation-timing) ease}.nav__item a[data-v-364c5b50]:focus,.nav__item a[data-v-364c5b50]:hover{background-color:var(--colour-primary-faint)}.nav__item a:focus+ul[data-v-364c5b50],.nav__item a:hover+ul[data-v-364c5b50]{opacity:1;visibility:visible}.nav__item ul[data-v-364c5b50]{opacity:0;visibility:hidden;will-change:opacity,visibility;transition-property:opacity,visibility;transition:var(--standard-animation-timing) ease;position:absolute;top:100%;margin:0;list-style-type:none;background-color:var(--colour-foreground-1);box-shadow:var(--shadow-standard);padding:.5rem .75rem;display:flex;flex-direction:column;align-items:center;grid-gap:.25rem;gap:.25rem;font-size:var(--text-body)}.nav__item ul li[data-v-364c5b50]{width:100%}.nav__item ul li[data-v-364c5b50]:nth-last-child(2){margin-bottom:2rem}.nav__item ul a[data-v-364c5b50]{padding:.5rem}.nav__hamburger[data-v-364c5b50],.nav__more[data-v-364c5b50]{display:none}}.nav a.nuxt-link-active[data-v-364c5b50]{color:var(--colour-primary)}.nav a.is-home[data-v-364c5b50]:not(.nuxt-link-exact-active){color:var(--colour-text-secondary)}',""]),t.exports=o},268:function(t,e,r){"use strict";r(151)},269:function(t,e,r){var o=r(23)(!1);o.push([t.i,".text-input[data-v-522865a6]{display:flex;flex-direction:column;grid-gap:.125rem;gap:.125rem}.text-input__label[data-v-522865a6]{color:var(--colour-text-primary);text-transform:uppercase;font-size:.875rem;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-input__asterisk[data-v-522865a6]{color:var(--colour-primary);font-size:700}.text-input__help[data-v-522865a6]{margin:0;color:var(--colour-text-secondary);font-size:.75rem}.text-input__entry[data-v-522865a6]{border:1px solid var(--colour-text-secondary);background-color:var(--colour-foreground-1);border-radius:.1875rem;height:3rem}.text-input__entry--error[data-v-522865a6]{border-color:var(--colour-error)}.text-input__entry input[data-v-522865a6]{color:var(--colour-text-primary);font-size:1rem;height:100%;width:100%;padding-left:.5rem;padding-right:.5rem;background-color:transparent;border:none}.text-input__entry input[data-v-522865a6]::-moz-placeholder{color:#b6b5b4}.text-input__entry input[data-v-522865a6]:-ms-input-placeholder{color:#b6b5b4}.text-input__entry input[data-v-522865a6]::placeholder{color:#b6b5b4}.text-input__error[data-v-522865a6]{font-size:.75rem;margin-bottom:0;margin-top:.1875rem;color:var(--colour-error)}",""]),t.exports=o},270:function(t,e,r){"use strict";r(152)},271:function(t,e,r){var o=r(23)(!1);o.push([t.i,".btn[data-v-82303d48]{display:inline-flex;justify-content:center;align-items:center;background-color:var(--colour-primary);color:var(--colour-text-button);border-radius:1.5rem;border:1px solid var(--colour-primary);box-shadow:var(--shadow-standard);text-decoration:none;font-size:var(--text-large);font-weight:700;padding:.75rem 2.5rem;height:3rem;max-width:100%;cursor:pointer;transition:var(--standard-animation-timing);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(min-width:48em){.btn[data-v-82303d48]{min-width:15.625rem}}.btn--square[data-v-82303d48]{border-radius:.1875rem;padding-left:1.5rem;padding-right:1.5rem}.btn[data-v-82303d48]:active{box-shadow:none}.btn[data-v-82303d48]:disabled{opacity:.7;cursor:default}",""]),t.exports=o},296:function(t,e,r){"use strict";r(154)},297:function(t,e,r){var o=r(23)(!1);o.push([t.i,".footer[data-v-72b540e6]{max-width:32rem;min-width:100%;margin-top:8rem;margin-left:auto;margin-right:auto;padding:2rem 1rem;display:flex;flex-direction:column}@media(min-width:40em){.footer[data-v-72b540e6]{padding-left:2rem;padding-right:2rem;min-width:32rem}}.footer__subscribe[data-v-72b540e6]{display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem;margin-bottom:4rem}@media(min-width:40em){.footer__subscribe[data-v-72b540e6]{flex-direction:row;margin-bottom:7.5rem}}.footer__subscribe-input[data-v-72b540e6]{flex:1}.footer__subscribe-btn[data-v-72b540e6]{min-width:unset}@media(min-width:40em){.footer__subscribe-btn[data-v-72b540e6]{position:relative;top:2.125rem}}.footer__logo[data-v-72b540e6]{width:3.625rem;margin-left:auto;margin-right:auto}.footer__quick-links[data-v-72b540e6]{display:flex;align-items:center;justify-content:center;grid-gap:.5rem;gap:.5rem;list-style-type:none;padding-left:0;margin-top:1.5rem;margin-bottom:1.5rem}@media(min-width:40em){.footer__quick-links[data-v-72b540e6]{grid-gap:1rem;gap:1rem}}.footer__quick-links a[data-v-72b540e6]{color:var(--colour-text-primary)}.footer__social[data-v-72b540e6]{display:flex;align-items:center;justify-content:center;grid-gap:1rem;gap:1rem;list-style-type:none;padding-left:0;margin-top:0;margin-bottom:1.5rem}.footer__social a[data-v-72b540e6]{display:grid;align-items:center;justify-items:center;place-items:center;border-radius:50%;overflow:hidden;background-color:var(--colour-background);border:1px solid var(--colour-text-primary);transition:all var(--standard-animation-timing) ease;padding:.375rem;color:var(--colour-text-primary);width:2.5rem;aspect-ratio:auto 1/1}.footer__social a[data-v-72b540e6]:focus,.footer__social a[data-v-72b540e6]:hover{box-shadow:var(--shadow-standard)}.footer__legal[data-v-72b540e6]{text-align:center;margin-top:0;margin-bottom:0;line-height:1.3}@media(min-width:40em){.footer__legal[data-v-72b540e6]{line-height:unset}}@media(min-width:40em){.footer__legal-br[data-v-72b540e6]{display:none}}",""]),t.exports=o},298:function(t,e,r){"use strict";r(155)},299:function(t,e,r){var o=r(23)(!1);o.push([t.i,".page[data-v-271ad125]{display:flex;flex-direction:column;min-height:100vh}.page main[data-v-271ad125]{flex:1}.w-nav[data-v-271ad125]{padding-bottom:4rem}",""]),t.exports=o},300:function(t,e,r){var map={"./icons.svg":301};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=300},301:function(t,e,r){"use strict";r.r(e),e.default=r.p+"ae52179cbf25b80245d6621e919585a5.svg"},59:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(18);function o(t){return!/\s/g.test(t)}},82:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI4Mi4yNiAyNjYuOTkiPjxwYXRoIGQ9Ik00ODQuMjggMjQ0Ljg3YTU1LjM5IDU1LjM5IDAgMCAwLTI5LjQ2IDguNTlWODkuNjVoLTk1Ljg5VjI1Ni41YzAgMS4yOC0uMDggMi4zLS4xNSAzaC0uMjNzLTEuMjItMS4yNi0yLjM3LTUuNTJsLTguNTYtMzEuNzctODkuNzMgMzYuOTMgNy43NyAyNS4yNmM2LjU1IDIxLjI1IDE4LjUyIDM4LjMgMzUuNTggNTAuNjYgMTYuODkgMTIuMjMgMzYuNjcgMTguNDQgNTguNzggMTguNDRhMTAzLjggMTAzLjggMCAwIDAgMzUuNjYtNi4xMSA4Ny4zMiA4Ny4zMiAwIDAgMCAzMS4wNy0xOS4zNCA4NyA4NyAwIDAgMCA1LjY2LTYuODQgNTUuODMgNTUuODMgMCAxIDAgNTEuODctNzYuMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU3Ljg5IC04OS42NSkiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNNTUuMTEgMjI5LjE4YzEzLjM5IDkuNzEgMjkuMiAxNC42MiA0NyAxNC42MmE4My41OCA4My41OCAwIDAgMCAyOC43OS00LjkgNjcuMjEgNjcuMjEgMCAwIDAgMjQtMTQuOSA3MC44NyA3MC44NyAwIDAgMCAxNi4xMS0yNC40MWMzLjg4LTkuNTcgNS44NS0yMC42OCA1Ljg1LTMzVjIwLjA5aC01NS43NXYxNDYuNzZjMCA3Ljg5LTEuNzMgMTMuODktNS4xNSAxNy44Mi0zLjE5IDMuNjktNy41OSA1LjQtMTMuODUgNS40LTUuODEgMC0xMC40OS0xLjU0LTE0LjM0LTQuNzRzLTctOC41OC04LjktMTUuNzNsLTIuNjItOS43My01MS42OCAyMS4yNyAyLjM4IDcuNzRjNS4yNiAxNy4wMSAxNC43NSAzMC41NiAyOC4xNiA0MC4zWiIvPjxwYXRoIGQ9Ik00ODQuMjggMzM2LjU0YTM1Ljc5IDM1Ljc5IDAgMSAwLTM1Ljc5LTM1Ljc5IDM1Ljc5IDM1Ljc5IDAgMCAwIDM1Ljc5IDM1Ljc5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1Ny44OSAtODkuNjUpIiBzdHlsZT0iZmlsbDojZjc1YzIwIi8+PC9zdmc+"}},[[188,9,2,10]]]);