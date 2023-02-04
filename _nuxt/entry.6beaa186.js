function makeMap(e,n){const t=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)t[r[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function normalizeStyle(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=isString(r)?parseStringStyle(r):normalizeStyle(r);if(o)for(const s in o)n[s]=o[s]}return n}else{if(isString(e))return e;if(isObject$1(e))return e}}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*.*?\*\//gs;function parseStringStyle(e){const n={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const r=t.split(propertyDelimiterRE);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function normalizeClass(e){let n="";if(isString(e))n=e;else if(isArray$2(e))for(let t=0;t<e.length;t++){const r=normalizeClass(e[t]);r&&(n+=r+" ")}else if(isObject$1(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function normalizeProps(e){if(!e)return null;let{class:n,style:t}=e;return n&&!isString(n)&&(e.class=normalizeClass(n)),t&&(e.style=normalizeStyle(t)),e}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}function looseCompareArrays(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=looseEqual(e[r],n[r]);return t}function looseEqual(e,n){if(e===n)return!0;let t=isDate(e),r=isDate(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=isSymbol(e),r=isSymbol(n),t||r)return e===n;if(t=isArray$2(e),r=isArray$2(n),t||r)return t&&r?looseCompareArrays(e,n):!1;if(t=isObject$1(e),r=isObject$1(n),t||r){if(!t||!r)return!1;const o=Object.keys(e).length,s=Object.keys(n).length;if(o!==s)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=n.hasOwnProperty(i);if(l&&!a||!l&&a||!looseEqual(e[i],n[i]))return!1}}return String(e)===String(n)}const toDisplayString=e=>isString(e)?e:e==null?"":isArray$2(e)||isObject$1(e)&&(e.toString===objectToString||!isFunction(e.toString))?JSON.stringify(e,replacer,2):String(e),replacer=(e,n)=>n&&n.__v_isRef?replacer(e,n.value):isMap(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o])=>(t[`${r} =>`]=o,t),{})}:isSet(n)?{[`Set(${n.size})`]:[...n.values()]}:isObject$1(n)&&!isArray$2(n)&&!isPlainObject$1(n)?String(n):n,EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=e=>onRE.test(e),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn=(e,n)=>hasOwnProperty$1.call(e,n),isArray$2=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isDate=e=>toTypeString(e)==="[object Date]",isRegExp=e=>toTypeString(e)==="[object RegExp]",isFunction=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol=e=>typeof e=="symbol",isObject$1=e=>e!==null&&typeof e=="object",isPromise=e=>isObject$1(e)&&isFunction(e.then)&&isFunction(e.catch),objectToString=Object.prototype.toString,toTypeString=e=>objectToString.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject$1=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(n,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,n)=>!Object.is(e,n),invokeArrayFns=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},def=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},looseToNumber=e=>{const n=parseFloat(e);return isNaN(n)?e:n},toNumber=e=>{const n=isString(e)?Number(e):NaN;return isNaN(n)?e:n};let _globalThis$2;const getGlobalThis=()=>_globalThis$2||(_globalThis$2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let activeEffectScope;class EffectScope{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=activeEffectScope,!n&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=activeEffectScope;try{return activeEffectScope=this,n()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function recordEffectScope(e,n=activeEffectScope){n&&n.active&&n.effects.push(e)}function getCurrentScope(){return activeEffectScope}const createDep=e=>{const n=new Set(e);return n.w=0,n.n=0,n},wasTracked=e=>(e.w&trackOpBit)>0,newTracked=e=>(e.n&trackOpBit)>0,initDepMarkers=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=trackOpBit},finalizeDepMarkers=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const o=n[r];wasTracked(o)&&!newTracked(o)?o.delete(e):n[t++]=o,o.w&=~trackOpBit,o.n&=~trackOpBit}n.length=t}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol("");class ReactiveEffect{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,r)}run(){if(!this.active)return this.fn();let n=activeEffect,t=shouldTrack;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){activeEffect===this?this.deferStop=!0:this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function track$1(e,n,t){if(shouldTrack&&activeEffect){let r=targetMap.get(e);r||targetMap.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=createDep()),trackEffects(o)}}function trackEffects(e,n){let t=!1;effectTrackDepth<=maxMarkerBits?newTracked(e)||(e.n|=trackOpBit,t=!wasTracked(e)):t=!e.has(activeEffect),t&&(e.add(activeEffect),activeEffect.deps.push(e))}function trigger(e,n,t,r,o,s){const i=targetMap.get(e);if(!i)return;let l=[];if(n==="clear")l=[...i.values()];else if(t==="length"&&isArray$2(e)){const a=Number(r);i.forEach((c,f)=>{(f==="length"||f>=a)&&l.push(c)})}else switch(t!==void 0&&l.push(i.get(t)),n){case"add":isArray$2(e)?isIntegerKey(t)&&l.push(i.get("length")):(l.push(i.get(ITERATE_KEY)),isMap(e)&&l.push(i.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray$2(e)||(l.push(i.get(ITERATE_KEY)),isMap(e)&&l.push(i.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&l.push(i.get(ITERATE_KEY));break}if(l.length===1)l[0]&&triggerEffects(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);triggerEffects(createDep(a))}}function triggerEffects(e,n){const t=isArray$2(e)?e:[...e];for(const r of t)r.computed&&triggerEffect(r);for(const r of t)r.computed||triggerEffect(r)}function triggerEffect(e,n){(e!==activeEffect||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function getDepFromReactive(e,n){var t;return(t=targetMap.get(e))===null||t===void 0?void 0:t.get(n)}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol)),get$1=createGetter(),shallowGet=createGetter(!1,!0),readonlyGet=createGetter(!0),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=toRaw(this);for(let s=0,i=this.length;s<i;s++)track$1(r,"get",s+"");const o=r[n](...t);return o===-1||o===!1?r[n](...t.map(toRaw)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){pauseTracking();const r=toRaw(this)[n].apply(this,t);return resetTracking(),r}}),e}function hasOwnProperty(e){const n=toRaw(this);return track$1(n,"has",e),n.hasOwnProperty(e)}function createGetter(e=!1,n=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&s===(e?n?shallowReadonlyMap:readonlyMap:n?shallowReactiveMap:reactiveMap).get(r))return r;const i=isArray$2(r);if(!e){if(i&&hasOwn(arrayInstrumentations,o))return Reflect.get(arrayInstrumentations,o,s);if(o==="hasOwnProperty")return hasOwnProperty}const l=Reflect.get(r,o,s);return(isSymbol(o)?builtInSymbols.has(o):isNonTrackableKeys(o))||(e||track$1(r,"get",o),n)?l:isRef(l)?i&&isIntegerKey(o)?l:l.value:isObject$1(l)?e?readonly(l):reactive(l):l}}const set$1=createSetter(),shallowSet=createSetter(!0);function createSetter(e=!1){return function(t,r,o,s){let i=t[r];if(isReadonly(i)&&isRef(i)&&!isRef(o))return!1;if(!e&&(!isShallow(o)&&!isReadonly(o)&&(i=toRaw(i),o=toRaw(o)),!isArray$2(t)&&isRef(i)&&!isRef(o)))return i.value=o,!0;const l=isArray$2(t)&&isIntegerKey(r)?Number(r)<t.length:hasOwn(t,r),a=Reflect.set(t,r,o,s);return t===toRaw(s)&&(l?hasChanged(o,i)&&trigger(t,"set",r,o):trigger(t,"add",r,o)),a}}function deleteProperty(e,n){const t=hasOwn(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&trigger(e,"delete",n,void 0),r}function has$1(e,n){const t=Reflect.has(e,n);return(!isSymbol(n)||!builtInSymbols.has(n))&&track$1(e,"has",n),t}function ownKeys$1(e){return track$1(e,"iterate",isArray$2(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}const mutableHandlers={get:get$1,set:set$1,deleteProperty,has:has$1,ownKeys:ownKeys$1},readonlyHandlers={get:readonlyGet,set(e,n){return!0},deleteProperty(e,n){return!0}},shallowReactiveHandlers=extend({},mutableHandlers,{get:shallowGet,set:shallowSet}),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function get(e,n,t=!1,r=!1){e=e.__v_raw;const o=toRaw(e),s=toRaw(n);t||(n!==s&&track$1(o,"get",n),track$1(o,"get",s));const{has:i}=getProto(o),l=r?toShallow:t?toReadonly:toReactive;if(i.call(o,n))return l(e.get(n));if(i.call(o,s))return l(e.get(s));e!==o&&e.get(n)}function has(e,n=!1){const t=this.__v_raw,r=toRaw(t),o=toRaw(e);return n||(e!==o&&track$1(r,"has",e),track$1(r,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function size(e,n=!1){return e=e.__v_raw,!n&&track$1(toRaw(e),"iterate",ITERATE_KEY),Reflect.get(e,"size",e)}function add(e){e=toRaw(e);const n=toRaw(this);return getProto(n).has.call(n,e)||(n.add(e),trigger(n,"add",e,e)),this}function set$2(e,n){n=toRaw(n);const t=toRaw(this),{has:r,get:o}=getProto(t);let s=r.call(t,e);s||(e=toRaw(e),s=r.call(t,e));const i=o.call(t,e);return t.set(e,n),s?hasChanged(n,i)&&trigger(t,"set",e,n):trigger(t,"add",e,n),this}function deleteEntry(e){const n=toRaw(this),{has:t,get:r}=getProto(n);let o=t.call(n,e);o||(e=toRaw(e),o=t.call(n,e)),r&&r.call(n,e);const s=n.delete(e);return o&&trigger(n,"delete",e,void 0),s}function clear(){const e=toRaw(this),n=e.size!==0,t=e.clear();return n&&trigger(e,"clear",void 0,void 0),t}function createForEach(e,n){return function(r,o){const s=this,i=s.__v_raw,l=toRaw(i),a=n?toShallow:e?toReadonly:toReactive;return!e&&track$1(l,"iterate",ITERATE_KEY),i.forEach((c,f)=>r.call(o,a(c),a(f),s))}}function createIterableMethod(e,n,t){return function(...r){const o=this.__v_raw,s=toRaw(o),i=isMap(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...r),f=t?toShallow:n?toReadonly:toReactive;return!n&&track$1(s,"iterate",a?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:l?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...n){return e==="delete"?!1:this}}function createInstrumentations(){const e={get(s){return get(this,s)},get size(){return size(this)},has,add,set:set$2,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},n={get(s){return get(this,s,!1,!0)},get size(){return size(this)},has,add,set:set$2,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},t={get(s){return get(this,s,!0)},get size(){return size(this,!0)},has(s){return has.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},r={get(s){return get(this,s,!0,!0)},get size(){return size(this,!0)},has(s){return has.call(this,s,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=createIterableMethod(s,!1,!1),t[s]=createIterableMethod(s,!0,!1),n[s]=createIterableMethod(s,!1,!0),r[s]=createIterableMethod(s,!0,!0)}),[e,t,n,r]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(e,n){const t=n?e?shallowReadonlyInstrumentations:shallowInstrumentations:e?readonlyInstrumentations:mutableInstrumentations;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(hasOwn(t,o)&&o in r?t:r,o,s)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(e,n,t,r,o){if(!isObject$1(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=getTargetType(e);if(i===0)return e;const l=new Proxy(e,i===2?r:t);return o.set(e,l),l}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return isReactive(e)||isReadonly(e)}function toRaw(e){const n=e&&e.__v_raw;return n?toRaw(n):e}function markRaw(e){return def(e,"__v_skip",!0),e}const toReactive=e=>isObject$1(e)?reactive(e):e,toReadonly=e=>isObject$1(e)?readonly(e):e;function trackRefValue(e){shouldTrack&&activeEffect&&(e=toRaw(e),trackEffects(e.dep||(e.dep=createDep())))}function triggerRefValue(e,n){e=toRaw(e);const t=e.dep;t&&triggerEffects(t)}function isRef(e){return!!(e&&e.__v_isRef===!0)}function ref(e){return createRef(e,!1)}function shallowRef(e){return createRef(e,!0)}function createRef(e,n){return isRef(e)?e:new RefImpl(e,n)}class RefImpl{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:toRaw(n),this._value=t?n:toReactive(n)}get value(){return trackRefValue(this),this._value}set value(n){const t=this.__v_isShallow||isShallow(n)||isReadonly(n);n=t?n:toRaw(n),hasChanged(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:toReactive(n),triggerRefValue(this))}}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,n,t)=>unref(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return isRef(o)&&!isRef(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}class ObjectRefImpl{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return getDepFromReactive(toRaw(this._object),this._key)}}function toRef(e,n,t){const r=e[n];return isRef(r)?r:new ObjectRefImpl(e,n,t)}var _a$1;class ComputedRefImpl{constructor(n,t,r,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[_a$1]=!1,this._dirty=!0,this.effect=new ReactiveEffect(n,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const n=toRaw(this);return trackRefValue(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}_a$1="__v_isReadonly";function computed$1(e,n,t=!1){let r,o;const s=isFunction(e);return s?(r=e,o=NOOP):(r=e.get,o=e.set),new ComputedRefImpl(r,o,s||!o,t)}function warn$1(e,...n){}function callWithErrorHandling(e,n,t,r){let o;try{o=r?e(...r):e()}catch(s){handleError(s,n,t)}return o}function callWithAsyncErrorHandling(e,n,t,r){if(isFunction(e)){const s=callWithErrorHandling(e,n,t,r);return s&&isPromise(s)&&s.catch(i=>{handleError(i,n,t)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(callWithAsyncErrorHandling(e[s],n,t,r));return o}function handleError(e,n,t,r=!0){const o=n?n.vnode:null;if(n){let s=n.parent;const i=n.proxy,l=t;for(;s;){const c=s.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,l)===!1)return}s=s.parent}const a=n.appContext.config.errorHandler;if(a){callWithErrorHandling(a,null,10,[e,i,l]);return}}logError(e,t,o,r)}function logError(e,n,t,r=!0){console.error(e)}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(e){const n=currentFlushPromise||resolvedPromise;return e?n.then(this?e.bind(this):e):n}function findInsertionIndex(e){let n=flushIndex+1,t=queue.length;for(;n<t;){const r=n+t>>>1;getId(queue[r])<e?n=r+1:t=r}return n}function queueJob(e){(!queue.length||!queue.includes(e,isFlushing&&e.allowRecurse?flushIndex+1:flushIndex))&&(e.id==null?queue.push(e):queue.splice(findInsertionIndex(e.id),0,e),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(e){const n=queue.indexOf(e);n>flushIndex&&queue.splice(n,1)}function queuePostFlushCb(e){isArray$2(e)?pendingPostFlushCbs.push(...e):(!activePostFlushCbs||!activePostFlushCbs.includes(e,e.allowRecurse?postFlushIndex+1:postFlushIndex))&&pendingPostFlushCbs.push(e),queueFlush()}function flushPreFlushCbs(e,n=isFlushing?flushIndex+1:0){for(;n<queue.length;n++){const t=queue[n];t&&t.pre&&(queue.splice(n,1),n--,t())}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const n=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...n);return}for(activePostFlushCbs=n,activePostFlushCbs.sort((t,r)=>getId(t)-getId(r)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?1/0:e.id,comparator=(e,n)=>{const t=getId(e)-getId(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function flushJobs(e){isFlushPending=!1,isFlushing=!0,queue.sort(comparator);const n=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const t=queue[flushIndex];t&&t.active!==!1&&callWithErrorHandling(t,null,14)}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}function emit(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||EMPTY_OBJ;let o=t;const s=n.startsWith("update:"),i=s&&n.slice(7);if(i&&i in r){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:d}=r[f]||EMPTY_OBJ;d&&(o=t.map(m=>isString(m)?m.trim():m)),u&&(o=t.map(looseToNumber))}let l,a=r[l=toHandlerKey(n)]||r[l=toHandlerKey(camelize(n))];!a&&s&&(a=r[l=toHandlerKey(hyphenate(n))]),a&&callWithAsyncErrorHandling(a,e,6,o);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,callWithAsyncErrorHandling(c,e,6,o)}}function normalizeEmitsOptions(e,n,t=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},l=!1;if(!isFunction(e)){const a=c=>{const f=normalizeEmitsOptions(c,n,!0);f&&(l=!0,extend(i,f))};!t&&n.mixins.length&&n.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(isObject$1(e)&&r.set(e,null),null):(isArray$2(s)?s.forEach(a=>i[a]=null):extend(i,s),isObject$1(e)&&r.set(e,i),i)}function isEmitListener(e,n){return!e||!isOn(n)?!1:(n=n.slice(2).replace(/Once$/,""),hasOwn(e,n[0].toLowerCase()+n.slice(1))||hasOwn(e,hyphenate(n))||hasOwn(e,n))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const n=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,n}function pushScopeId(e){currentScopeId=e}function popScopeId(){currentScopeId=null}function withCtx(e,n=currentRenderingInstance,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&setBlockTracking(-1);const s=setCurrentRenderingInstance(n);let i;try{i=e(...o)}finally{setCurrentRenderingInstance(s),r._d&&setBlockTracking(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:n,vnode:t,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:l,attrs:a,emit:c,render:f,renderCache:u,data:d,setupState:m,ctx:v,inheritAttrs:R}=e;let x,w;const y=setCurrentRenderingInstance(e);try{if(t.shapeFlag&4){const O=o||r;x=normalizeVNode(f.call(O,O,u,s,m,d,v)),w=a}else{const O=n;x=normalizeVNode(O.length>1?O(s,{attrs:a,slots:l,emit:c}):O(s,null)),w=n.props?a:getFunctionalFallthrough(a)}}catch(O){blockStack.length=0,handleError(O,e,1),x=createVNode(Comment)}let k=x;if(w&&R!==!1){const O=Object.keys(w),{shapeFlag:C}=k;O.length&&C&7&&(i&&O.some(isModelListener)&&(w=filterModelListeners(w,i)),k=cloneVNode(k,w))}return t.dirs&&(k=cloneVNode(k),k.dirs=k.dirs?k.dirs.concat(t.dirs):t.dirs),t.transition&&(k.transition=t.transition),x=k,setCurrentRenderingInstance(y),x}function filterSingleRoot(e){let n;for(let t=0;t<e.length;t++){const r=e[t];if(isVNode(r)){if(r.type!==Comment||r.children==="v-if"){if(n)return;n=r}}else return}return n}const getFunctionalFallthrough=e=>{let n;for(const t in e)(t==="class"||t==="style"||isOn(t))&&((n||(n={}))[t]=e[t]);return n},filterModelListeners=(e,n)=>{const t={};for(const r in e)(!isModelListener(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function shouldUpdateComponent(e,n,t){const{props:r,children:o,component:s}=e,{props:i,children:l,patchFlag:a}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return r?hasPropsChanged(r,i,c):!!i;if(a&8){const f=n.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(i[d]!==r[d]&&!isEmitListener(c,d))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?hasPropsChanged(r,i,c):!0:!!i;return!1}function hasPropsChanged(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(n[s]!==e[s]&&!isEmitListener(t,s))return!0}return!1}function updateHOCHostEl({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const isSuspense=e=>e.__isSuspense,SuspenseImpl={name:"Suspense",__isSuspense:!0,process(e,n,t,r,o,s,i,l,a,c){e==null?mountSuspense(n,t,r,o,s,i,l,a,c):patchSuspense(e,n,t,r,o,i,l,a,c)},hydrate:hydrateSuspense,create:createSuspenseBoundary,normalize:normalizeSuspenseChildren},Suspense=SuspenseImpl;function triggerEvent(e,n){const t=e.props&&e.props[n];isFunction(t)&&t()}function mountSuspense(e,n,t,r,o,s,i,l,a){const{p:c,o:{createElement:f}}=a,u=f("div"),d=e.suspense=createSuspenseBoundary(e,o,r,n,u,t,s,i,l,a);c(null,d.pendingBranch=e.ssContent,u,null,r,d,s,i),d.deps>0?(triggerEvent(e,"onPending"),triggerEvent(e,"onFallback"),c(null,e.ssFallback,n,t,r,null,s,i),setActiveBranch(d,e.ssFallback)):d.resolve()}function patchSuspense(e,n,t,r,o,s,i,l,{p:a,um:c,o:{createElement:f}}){const u=n.suspense=e.suspense;u.vnode=n,n.el=e.el;const d=n.ssContent,m=n.ssFallback,{activeBranch:v,pendingBranch:R,isInFallback:x,isHydrating:w}=u;if(R)u.pendingBranch=d,isSameVNodeType(d,R)?(a(R,d,u.hiddenContainer,null,o,u,s,i,l),u.deps<=0?u.resolve():x&&(a(v,m,t,r,o,null,s,i,l),setActiveBranch(u,m))):(u.pendingId++,w?(u.isHydrating=!1,u.activeBranch=R):c(R,o,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),x?(a(null,d,u.hiddenContainer,null,o,u,s,i,l),u.deps<=0?u.resolve():(a(v,m,t,r,o,null,s,i,l),setActiveBranch(u,m))):v&&isSameVNodeType(d,v)?(a(v,d,t,r,o,u,s,i,l),u.resolve(!0)):(a(null,d,u.hiddenContainer,null,o,u,s,i,l),u.deps<=0&&u.resolve()));else if(v&&isSameVNodeType(d,v))a(v,d,t,r,o,u,s,i,l),setActiveBranch(u,d);else if(triggerEvent(n,"onPending"),u.pendingBranch=d,u.pendingId++,a(null,d,u.hiddenContainer,null,o,u,s,i,l),u.deps<=0)u.resolve();else{const{timeout:y,pendingId:k}=u;y>0?setTimeout(()=>{u.pendingId===k&&u.fallback(m)},y):y===0&&u.fallback(m)}}function createSuspenseBoundary(e,n,t,r,o,s,i,l,a,c,f=!1){const{p:u,m:d,um:m,n:v,o:{parentNode:R,remove:x}}=c,w=e.props?toNumber(e.props.timeout):void 0,y={vnode:e,parent:n,parentComponent:t,isSVG:i,container:r,hiddenContainer:o,anchor:s,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(k=!1){const{vnode:O,activeBranch:C,pendingBranch:D,pendingId:Y,effects:N,parentComponent:z,container:$}=y;if(y.isHydrating)y.isHydrating=!1;else if(!k){const B=C&&D.transition&&D.transition.mode==="out-in";B&&(C.transition.afterLeave=()=>{Y===y.pendingId&&d(D,$,g,0)});let{anchor:g}=y;C&&(g=v(C),m(C,z,y,!0)),B||d(D,$,g,0)}setActiveBranch(y,D),y.pendingBranch=null,y.isInFallback=!1;let ee=y.parent,V=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...N),V=!0;break}ee=ee.parent}V||queuePostFlushCb(N),y.effects=[],triggerEvent(O,"onResolve")},fallback(k){if(!y.pendingBranch)return;const{vnode:O,activeBranch:C,parentComponent:D,container:Y,isSVG:N}=y;triggerEvent(O,"onFallback");const z=v(C),$=()=>{y.isInFallback&&(u(null,k,Y,z,D,null,N,l,a),setActiveBranch(y,k))},ee=k.transition&&k.transition.mode==="out-in";ee&&(C.transition.afterLeave=$),y.isInFallback=!0,m(C,D,null,!0),ee||$()},move(k,O,C){y.activeBranch&&d(y.activeBranch,k,O,C),y.container=k},next(){return y.activeBranch&&v(y.activeBranch)},registerDep(k,O){const C=!!y.pendingBranch;C&&y.deps++;const D=k.vnode.el;k.asyncDep.catch(Y=>{handleError(Y,k,0)}).then(Y=>{if(k.isUnmounted||y.isUnmounted||y.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:N}=k;handleSetupResult(k,Y,!1),D&&(N.el=D);const z=!D&&k.subTree.el;O(k,N,R(D||k.subTree.el),D?null:v(k.subTree),y,i,a),z&&x(z),updateHOCHostEl(k,N.el),C&&--y.deps===0&&y.resolve()})},unmount(k,O){y.isUnmounted=!0,y.activeBranch&&m(y.activeBranch,t,k,O),y.pendingBranch&&m(y.pendingBranch,t,k,O)}};return y}function hydrateSuspense(e,n,t,r,o,s,i,l,a){const c=n.suspense=createSuspenseBoundary(n,r,t,e.parentNode,document.createElement("div"),null,o,s,i,l,!0),f=a(e,c.pendingBranch=n.ssContent,t,c,s,i);return c.deps===0&&c.resolve(),f}function normalizeSuspenseChildren(e){const{shapeFlag:n,children:t}=e,r=n&32;e.ssContent=normalizeSuspenseSlot(r?t.default:t),e.ssFallback=r?normalizeSuspenseSlot(t.fallback):createVNode(Comment)}function normalizeSuspenseSlot(e){let n;if(isFunction(e)){const t=isBlockTreeEnabled&&e._c;t&&(e._d=!1,openBlock()),e=e(),t&&(e._d=!0,n=currentBlock,closeBlock())}return isArray$2(e)&&(e=filterSingleRoot(e)),e=normalizeVNode(e),n&&!e.dynamicChildren&&(e.dynamicChildren=n.filter(t=>t!==e)),e}function queueEffectWithSuspense(e,n){n&&n.pendingBranch?isArray$2(e)?n.effects.push(...e):n.effects.push(e):queuePostFlushCb(e)}function setActiveBranch(e,n){e.activeBranch=n;const{vnode:t,parentComponent:r}=e,o=t.el=n.el;r&&r.subTree===t&&(r.vnode.el=o,updateHOCHostEl(r,o))}function provide(e,n){if(currentInstance){let t=currentInstance.provides;const r=currentInstance.parent&&currentInstance.parent.provides;r===t&&(t=currentInstance.provides=Object.create(r)),t[e]=n}}function inject(e,n,t=!1){const r=currentInstance||currentRenderingInstance;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&isFunction(n)?n.call(r.proxy):n}}function watchEffect(e,n){return doWatch(e,null,n)}const INITIAL_WATCHER_VALUE={};function watch(e,n,t){return doWatch(e,n,t)}function doWatch(e,n,{immediate:t,deep:r,flush:o,onTrack:s,onTrigger:i}=EMPTY_OBJ){const l=getCurrentScope()===(currentInstance==null?void 0:currentInstance.scope)?currentInstance:null;let a,c=!1,f=!1;if(isRef(e)?(a=()=>e.value,c=isShallow(e)):isReactive(e)?(a=()=>e,r=!0):isArray$2(e)?(f=!0,c=e.some(k=>isReactive(k)||isShallow(k)),a=()=>e.map(k=>{if(isRef(k))return k.value;if(isReactive(k))return traverse(k);if(isFunction(k))return callWithErrorHandling(k,l,2)})):isFunction(e)?n?a=()=>callWithErrorHandling(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),callWithAsyncErrorHandling(e,l,3,[d])}:a=NOOP,n&&r){const k=a;a=()=>traverse(k())}let u,d=k=>{u=w.onStop=()=>{callWithErrorHandling(k,l,4)}},m;if(isInSSRComponentSetup)if(d=NOOP,n?t&&callWithAsyncErrorHandling(n,l,3,[a(),f?[]:void 0,d]):a(),o==="sync"){const k=useSSRContext();m=k.__watcherHandles||(k.__watcherHandles=[])}else return NOOP;let v=f?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const R=()=>{if(w.active)if(n){const k=w.run();(r||c||(f?k.some((O,C)=>hasChanged(O,v[C])):hasChanged(k,v)))&&(u&&u(),callWithAsyncErrorHandling(n,l,3,[k,v===INITIAL_WATCHER_VALUE?void 0:f&&v[0]===INITIAL_WATCHER_VALUE?[]:v,d]),v=k)}else w.run()};R.allowRecurse=!!n;let x;o==="sync"?x=R:o==="post"?x=()=>queuePostRenderEffect(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),x=()=>queueJob(R));const w=new ReactiveEffect(a,x);n?t?R():v=w.run():o==="post"?queuePostRenderEffect(w.run.bind(w),l&&l.suspense):w.run();const y=()=>{w.stop(),l&&l.scope&&remove(l.scope.effects,w)};return m&&m.push(y),y}function instanceWatch(e,n,t){const r=this.proxy,o=isString(e)?e.includes(".")?createPathGetter(r,e):()=>r[e]:e.bind(r,r);let s;isFunction(n)?s=n:(s=n.handler,t=n);const i=currentInstance;setCurrentInstance(this);const l=doWatch(o,s.bind(r),t);return i?setCurrentInstance(i):unsetCurrentInstance(),l}function createPathGetter(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}function traverse(e,n){if(!isObject$1(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),isRef(e))traverse(e.value,n);else if(isArray$2(e))for(let t=0;t<e.length;t++)traverse(e[t],n);else if(isSet(e)||isMap(e))e.forEach(t=>{traverse(t,n)});else if(isPlainObject$1(e))for(const t in e)traverse(e[t],n);return e}function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionImpl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(e,{slots:n}){const t=getCurrentInstance(),r=useTransitionState();let o;return()=>{const s=n.default&&getTransitionRawChildren(n.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const R of s)if(R.type!==Comment){i=R;break}}const l=toRaw(e),{mode:a}=l;if(r.isLeaving)return emptyPlaceholder(i);const c=getKeepAliveChild(i);if(!c)return emptyPlaceholder(i);const f=resolveTransitionHooks(c,l,r,t);setTransitionHooks(c,f);const u=t.subTree,d=u&&getKeepAliveChild(u);let m=!1;const{getTransitionKey:v}=c.type;if(v){const R=v();o===void 0?o=R:R!==o&&(o=R,m=!0)}if(d&&d.type!==Comment&&(!isSameVNodeType(c,d)||m)){const R=resolveTransitionHooks(d,l,r,t);if(setTransitionHooks(d,R),a==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},emptyPlaceholder(i);a==="in-out"&&c.type!==Comment&&(R.delayLeave=(x,w,y)=>{const k=getLeavingNodesForType(r,d);k[String(d.key)]=d,x._leaveCb=()=>{w(),x._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=y})}return i}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function resolveTransitionHooks(e,n,t,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:u,onLeave:d,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:R,onAppear:x,onAfterAppear:w,onAppearCancelled:y}=n,k=String(e.key),O=getLeavingNodesForType(t,e),C=(N,z)=>{N&&callWithAsyncErrorHandling(N,r,9,z)},D=(N,z)=>{const $=z[1];C(N,z),isArray$2(N)?N.every(ee=>ee.length<=1)&&$():N.length<=1&&$()},Y={mode:s,persisted:i,beforeEnter(N){let z=l;if(!t.isMounted)if(o)z=R||l;else return;N._leaveCb&&N._leaveCb(!0);const $=O[k];$&&isSameVNodeType(e,$)&&$.el._leaveCb&&$.el._leaveCb(),C(z,[N])},enter(N){let z=a,$=c,ee=f;if(!t.isMounted)if(o)z=x||a,$=w||c,ee=y||f;else return;let V=!1;const B=N._enterCb=g=>{V||(V=!0,g?C(ee,[N]):C($,[N]),Y.delayedLeave&&Y.delayedLeave(),N._enterCb=void 0)};z?D(z,[N,B]):B()},leave(N,z){const $=String(e.key);if(N._enterCb&&N._enterCb(!0),t.isUnmounting)return z();C(u,[N]);let ee=!1;const V=N._leaveCb=B=>{ee||(ee=!0,z(),B?C(v,[N]):C(m,[N]),N._leaveCb=void 0,O[$]===e&&delete O[$])};O[$]=e,d?D(d,[N,V]):V()},clone(N){return resolveTransitionHooks(N,n,t,r)}};return Y}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getKeepAliveChild(e){return isKeepAlive(e)?e.children?e.children[0]:void 0:e}function setTransitionHooks(e,n){e.shapeFlag&6&&e.component?setTransitionHooks(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function getTransitionRawChildren(e,n=!1,t){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const l=t==null?i.key:String(t)+String(i.key!=null?i.key:s);i.type===Fragment$1?(i.patchFlag&128&&o++,r=r.concat(getTransitionRawChildren(i.children,n,l))):(n||i.type!==Comment)&&r.push(l!=null?cloneVNode(i,{key:l}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function defineComponent(e){return isFunction(e)?{setup:e,name:e.name}:e}const isAsyncWrapper=e=>!!e.type.__asyncLoader;function defineAsyncComponent(e){isFunction(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:r,delay:o=200,timeout:s,suspensible:i=!0,onError:l}=e;let a=null,c,f=0;const u=()=>(f++,a=null,d()),d=()=>{let m;return a||(m=a=n().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((R,x)=>{l(v,()=>R(u()),()=>x(v),f+1)});throw v}).then(v=>m!==a&&a?a:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return defineComponent({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const m=currentInstance;if(c)return()=>createInnerComp(c,m);const v=y=>{a=null,handleError(y,m,13,!r)};if(i&&m.suspense||isInSSRComponentSetup)return d().then(y=>()=>createInnerComp(y,m)).catch(y=>(v(y),()=>r?createVNode(r,{error:y}):null));const R=ref(!1),x=ref(),w=ref(!!o);return o&&setTimeout(()=>{w.value=!1},o),s!=null&&setTimeout(()=>{if(!R.value&&!x.value){const y=new Error(`Async component timed out after ${s}ms.`);v(y),x.value=y}},s),d().then(()=>{R.value=!0,m.parent&&isKeepAlive(m.parent.vnode)&&queueJob(m.parent.update)}).catch(y=>{v(y),x.value=y}),()=>{if(R.value&&c)return createInnerComp(c,m);if(x.value&&r)return createVNode(r,{error:x.value});if(t&&!w.value)return createVNode(t)}}})}function createInnerComp(e,n){const{ref:t,props:r,children:o,ce:s}=n.vnode,i=createVNode(e,r,o);return i.ref=t,i.ce=s,delete n.vnode.ce,i}const isKeepAlive=e=>e.type.__isKeepAlive,KeepAliveImpl={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=getCurrentInstance(),r=t.ctx;if(!r.renderer)return()=>{const y=n.default&&n.default();return y&&y.length===1?y[0]:y};const o=new Map,s=new Set;let i=null;const l=t.suspense,{renderer:{p:a,m:c,um:f,o:{createElement:u}}}=r,d=u("div");r.activate=(y,k,O,C,D)=>{const Y=y.component;c(y,k,O,0,l),a(Y.vnode,y,k,O,Y,l,C,y.slotScopeIds,D),queuePostRenderEffect(()=>{Y.isDeactivated=!1,Y.a&&invokeArrayFns(Y.a);const N=y.props&&y.props.onVnodeMounted;N&&invokeVNodeHook(N,Y.parent,y)},l)},r.deactivate=y=>{const k=y.component;c(y,d,null,1,l),queuePostRenderEffect(()=>{k.da&&invokeArrayFns(k.da);const O=y.props&&y.props.onVnodeUnmounted;O&&invokeVNodeHook(O,k.parent,y),k.isDeactivated=!0},l)};function m(y){resetShapeFlag(y),f(y,t,l,!0)}function v(y){o.forEach((k,O)=>{const C=getComponentName(k.type);C&&(!y||!y(C))&&R(O)})}function R(y){const k=o.get(y);!i||!isSameVNodeType(k,i)?m(k):i&&resetShapeFlag(i),o.delete(y),s.delete(y)}watch(()=>[e.include,e.exclude],([y,k])=>{y&&v(O=>matches(y,O)),k&&v(O=>!matches(k,O))},{flush:"post",deep:!0});let x=null;const w=()=>{x!=null&&o.set(x,getInnerChild(t.subTree))};return onMounted(w),onUpdated(w),onBeforeUnmount(()=>{o.forEach(y=>{const{subTree:k,suspense:O}=t,C=getInnerChild(k);if(y.type===C.type&&y.key===C.key){resetShapeFlag(C);const D=C.component.da;D&&queuePostRenderEffect(D,O);return}m(y)})}),()=>{if(x=null,!n.default)return null;const y=n.default(),k=y[0];if(y.length>1)return i=null,y;if(!isVNode(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return i=null,k;let O=getInnerChild(k);const C=O.type,D=getComponentName(isAsyncWrapper(O)?O.type.__asyncResolved||{}:C),{include:Y,exclude:N,max:z}=e;if(Y&&(!D||!matches(Y,D))||N&&D&&matches(N,D))return i=O,k;const $=O.key==null?C:O.key,ee=o.get($);return O.el&&(O=cloneVNode(O),k.shapeFlag&128&&(k.ssContent=O)),x=$,ee?(O.el=ee.el,O.component=ee.component,O.transition&&setTransitionHooks(O,O.transition),O.shapeFlag|=512,s.delete($),s.add($)):(s.add($),z&&s.size>parseInt(z,10)&&R(s.values().next().value)),O.shapeFlag|=256,i=O,isSuspense(k.type)?k:O}}},KeepAlive=KeepAliveImpl;function matches(e,n){return isArray$2(e)?e.some(t=>matches(t,n)):isString(e)?e.split(",").includes(n):isRegExp(e)?e.test(n):!1}function onActivated(e,n){registerKeepAliveHook(e,"a",n)}function onDeactivated(e,n){registerKeepAliveHook(e,"da",n)}function registerKeepAliveHook(e,n,t=currentInstance){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(injectHook(n,r,t),t){let o=t.parent;for(;o&&o.parent;)isKeepAlive(o.parent.vnode)&&injectToKeepAliveRoot(r,n,t,o),o=o.parent}}function injectToKeepAliveRoot(e,n,t,r){const o=injectHook(n,e,r,!0);onUnmounted(()=>{remove(r[n],o)},t)}function resetShapeFlag(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function getInnerChild(e){return e.shapeFlag&128?e.ssContent:e}function injectHook(e,n,t=currentInstance,r=!1){if(t){const o=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...i)=>{if(t.isUnmounted)return;pauseTracking(),setCurrentInstance(t);const l=callWithAsyncErrorHandling(n,t,e,i);return unsetCurrentInstance(),resetTracking(),l});return r?o.unshift(s):o.push(s),s}}const createHook=e=>(n,t=currentInstance)=>(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(...r)=>n(...r),t),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,n=currentInstance){injectHook("ec",e,n)}function withDirectives(e,n){const t=currentRenderingInstance;if(t===null)return e;const r=getExposeProxy(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[i,l,a,c=EMPTY_OBJ]=n[s];i&&(isFunction(i)&&(i={mounted:i,updated:i}),i.deep&&traverse(l),o.push({dir:i,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function invokeDirectiveHook(e,n,t,r){const o=e.dirs,s=n&&n.dirs;for(let i=0;i<o.length;i++){const l=o[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&(pauseTracking(),callWithAsyncErrorHandling(a,t,8,[e.el,l,e,n]),resetTracking())}}const COMPONENTS="components";function resolveComponent(e,n){return resolveAsset(COMPONENTS,e,!0,n)||e}const NULL_DYNAMIC_COMPONENT=Symbol();function resolveDynamicComponent(e){return isString(e)?resolveAsset(COMPONENTS,e,!1)||e:e||NULL_DYNAMIC_COMPONENT}function resolveAsset(e,n,t=!0,r=!1){const o=currentRenderingInstance||currentInstance;if(o){const s=o.type;if(e===COMPONENTS){const l=getComponentName(s,!1);if(l&&(l===n||l===camelize(n)||l===capitalize(camelize(n))))return s}const i=resolve(o[e]||s[e],n)||resolve(o.appContext[e],n);return!i&&r?s:i}}function resolve(e,n){return e&&(e[n]||e[camelize(n)]||e[capitalize(camelize(n))])}function renderList(e,n,t,r){let o;const s=t&&t[r];if(isArray$2(e)||isString(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=n(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=n(i+1,i,void 0,s&&s[i])}else if(isObject$1(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>n(i,l,void 0,s&&s[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=n(e[c],c,l,s&&s[l])}}else o=[];return t&&(t[r]=o),o}function renderSlot(e,n,t={},r,o){if(currentRenderingInstance.isCE||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.isCE)return n!=="default"&&(t.name=n),createVNode("slot",t,r&&r());let s=e[n];s&&s._c&&(s._d=!1),openBlock();const i=s&&ensureValidVNode(s(t)),l=createBlock(Fragment$1,{key:t.key||i&&i.key||`_${n}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ensureValidVNode(e){return e.some(n=>isVNode(n)?!(n.type===Comment||n.type===Fragment$1&&!ensureValidVNode(n.children)):!0)?e:null}const getPublicInstance=e=>e?isStatefulComponent(e)?getExposeProxy(e)||e.proxy:getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>queueJob(e.update)),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,n)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,n),PublicInstanceProxyHandlers={get({_:e},n){const{ctx:t,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:a}=e;let c;if(n[0]!=="$"){const m=i[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return s[n]}else{if(hasSetupBinding(r,n))return i[n]=1,r[n];if(o!==EMPTY_OBJ&&hasOwn(o,n))return i[n]=2,o[n];if((c=e.propsOptions[0])&&hasOwn(c,n))return i[n]=3,s[n];if(t!==EMPTY_OBJ&&hasOwn(t,n))return i[n]=4,t[n];shouldCacheAccess&&(i[n]=0)}}const f=publicPropertiesMap[n];let u,d;if(f)return n==="$attrs"&&track$1(e,"get",n),f(e);if((u=l.__cssModules)&&(u=u[n]))return u;if(t!==EMPTY_OBJ&&hasOwn(t,n))return i[n]=4,t[n];if(d=a.config.globalProperties,hasOwn(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:s}=e;return hasSetupBinding(o,n)?(o[n]=t,!0):r!==EMPTY_OBJ&&hasOwn(r,n)?(r[n]=t,!0):hasOwn(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:s}},i){let l;return!!t[i]||e!==EMPTY_OBJ&&hasOwn(e,i)||hasSetupBinding(n,i)||(l=s[0])&&hasOwn(l,i)||hasOwn(r,i)||hasOwn(publicPropertiesMap,i)||hasOwn(o.config.globalProperties,i)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:hasOwn(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let shouldCacheAccess=!0;function applyOptions(e){const n=resolveMergedOptions(e),t=e.proxy,r=e.ctx;shouldCacheAccess=!1,n.beforeCreate&&callHook$1(n.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:l,provide:a,inject:c,created:f,beforeMount:u,mounted:d,beforeUpdate:m,updated:v,activated:R,deactivated:x,beforeDestroy:w,beforeUnmount:y,destroyed:k,unmounted:O,render:C,renderTracked:D,renderTriggered:Y,errorCaptured:N,serverPrefetch:z,expose:$,inheritAttrs:ee,components:V,directives:B,filters:g}=n;if(c&&resolveInjections(c,r,null,e.appContext.config.unwrapInjectedRef),i)for(const S in i){const I=i[S];isFunction(I)&&(r[S]=I.bind(t))}if(o){const S=o.call(t,t);isObject$1(S)&&(e.data=reactive(S))}if(shouldCacheAccess=!0,s)for(const S in s){const I=s[S],F=isFunction(I)?I.bind(t,t):isFunction(I.get)?I.get.bind(t,t):NOOP,Q=!isFunction(I)&&isFunction(I.set)?I.set.bind(t):NOOP,se=computed({get:F,set:Q});Object.defineProperty(r,S,{enumerable:!0,configurable:!0,get:()=>se.value,set:J=>se.value=J})}if(l)for(const S in l)createWatcher(l[S],r,t,S);if(a){const S=isFunction(a)?a.call(t):a;Reflect.ownKeys(S).forEach(I=>{provide(I,S[I])})}f&&callHook$1(f,e,"c");function P(S,I){isArray$2(I)?I.forEach(F=>S(F.bind(t))):I&&S(I.bind(t))}if(P(onBeforeMount,u),P(onMounted,d),P(onBeforeUpdate,m),P(onUpdated,v),P(onActivated,R),P(onDeactivated,x),P(onErrorCaptured,N),P(onRenderTracked,D),P(onRenderTriggered,Y),P(onBeforeUnmount,y),P(onUnmounted,O),P(onServerPrefetch,z),isArray$2($))if($.length){const S=e.exposed||(e.exposed={});$.forEach(I=>{Object.defineProperty(S,I,{get:()=>t[I],set:F=>t[I]=F})})}else e.exposed||(e.exposed={});C&&e.render===NOOP&&(e.render=C),ee!=null&&(e.inheritAttrs=ee),V&&(e.components=V),B&&(e.directives=B)}function resolveInjections(e,n,t=NOOP,r=!1){isArray$2(e)&&(e=normalizeInject(e));for(const o in e){const s=e[o];let i;isObject$1(s)?"default"in s?i=inject(s.from||o,s.default,!0):i=inject(s.from||o):i=inject(s),isRef(i)&&r?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):n[o]=i}}function callHook$1(e,n,t){callWithAsyncErrorHandling(isArray$2(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function createWatcher(e,n,t,r){const o=r.includes(".")?createPathGetter(t,r):()=>t[r];if(isString(e)){const s=n[e];isFunction(s)&&watch(o,s)}else if(isFunction(e))watch(o,e.bind(t));else if(isObject$1(e))if(isArray$2(e))e.forEach(s=>createWatcher(s,n,t,r));else{const s=isFunction(e.handler)?e.handler.bind(t):n[e.handler];isFunction(s)&&watch(o,s,e)}}function resolveMergedOptions(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(n);let a;return l?a=l:!o.length&&!t&&!r?a=n:(a={},o.length&&o.forEach(c=>mergeOptions$1(a,c,i,!0)),mergeOptions$1(a,n,i)),isObject$1(n)&&s.set(n,a),a}function mergeOptions$1(e,n,t,r=!1){const{mixins:o,extends:s}=n;s&&mergeOptions$1(e,s,t,!0),o&&o.forEach(i=>mergeOptions$1(e,i,t,!0));for(const i in n)if(!(r&&i==="expose")){const l=internalOptionMergeStrats[i]||t&&t[i];e[i]=l?l(e[i],n[i]):n[i]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,n){return n?e?function(){return extend(isFunction(e)?e.call(this,this):e,isFunction(n)?n.call(this,this):n)}:n:e}function mergeInject(e,n){return mergeObjectOptions(normalizeInject(e),normalizeInject(n))}function normalizeInject(e){if(isArray$2(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function mergeAsArray(e,n){return e?[...new Set([].concat(e,n))]:n}function mergeObjectOptions(e,n){return e?extend(extend(Object.create(null),e),n):n}function mergeWatchOptions(e,n){if(!e)return n;if(!n)return e;const t=extend(Object.create(null),e);for(const r in n)t[r]=mergeAsArray(e[r],n[r]);return t}function initProps(e,n,t,r=!1){const o={},s={};def(s,InternalObjectKey,1),e.propsDefaults=Object.create(null),setFullProps(e,n,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);t?e.props=r?o:shallowReactive(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function updateProps(e,n,t,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,l=toRaw(o),[a]=e.propsOptions;let c=!1;if((r||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(isEmitListener(e.emitsOptions,d))continue;const m=n[d];if(a)if(hasOwn(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const v=camelize(d);o[v]=resolvePropValue(a,l,v,m,e,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{setFullProps(e,n,o,s)&&(c=!0);let f;for(const u in l)(!n||!hasOwn(n,u)&&((f=hyphenate(u))===u||!hasOwn(n,f)))&&(a?t&&(t[u]!==void 0||t[f]!==void 0)&&(o[u]=resolvePropValue(a,l,u,void 0,e,!0)):delete o[u]);if(s!==l)for(const u in s)(!n||!hasOwn(n,u))&&(delete s[u],c=!0)}c&&trigger(e,"set","$attrs")}function setFullProps(e,n,t,r){const[o,s]=e.propsOptions;let i=!1,l;if(n)for(let a in n){if(isReservedProp(a))continue;const c=n[a];let f;o&&hasOwn(o,f=camelize(a))?!s||!s.includes(f)?t[f]=c:(l||(l={}))[f]=c:isEmitListener(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,i=!0)}if(s){const a=toRaw(t),c=l||EMPTY_OBJ;for(let f=0;f<s.length;f++){const u=s[f];t[u]=resolvePropValue(o,a,u,c[u],e,!hasOwn(c,u))}}return i}function resolvePropValue(e,n,t,r,o,s){const i=e[t];if(i!=null){const l=hasOwn(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&isFunction(a)){const{propsDefaults:c}=o;t in c?r=c[t]:(setCurrentInstance(o),r=c[t]=a.call(null,n),unsetCurrentInstance())}else r=a}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===hyphenate(t))&&(r=!0))}return r}function normalizePropsOptions(e,n,t=!1){const r=n.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},l=[];let a=!1;if(!isFunction(e)){const f=u=>{a=!0;const[d,m]=normalizePropsOptions(u,n,!0);extend(i,d),m&&l.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!a)return isObject$1(e)&&r.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray$2(s))for(let f=0;f<s.length;f++){const u=camelize(s[f]);validatePropName(u)&&(i[u]=EMPTY_OBJ)}else if(s)for(const f in s){const u=camelize(f);if(validatePropName(u)){const d=s[f],m=i[u]=isArray$2(d)||isFunction(d)?{type:d}:Object.assign({},d);if(m){const v=getTypeIndex(Boolean,m.type),R=getTypeIndex(String,m.type);m[0]=v>-1,m[1]=R<0||v<R,(v>-1||hasOwn(m,"default"))&&l.push(u)}}}const c=[i,l];return isObject$1(e)&&r.set(e,c),c}function validatePropName(e){return e[0]!=="$"}function getType(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function isSameType(e,n){return getType(e)===getType(n)}function getTypeIndex(e,n){return isArray$2(n)?n.findIndex(t=>isSameType(t,e)):isFunction(n)&&isSameType(n,e)?0:-1}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray$2(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot$1=(e,n,t)=>{if(n._n)return n;const r=withCtx((...o)=>normalizeSlotValue(n(...o)),t);return r._c=!1,r},normalizeObjectSlots=(e,n,t)=>{const r=e._ctx;for(const o in e){if(isInternalKey(o))continue;const s=e[o];if(isFunction(s))n[o]=normalizeSlot$1(o,s,r);else if(s!=null){const i=normalizeSlotValue(s);n[o]=()=>i}}},normalizeVNodeSlots=(e,n)=>{const t=normalizeSlotValue(n);e.slots.default=()=>t},initSlots=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=toRaw(n),def(n,"_",t)):normalizeObjectSlots(n,e.slots={})}else e.slots={},n&&normalizeVNodeSlots(e,n);def(e.slots,InternalObjectKey,1)},updateSlots=(e,n,t)=>{const{vnode:r,slots:o}=e;let s=!0,i=EMPTY_OBJ;if(r.shapeFlag&32){const l=n._;l?t&&l===1?s=!1:(extend(o,n),!t&&l===1&&delete o._):(s=!n.$stable,normalizeObjectSlots(n,o)),i=n}else n&&(normalizeVNodeSlots(e,n),i={default:1});if(s)for(const l in o)!isInternalKey(l)&&!(l in i)&&delete o[l]};function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,n){return function(r,o=null){isFunction(r)||(r=Object.assign({},r)),o!=null&&!isObject$1(o)&&(o=null);const s=createAppContext(),i=new Set;let l=!1;const a=s.app={_uid:uid$1++,_component:r,_props:o,_container:null,_context:s,_instance:null,version,get config(){return s.config},set config(c){},use(c,...f){return i.has(c)||(c&&isFunction(c.install)?(i.add(c),c.install(a,...f)):isFunction(c)&&(i.add(c),c(a,...f))),a},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),a},component(c,f){return f?(s.components[c]=f,a):s.components[c]},directive(c,f){return f?(s.directives[c]=f,a):s.directives[c]},mount(c,f,u){if(!l){const d=createVNode(r,o);return d.appContext=s,f&&n?n(d,c):e(d,c,u),l=!0,a._container=c,c.__vue_app__=a,getExposeProxy(d.component)||d.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return s.provides[c]=f,a}};return a}}function setRef(e,n,t,r,o=!1){if(isArray$2(e)){e.forEach((d,m)=>setRef(d,n&&(isArray$2(n)?n[m]:n),t,r,o));return}if(isAsyncWrapper(r)&&!o)return;const s=r.shapeFlag&4?getExposeProxy(r.component)||r.component.proxy:r.el,i=o?null:s,{i:l,r:a}=e,c=n&&n.r,f=l.refs===EMPTY_OBJ?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(isString(c)?(f[c]=null,hasOwn(u,c)&&(u[c]=null)):isRef(c)&&(c.value=null)),isFunction(a))callWithErrorHandling(a,l,12,[i,f]);else{const d=isString(a),m=isRef(a);if(d||m){const v=()=>{if(e.f){const R=d?hasOwn(u,a)?u[a]:f[a]:a.value;o?isArray$2(R)&&remove(R,s):isArray$2(R)?R.includes(s)||R.push(s):d?(f[a]=[s],hasOwn(u,a)&&(u[a]=f[a])):(a.value=[s],e.k&&(f[e.k]=a.value))}else d?(f[a]=i,hasOwn(u,a)&&(u[a]=i)):m&&(a.value=i,e.k&&(f[e.k]=i))};i?(v.id=-1,queuePostRenderEffect(v,t)):v()}}}let hasMismatch=!1;const isSVGContainer=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",isComment=e=>e.nodeType===8;function createHydrationFunctions(e){const{mt:n,p:t,o:{patchProp:r,createText:o,nextSibling:s,parentNode:i,remove:l,insert:a,createComment:c}}=e,f=(w,y)=>{if(!y.hasChildNodes()){t(null,w,y),flushPostFlushCbs(),y._vnode=w;return}hasMismatch=!1,u(y.firstChild,w,null,null,null),flushPostFlushCbs(),y._vnode=w,hasMismatch&&console.error("Hydration completed but contains mismatches.")},u=(w,y,k,O,C,D=!1)=>{const Y=isComment(w)&&w.data==="[",N=()=>R(w,y,k,O,C,Y),{type:z,ref:$,shapeFlag:ee,patchFlag:V}=y;let B=w.nodeType;y.el=w,V===-2&&(D=!1,y.dynamicChildren=null);let g=null;switch(z){case Text:B!==3?y.children===""?(a(y.el=o(""),i(w),w),g=w):g=N():(w.data!==y.children&&(hasMismatch=!0,w.data=y.children),g=s(w));break;case Comment:B!==8||Y?g=N():g=s(w);break;case Static:if(Y&&(w=s(w),B=w.nodeType),B===1||B===3){g=w;const b=!y.children.length;for(let P=0;P<y.staticCount;P++)b&&(y.children+=g.nodeType===1?g.outerHTML:g.data),P===y.staticCount-1&&(y.anchor=g),g=s(g);return Y?s(g):g}else N();break;case Fragment$1:Y?g=v(w,y,k,O,C,D):g=N();break;default:if(ee&1)B!==1||y.type.toLowerCase()!==w.tagName.toLowerCase()?g=N():g=d(w,y,k,O,C,D);else if(ee&6){y.slotScopeIds=C;const b=i(w);if(n(y,b,null,k,O,isSVGContainer(b),D),g=Y?x(w):s(w),g&&isComment(g)&&g.data==="teleport end"&&(g=s(g)),isAsyncWrapper(y)){let P;Y?(P=createVNode(Fragment$1),P.anchor=g?g.previousSibling:b.lastChild):P=w.nodeType===3?createTextVNode(""):createVNode("div"),P.el=w,y.component.subTree=P}}else ee&64?B!==8?g=N():g=y.type.hydrate(w,y,k,O,C,D,e,m):ee&128&&(g=y.type.hydrate(w,y,k,O,isSVGContainer(i(w)),C,D,e,u))}return $!=null&&setRef($,null,O,y),g},d=(w,y,k,O,C,D)=>{D=D||!!y.dynamicChildren;const{type:Y,props:N,patchFlag:z,shapeFlag:$,dirs:ee}=y,V=Y==="input"&&ee||Y==="option";if(V||z!==-1){if(ee&&invokeDirectiveHook(y,null,k,"created"),N)if(V||!D||z&48)for(const g in N)(V&&g.endsWith("value")||isOn(g)&&!isReservedProp(g))&&r(w,g,null,N[g],!1,void 0,k);else N.onClick&&r(w,"onClick",null,N.onClick,!1,void 0,k);let B;if((B=N&&N.onVnodeBeforeMount)&&invokeVNodeHook(B,k,y),ee&&invokeDirectiveHook(y,null,k,"beforeMount"),((B=N&&N.onVnodeMounted)||ee)&&queueEffectWithSuspense(()=>{B&&invokeVNodeHook(B,k,y),ee&&invokeDirectiveHook(y,null,k,"mounted")},O),$&16&&!(N&&(N.innerHTML||N.textContent))){let g=m(w.firstChild,y,w,k,O,C,D);for(;g;){hasMismatch=!0;const b=g;g=g.nextSibling,l(b)}}else $&8&&w.textContent!==y.children&&(hasMismatch=!0,w.textContent=y.children)}return w.nextSibling},m=(w,y,k,O,C,D,Y)=>{Y=Y||!!y.dynamicChildren;const N=y.children,z=N.length;for(let $=0;$<z;$++){const ee=Y?N[$]:N[$]=normalizeVNode(N[$]);if(w)w=u(w,ee,O,C,D,Y);else{if(ee.type===Text&&!ee.children)continue;hasMismatch=!0,t(null,ee,k,null,O,C,isSVGContainer(k),D)}}return w},v=(w,y,k,O,C,D)=>{const{slotScopeIds:Y}=y;Y&&(C=C?C.concat(Y):Y);const N=i(w),z=m(s(w),y,N,k,O,C,D);return z&&isComment(z)&&z.data==="]"?s(y.anchor=z):(hasMismatch=!0,a(y.anchor=c("]"),N,z),z)},R=(w,y,k,O,C,D)=>{if(hasMismatch=!0,y.el=null,D){const z=x(w);for(;;){const $=s(w);if($&&$!==z)l($);else break}}const Y=s(w),N=i(w);return l(w),t(null,y,N,Y,k,O,isSVGContainer(N),C),Y},x=w=>{let y=0;for(;w;)if(w=s(w),w&&isComment(w)&&(w.data==="["&&y++,w.data==="]")){if(y===0)return s(w);y--}return w};return[f,u]}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function createHydrationRenderer(e){return baseCreateRenderer(e,createHydrationFunctions)}function baseCreateRenderer(e,n){const t=getGlobalThis();t.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:l,createComment:a,setText:c,setElementText:f,parentNode:u,nextSibling:d,setScopeId:m=NOOP,insertStaticContent:v}=e,R=(_,E,T,j=null,L=null,q=null,G=!1,U=null,K=!!E.dynamicChildren)=>{if(_===E)return;_&&!isSameVNodeType(_,E)&&(j=W(_),J(_,L,q,!0),_=null),E.patchFlag===-2&&(K=!1,E.dynamicChildren=null);const{type:M,ref:ne,shapeFlag:Z}=E;switch(M){case Text:x(_,E,T,j);break;case Comment:w(_,E,T,j);break;case Static:_==null&&y(E,T,j,G);break;case Fragment$1:V(_,E,T,j,L,q,G,U,K);break;default:Z&1?C(_,E,T,j,L,q,G,U,K):Z&6?B(_,E,T,j,L,q,G,U,K):(Z&64||Z&128)&&M.process(_,E,T,j,L,q,G,U,K,oe)}ne!=null&&L&&setRef(ne,_&&_.ref,q,E||_,!E)},x=(_,E,T,j)=>{if(_==null)r(E.el=l(E.children),T,j);else{const L=E.el=_.el;E.children!==_.children&&c(L,E.children)}},w=(_,E,T,j)=>{_==null?r(E.el=a(E.children||""),T,j):E.el=_.el},y=(_,E,T,j)=>{[_.el,_.anchor]=v(_.children,E,T,j,_.el,_.anchor)},k=({el:_,anchor:E},T,j)=>{let L;for(;_&&_!==E;)L=d(_),r(_,T,j),_=L;r(E,T,j)},O=({el:_,anchor:E})=>{let T;for(;_&&_!==E;)T=d(_),o(_),_=T;o(E)},C=(_,E,T,j,L,q,G,U,K)=>{G=G||E.type==="svg",_==null?D(E,T,j,L,q,G,U,K):z(_,E,L,q,G,U,K)},D=(_,E,T,j,L,q,G,U)=>{let K,M;const{type:ne,props:Z,shapeFlag:te,transition:ie,dirs:le}=_;if(K=_.el=i(_.type,q,Z&&Z.is,Z),te&8?f(K,_.children):te&16&&N(_.children,K,null,j,L,q&&ne!=="foreignObject",G,U),le&&invokeDirectiveHook(_,null,j,"created"),Y(K,_,_.scopeId,G,j),Z){for(const fe in Z)fe!=="value"&&!isReservedProp(fe)&&s(K,fe,null,Z[fe],q,_.children,j,L,H);"value"in Z&&s(K,"value",null,Z.value),(M=Z.onVnodeBeforeMount)&&invokeVNodeHook(M,j,_)}le&&invokeDirectiveHook(_,null,j,"beforeMount");const pe=(!L||L&&!L.pendingBranch)&&ie&&!ie.persisted;pe&&ie.beforeEnter(K),r(K,E,T),((M=Z&&Z.onVnodeMounted)||pe||le)&&queuePostRenderEffect(()=>{M&&invokeVNodeHook(M,j,_),pe&&ie.enter(K),le&&invokeDirectiveHook(_,null,j,"mounted")},L)},Y=(_,E,T,j,L)=>{if(T&&m(_,T),j)for(let q=0;q<j.length;q++)m(_,j[q]);if(L){let q=L.subTree;if(E===q){const G=L.vnode;Y(_,G,G.scopeId,G.slotScopeIds,L.parent)}}},N=(_,E,T,j,L,q,G,U,K=0)=>{for(let M=K;M<_.length;M++){const ne=_[M]=U?cloneIfMounted(_[M]):normalizeVNode(_[M]);R(null,ne,E,T,j,L,q,G,U)}},z=(_,E,T,j,L,q,G)=>{const U=E.el=_.el;let{patchFlag:K,dynamicChildren:M,dirs:ne}=E;K|=_.patchFlag&16;const Z=_.props||EMPTY_OBJ,te=E.props||EMPTY_OBJ;let ie;T&&toggleRecurse(T,!1),(ie=te.onVnodeBeforeUpdate)&&invokeVNodeHook(ie,T,E,_),ne&&invokeDirectiveHook(E,_,T,"beforeUpdate"),T&&toggleRecurse(T,!0);const le=L&&E.type!=="foreignObject";if(M?$(_.dynamicChildren,M,U,T,j,le,q):G||I(_,E,U,null,T,j,le,q,!1),K>0){if(K&16)ee(U,E,Z,te,T,j,L);else if(K&2&&Z.class!==te.class&&s(U,"class",null,te.class,L),K&4&&s(U,"style",Z.style,te.style,L),K&8){const pe=E.dynamicProps;for(let fe=0;fe<pe.length;fe++){const de=pe[fe],he=Z[de],ge=te[de];(ge!==he||de==="value")&&s(U,de,he,ge,L,_.children,T,j,H)}}K&1&&_.children!==E.children&&f(U,E.children)}else!G&&M==null&&ee(U,E,Z,te,T,j,L);((ie=te.onVnodeUpdated)||ne)&&queuePostRenderEffect(()=>{ie&&invokeVNodeHook(ie,T,E,_),ne&&invokeDirectiveHook(E,_,T,"updated")},j)},$=(_,E,T,j,L,q,G)=>{for(let U=0;U<E.length;U++){const K=_[U],M=E[U],ne=K.el&&(K.type===Fragment$1||!isSameVNodeType(K,M)||K.shapeFlag&70)?u(K.el):T;R(K,M,ne,null,j,L,q,G,!0)}},ee=(_,E,T,j,L,q,G)=>{if(T!==j){if(T!==EMPTY_OBJ)for(const U in T)!isReservedProp(U)&&!(U in j)&&s(_,U,T[U],null,G,E.children,L,q,H);for(const U in j){if(isReservedProp(U))continue;const K=j[U],M=T[U];K!==M&&U!=="value"&&s(_,U,M,K,G,E.children,L,q,H)}"value"in j&&s(_,"value",T.value,j.value)}},V=(_,E,T,j,L,q,G,U,K)=>{const M=E.el=_?_.el:l(""),ne=E.anchor=_?_.anchor:l("");let{patchFlag:Z,dynamicChildren:te,slotScopeIds:ie}=E;ie&&(U=U?U.concat(ie):ie),_==null?(r(M,T,j),r(ne,T,j),N(E.children,T,ne,L,q,G,U,K)):Z>0&&Z&64&&te&&_.dynamicChildren?($(_.dynamicChildren,te,T,L,q,G,U),(E.key!=null||L&&E===L.subTree)&&traverseStaticChildren(_,E,!0)):I(_,E,T,ne,L,q,G,U,K)},B=(_,E,T,j,L,q,G,U,K)=>{E.slotScopeIds=U,_==null?E.shapeFlag&512?L.ctx.activate(E,T,j,G,K):g(E,T,j,L,q,G,K):b(_,E,K)},g=(_,E,T,j,L,q,G)=>{const U=_.component=createComponentInstance(_,j,L);if(isKeepAlive(_)&&(U.ctx.renderer=oe),setupComponent(U),U.asyncDep){if(L&&L.registerDep(U,P),!_.el){const K=U.subTree=createVNode(Comment);w(null,K,E,T)}return}P(U,_,E,T,L,q,G)},b=(_,E,T)=>{const j=E.component=_.component;if(shouldUpdateComponent(_,E,T))if(j.asyncDep&&!j.asyncResolved){S(j,E,T);return}else j.next=E,invalidateJob(j.update),j.update();else E.el=_.el,j.vnode=E},P=(_,E,T,j,L,q,G)=>{const U=()=>{if(_.isMounted){let{next:ne,bu:Z,u:te,parent:ie,vnode:le}=_,pe=ne,fe;toggleRecurse(_,!1),ne?(ne.el=le.el,S(_,ne,G)):ne=le,Z&&invokeArrayFns(Z),(fe=ne.props&&ne.props.onVnodeBeforeUpdate)&&invokeVNodeHook(fe,ie,ne,le),toggleRecurse(_,!0);const de=renderComponentRoot(_),he=_.subTree;_.subTree=de,R(he,de,u(he.el),W(he),_,L,q),ne.el=de.el,pe===null&&updateHOCHostEl(_,de.el),te&&queuePostRenderEffect(te,L),(fe=ne.props&&ne.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(fe,ie,ne,le),L)}else{let ne;const{el:Z,props:te}=E,{bm:ie,m:le,parent:pe}=_,fe=isAsyncWrapper(E);if(toggleRecurse(_,!1),ie&&invokeArrayFns(ie),!fe&&(ne=te&&te.onVnodeBeforeMount)&&invokeVNodeHook(ne,pe,E),toggleRecurse(_,!0),Z&&ae){const de=()=>{_.subTree=renderComponentRoot(_),ae(Z,_.subTree,_,L,null)};fe?E.type.__asyncLoader().then(()=>!_.isUnmounted&&de()):de()}else{const de=_.subTree=renderComponentRoot(_);R(null,de,T,j,_,L,q),E.el=de.el}if(le&&queuePostRenderEffect(le,L),!fe&&(ne=te&&te.onVnodeMounted)){const de=E;queuePostRenderEffect(()=>invokeVNodeHook(ne,pe,de),L)}(E.shapeFlag&256||pe&&isAsyncWrapper(pe.vnode)&&pe.vnode.shapeFlag&256)&&_.a&&queuePostRenderEffect(_.a,L),_.isMounted=!0,E=T=j=null}},K=_.effect=new ReactiveEffect(U,()=>queueJob(M),_.scope),M=_.update=()=>K.run();M.id=_.uid,toggleRecurse(_,!0),M()},S=(_,E,T)=>{E.component=_;const j=_.vnode.props;_.vnode=E,_.next=null,updateProps(_,E.props,j,T),updateSlots(_,E.children,T),pauseTracking(),flushPreFlushCbs(),resetTracking()},I=(_,E,T,j,L,q,G,U,K=!1)=>{const M=_&&_.children,ne=_?_.shapeFlag:0,Z=E.children,{patchFlag:te,shapeFlag:ie}=E;if(te>0){if(te&128){Q(M,Z,T,j,L,q,G,U,K);return}else if(te&256){F(M,Z,T,j,L,q,G,U,K);return}}ie&8?(ne&16&&H(M,L,q),Z!==M&&f(T,Z)):ne&16?ie&16?Q(M,Z,T,j,L,q,G,U,K):H(M,L,q,!0):(ne&8&&f(T,""),ie&16&&N(Z,T,j,L,q,G,U,K))},F=(_,E,T,j,L,q,G,U,K)=>{_=_||EMPTY_ARR,E=E||EMPTY_ARR;const M=_.length,ne=E.length,Z=Math.min(M,ne);let te;for(te=0;te<Z;te++){const ie=E[te]=K?cloneIfMounted(E[te]):normalizeVNode(E[te]);R(_[te],ie,T,null,L,q,G,U,K)}M>ne?H(_,L,q,!0,!1,Z):N(E,T,j,L,q,G,U,K,Z)},Q=(_,E,T,j,L,q,G,U,K)=>{let M=0;const ne=E.length;let Z=_.length-1,te=ne-1;for(;M<=Z&&M<=te;){const ie=_[M],le=E[M]=K?cloneIfMounted(E[M]):normalizeVNode(E[M]);if(isSameVNodeType(ie,le))R(ie,le,T,null,L,q,G,U,K);else break;M++}for(;M<=Z&&M<=te;){const ie=_[Z],le=E[te]=K?cloneIfMounted(E[te]):normalizeVNode(E[te]);if(isSameVNodeType(ie,le))R(ie,le,T,null,L,q,G,U,K);else break;Z--,te--}if(M>Z){if(M<=te){const ie=te+1,le=ie<ne?E[ie].el:j;for(;M<=te;)R(null,E[M]=K?cloneIfMounted(E[M]):normalizeVNode(E[M]),T,le,L,q,G,U,K),M++}}else if(M>te)for(;M<=Z;)J(_[M],L,q,!0),M++;else{const ie=M,le=M,pe=new Map;for(M=le;M<=te;M++){const _e=E[M]=K?cloneIfMounted(E[M]):normalizeVNode(E[M]);_e.key!=null&&pe.set(_e.key,M)}let fe,de=0;const he=te-le+1;let ge=!1,be=0;const ye=new Array(he);for(M=0;M<he;M++)ye[M]=0;for(M=ie;M<=Z;M++){const _e=_[M];if(de>=he){J(_e,L,q,!0);continue}let me;if(_e.key!=null)me=pe.get(_e.key);else for(fe=le;fe<=te;fe++)if(ye[fe-le]===0&&isSameVNodeType(_e,E[fe])){me=fe;break}me===void 0?J(_e,L,q,!0):(ye[me-le]=M+1,me>=be?be=me:ge=!0,R(_e,E[me],T,null,L,q,G,U,K),de++)}const ve=ge?getSequence(ye):EMPTY_ARR;for(fe=ve.length-1,M=he-1;M>=0;M--){const _e=le+M,me=E[_e],Ee=_e+1<ne?E[_e+1].el:j;ye[M]===0?R(null,me,T,Ee,L,q,G,U,K):ge&&(fe<0||M!==ve[fe]?se(me,T,Ee,2):fe--)}}},se=(_,E,T,j,L=null)=>{const{el:q,type:G,transition:U,children:K,shapeFlag:M}=_;if(M&6){se(_.component.subTree,E,T,j);return}if(M&128){_.suspense.move(E,T,j);return}if(M&64){G.move(_,E,T,oe);return}if(G===Fragment$1){r(q,E,T);for(let Z=0;Z<K.length;Z++)se(K[Z],E,T,j);r(_.anchor,E,T);return}if(G===Static){k(_,E,T);return}if(j!==2&&M&1&&U)if(j===0)U.beforeEnter(q),r(q,E,T),queuePostRenderEffect(()=>U.enter(q),L);else{const{leave:Z,delayLeave:te,afterLeave:ie}=U,le=()=>r(q,E,T),pe=()=>{Z(q,()=>{le(),ie&&ie()})};te?te(q,le,pe):pe()}else r(q,E,T)},J=(_,E,T,j=!1,L=!1)=>{const{type:q,props:G,ref:U,children:K,dynamicChildren:M,shapeFlag:ne,patchFlag:Z,dirs:te}=_;if(U!=null&&setRef(U,null,T,_,!0),ne&256){E.ctx.deactivate(_);return}const ie=ne&1&&te,le=!isAsyncWrapper(_);let pe;if(le&&(pe=G&&G.onVnodeBeforeUnmount)&&invokeVNodeHook(pe,E,_),ne&6)A(_.component,T,j);else{if(ne&128){_.suspense.unmount(T,j);return}ie&&invokeDirectiveHook(_,null,E,"beforeUnmount"),ne&64?_.type.remove(_,E,T,L,oe,j):M&&(q!==Fragment$1||Z>0&&Z&64)?H(M,E,T,!1,!0):(q===Fragment$1&&Z&384||!L&&ne&16)&&H(K,E,T),j&&re(_)}(le&&(pe=G&&G.onVnodeUnmounted)||ie)&&queuePostRenderEffect(()=>{pe&&invokeVNodeHook(pe,E,_),ie&&invokeDirectiveHook(_,null,E,"unmounted")},T)},re=_=>{const{type:E,el:T,anchor:j,transition:L}=_;if(E===Fragment$1){ce(T,j);return}if(E===Static){O(_);return}const q=()=>{o(T),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:U}=L,K=()=>G(T,q);U?U(_.el,q,K):K()}else q()},ce=(_,E)=>{let T;for(;_!==E;)T=d(_),o(_),_=T;o(E)},A=(_,E,T)=>{const{bum:j,scope:L,update:q,subTree:G,um:U}=_;j&&invokeArrayFns(j),L.stop(),q&&(q.active=!1,J(G,_,E,T)),U&&queuePostRenderEffect(U,E),queuePostRenderEffect(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},H=(_,E,T,j=!1,L=!1,q=0)=>{for(let G=q;G<_.length;G++)J(_[G],E,T,j,L)},W=_=>_.shapeFlag&6?W(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),X=(_,E,T)=>{_==null?E._vnode&&J(E._vnode,null,null,!0):R(E._vnode||null,_,E,null,null,null,T),flushPreFlushCbs(),flushPostFlushCbs(),E._vnode=_},oe={p:R,um:J,m:se,r:re,mt:g,mc:N,pc:I,pbc:$,n:W,o:e};let ue,ae;return n&&([ue,ae]=n(oe)),{render:X,hydrate:ue,createApp:createAppAPI(X,ue)}}function toggleRecurse({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function traverseStaticChildren(e,n,t=!1){const r=e.children,o=n.children;if(isArray$2(r)&&isArray$2(o))for(let s=0;s<r.length;s++){const i=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=cloneIfMounted(o[s]),l.el=i.el),t||traverseStaticChildren(i,l)),l.type===Text&&(l.el=i.el)}}function getSequence(e){const n=e.slice(),t=[0];let r,o,s,i,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(o=t[t.length-1],e[o]<c){n[r]=o,t.push(r);continue}for(s=0,i=t.length-1;s<i;)l=s+i>>1,e[t[l]]<c?s=l+1:i=l;c<e[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,i=t[s-1];s-- >0;)t[s]=i,i=n[i];return t}const isTeleport=e=>e.__isTeleport,Fragment$1=Symbol(void 0),Text=Symbol(void 0),Comment=Symbol(void 0),Static=Symbol(void 0),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,n,t,r,o,s){return setupBlock(createBaseVNode(e,n,t,r,o,s,!0))}function createBlock(e,n,t,r,o){return setupBlock(createVNode(e,n,t,r,o,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,n){return e.type===n.type&&e.key===n.key}const InternalObjectKey="__vInternal",normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:n,ref_for:t})=>e!=null?isString(e)||isRef(e)||isFunction(e)?{i:currentRenderingInstance,r:e,k:n,f:!!t}:e:null;function createBaseVNode(e,n=null,t=null,r=0,o=null,s=e===Fragment$1?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&normalizeKey(n),ref:n&&normalizeRef(n),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return l?(normalizeChildren(a,t),s&128&&e.normalize(a)):t&&(a.shapeFlag|=isString(t)?8:16),isBlockTreeEnabled>0&&!i&&currentBlock&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&currentBlock.push(a),a}const createVNode=_createVNode;function _createVNode(e,n=null,t=null,r=0,o=null,s=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const l=cloneVNode(e,n,!0);return t&&normalizeChildren(l,t),isBlockTreeEnabled>0&&!s&&currentBlock&&(l.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=l:currentBlock.push(l)),l.patchFlag|=-2,l}if(isClassComponent(e)&&(e=e.__vccOpts),n){n=guardReactiveProps(n);let{class:l,style:a}=n;l&&!isString(l)&&(n.class=normalizeClass(l)),isObject$1(a)&&(isProxy(a)&&!isArray$2(a)&&(a=extend({},a)),n.style=normalizeStyle(a))}const i=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject$1(e)?4:isFunction(e)?2:0;return createBaseVNode(e,n,t,r,o,i,s,!0)}function guardReactiveProps(e){return e?isProxy(e)||InternalObjectKey in e?extend({},e):e:null}function cloneVNode(e,n,t=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,l=n?mergeProps(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&normalizeKey(l),ref:n&&n.ref?t&&o?isArray$2(o)?o.concat(normalizeRef(n)):[o,normalizeRef(n)]:normalizeRef(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Fragment$1?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function createTextVNode(e=" ",n=0){return createVNode(Text,null,e,n)}function createCommentVNode(e="",n=!1){return n?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray$2(e)?createVNode(Fragment$1,null,e.slice()):typeof e=="object"?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(isArray$2(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),normalizeChildren(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(InternalObjectKey in n)?n._ctx=currentRenderingInstance:o===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else isFunction(n)?(n={default:n,_ctx:currentRenderingInstance},t=32):(n=String(n),r&64?(t=16,n=[createTextVNode(n)]):t=8);e.children=n,e.shapeFlag|=t}function mergeProps(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=normalizeClass([n.class,r.class]));else if(o==="style")n.style=normalizeStyle([n.style,r.style]);else if(isOn(o)){const s=n[o],i=r[o];i&&s!==i&&!(isArray$2(s)&&s.includes(i))&&(n[o]=s?[].concat(s,i):i)}else o!==""&&(n[o]=r[o])}return n}function invokeVNodeHook(e,n,t,r=null){callWithAsyncErrorHandling(e,n,7,[t,r])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||emptyAppContext,s={uid:uid++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(r,o),emitsOptions:normalizeEmitsOptions(r,o),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:r.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=emit.bind(null,s),e.ce&&e.ce(s),s}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance,setCurrentInstance=e=>{currentInstance=e,e.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),currentInstance=null};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,n=!1){isInSSRComponentSetup=n;const{props:t,children:r}=e.vnode,o=isStatefulComponent(e);initProps(e,t,o,n),initSlots(e,r);const s=o?setupStatefulComponent(e,n):void 0;return isInSSRComponentSetup=!1,s}function setupStatefulComponent(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=markRaw(new Proxy(e.ctx,PublicInstanceProxyHandlers));const{setup:r}=t;if(r){const o=e.setupContext=r.length>1?createSetupContext(e):null;setCurrentInstance(e),pauseTracking();const s=callWithErrorHandling(r,e,0,[e.props,o]);if(resetTracking(),unsetCurrentInstance(),isPromise(s)){if(s.then(unsetCurrentInstance,unsetCurrentInstance),n)return s.then(i=>{handleSetupResult(e,i,n)}).catch(i=>{handleError(i,e,0)});e.asyncDep=s}else handleSetupResult(e,s,n)}else finishComponentSetup(e,n)}function handleSetupResult(e,n,t){isFunction(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:isObject$1(n)&&(e.setupState=proxyRefs(n)),finishComponentSetup(e,t)}let compile;function finishComponentSetup(e,n,t){const r=e.type;if(!e.render){if(!n&&compile&&!r.render){const o=r.template||resolveMergedOptions(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,c=extend(extend({isCustomElement:s,delimiters:l},i),a);r.render=compile(o,c)}}e.render=r.render||NOOP}setCurrentInstance(e),pauseTracking(),applyOptions(e),resetTracking(),unsetCurrentInstance()}function createAttrsProxy(e){return new Proxy(e.attrs,{get(n,t){return track$1(e,"get","$attrs"),n[t]}})}function createSetupContext(e){const n=r=>{e.exposed=r||{}};let t;return{get attrs(){return t||(t=createAttrsProxy(e))},slots:e.slots,emit:e.emit,expose:n}}function getExposeProxy(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](e)},has(n,t){return t in n||t in publicPropertiesMap}}))}function getComponentName(e,n=!0){return isFunction(e)?e.displayName||e.name:e.name||n&&e.__name}function isClassComponent(e){return isFunction(e)&&"__vccOpts"in e}const computed=(e,n)=>computed$1(e,n,isInSSRComponentSetup);function withAsyncContext(e){const n=getCurrentInstance();let t=e();return unsetCurrentInstance(),isPromise(t)&&(t=t.catch(r=>{throw setCurrentInstance(n),r})),[t,()=>setCurrentInstance(n)]}function h(e,n,t){const r=arguments.length;return r===2?isObject$1(n)&&!isArray$2(n)?isVNode(n)?createVNode(e,null,[n]):createVNode(e,n):createVNode(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&isVNode(t)&&(t=[t]),createVNode(e,n,t))}const ssrContextKey=Symbol(""),useSSRContext=()=>inject(ssrContextKey),version="3.2.47",svgNS="http://www.w3.org/2000/svg",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n?doc.createElementNS(svgNS,e):doc.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,s){const i=t?t.previousSibling:n.lastChild;if(o&&(o===s||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===s||!(o=o.nextSibling)););else{templateContainer.innerHTML=r?`<svg>${e}</svg>`:e;const l=templateContainer.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}n.insertBefore(l,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function patchClass(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function patchStyle(e,n,t){const r=e.style,o=isString(t);if(t&&!o){if(n&&!isString(n))for(const s in n)t[s]==null&&setStyle(r,s,"");for(const s in t)setStyle(r,s,t[s])}else{const s=r.display;o?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const importantRE=/\s*!important$/;function setStyle(e,n,t){if(isArray$2(t))t.forEach(r=>setStyle(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=autoPrefix(e,n);importantRE.test(t)?e.setProperty(hyphenate(r),t.replace(importantRE,""),"important"):e[r]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,n){const t=prefixCache[n];if(t)return t;let r=camelize(n);if(r!=="filter"&&r in e)return prefixCache[n]=r;r=capitalize(r);for(let o=0;o<prefixes.length;o++){const s=prefixes[o]+r;if(s in e)return prefixCache[n]=s}return n}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,n,t,r,o){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(xlinkNS,n.slice(6,n.length)):e.setAttributeNS(xlinkNS,n,t);else{const s=isSpecialBooleanAttr(n);t==null||s&&!includeBooleanAttr(t)?e.removeAttribute(n):e.setAttribute(n,s?"":t)}}function patchDOMProp(e,n,t,r,o,s,i){if(n==="innerHTML"||n==="textContent"){r&&i(r,o,s),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const a=t??"";(e.value!==a||e.tagName==="OPTION")&&(e.value=a),t==null&&e.removeAttribute(n);return}let l=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=includeBooleanAttr(t):t==null&&a==="string"?(t="",l=!0):a==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(n)}function addEventListener(e,n,t,r){e.addEventListener(n,t,r)}function removeEventListener(e,n,t,r){e.removeEventListener(n,t,r)}function patchEvent(e,n,t,r,o=null){const s=e._vei||(e._vei={}),i=s[n];if(r&&i)i.value=r;else{const[l,a]=parseName(n);if(r){const c=s[n]=createInvoker(r,o);addEventListener(e,l,c,a)}else i&&(removeEventListener(e,l,i,a),s[n]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let n;if(optionsModifierRE.test(e)){n={};let r;for(;r=e.match(optionsModifierRE);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),n]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(r,t.value),n,5,[r])};return t.value=e,t.attached=getNow(),t}function patchStopImmediatePropagation(e,n){if(isArray$2(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const nativeOnRE=/^on[a-z]/,patchProp=(e,n,t,r,o=!1,s,i,l,a)=>{n==="class"?patchClass(e,r,o):n==="style"?patchStyle(e,t,r):isOn(n)?isModelListener(n)||patchEvent(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):shouldSetAsProp(e,n,r,o))?patchDOMProp(e,n,r,s,i,l,a):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),patchAttr(e,n,r,o))};function shouldSetAsProp(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&nativeOnRE.test(n)&&isFunction(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||nativeOnRE.test(n)&&isString(t)?!1:n in e}const TRANSITION="transition",ANIMATION="animation",Transition=(e,{slots:n})=>h(BaseTransition,resolveTransitionProps(e),n);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Transition.props=extend({},BaseTransition.props,DOMTransitionPropsValidators);const callHook=(e,n=[])=>{isArray$2(e)?e.forEach(t=>t(...n)):e&&e(...n)},hasExplicitCallback=e=>e?isArray$2(e)?e.some(n=>n.length>1):e.length>1:!1;function resolveTransitionProps(e){const n={};for(const V in e)V in DOMTransitionPropsValidators||(n[V]=e[V]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:s=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:a=s,appearActiveClass:c=i,appearToClass:f=l,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,v=normalizeDuration(o),R=v&&v[0],x=v&&v[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:k,onLeave:O,onLeaveCancelled:C,onBeforeAppear:D=w,onAppear:Y=y,onAppearCancelled:N=k}=n,z=(V,B,g)=>{removeTransitionClass(V,B?f:l),removeTransitionClass(V,B?c:i),g&&g()},$=(V,B)=>{V._isLeaving=!1,removeTransitionClass(V,u),removeTransitionClass(V,m),removeTransitionClass(V,d),B&&B()},ee=V=>(B,g)=>{const b=V?Y:y,P=()=>z(B,V,g);callHook(b,[B,P]),nextFrame(()=>{removeTransitionClass(B,V?a:s),addTransitionClass(B,V?f:l),hasExplicitCallback(b)||whenTransitionEnds(B,r,R,P)})};return extend(n,{onBeforeEnter(V){callHook(w,[V]),addTransitionClass(V,s),addTransitionClass(V,i)},onBeforeAppear(V){callHook(D,[V]),addTransitionClass(V,a),addTransitionClass(V,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(V,B){V._isLeaving=!0;const g=()=>$(V,B);addTransitionClass(V,u),forceReflow(),addTransitionClass(V,d),nextFrame(()=>{V._isLeaving&&(removeTransitionClass(V,u),addTransitionClass(V,m),hasExplicitCallback(O)||whenTransitionEnds(V,r,x,g))}),callHook(O,[V,g])},onEnterCancelled(V){z(V,!1),callHook(k,[V])},onAppearCancelled(V){z(V,!0),callHook(N,[V])},onLeaveCancelled(V){$(V),callHook(C,[V])}})}function normalizeDuration(e){if(e==null)return null;if(isObject$1(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const n=NumberOf(e);return[n,n]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function removeTransitionClass(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,n,t,r){const o=e._endId=++endId,s=()=>{o===e._endId&&r()};if(t)return setTimeout(s,t);const{type:i,timeout:l,propCount:a}=getTransitionInfo(e,n);if(!i)return r();const c=i+"end";let f=0;const u=()=>{e.removeEventListener(c,d),s()},d=m=>{m.target===e&&++f>=a&&u()};setTimeout(()=>{f<a&&u()},l+1),e.addEventListener(c,d)}function getTransitionInfo(e,n){const t=window.getComputedStyle(e),r=v=>(t[v]||"").split(", "),o=r(`${TRANSITION}Delay`),s=r(`${TRANSITION}Duration`),i=getTimeout(o,s),l=r(`${ANIMATION}Delay`),a=r(`${ANIMATION}Duration`),c=getTimeout(l,a);let f=null,u=0,d=0;n===TRANSITION?i>0&&(f=TRANSITION,u=i,d=s.length):n===ANIMATION?c>0&&(f=ANIMATION,u=c,d=a.length):(u=Math.max(i,c),f=u>0?i>c?TRANSITION:ANIMATION:null,d=f?f===TRANSITION?s.length:a.length:0);const m=f===TRANSITION&&/\b(transform|all)(,|$)/.test(r(`${TRANSITION}Property`).toString());return{type:f,timeout:u,propCount:d,hasTransform:m}}function getTimeout(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>toMs(t)+toMs(e[r])))}function toMs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}const getModelAssigner=e=>{const n=e.props["onUpdate:modelValue"]||!1;return isArray$2(n)?t=>invokeArrayFns(n,t):n},vModelRadio={created(e,{value:n},t){e.checked=looseEqual(n,t.props.value),e._assign=getModelAssigner(t),addEventListener(e,"change",()=>{e._assign(getValue(e))})},beforeUpdate(e,{value:n,oldValue:t},r){e._assign=getModelAssigner(r),n!==t&&(e.checked=looseEqual(n,r.props.value))}};function getValue(e){return"_value"in e?e._value:e.value}const rendererOptions=extend({patchProp},nodeOps);let renderer,enabledHydration=!1;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}function ensureHydrationRenderer(){return renderer=enabledHydration?renderer:createHydrationRenderer(rendererOptions),enabledHydration=!0,renderer}const createApp=(...e)=>{const n=ensureRenderer().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=normalizeContainer(r);if(!o)return;const s=n._component;!isFunction(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},n},createSSRApp=(...e)=>{const n=ensureHydrationRenderer().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=normalizeContainer(r);if(o)return t(o,!0,o instanceof SVGElement)},n};function normalizeContainer(e){return isString(e)?document.querySelector(e):e}const suspectProtoRx=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,suspectConstructorRx=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,JsonSigRx=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function jsonParseTransform(e,n){if(e!=="__proto__"&&!(e==="constructor"&&n&&typeof n=="object"&&"prototype"in n))return n}function destr(e,n={}){if(typeof e!="string")return e;const t=e.toLowerCase().trim();if(t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(t==="nan")return Number.NaN;if(t==="infinity")return Number.POSITIVE_INFINITY;if(t!=="undefined"){if(!JsonSigRx.test(e)){if(n.strict)throw new SyntaxError("Invalid JSON");return e}try{return suspectProtoRx.test(e)||suspectConstructorRx.test(e)?JSON.parse(e,jsonParseTransform):JSON.parse(e)}catch(r){if(n.strict)throw r;return e}}}const HASH_RE$1=/#/g,AMPERSAND_RE$1=/&/g,SLASH_RE$1=/\//g,EQUAL_RE$1=/=/g,IM_RE$1=/\?/g,PLUS_RE$1=/\+/g,ENC_BRACKET_OPEN_RE$1=/%5b/gi,ENC_BRACKET_CLOSE_RE$1=/%5d/gi,ENC_CARET_RE$1=/%5e/gi,ENC_BACKTICK_RE$1=/%60/gi,ENC_CURLY_OPEN_RE$1=/%7b/gi,ENC_PIPE_RE$1=/%7c/gi,ENC_CURLY_CLOSE_RE$1=/%7d/gi,ENC_SPACE_RE$1=/%20/gi,ENC_ENC_SLASH_RE=/%252f/gi;function encode(e){return encodeURI(""+e).replace(ENC_PIPE_RE$1,"|").replace(ENC_BRACKET_OPEN_RE$1,"[").replace(ENC_BRACKET_CLOSE_RE$1,"]")}function encodeQueryValue$1(e){return encode(e).replace(PLUS_RE$1,"%2B").replace(ENC_SPACE_RE$1,"+").replace(HASH_RE$1,"%23").replace(AMPERSAND_RE$1,"%26").replace(ENC_BACKTICK_RE$1,"`").replace(ENC_CURLY_OPEN_RE$1,"{").replace(ENC_CURLY_CLOSE_RE$1,"}").replace(ENC_CARET_RE$1,"^")}function encodeQueryKey$1(e){return encodeQueryValue$1(e).replace(EQUAL_RE$1,"%3D")}function encodePath$1(e){return encode(e).replace(HASH_RE$1,"%23").replace(IM_RE$1,"%3F").replace(ENC_ENC_SLASH_RE,"%2F").replace(AMPERSAND_RE$1,"%26").replace(PLUS_RE$1,"%2B")}function encodeParam$1(e){return encodePath$1(e).replace(SLASH_RE$1,"%2F")}function decode$1(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function decodeQueryValue(e){return decode$1(e.replace(PLUS_RE$1," "))}function parseQuery$1(e=""){const n={};e[0]==="?"&&(e=e.slice(1));for(const t of e.split("&")){const r=t.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const o=decode$1(r[1]);if(o==="__proto__"||o==="constructor")continue;const s=decodeQueryValue(r[2]||"");typeof n[o]<"u"?Array.isArray(n[o])?n[o].push(s):n[o]=[n[o],s]:n[o]=s}return n}function encodeQueryItem(e,n){return(typeof n=="number"||typeof n=="boolean")&&(n=String(n)),n?Array.isArray(n)?n.map(t=>`${encodeQueryKey$1(e)}=${encodeQueryValue$1(t)}`).join("&"):`${encodeQueryKey$1(e)}=${encodeQueryValue$1(n)}`:encodeQueryKey$1(e)}function stringifyQuery$1(e){return Object.keys(e).filter(n=>e[n]!==void 0).map(n=>encodeQueryItem(n,e[n])).join("&")}const PROTOCOL_REGEX=/^\w{2,}:(\/\/)?/,PROTOCOL_RELATIVE_REGEX=/^\/\/[^/]+/;function hasProtocol(e,n=!1){return PROTOCOL_REGEX.test(e)||n&&PROTOCOL_RELATIVE_REGEX.test(e)}const TRAILING_SLASH_RE$1=/\/$|\/\?/;function hasTrailingSlash(e="",n=!1){return n?TRAILING_SLASH_RE$1.test(e):e.endsWith("/")}function withoutTrailingSlash(e="",n=!1){if(!n)return(hasTrailingSlash(e)?e.slice(0,-1):e)||"/";if(!hasTrailingSlash(e,!0))return e||"/";const[t,...r]=e.split("?");return(t.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function withTrailingSlash(e="",n=!1){if(!n)return e.endsWith("/")?e:e+"/";if(hasTrailingSlash(e,!0))return e||"/";const[t,...r]=e.split("?");return t+"/"+(r.length>0?`?${r.join("?")}`:"")}function hasLeadingSlash(e=""){return e.startsWith("/")}function withoutLeadingSlash(e=""){return(hasLeadingSlash(e)?e.slice(1):e)||"/"}function withLeadingSlash(e=""){return hasLeadingSlash(e)?e:"/"+e}function withBase(e,n){if(isEmptyURL(n)||hasProtocol(e))return e;const t=withoutTrailingSlash(n);return e.startsWith(t)?e:joinURL(t,e)}function withoutBase(e,n){if(isEmptyURL(n))return e;const t=withoutTrailingSlash(n);if(!e.startsWith(t))return e;const r=e.slice(t.length);return r[0]==="/"?r:"/"+r}function withQuery(e,n){const t=parseURL$1(e),r={...parseQuery$1(t.search),...n};return t.search=stringifyQuery$1(r),stringifyParsedURL(t)}function isEmptyURL(e){return!e||e==="/"}function isNonEmptyURL(e){return e&&e!=="/"}function joinURL(e,...n){let t=e||"";for(const r of n.filter(o=>isNonEmptyURL(o)))t=t?withTrailingSlash(t)+withoutLeadingSlash(r):r;return t}function parseURL$1(e="",n){if(!hasProtocol(e,!0))return n?parseURL$1(n+e):parsePath(e);const[t="",r,o=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",i=""]=(o.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:l,search:a,hash:c}=parsePath(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:t,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:s,pathname:l,search:a,hash:c}}function parsePath(e=""){const[n="",t="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:n,search:t,hash:r}}function stringifyParsedURL(e){const n=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+n:n}class FetchError extends Error{constructor(){super(...arguments),this.name="FetchError"}}function createFetchError(e,n,t){let r="";e&&t&&(r=`${t.status} ${t.statusText} (${e.toString()})`),n&&(r=`${n.message} (${r})`);const o=new FetchError(r);return Object.defineProperty(o,"request",{get(){return e}}),Object.defineProperty(o,"response",{get(){return t}}),Object.defineProperty(o,"data",{get(){return t&&t._data}}),Object.defineProperty(o,"status",{get(){return t&&t.status}}),Object.defineProperty(o,"statusText",{get(){return t&&t.statusText}}),Object.defineProperty(o,"statusCode",{get(){return t&&t.status}}),Object.defineProperty(o,"statusMessage",{get(){return t&&t.statusText}}),o}const payloadMethods=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function isPayloadMethod(e="GET"){return payloadMethods.has(e.toUpperCase())}function isJSONSerializable(e){if(e===void 0)return!1;const n=typeof e;return n==="string"||n==="number"||n==="boolean"||n===null?!0:n!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const textTypes=new Set(["image/svg","application/xml","application/xhtml","application/html"]),JSON_RE=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function detectResponseType(e=""){if(!e)return"json";const n=e.split(";").shift();return JSON_RE.test(n)?"json":textTypes.has(n)||n.startsWith("text/")?"text":"blob"}const retryStatusCodes=new Set([408,409,425,429,500,502,503,504]);function createFetch(e){const{fetch:n,Headers:t}=e;function r(i){const l=i.error&&i.error.name==="AbortError"||!1;if(i.options.retry!==!1&&!l){const c=typeof i.options.retry=="number"?i.options.retry:isPayloadMethod(i.options.method)?0:1,f=i.response&&i.response.status||500;if(c>0&&retryStatusCodes.has(f))return o(i.request,{...i.options,retry:c-1})}const a=createFetchError(i.request,i.error,i.response);throw Error.captureStackTrace&&Error.captureStackTrace(a,o),a}const o=async function(l,a={}){const c={request:l,options:{...e.defaults,...a},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=withBase(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=withQuery(c.request,{...c.options.params,...c.options.query})),c.options.body&&isPayloadMethod(c.options.method)&&isJSONSerializable(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new t(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await n(c.request,c.options).catch(async u=>(c.error=u,c.options.onRequestError&&await c.options.onRequestError(c),r(c)));const f=(c.options.parseResponse?"json":c.options.responseType)||detectResponseType(c.response.headers.get("content-type")||"");if(f==="json"){const u=await c.response.text(),d=c.options.parseResponse||destr;c.response._data=d(u)}else f==="stream"?c.response._data=c.response.body:c.response._data=await c.response[f]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),r(c)):c.response},s=function(l,a){return o(l,a).then(c=>c._data)};return s.raw=o,s.native=n,s.create=(i={})=>createFetch({...e,defaults:{...e.defaults,...i}}),s}const _globalThis$1=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),fetch=_globalThis$1.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Headers=_globalThis$1.Headers,ofetch=createFetch({fetch,Headers}),$fetch=ofetch,useRuntimeConfig$1=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},appConfig=useRuntimeConfig$1().app,baseURL=()=>appConfig.baseURL,buildAssetsDir=()=>appConfig.buildAssetsDir,buildAssetsURL=(...e)=>joinURL(publicAssetsURL(),buildAssetsDir(),...e),publicAssetsURL=(...e)=>{const n=appConfig.cdnURL||appConfig.baseURL;return e.length?joinURL(n,...e):n};globalThis.__buildAssetsURL=buildAssetsURL,globalThis.__publicAssetsURL=publicAssetsURL;function flatHooks(e,n={},t){for(const r in e){const o=e[r],s=t?`${t}:${r}`:r;typeof o=="object"&&o!==null?flatHooks(o,n,s):typeof o=="function"&&(n[s]=o)}return n}function serialCaller(e,n){return e.reduce((t,r)=>t.then(()=>r.apply(void 0,n)),Promise.resolve())}function parallelCaller(e,n){return Promise.all(e.map(t=>t.apply(void 0,n)))}function callEachWith(e,n){for(const t of e)t(n)}class Hookable{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,t,r={}){if(!n||typeof t!="function")return()=>{};const o=n;let s;for(;this._deprecatedHooks[n];)s=this._deprecatedHooks[n],n=s.to;if(s&&!r.allowDeprecated){let i=s.message;i||(i=`${o} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(t),()=>{t&&(this.removeHook(n,t),t=void 0)}}hookOnce(n,t){let r,o=(...s)=>(typeof r=="function"&&r(),r=void 0,o=void 0,t(...s));return r=this.hook(n,o),r}removeHook(n,t){if(this._hooks[n]){const r=this._hooks[n].indexOf(t);r!==-1&&this._hooks[n].splice(r,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,t){this._deprecatedHooks[n]=typeof t=="string"?{to:t}:t;const r=this._hooks[n]||[];this._hooks[n]=void 0;for(const o of r)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const t in n)this.deprecateHook(t,n[t])}addHooks(n){const t=flatHooks(n),r=Object.keys(t).map(o=>this.hook(o,t[o]));return()=>{for(const o of r.splice(0,r.length))o()}}removeHooks(n){const t=flatHooks(n);for(const r in t)this.removeHook(r,t[r])}callHook(n,...t){return this.callHookWith(serialCaller,n,...t)}callHookParallel(n,...t){return this.callHookWith(parallelCaller,n,...t)}callHookWith(n,t,...r){const o=this._before||this._after?{name:t,args:r,context:{}}:void 0;this._before&&callEachWith(this._before,o);const s=n(this._hooks[t]||[],r);return s instanceof Promise?s.finally(()=>{this._after&&o&&callEachWith(this._after,o)}):(this._after&&o&&callEachWith(this._after,o),s)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const t=this._before.indexOf(n);t!==-1&&this._before.splice(t,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const t=this._after.indexOf(n);t!==-1&&this._after.splice(t,1)}}}function createHooks(){return new Hookable}function createContext(){let e,n=!1;const t=r=>{if(e&&e!==r)throw new Error("Context conflict")};return{use:()=>{if(e===void 0)throw new Error("Context is not available");return e},tryUse:()=>e,set:(r,o)=>{o||t(r),e=r,n=!0},unset:()=>{e=void 0,n=!1},call:(r,o)=>{t(r),e=r;try{return o()}finally{n||(e=void 0)}},async callAsync(r,o){e=r;const s=()=>{e=r},i=()=>e===r?s:void 0;asyncHandlers.add(i);try{const l=o();return n||(e=void 0),await l}finally{asyncHandlers.delete(i)}}}}function createNamespace(){const e={};return{get(n){return e[n]||(e[n]=createContext()),e[n],e[n]}}}const _globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},globalKey="__unctx__",defaultNamespace=_globalThis[globalKey]||(_globalThis[globalKey]=createNamespace()),getContext=e=>defaultNamespace.get(e),asyncHandlersKey="__unctx_async_handlers__",asyncHandlers=_globalThis[asyncHandlersKey]||(_globalThis[asyncHandlersKey]=new Set);function executeAsync(e){const n=[];for(const o of asyncHandlers){const s=o();s&&n.push(s)}const t=()=>{for(const o of n)o()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(o=>{throw t(),o})),[r,t]}const nuxtAppCtx=getContext("nuxt-app"),NuxtPluginIndicator="__nuxt_plugin";function createNuxtApp(e){let n=0;const t={provide:void 0,globalName:"nuxt",payload:reactive({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};n++;let s=!1;return()=>{if(!s&&(s=!0,n--,n===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...e};t.hooks=createHooks(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(s,i)=>{const l="$"+s;defineGetter(t,l,i),defineGetter(t.vueApp.config.globalProperties,l,i)},defineGetter(t.vueApp,"$nuxt",t),defineGetter(t.vueApp.config.globalProperties,"$nuxt",t);const r=reactive(t.payload.config),o=new Proxy(r,{get(s,i){return i==="public"?s.public:s[i]??s.public[i]},set(s,i,l){return i==="public"||i==="app"?!1:(s[i]=l,s.public[i]=l,!0)}});return t.provide("config",o),t}async function applyPlugin(e,n){if(typeof n!="function")return;const{provide:t}=await callWithNuxt(e,n,[e])||{};if(t&&typeof t=="object")for(const r in t)e.provide(r,t[r])}async function applyPlugins(e,n){for(const t of n)await applyPlugin(e,t)}function normalizePlugins(e){return e.map(t=>typeof t!="function"?null:t.length>1?r=>t(r,r.provide):t).filter(Boolean)}function defineNuxtPlugin(e){return e[NuxtPluginIndicator]=!0,e}function callWithNuxt(e,n,t){const r=()=>t?n(...t):n();return nuxtAppCtx.set(e),r()}function useNuxtApp(){const e=nuxtAppCtx.tryUse();if(!e){const n=getCurrentInstance();if(!n)throw new Error("nuxt instance unavailable");return n.appContext.app.$nuxt}return e}function useRuntimeConfig(){return useNuxtApp().$config}function defineGetter(e,n,t){Object.defineProperty(e,n,{get:()=>t})}class H3Error extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const n={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(n.statusMessage=this.statusMessage),this.data!==void 0&&(n.data=this.data),n}}H3Error.__h3_error__=!0;function createError$1(e){if(typeof e=="string")return new H3Error(e);if(isError(e))return e;const n=new H3Error(e.message??e.statusMessage,e.cause?{cause:e.cause}:void 0);if("stack"in e)try{Object.defineProperty(n,"stack",{get(){return e.stack}})}catch{try{n.stack=e.stack}catch{}}return e.data&&(n.data=e.data),e.statusCode?n.statusCode=e.statusCode:e.status&&(n.statusCode=e.status),e.statusMessage?n.statusMessage=e.statusMessage:e.statusText&&(n.statusMessage=e.statusText),e.fatal!==void 0&&(n.fatal=e.fatal),e.unhandled!==void 0&&(n.unhandled=e.unhandled),n}function isError(e){var n;return((n=e==null?void 0:e.constructor)==null?void 0:n.__h3_error__)===!0}typeof setImmediate<"u"&&setImmediate;const useError=()=>toRef(useNuxtApp().payload,"error"),showError=e=>{const n=createError(e);try{useNuxtApp().callHook("app:error",n);const r=useError();r.value=r.value||n}catch{throw n}return n},clearError=async(e={})=>{const n=useNuxtApp(),t=useError();n.callHook("app:error:cleared",e),e.redirect&&await n.$router.replace(e.redirect),t.value=null},isNuxtError=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),createError=e=>{const n=createError$1(e);return n.__nuxt_error=!0,n},getDefault=()=>null;function useAsyncData(...e){var d;const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);let[t,r,o={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");o.server=o.server??!0,o.default=o.default??getDefault,o.lazy=o.lazy??!1,o.immediate=o.immediate??!0;const s=useNuxtApp(),i=()=>s.isHydrating?s.payload.data[t]:s.static.data[t],l=()=>i()!==void 0;s._asyncData[t]||(s._asyncData[t]={data:ref(i()??((d=o.default)==null?void 0:d.call(o))??null),pending:ref(!l()),error:ref(s.payload._errors[t]?createError(s.payload._errors[t]):null)});const a={...s._asyncData[t]};a.refresh=a.execute=(m={})=>{if(s._asyncDataPromises[t]){if(m.dedupe===!1)return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(m._initial&&l())return i();a.pending.value=!0;const v=new Promise((R,x)=>{try{R(r(s))}catch(w){x(w)}}).then(R=>{if(v.cancelled)return s._asyncDataPromises[t];o.transform&&(R=o.transform(R)),o.pick&&(R=pick(R,o.pick)),a.data.value=R,a.error.value=null}).catch(R=>{var x;if(v.cancelled)return s._asyncDataPromises[t];a.error.value=R,a.data.value=unref(((x=o.default)==null?void 0:x.call(o))??null)}).finally(()=>{v.cancelled||(a.pending.value=!1,s.payload.data[t]=a.data.value,a.error.value&&(s.payload._errors[t]=createError(a.error.value)),delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=v,s._asyncDataPromises[t]};const c=()=>a.refresh({_initial:!0}),f=o.server!==!1&&s.payload.serverRendered;{const m=getCurrentInstance();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const R=m._nuxtOnBeforeMountCbs;m&&(onBeforeMount(()=>{R.forEach(x=>{x()}),R.splice(0,R.length)}),onUnmounted(()=>R.splice(0,R.length)))}f&&s.isHydrating&&l()?a.pending.value=!1:m&&(s.payload.serverRendered&&s.isHydrating||o.lazy)&&o.immediate?m._nuxtOnBeforeMountCbs.push(c):o.immediate&&c(),o.watch&&watch(o.watch,()=>a.refresh());const v=s.hook("app:data:refresh",R=>{if(!R||R.includes(t))return a.refresh()});m&&onUnmounted(v)}const u=Promise.resolve(s._asyncDataPromises[t]).then(()=>a);return Object.assign(u,a),u}function pick(e,n){const t={};for(const r of n)t[r]=e[r];return t}function useState(...e){const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);const[t,r]=e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const o="$s"+t,s=useNuxtApp(),i=toRef(s.payload.state,o);if(i.value===void 0&&r){const l=r();if(isRef(l))return s.payload.state[o]=l,l;i.value=l}return i}const useRouter=()=>{var e;return(e=useNuxtApp())==null?void 0:e.$router},useRoute$1=()=>getCurrentInstance()?inject("_route",useNuxtApp()._route):useNuxtApp()._route,defineNuxtRouteMiddleware=e=>e,isProcessingMiddleware=()=>{try{if(useNuxtApp()._processingMiddleware)return!0}catch{return!0}return!1},navigateTo=(e,n)=>{e||(e="/");const t=typeof e=="string"?e:e.path||"/",r=hasProtocol(t,!0);if(r&&!(n!=null&&n.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(r&&parseURL$1(t).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!r&&isProcessingMiddleware())return e;const o=useRouter();return r?(n!=null&&n.replace?location.replace(t):location.href=t,Promise.resolve()):n!=null&&n.replace?o.replace(e):o.push(e)},TagsWithInnerContent$1=["script","style","noscript"],HasElementTags$1=["base","meta","link","style","script","noscript"],UniqueTags$1=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function tagDedupeKey$1(e,n){const{props:t,tag:r}=e;if(UniqueTags$1.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const s of o)if(typeof t[s]<"u"){const i=String(t[s]);return n&&!n(i)?!1:`${r}:${s}:${i}`}return!1}const setAttrs$1=(e,n)=>{const{tag:t,$el:r}=e;r&&(Object.entries(t.props).forEach(([o,s])=>{s=String(s);const i=`attr:${o}`;if(o==="class"){if(!s)return;for(const l of s.split(" ")){const a=`${i}:${l}`;n&&n(e,a,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!o.startsWith("data-h-")&&n(e,i,()=>r.removeAttribute(o)),r.getAttribute(o)!==s&&r.setAttribute(o,s)}),TagsWithInnerContent$1.includes(t.tag)&&r.innerHTML!==(t.children||"")&&(r.innerHTML=t.children||""))};function hashCode$1(e){let n=9;for(let t=0;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function renderDOMHead$1(e,n={}){var f,u;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=n.document||window.document,o=e._popSideEffectQueue();e.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([m,v])=>{o[m]=v})});const s=async d=>{const m=e.headEntries().find(R=>R._i===d._e),v={renderId:d._d||hashCode$1(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:m,staleSideEffects:o};return await e.hooks.callHook("dom:beforeRenderTag",v),v},i=[],l={body:[],head:[]},a=(d,m,v)=>{m=`${d.renderId}:${m}`,d.entry&&(d.entry._sde[m]=v),delete o[m]},c=d=>{e._elMap[d.renderId]=d.$el,i.push(d),a(d,"el",()=>{var m;(m=d.$el)==null||m.remove(),delete e._elMap[d.renderId]})};for(const d of await e.resolveTags()){const m=await s(d);if(!m.shouldRender)continue;const{tag:v}=m;if(v.tag==="title"){r.title=v.children||"",i.push(m);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){m.$el=r[v.tag==="htmlAttrs"?"documentElement":"body"],setAttrs$1(m,a),i.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&v._hash&&(m.$el=r.querySelector(`${(f=v.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._hash}]`)),m.$el){m.tag._d&&setAttrs$1(m),c(m);continue}m.$el=r.createElement(v.tag),setAttrs$1(m),l[(u=v.tagPosition)!=null&&u.startsWith("body")?"body":"head"].push(m)}Object.entries(l).forEach(([d,m])=>{var R;if(!m.length)return;const v=(R=r==null?void 0:r[d])==null?void 0:R.children;if(v){for(const x of[...v].reverse()){const w=x.tagName.toLowerCase();if(!HasElementTags$1.includes(w))continue;const y=tagDedupeKey$1({tag:w,props:x.getAttributeNames().reduce((O,C)=>({...O,[C]:x.getAttribute(C)}),{})}),k=m.findIndex(O=>{var C;return O&&(O.tag._d===y||((C=x.isEqualNode)==null?void 0:C.call(x,O.$el)))});if(k!==-1){const O=m[k];O.$el=x,setAttrs$1(O),c(O),delete m[k]}}m.forEach(x=>{if(x.$el){switch(x.tag.tagPosition){case"bodyClose":r.body.appendChild(x.$el);break;case"bodyOpen":r.body.insertBefore(x.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(x.$el);break}c(x)}})}});for(const d of i)await e.hooks.callHook("dom:renderTag",d);Object.values(o).forEach(d=>d())}let domUpdatePromise$1=null;async function debouncedRenderDOMHead$1(e,n={}){function t(){return domUpdatePromise$1=null,renderDOMHead$1(e,n)}const r=n.delayFn||(o=>setTimeout(o,10));return domUpdatePromise$1=domUpdatePromise$1||new Promise(o=>r(()=>o(t())))}const index={__proto__:null,debouncedRenderDOMHead:debouncedRenderDOMHead$1,get domUpdatePromise(){return domUpdatePromise$1},hashCode:hashCode$1,renderDOMHead:renderDOMHead$1},ValidHeadTags=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],TagConfigKeys=["tagPosition","tagPriority","tagDuplicateStrategy"];async function normaliseTag(e,n){const t={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(t.children=n instanceof Promise?await n:n,t):(t.props=await normaliseProps({...n}),["children","innerHtml","innerHTML"].forEach(r=>{typeof t.props[r]<"u"&&(t.children=t.props[r],typeof t.children=="object"&&(t.children=JSON.stringify(t.children)),delete t.props[r])}),Object.keys(t.props).filter(r=>TagConfigKeys.includes(r)).forEach(r=>{t[r]=t.props[r],delete t.props[r]}),typeof t.props.class=="object"&&!Array.isArray(t.props.class)&&(t.props.class=Object.keys(t.props.class).filter(r=>t.props.class[r])),Array.isArray(t.props.class)&&(t.props.class=t.props.class.join(" ")),t.props.content&&Array.isArray(t.props.content)?t.props.content.map((r,o)=>{const s={...t,props:{...t.props}};return s.props.content=r,s.key=`${t.props.name||t.props.property}:${o}`,s}):t)}async function normaliseProps(e){for(const n of Object.keys(e))e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]="":String(e[n])==="false"&&delete e[n];return e}const tagWeight=e=>{if(typeof e.tagPriority=="number")return e.tagPriority;switch(e.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(e.tag){case"base":return-1;case"title":return 1;case"meta":return e.props.charset?-2:e.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},sortTags=(e,n)=>tagWeight(e)-tagWeight(n),UniqueTags$2=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function tagDedupeKey$2(e,n){const{props:t,tag:r}=e;if(UniqueTags$2.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const s of o)if(typeof t[s]<"u"){const i=String(t[s]);return n&&!n(i)?!1:`${r}:${s}:${i}`}return!1}const renderTitleTemplate=(e,n)=>e==null?n||null:typeof e=="function"?e(n):e.replace("%s",n??"");function resolveTitleTemplateFromTags(e){let n=e.findIndex(r=>r.tag==="titleTemplate");const t=e.findIndex(r=>r.tag==="title");if(t!==-1&&n!==-1){const r=renderTitleTemplate(e[n].children,e[t].children);r!==null?e[t].children=r||e[t].children:delete e[t]}else if(n!==-1){const r=renderTitleTemplate(e[n].children);r!==null&&(e[n].children=r,e[n].tag="title",n=-1)}return n!==-1&&delete e[n],e.filter(Boolean)}const DedupesTagsPlugin=e=>{e=e||{};const n=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){n.forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const r=t.key?`${t.tag}:${t.key}`:tagDedupeKey$2(t);r&&(t._d=r)},"tags:resolve":function(t){const r={};t.tags.forEach(o=>{let s=o._d||o._p;const i=r[s];if(i){let l=o==null?void 0:o.tagDuplicateStrategy;if(!l&&(o.tag==="htmlAttrs"||o.tag==="bodyAttrs")&&(l="merge"),l==="merge"){const c=i.props;["class","style"].forEach(f=>{o.props[f]&&c[f]&&(f==="style"&&!c[f].endsWith(";")&&(c[f]+=";"),o.props[f]=`${c[f]} ${o.props[f]}`)}),r[s].props={...c,...o.props};return}else o._e===i._e&&(s=o._d=`${s}:${o._p}`);const a=Object.keys(o.props).length;if((a===0||a===1&&typeof o.props["data-h-key"]<"u")&&!o.children){delete r[s];return}}r[s]=o}),t.tags=Object.values(r)}}}},SortTagsPlugin=()=>({hooks:{"tags:resolve":e=>{const n=t=>{var r;return(r=e.tags.find(o=>o._d===t))==null?void 0:r._p};for(const t of e.tags){if(!t.tagPriority||typeof t.tagPriority=="number")continue;const r=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:o,offset:s}of r)if(t.tagPriority.startsWith(o)){const i=t.tagPriority.replace(o,""),l=n(i);typeof l<"u"&&(t._p=l+s)}}e.tags.sort((t,r)=>t._p-r._p).sort(sortTags)}}}),TitleTemplatePlugin=()=>({hooks:{"tags:resolve":e=>{e.tags=resolveTitleTemplateFromTags(e.tags)}}}),DeprecatedTagAttrPlugin=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),IsBrowser$1=typeof window<"u",ProvideTagHashPlugin=()=>({hooks:{"tag:normalise":e=>{var o,s;const{tag:n,entry:t}=e,r=typeof n.props._dynamic<"u";!HasElementTags$2.includes(n.tag)||!n.key||(n._hash=hashCode$1(JSON.stringify({tag:n.tag,key:n.key})),!(IsBrowser$1||(s=(o=getActiveHead())==null?void 0:o.resolvedOptions)!=null&&s.document)&&(t._m==="server"||r)&&(n.props[`data-h-${n._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(n=>(delete n.props._dynamic,n))}}}),PatchDomOnEntryUpdatesPlugin=e=>({hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let t=e==null?void 0:e.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Promise.resolve().then(function(){return index}).then(({debouncedRenderDOMHead:r})=>{r(n,{document:(e==null?void 0:e.document)||window.document,delayFn:t})})}}}),EventHandlersPlugin=()=>{const e=(n,t)=>{const r={},o={};Object.entries(t.props).forEach(([i,l])=>{i.startsWith("on")&&typeof l=="function"?o[i]=l:r[i]=l});let s;return n==="dom"&&t.tag==="script"&&typeof r.src=="string"&&typeof o.onload<"u"&&(s=r.src,delete r.src),{props:r,eventHandlers:o,delayedSrc:s}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(t=>(t.props=e("ssr",t).props,t))},"dom:beforeRenderTag":function(n){const{props:t,eventHandlers:r,delayedSrc:o}=e("dom",n.tag);Object.keys(r).length&&(n.tag.props=t,n.tag._eventHandlers=r,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const t=n.$el;if(!n.tag._eventHandlers||!t)return;const r=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(n.tag._eventHandlers).forEach(([o,s])=>{const i=`${n.tag._d||n.tag._p}:${o}`,l=o.slice(2).toLowerCase(),a=`data-h-${l}`;if(delete n.staleSideEffects[i],t.hasAttribute(a))return;const c=s;t.setAttribute(a,""),r.addEventListener(l,c),n.entry&&(n.entry._sde[i]=()=>{r.removeEventListener(l,c),t.removeAttribute(a)})}),n.tag._delayedSrc&&t.setAttribute("src",n.tag._delayedSrc)}}}};function asArray$1(e){return Array.isArray(e)?e:[e]}const HasElementTags$2=["base","meta","link","style","script","noscript"];let activeHead;const setActiveHead=e=>activeHead=e,getActiveHead=()=>activeHead,TagEntityBits=10;async function normaliseEntryTags(e){const n=[];return Object.entries(e.resolvedInput||e.input).filter(([t,r])=>typeof r<"u"&&ValidHeadTags.includes(t)).forEach(([t,r])=>{const o=asArray$1(r);n.push(...o.map(s=>normaliseTag(t,s)).flat())}),(await Promise.all(n)).flat().map((t,r)=>(t._e=e._i,t._p=(e._i<<TagEntityBits)+r,t))}const CorePlugins=()=>[DedupesTagsPlugin(),SortTagsPlugin(),TitleTemplatePlugin(),ProvideTagHashPlugin(),EventHandlersPlugin(),DeprecatedTagAttrPlugin()],DOMPlugins=(e={})=>[PatchDomOnEntryUpdatesPlugin({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function createHead$1(e={}){const n=createHeadCore({...e,plugins:[...DOMPlugins(e),...(e==null?void 0:e.plugins)||[]]});return setActiveHead(n),n}function createHeadCore(e={}){let n=[],t={},r=0;const o=createHooks();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...CorePlugins(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&o.addHooks(l.hooks));const s=()=>o.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return n},get hooks(){return o},use(l){l.hooks&&o.addHooks(l.hooks)},push(l,a){const c={_i:r++,input:l,_sde:{}};return a!=null&&a.mode&&(c._m=a==null?void 0:a.mode),n.push(c),s(),{dispose(){n=n.filter(f=>f._i!==c._i?!0:(t={...t,...f._sde||{}},f._sde={},s(),!1))},patch(f){n=n.map(u=>(u._i===c._i&&(c.input=u.input=f,s()),u))}}},async resolveTags(){const l={tags:[],entries:[...n]};await o.callHook("entries:resolve",l);for(const a of l.entries)for(const c of await normaliseEntryTags(a)){const f={tag:c,entry:a};await o.callHook("tag:normalise",f),l.tags.push(f.tag)}return await o.callHook("tags:resolve",l),l.tags},_elMap:{},_popSideEffectQueue(){const l={...t};return t={},l}};return i.hooks.callHook("init",i),i}function defineHeadPlugin(e){return e}function resolveUnref(e){return typeof e=="function"?e():unref(e)}function resolveUnrefHeadInput(e,n=""){if(e instanceof Promise)return e;const t=resolveUnref(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(r=>resolveUnrefHeadInput(r,n));if(typeof t=="object"){let r=!1;const o=Object.fromEntries(Object.entries(t).map(([s,i])=>s==="titleTemplate"||s.startsWith("on")?[s,unref(i)]:((typeof i=="function"||isRef(i))&&(r=!0),[s,resolveUnrefHeadInput(i,s)])));return r&&HasElementTags$2.includes(String(n))&&(o._dynamic=!0),o}return t}const Vue3=version.startsWith("3"),IsBrowser=typeof window<"u",headSymbol="usehead";function injectHead(){return getCurrentInstance()&&inject(headSymbol)||getActiveHead()}function createHead$2(e={}){const n=createHead$1({...e,domDelayFn:r=>setTimeout(()=>nextTick(()=>r()),10),plugins:[VueReactiveUseHeadPlugin(),...(e==null?void 0:e.plugins)||[]]}),t={install(r){Vue3&&(r.config.globalProperties.$unhead=n,r.provide(headSymbol,n))}};return n.install=t.install,n}const VueReactiveUseHeadPlugin=()=>({hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=resolveUnrefHeadInput(n.input)}}});function clientUseHead(e,n={}){const t=injectHead(),r=ref({});watchEffect(()=>{r.value=resolveUnrefHeadInput(e)});const o=t.push(r.value,n);return watch(r,i=>o.patch(i)),getCurrentInstance()&&onBeforeUnmount(()=>{o.dispose()}),o}function serverUseHead(e,n={}){return injectHead().push(e,n)}function useHead$1(e,n={}){var r;const t=injectHead();if(t){const o=IsBrowser||!!((r=t.resolvedOptions)!=null&&r.document);return n.mode==="server"&&o||n.mode==="client"&&!o?void 0:o?clientUseHead(e,n):serverUseHead(e,n)}}const TagsWithInnerContent=["script","style","noscript"],HasElementTags=["base","meta","link","style","script","noscript"],UniqueTags=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function tagDedupeKey(e,n){const{props:t,tag:r}=e;if(UniqueTags.includes(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const s of o)if(typeof t[s]<"u"){const i=String(t[s]);return n&&!n(i)?!1:`${r}:${s}:${i}`}return!1}const setAttrs=(e,n)=>{const{tag:t,$el:r}=e;r&&(Object.entries(t.props).forEach(([o,s])=>{s=String(s);const i=`attr:${o}`;if(o==="class"){if(!s)return;for(const l of s.split(" ")){const a=`${i}:${l}`;n&&n(e,a,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!o.startsWith("data-h-")&&n(e,i,()=>r.removeAttribute(o)),r.getAttribute(o)!==s&&r.setAttribute(o,s)}),TagsWithInnerContent.includes(t.tag)&&r.innerHTML!==(t.children||"")&&(r.innerHTML=t.children||""))};function hashCode(e){let n=9;for(let t=0;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function renderDOMHead(e,n={}){var f,u;const t={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const r=n.document||window.document,o=e._popSideEffectQueue();e.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([m,v])=>{o[m]=v})});const s=async d=>{const m=e.headEntries().find(R=>R._i===d._e),v={renderId:d._d||hashCode(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:m,staleSideEffects:o};return await e.hooks.callHook("dom:beforeRenderTag",v),v},i=[],l={body:[],head:[]},a=(d,m,v)=>{m=`${d.renderId}:${m}`,d.entry&&(d.entry._sde[m]=v),delete o[m]},c=d=>{e._elMap[d.renderId]=d.$el,i.push(d),a(d,"el",()=>{var m;(m=d.$el)==null||m.remove(),delete e._elMap[d.renderId]})};for(const d of await e.resolveTags()){const m=await s(d);if(!m.shouldRender)continue;const{tag:v}=m;if(v.tag==="title"){r.title=v.children||"",i.push(m);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){m.$el=r[v.tag==="htmlAttrs"?"documentElement":"body"],setAttrs(m,a),i.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&v._hash&&(m.$el=r.querySelector(`${(f=v.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._hash}]`)),m.$el){m.tag._d&&setAttrs(m),c(m);continue}m.$el=r.createElement(v.tag),setAttrs(m),l[(u=v.tagPosition)!=null&&u.startsWith("body")?"body":"head"].push(m)}Object.entries(l).forEach(([d,m])=>{var R;if(!m.length)return;const v=(R=r==null?void 0:r[d])==null?void 0:R.children;if(v){for(const x of[...v].reverse()){const w=x.tagName.toLowerCase();if(!HasElementTags.includes(w))continue;const y=tagDedupeKey({tag:w,props:x.getAttributeNames().reduce((O,C)=>({...O,[C]:x.getAttribute(C)}),{})}),k=m.findIndex(O=>{var C;return O&&(O.tag._d===y||((C=x.isEqualNode)==null?void 0:C.call(x,O.$el)))});if(k!==-1){const O=m[k];O.$el=x,setAttrs(O),c(O),delete m[k]}}m.forEach(x=>{if(x.$el){switch(x.tag.tagPosition){case"bodyClose":r.body.appendChild(x.$el);break;case"bodyOpen":r.body.insertBefore(x.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(x.$el);break}c(x)}})}});for(const d of i)await e.hooks.callHook("dom:renderTag",d);Object.values(o).forEach(d=>d())}let domUpdatePromise=null;async function debouncedRenderDOMHead(e,n={}){function t(){return domUpdatePromise=null,renderDOMHead(e,n)}const r=n.delayFn||(o=>setTimeout(o,10));return domUpdatePromise=domUpdatePromise||new Promise(o=>r(()=>o(t())))}function createHead(e){const n=createHead$2(),t={unhead:n,install(r){version.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,o){return n.push(r,o)},addEntry(r,o){return n.push(r,o)},addHeadObjs(r,o){return n.push(r,o)},addReactiveEntry(r,o){const s=useHead$1(r,o);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,o){o?renderDOMHead(n,{document:r}):debouncedRenderDOMHead(n,{delayFn:s=>setTimeout(()=>s(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=t.addHeadObjs,n.updateDOM=t.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const o of t.hooks["before:dom"])o()===!1&&(r.shouldRender=!1)}),e&&t.addHeadObjs(e),t}function useHead(e,n){return useNuxtApp()._useHead(e,n)}const requestIdleCallback=globalThis.requestIdleCallback||(e=>{const n=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-n))};return setTimeout(()=>{e(t)},1)}),cancelIdleCallback=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),onNuxtReady=e=>{const n=useNuxtApp();n.isHydrating?n.hooks.hookOnce("app:suspense:resolve",()=>{requestIdleCallback(e)}):requestIdleCallback(e)};async function preloadRouteComponents(e,n=useRouter()){if(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(e))return;n._routePreloaded.add(e);const t=n._preloadPromises=n._preloadPromises||[];if(t.length>4)return Promise.all(t).then(()=>preloadRouteComponents(e,n));const r=n.resolve(e).matched.map(o=>{var s;return(s=o.components)==null?void 0:s.default}).filter(o=>typeof o=="function");for(const o of r){const s=Promise.resolve(o()).catch(()=>{}).finally(()=>t.splice(t.indexOf(s)));t.push(s)}await Promise.all(t)}const scriptRel="modulepreload",assetsURL=function(e,n){return e.startsWith(".")?new URL(e,n).href:e},seen={},__vitePreload=function(n,t,r){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=assetsURL(s,r),s in seen)return;seen[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const u=o[f];if(u.href===s&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":scriptRel,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((f,u)=>{c.addEventListener("load",f),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};function loadPayload(e,n={}){const t=_getPayloadURL(e,n),r=useNuxtApp(),o=r._payloadCache=r._payloadCache||{};return o[e]||(o[e]=_importPayload(t).then(s=>s||(delete o[e],null))),o[e]}function _getPayloadURL(e,n={}){const t=new URL(e,"http://localhost");if(t.search)throw new Error("Payload URL cannot contain search params: "+e);if(t.host!=="localhost")throw new Error("Payload URL cannot contain host: "+e);const r=n.hash||(n.fresh?Date.now():"");return joinURL(useRuntimeConfig().app.baseURL,t.pathname,r?`_payload.${r}.js`:"_payload.js")}async function _importPayload(e){const n=await __vitePreload(()=>import(e),[],import.meta.url).catch(t=>{console.warn("[nuxt] Cannot load payload ",e,t)});return(n==null?void 0:n.default)||null}function isPrerendered(){return!!useNuxtApp().payload.prerenderedAt}const firstNonUndefined=(...e)=>e.find(n=>n!==void 0),DEFAULT_EXTERNAL_REL_ATTRIBUTE="noopener noreferrer";function defineNuxtLink(e){const n=e.componentName||"NuxtLink";return defineComponent({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const o=useRouter(),s=computed(()=>t.to||t.href||""),i=computed(()=>t.external||t.target&&t.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||hasProtocol(s.value,!0)),l=ref(!1),a=ref(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&typeof s.value=="string"&&t.target!=="_blank"&&!isSlowConnection()){const f=useNuxtApp();let u,d=null;onMounted(()=>{const m=useObserver();onNuxtReady(()=>{u=requestIdleCallback(()=>{var v;(v=a==null?void 0:a.value)!=null&&v.tagName&&(d=m.observe(a.value,async()=>{d==null||d(),d=null,await Promise.all([f.hooks.callHook("link:prefetch",s.value).catch(()=>{}),!i.value&&preloadRouteComponents(s.value,o).catch(()=>{})]),l.value=!0}))})})}),onBeforeUnmount(()=>{u&&cancelIdleCallback(u),d==null||d(),d=null})}return()=>{var m,v;if(!i.value)return h(resolveComponent("RouterLink"),{ref:R=>{a.value=R==null?void 0:R.$el},to:s.value,...l.value&&!t.custom?{class:t.prefetchedClass||e.prefetchedClass}:{},activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom},r.default);const c=typeof s.value=="object"?((m=o.resolve(s.value))==null?void 0:m.href)??null:s.value||null,f=t.target||null,u=t.noRel?null:firstNonUndefined(t.rel,e.externalRelAttribute,c?DEFAULT_EXTERNAL_REL_ATTRIBUTE:"")||null,d=()=>navigateTo(c,{replace:t.replace});return t.custom?r.default?r.default({href:c,navigate:d,route:o.resolve(c),rel:u,target:f,isExternal:i.value,isActive:!1,isExactActive:!1}):null:h("a",{ref:a,href:c,rel:u,target:f},(v=r.default)==null?void 0:v.call(r))}}})}const __nuxt_component_0$1=defineNuxtLink({componentName:"NuxtLink"});function useObserver(){const e=useNuxtApp();if(e._observer)return e._observer;let n=null;const t=new Map,r=(s,i)=>(n||(n=new IntersectionObserver(l=>{for(const a of l){const c=t.get(a.target);(a.isIntersecting||a.intersectionRatio>0)&&c&&c()}})),t.set(s,i),n.observe(s),()=>{t.delete(s),n.unobserve(s),t.size===0&&(n.disconnect(),n=null)});return e._observer={observe:r}}function isSlowConnection(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}function isObject(e){return e!==null&&typeof e=="object"}function _defu(e,n,t=".",r){if(!isObject(n))return _defu(e,{},t,r);const o=Object.assign({},n);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const i=e[s];i!=null&&(r&&r(o,s,i,t)||(Array.isArray(i)&&Array.isArray(o[s])?o[s]=[...i,...o[s]]:isObject(i)&&isObject(o[s])?o[s]=_defu(i,o[s],(t?`${t}.`:"")+s.toString(),r):o[s]=i))}return o}function createDefu(e){return(...n)=>n.reduce((t,r)=>_defu(t,r,"",e),{})}const defu=createDefu(),defuFn=createDefu((e,n,t)=>{if(typeof e[n]<"u"&&typeof t=="function")return e[n]=t(e[n]),!0}),inlineConfig={};defuFn(inlineConfig);const modernNormalize="",felipec="",cooltipz="",main="",components={NuxtIcon:defineAsyncComponent(()=>__vitePreload(()=>import("./nuxt-icon.dbd0835d.js"),[],import.meta.url).then(e=>e.default||e))},components_plugin_KR1HBZs4kY=defineNuxtPlugin(e=>{for(const n in components)e.vueApp.component(n,components[n]),e.vueApp.component("Lazy"+n,components[n])}),appHead={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},appLayoutTransition=!1,appPageTransition=!1,appKeepalive=!1,appRootId="__nuxt",vueuse_head_plugin_D7WGfuP1A0=defineNuxtPlugin(e=>{const n=createHead();n.push(appHead),e.vueApp.use(n);{let t=!0;const r=()=>{t=!1,n.internalHooks.callHook("entries:updated",n.unhead)};n.internalHooks.hook("dom:beforeRender",o=>{o.shouldRender=!t}),e.hooks.hook("page:start",()=>{t=!0}),e.hooks.hook("page:finish",r),e.hooks.hook("app:mounted",r)}e._useHead=useHead$1});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const isBrowser$1=typeof window<"u";function isESModule(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const assign=Object.assign;function applyToParams(e,n){const t={};for(const r in n){const o=n[r];t[r]=isArray$1(o)?o.map(e):e(o)}return t}const noop=()=>{},isArray$1=Array.isArray,TRAILING_SLASH_RE=/\/$/,removeTrailingSlash=e=>e.replace(TRAILING_SLASH_RE,"");function parseURL(e,n,t="/"){let r,o={},s="",i="";const l=n.indexOf("#");let a=n.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=n.slice(0,a),s=n.slice(a+1,l>-1?l:n.length),o=e(s)),l>-1&&(r=r||n.slice(0,l),i=n.slice(l,n.length)),r=resolveRelativePath(r??n,t),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function stringifyURL(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function stripBase(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function isSameRouteLocation(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&isSameRouteRecord(n.matched[r],t.matched[o])&&isSameRouteLocationParams(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function isSameRouteRecord(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function isSameRouteLocationParams(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!isSameRouteLocationParamsValue(e[t],n[t]))return!1;return!0}function isSameRouteLocationParamsValue(e,n){return isArray$1(e)?isEquivalentArray(e,n):isArray$1(n)?isEquivalentArray(n,e):e===n}function isEquivalentArray(e,n){return isArray$1(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function resolveRelativePath(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/");let o=t.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var NavigationType;(function(e){e.pop="pop",e.push="push"})(NavigationType||(NavigationType={}));var NavigationDirection;(function(e){e.back="back",e.forward="forward",e.unknown=""})(NavigationDirection||(NavigationDirection={}));function normalizeBase(e){if(!e)if(isBrowser$1){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),removeTrailingSlash(e)}const BEFORE_HASH_RE=/^[^#]+#/;function createHref(e,n){return e.replace(BEFORE_HASH_RE,"#")+n}function getElementPosition(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const computeScrollPosition=()=>({left:window.pageXOffset,top:window.pageYOffset});function scrollToPosition(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=getElementPosition(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function getScrollKey(e,n){return(history.state?history.state.position-n:-1)+e}const scrollPositions=new Map;function saveScrollPosition(e,n){scrollPositions.set(e,n)}function getSavedScrollPosition(e){const n=scrollPositions.get(e);return scrollPositions.delete(e),n}let createBaseLocation=()=>location.protocol+"//"+location.host;function createCurrentLocation$1(e,n){const{pathname:t,search:r,hash:o}=n,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),stripBase(a,"")}return stripBase(t,e)+r+o}function useHistoryListeners(e,n,t,r){let o=[],s=[],i=null;const l=({state:d})=>{const m=createCurrentLocation$1(e,location),v=t.value,R=n.value;let x=0;if(d){if(t.value=m,n.value=d,i&&i===v){i=null;return}x=R?d.position-R.position:0}else r(m);o.forEach(w=>{w(t.value,v,{delta:x,type:NavigationType.pop,direction:x?x>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown})})};function a(){i=t.value}function c(d){o.push(d);const m=()=>{const v=o.indexOf(d);v>-1&&o.splice(v,1)};return s.push(m),m}function f(){const{history:d}=window;d.state&&d.replaceState(assign({},d.state,{scroll:computeScrollPosition()}),"")}function u(){for(const d of s)d();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f),{pauseListeners:a,listen:c,destroy:u}}function buildState(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?computeScrollPosition():null}}function useHistoryStateNavigation(e){const{history:n,location:t}=window,r={value:createCurrentLocation$1(e,t)},o={value:n.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(a,c,f){const u=e.indexOf("#"),d=u>-1?(t.host&&document.querySelector("base")?e:e.slice(u))+a:createBaseLocation()+e+a;try{n[f?"replaceState":"pushState"](c,"",d),o.value=c}catch(m){console.error(m),t[f?"replace":"assign"](d)}}function i(a,c){const f=assign({},n.state,buildState(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});s(a,f,!0),r.value=a}function l(a,c){const f=assign({},o.value,n.state,{forward:a,scroll:computeScrollPosition()});s(f.current,f,!0);const u=assign({},buildState(r.value,a,null),{position:f.position+1},c);s(a,u,!1),r.value=a}return{location:r,state:o,push:l,replace:i}}function createWebHistory(e){e=normalizeBase(e);const n=useHistoryStateNavigation(e),t=useHistoryListeners(e,n.state,n.location,n.replace);function r(s,i=!0){i||t.pauseListeners(),history.go(s)}const o=assign({location:"",base:e,go:r,createHref:createHref.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function createWebHashHistory(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),createWebHistory(e)}function isRouteLocation(e){return typeof e=="string"||e&&typeof e=="object"}function isRouteName(e){return typeof e=="string"||typeof e=="symbol"}const START_LOCATION_NORMALIZED={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},NavigationFailureSymbol=Symbol("");var NavigationFailureType;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(NavigationFailureType||(NavigationFailureType={}));function createRouterError(e,n){return assign(new Error,{type:e,[NavigationFailureSymbol]:!0},n)}function isNavigationFailure(e,n){return e instanceof Error&&NavigationFailureSymbol in e&&(n==null||!!(e.type&n))}const BASE_PARAM_PATTERN="[^/]+?",BASE_PATH_PARSER_OPTIONS={sensitive:!1,strict:!1,start:!0,end:!0},REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;function tokensToParser(e,n){const t=assign({},BASE_PATH_PARSER_OPTIONS,n),r=[];let o=t.start?"^":"";const s=[];for(const c of e){const f=c.length?[]:[90];t.strict&&!c.length&&(o+="/");for(let u=0;u<c.length;u++){const d=c[u];let m=40+(t.sensitive?.25:0);if(d.type===0)u||(o+="/"),o+=d.value.replace(REGEX_CHARS_RE,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:R,optional:x,regexp:w}=d;s.push({name:v,repeatable:R,optional:x});const y=w||BASE_PARAM_PATTERN;if(y!==BASE_PARAM_PATTERN){m+=10;try{new RegExp(`(${y})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+O.message)}}let k=R?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(k=x&&c.length<2?`(?:/${k})`:"/"+k),x&&(k+="?"),o+=k,m+=20,x&&(m+=-8),R&&(m+=-20),y===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const i=new RegExp(o,t.sensitive?"":"i");function l(c){const f=c.match(i),u={};if(!f)return null;for(let d=1;d<f.length;d++){const m=f[d]||"",v=s[d-1];u[v.name]=m&&v.repeatable?m.split("/"):m}return u}function a(c){let f="",u=!1;for(const d of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const m of d)if(m.type===0)f+=m.value;else if(m.type===1){const{value:v,repeatable:R,optional:x}=m,w=v in c?c[v]:"";if(isArray$1(w)&&!R)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=isArray$1(w)?w.join("/"):w;if(!y)if(x)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);f+=y}}return f||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function compareScoreArray(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function comparePathParserScore(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const s=compareScoreArray(r[t],o[t]);if(s)return s;t++}if(Math.abs(o.length-r.length)===1){if(isLastScoreNegative(r))return 1;if(isLastScoreNegative(o))return-1}return o.length-r.length}function isLastScoreNegative(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ROOT_TOKEN={type:0,value:""},VALID_PARAM_RE=/[a-zA-Z0-9_]/;function tokenizePath(e){if(!e)return[[]];if(e==="/")return[[ROOT_TOKEN]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,r=t;const o=[];let s;function i(){s&&o.push(s),s=[]}let l=0,a,c="",f="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(a==="*"||a==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):n("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:a==="/"?(c&&u(),i()):a===":"?(u(),t=1):d();break;case 4:d(),t=r;break;case 1:a==="("?t=2:VALID_PARAM_RE.test(a)?d():(u(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:t=3:f+=a;break;case 3:u(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,f="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),i(),o}function createRouteRecordMatcher(e,n,t){const r=tokensToParser(tokenizePath(e.path),t),o=assign(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function createRouterMatcher(e,n){const t=[],r=new Map;n=mergeOptions({strict:!1,end:!0,sensitive:!1},n);function o(f){return r.get(f)}function s(f,u,d){const m=!d,v=normalizeRouteRecord(f);v.aliasOf=d&&d.record;const R=mergeOptions(n,f),x=[v];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of k)x.push(assign({},v,{components:d?d.record.components:v.components,path:O,aliasOf:d?d.record:v}))}let w,y;for(const k of x){const{path:O}=k;if(u&&O[0]!=="/"){const C=u.record.path,D=C[C.length-1]==="/"?"":"/";k.path=u.record.path+(O&&D+O)}if(w=createRouteRecordMatcher(k,u,R),d?d.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),m&&f.name&&!isAliasRecord(w)&&i(f.name)),v.children){const C=v.children;for(let D=0;D<C.length;D++)s(C[D],w,d&&d.children[D])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&a(w)}return y?()=>{i(y)}:noop}function i(f){if(isRouteName(f)){const u=r.get(f);u&&(r.delete(f),t.splice(t.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=t.indexOf(f);u>-1&&(t.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function l(){return t}function a(f){let u=0;for(;u<t.length&&comparePathParserScore(f,t[u])>=0&&(f.record.path!==t[u].record.path||!isRecordChildOf(f,t[u]));)u++;t.splice(u,0,f),f.record.name&&!isAliasRecord(f)&&r.set(f.record.name,f)}function c(f,u){let d,m={},v,R;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw createRouterError(1,{location:f});R=d.record.name,m=assign(paramsFromLocation(u.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),f.params&&paramsFromLocation(f.params,d.keys.map(y=>y.name))),v=d.stringify(m)}else if("path"in f)v=f.path,d=t.find(y=>y.re.test(v)),d&&(m=d.parse(v),R=d.record.name);else{if(d=u.name?r.get(u.name):t.find(y=>y.re.test(u.path)),!d)throw createRouterError(1,{location:f,currentLocation:u});R=d.record.name,m=assign({},u.params,f.params),v=d.stringify(m)}const x=[];let w=d;for(;w;)x.unshift(w.record),w=w.parent;return{name:R,path:v,params:m,matched:x,meta:mergeMetaFields(x)}}return e.forEach(f=>s(f)),{addRoute:s,resolve:c,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function paramsFromLocation(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function normalizeRouteRecord(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:normalizeRecordProps(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function normalizeRecordProps(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function isAliasRecord(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mergeMetaFields(e){return e.reduce((n,t)=>assign(n,t.meta),{})}function mergeOptions(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function isRecordChildOf(e,n){return n.children.some(t=>t===e||isRecordChildOf(e,t))}const HASH_RE=/#/g,AMPERSAND_RE=/&/g,SLASH_RE=/\//g,EQUAL_RE=/=/g,IM_RE=/\?/g,PLUS_RE=/\+/g,ENC_BRACKET_OPEN_RE=/%5B/g,ENC_BRACKET_CLOSE_RE=/%5D/g,ENC_CARET_RE=/%5E/g,ENC_BACKTICK_RE=/%60/g,ENC_CURLY_OPEN_RE=/%7B/g,ENC_PIPE_RE=/%7C/g,ENC_CURLY_CLOSE_RE=/%7D/g,ENC_SPACE_RE=/%20/g;function commonEncode(e){return encodeURI(""+e).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]")}function encodeHash(e){return commonEncode(e).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryValue(e){return commonEncode(e).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^")}function encodeQueryKey(e){return encodeQueryValue(e).replace(EQUAL_RE,"%3D")}function encodePath(e){return commonEncode(e).replace(HASH_RE,"%23").replace(IM_RE,"%3F")}function encodeParam(e){return e==null?"":encodePath(e).replace(SLASH_RE,"%2F")}function decode(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function parseQuery(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(PLUS_RE," "),i=s.indexOf("="),l=decode(i<0?s:s.slice(0,i)),a=i<0?null:decode(s.slice(i+1));if(l in n){let c=n[l];isArray$1(c)||(c=n[l]=[c]),c.push(a)}else n[l]=a}return n}function stringifyQuery(e){let n="";for(let t in e){const r=e[t];if(t=encodeQueryKey(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(isArray$1(r)?r.map(s=>s&&encodeQueryValue(s)):[r&&encodeQueryValue(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function normalizeQuery(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=isArray$1(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const matchedRouteKey=Symbol(""),viewDepthKey=Symbol(""),routerKey=Symbol(""),routeLocationKey=Symbol(""),routerViewLocationKey=Symbol("");function useCallbacks(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function guardToPromiseFn(e,n,t,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const a=u=>{u===!1?l(createRouterError(4,{from:t,to:n})):u instanceof Error?l(u):isRouteLocation(u)?l(createRouterError(2,{from:n,to:u})):(s&&r.enterCallbacks[o]===s&&typeof u=="function"&&s.push(u),i())},c=e.call(r&&r.instances[o],n,t,a);let f=Promise.resolve(c);e.length<3&&(f=f.then(a)),f.catch(u=>l(u))})}function extractComponentsGuards(e,n,t,r){const o=[];for(const s of e)for(const i in s.components){let l=s.components[i];if(!(n!=="beforeRouteEnter"&&!s.instances[i]))if(isRouteComponent(l)){const c=(l.__vccOpts||l)[n];c&&o.push(guardToPromiseFn(c,t,r,s,i))}else{let a=l();o.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const f=isESModule(c)?c.default:c;s.components[i]=f;const d=(f.__vccOpts||f)[n];return d&&guardToPromiseFn(d,t,r,s,i)()}))}}return o}function isRouteComponent(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function useLink(e){const n=inject(routerKey),t=inject(routeLocationKey),r=computed(()=>n.resolve(unref(e.to))),o=computed(()=>{const{matched:a}=r.value,{length:c}=a,f=a[c-1],u=t.matched;if(!f||!u.length)return-1;const d=u.findIndex(isSameRouteRecord.bind(null,f));if(d>-1)return d;const m=getOriginalPath(a[c-2]);return c>1&&getOriginalPath(f)===m&&u[u.length-1].path!==m?u.findIndex(isSameRouteRecord.bind(null,a[c-2])):d}),s=computed(()=>o.value>-1&&includesParams(t.params,r.value.params)),i=computed(()=>o.value>-1&&o.value===t.matched.length-1&&isSameRouteLocationParams(t.params,r.value.params));function l(a={}){return guardEvent(a)?n[unref(e.replace)?"replace":"push"](unref(e.to)).catch(noop):Promise.resolve()}return{route:r,href:computed(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const RouterLinkImpl=defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink,setup(e,{slots:n}){const t=reactive(useLink(e)),{options:r}=inject(routerKey),o=computed(()=>({[getLinkClass(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[getLinkClass(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&n.default(t);return e.custom?s:h("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},s)}}}),RouterLink=RouterLinkImpl;function guardEvent(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function includesParams(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!isArray$1(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function getOriginalPath(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const getLinkClass=(e,n,t)=>e??n??t,RouterViewImpl=defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=inject(routerViewLocationKey),o=computed(()=>e.route||r.value),s=inject(viewDepthKey,0),i=computed(()=>{let c=unref(s);const{matched:f}=o.value;let u;for(;(u=f[c])&&!u.components;)c++;return c}),l=computed(()=>o.value.matched[i.value]);provide(viewDepthKey,computed(()=>i.value+1)),provide(matchedRouteKey,l),provide(routerViewLocationKey,o);const a=ref();return watch(()=>[a.value,l.value,e.name],([c,f,u],[d,m,v])=>{f&&(f.instances[u]=c,m&&m!==f&&c&&c===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),c&&f&&(!m||!isSameRouteRecord(f,m)||!d)&&(f.enterCallbacks[u]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=o.value,f=e.name,u=l.value,d=u&&u.components[f];if(!d)return normalizeSlot(t.default,{Component:d,route:c});const m=u.props[f],v=m?m===!0?c.params:typeof m=="function"?m(c):m:null,x=h(d,assign({},v,n,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return normalizeSlot(t.default,{Component:x,route:c})||x}}});function normalizeSlot(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const RouterView=RouterViewImpl;function createRouter(e){const n=createRouterMatcher(e.routes,e),t=e.parseQuery||parseQuery,r=e.stringifyQuery||stringifyQuery,o=e.history,s=useCallbacks(),i=useCallbacks(),l=useCallbacks(),a=shallowRef(START_LOCATION_NORMALIZED);let c=START_LOCATION_NORMALIZED;isBrowser$1&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=applyToParams.bind(null,A=>""+A),u=applyToParams.bind(null,encodeParam),d=applyToParams.bind(null,decode);function m(A,H){let W,X;return isRouteName(A)?(W=n.getRecordMatcher(A),X=H):X=A,n.addRoute(X,W)}function v(A){const H=n.getRecordMatcher(A);H&&n.removeRoute(H)}function R(){return n.getRoutes().map(A=>A.record)}function x(A){return!!n.getRecordMatcher(A)}function w(A,H){if(H=assign({},H||a.value),typeof A=="string"){const _=parseURL(t,A,H.path),E=n.resolve({path:_.path},H),T=o.createHref(_.fullPath);return assign(_,E,{params:d(E.params),hash:decode(_.hash),redirectedFrom:void 0,href:T})}let W;if("path"in A)W=assign({},A,{path:parseURL(t,A.path,H.path).path});else{const _=assign({},A.params);for(const E in _)_[E]==null&&delete _[E];W=assign({},A,{params:u(A.params)}),H.params=u(H.params)}const X=n.resolve(W,H),oe=A.hash||"";X.params=f(d(X.params));const ue=stringifyURL(r,assign({},A,{hash:encodeHash(oe),path:X.path})),ae=o.createHref(ue);return assign({fullPath:ue,hash:oe,query:r===stringifyQuery?normalizeQuery(A.query):A.query||{}},X,{redirectedFrom:void 0,href:ae})}function y(A){return typeof A=="string"?parseURL(t,A,a.value.path):assign({},A)}function k(A,H){if(c!==A)return createRouterError(8,{from:H,to:A})}function O(A){return Y(A)}function C(A){return O(assign(y(A),{replace:!0}))}function D(A){const H=A.matched[A.matched.length-1];if(H&&H.redirect){const{redirect:W}=H;let X=typeof W=="function"?W(A):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=y(X):{path:X},X.params={}),assign({query:A.query,hash:A.hash,params:"path"in X?{}:A.params},X)}}function Y(A,H){const W=c=w(A),X=a.value,oe=A.state,ue=A.force,ae=A.replace===!0,_=D(W);if(_)return Y(assign(y(_),{state:typeof _=="object"?assign({},oe,_.state):oe,force:ue,replace:ae}),H||W);const E=W;E.redirectedFrom=H;let T;return!ue&&isSameRouteLocation(r,X,W)&&(T=createRouterError(16,{to:E,from:X}),Q(X,X,!0,!1)),(T?Promise.resolve(T):z(E,X)).catch(j=>isNavigationFailure(j)?isNavigationFailure(j,2)?j:F(j):S(j,E,X)).then(j=>{if(j){if(isNavigationFailure(j,2))return Y(assign({replace:ae},y(j.to),{state:typeof j.to=="object"?assign({},oe,j.to.state):oe,force:ue}),H||E)}else j=ee(E,X,!0,ae,oe);return $(E,X,j),j})}function N(A,H){const W=k(A,H);return W?Promise.reject(W):Promise.resolve()}function z(A,H){let W;const[X,oe,ue]=extractChangingRecords(A,H);W=extractComponentsGuards(X.reverse(),"beforeRouteLeave",A,H);for(const _ of X)_.leaveGuards.forEach(E=>{W.push(guardToPromiseFn(E,A,H))});const ae=N.bind(null,A,H);return W.push(ae),runGuardQueue(W).then(()=>{W=[];for(const _ of s.list())W.push(guardToPromiseFn(_,A,H));return W.push(ae),runGuardQueue(W)}).then(()=>{W=extractComponentsGuards(oe,"beforeRouteUpdate",A,H);for(const _ of oe)_.updateGuards.forEach(E=>{W.push(guardToPromiseFn(E,A,H))});return W.push(ae),runGuardQueue(W)}).then(()=>{W=[];for(const _ of A.matched)if(_.beforeEnter&&!H.matched.includes(_))if(isArray$1(_.beforeEnter))for(const E of _.beforeEnter)W.push(guardToPromiseFn(E,A,H));else W.push(guardToPromiseFn(_.beforeEnter,A,H));return W.push(ae),runGuardQueue(W)}).then(()=>(A.matched.forEach(_=>_.enterCallbacks={}),W=extractComponentsGuards(ue,"beforeRouteEnter",A,H),W.push(ae),runGuardQueue(W))).then(()=>{W=[];for(const _ of i.list())W.push(guardToPromiseFn(_,A,H));return W.push(ae),runGuardQueue(W)}).catch(_=>isNavigationFailure(_,8)?_:Promise.reject(_))}function $(A,H,W){for(const X of l.list())X(A,H,W)}function ee(A,H,W,X,oe){const ue=k(A,H);if(ue)return ue;const ae=H===START_LOCATION_NORMALIZED,_=isBrowser$1?history.state:{};W&&(X||ae?o.replace(A.fullPath,assign({scroll:ae&&_&&_.scroll},oe)):o.push(A.fullPath,oe)),a.value=A,Q(A,H,W,ae),F()}let V;function B(){V||(V=o.listen((A,H,W)=>{if(!ce.listening)return;const X=w(A),oe=D(X);if(oe){Y(assign(oe,{replace:!0}),X).catch(noop);return}c=X;const ue=a.value;isBrowser$1&&saveScrollPosition(getScrollKey(ue.fullPath,W.delta),computeScrollPosition()),z(X,ue).catch(ae=>isNavigationFailure(ae,12)?ae:isNavigationFailure(ae,2)?(Y(ae.to,X).then(_=>{isNavigationFailure(_,20)&&!W.delta&&W.type===NavigationType.pop&&o.go(-1,!1)}).catch(noop),Promise.reject()):(W.delta&&o.go(-W.delta,!1),S(ae,X,ue))).then(ae=>{ae=ae||ee(X,ue,!1),ae&&(W.delta&&!isNavigationFailure(ae,8)?o.go(-W.delta,!1):W.type===NavigationType.pop&&isNavigationFailure(ae,20)&&o.go(-1,!1)),$(X,ue,ae)}).catch(noop)}))}let g=useCallbacks(),b=useCallbacks(),P;function S(A,H,W){F(A);const X=b.list();return X.length?X.forEach(oe=>oe(A,H,W)):console.error(A),Promise.reject(A)}function I(){return P&&a.value!==START_LOCATION_NORMALIZED?Promise.resolve():new Promise((A,H)=>{g.add([A,H])})}function F(A){return P||(P=!A,B(),g.list().forEach(([H,W])=>A?W(A):H()),g.reset()),A}function Q(A,H,W,X){const{scrollBehavior:oe}=e;if(!isBrowser$1||!oe)return Promise.resolve();const ue=!W&&getSavedScrollPosition(getScrollKey(A.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return nextTick().then(()=>oe(A,H,ue)).then(ae=>ae&&scrollToPosition(ae)).catch(ae=>S(ae,A,H))}const se=A=>o.go(A);let J;const re=new Set,ce={currentRoute:a,listening:!0,addRoute:m,removeRoute:v,hasRoute:x,getRoutes:R,resolve:w,options:e,push:O,replace:C,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:b.add,isReady:I,install(A){const H=this;A.component("RouterLink",RouterLink),A.component("RouterView",RouterView),A.config.globalProperties.$router=H,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>unref(a)}),isBrowser$1&&!J&&a.value===START_LOCATION_NORMALIZED&&(J=!0,O(o.location).catch(oe=>{}));const W={};for(const oe in START_LOCATION_NORMALIZED)W[oe]=computed(()=>a.value[oe]);A.provide(routerKey,H),A.provide(routeLocationKey,reactive(W)),A.provide(routerViewLocationKey,a);const X=A.unmount;re.add(A),A.unmount=function(){re.delete(A),re.size<1&&(c=START_LOCATION_NORMALIZED,V&&V(),V=null,a.value=START_LOCATION_NORMALIZED,J=!1,P=!1),X()}}};return ce}function runGuardQueue(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function extractChangingRecords(e,n){const t=[],r=[],o=[],s=Math.max(n.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=n.matched[i];l&&(e.matched.find(c=>isSameRouteRecord(c,l))?r.push(l):t.push(l));const a=e.matched[i];a&&(n.matched.find(c=>isSameRouteRecord(c,a))||o.push(a))}return[t,r,o]}function useRoute(){return inject(routeLocationKey)}const __nuxt_page_meta$6={},__nuxt_page_meta$5={},__nuxt_page_meta$4={},__nuxt_page_meta$3={},__nuxt_page_meta$2={},__nuxt_page_meta$1={},__nuxt_page_meta={},_routes=[{name:(__nuxt_page_meta$6==null?void 0:__nuxt_page_meta$6.name)??"slug",path:(__nuxt_page_meta$6==null?void 0:__nuxt_page_meta$6.path)??"/:slug",children:[],meta:__nuxt_page_meta$6,alias:(__nuxt_page_meta$6==null?void 0:__nuxt_page_meta$6.alias)||[],redirect:(__nuxt_page_meta$6==null?void 0:__nuxt_page_meta$6.redirect)||void 0,component:()=>__vitePreload(()=>import("./_slug_.cee2542d.js"),["./_slug_.cee2542d.js","./composables.f761bd49.js","./parseRichText.a71f9321.js","./_slug_.87ad202a.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta$5==null?void 0:__nuxt_page_meta$5.name)??"blog-year-slug",path:(__nuxt_page_meta$5==null?void 0:__nuxt_page_meta$5.path)??"/blog/:year/:slug",children:[],meta:__nuxt_page_meta$5,alias:(__nuxt_page_meta$5==null?void 0:__nuxt_page_meta$5.alias)||[],redirect:(__nuxt_page_meta$5==null?void 0:__nuxt_page_meta$5.redirect)||void 0,component:()=>__vitePreload(()=>import("./_slug_.4f5780d5.js"),["./_slug_.4f5780d5.js","./nuxt-picture.14e1178f.js","./composables.f761bd49.js","./parseRichText.a71f9321.js","./_slug_.d94c2434.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta$4==null?void 0:__nuxt_page_meta$4.name)??"blog",path:(__nuxt_page_meta$4==null?void 0:__nuxt_page_meta$4.path)??"/blog",children:[],meta:__nuxt_page_meta$4,alias:(__nuxt_page_meta$4==null?void 0:__nuxt_page_meta$4.alias)||[],redirect:(__nuxt_page_meta$4==null?void 0:__nuxt_page_meta$4.redirect)||void 0,component:()=>__vitePreload(()=>import("./index.812488ab.js"),["./index.812488ab.js","./ArticleList.3bb84631.js","./nuxt-picture.14e1178f.js","./composables.f761bd49.js","./ArticleList.42257aa4.css","./parseRichText.a71f9321.js","./index.eb25e31b.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta$3==null?void 0:__nuxt_page_meta$3.name)??"index",path:(__nuxt_page_meta$3==null?void 0:__nuxt_page_meta$3.path)??"/",children:[],meta:__nuxt_page_meta$3,alias:(__nuxt_page_meta$3==null?void 0:__nuxt_page_meta$3.alias)||[],redirect:(__nuxt_page_meta$3==null?void 0:__nuxt_page_meta$3.redirect)||void 0,component:()=>__vitePreload(()=>import("./index.1397aab0.js"),["./index.1397aab0.js","./nuxt-picture.14e1178f.js","./composables.f761bd49.js","./parseRichText.a71f9321.js","./ArticleList.3bb84631.js","./ArticleList.42257aa4.css","./ProjectList.53f73907.js","./ProjectList.c4405c26.css","./index.6fc72f0d.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta$2==null?void 0:__nuxt_page_meta$2.name)??"links",path:(__nuxt_page_meta$2==null?void 0:__nuxt_page_meta$2.path)??"/links",children:[],meta:__nuxt_page_meta$2,alias:(__nuxt_page_meta$2==null?void 0:__nuxt_page_meta$2.alias)||[],redirect:(__nuxt_page_meta$2==null?void 0:__nuxt_page_meta$2.redirect)||void 0,component:()=>__vitePreload(()=>import("./links.53e09199.js"),["./links.53e09199.js","./parseRichText.a71f9321.js","./links.61dee6d3.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta$1==null?void 0:__nuxt_page_meta$1.name)??"products-slug",path:(__nuxt_page_meta$1==null?void 0:__nuxt_page_meta$1.path)??"/products/:slug",children:[],meta:__nuxt_page_meta$1,alias:(__nuxt_page_meta$1==null?void 0:__nuxt_page_meta$1.alias)||[],redirect:(__nuxt_page_meta$1==null?void 0:__nuxt_page_meta$1.redirect)||void 0,component:()=>__vitePreload(()=>import("./_slug_.beb63f0a.js"),["./_slug_.beb63f0a.js","./nuxt-picture.14e1178f.js","./composables.f761bd49.js","./parseRichText.a71f9321.js","./_slug_.01a3953a.css"],import.meta.url).then(e=>e.default||e)},{name:(__nuxt_page_meta==null?void 0:__nuxt_page_meta.name)??"projects",path:(__nuxt_page_meta==null?void 0:__nuxt_page_meta.path)??"/projects",children:[],meta:__nuxt_page_meta,alias:(__nuxt_page_meta==null?void 0:__nuxt_page_meta.alias)||[],redirect:(__nuxt_page_meta==null?void 0:__nuxt_page_meta.redirect)||void 0,component:()=>__vitePreload(()=>import("./projects.c0d1d195.js"),["./projects.c0d1d195.js","./ProjectList.53f73907.js","./nuxt-picture.14e1178f.js","./composables.f761bd49.js","./parseRichText.a71f9321.js","./ProjectList.c4405c26.css","./projects.9f92bc40.css"],import.meta.url).then(e=>e.default||e)}],routerOptions0={scrollBehavior(e,n,t){const r=useNuxtApp();let o=t||void 0;if(!o&&n&&e&&e.meta.scrollToTop!==!1&&_isDifferentRoute(n,e)&&(o={left:0,top:0}),e.path===n.path){if(n.hash&&!e.hash)return{left:0,top:0};if(e.hash)return{el:e.hash,top:_getHashElementScrollMarginTop(e.hash)}}const s=l=>!!(l.meta.pageTransition??appPageTransition),i=s(n)&&s(e)?"page:transition:finish":"page:finish";return new Promise(l=>{r.hooks.hookOnce(i,async()=>{await nextTick(),e.hash&&(o={el:e.hash,top:_getHashElementScrollMarginTop(e.hash)}),l(o)})})}};function _getHashElementScrollMarginTop(e){try{const n=document.querySelector(e);if(n)return parseFloat(getComputedStyle(n).scrollMarginTop)}catch{}return 0}function _isDifferentRoute(e,n){const t=e.matched[0]===n.matched[0];return!!(!t||t&&JSON.stringify(e.params)!==JSON.stringify(n.params))}const configRouterOptions={},routerOptions={...configRouterOptions,...routerOptions0},validate=defineNuxtRouteMiddleware(async e=>{var o;let n,t;if(!((o=e.meta)!=null&&o.validate))return;const r=([n,t]=executeAsync(()=>Promise.resolve(e.meta.validate(e))),n=await n,t(),n);if(r!==!0)return r}),globalMiddleware=[validate],namedMiddleware={};function createCurrentLocation(e,n){const{pathname:t,search:r,hash:o}=n,s=e.indexOf("#");if(s>-1){const l=o.includes(e.slice(s))?e.slice(s).length:1;let a=o.slice(l);return a[0]!=="/"&&(a="/"+a),withoutBase(a,"")}return withoutBase(t,e)+r+o}const router_Pg0DINazwm=defineNuxtPlugin(async e=>{var v,R;let n,t,r=useRuntimeConfig().app.baseURL;routerOptions.hashMode&&!r.includes("#")&&(r+="#");const o=((v=routerOptions.history)==null?void 0:v.call(routerOptions,r))??(routerOptions.hashMode?createWebHashHistory(r):createWebHistory(r)),s=((R=routerOptions.routes)==null?void 0:R.call(routerOptions,_routes))??_routes,i=createCurrentLocation(r,window.location),l=createRouter({...routerOptions,history:o,routes:s});e.vueApp.use(l);const a=shallowRef(l.currentRoute.value);l.afterEach((x,w)=>{a.value=w}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>a.value});const c=shallowRef(l.resolve(i)),f=()=>{c.value=l.currentRoute.value};e.hook("page:finish",f),l.afterEach((x,w)=>{var y,k,O,C;((k=(y=x.matched[0])==null?void 0:y.components)==null?void 0:k.default)===((C=(O=w.matched[0])==null?void 0:O.components)==null?void 0:C.default)&&f()});const u={};for(const x in c.value)u[x]=computed(()=>c.value[x]);e._route=reactive(u),e._middleware=e._middleware||{global:[],named:{}};const d=useError();try{[n,t]=executeAsync(()=>l.isReady()),await n,t()}catch(x){[n,t]=executeAsync(()=>callWithNuxt(e,showError,[x])),await n,t()}const m=useState("_layout");return l.beforeEach(async(x,w)=>{var k;x.meta=reactive(x.meta),e.isHydrating&&m.value&&!isReadonly(x.meta.layout)&&(x.meta.layout=m.value),e._processingMiddleware=!0;const y=new Set([...globalMiddleware,...e._middleware.global]);for(const O of x.matched){const C=O.meta.middleware;if(C)if(Array.isArray(C))for(const D of C)y.add(D);else y.add(C)}for(const O of y){const C=typeof O=="string"?e._middleware.named[O]||await((k=namedMiddleware[O])==null?void 0:k.call(namedMiddleware).then(Y=>Y.default||Y)):O;if(!C)throw new Error(`Unknown route middleware: '${O}'.`);const D=await callWithNuxt(e,C,[x,w]);if(!e.payload.serverRendered&&e.isHydrating&&(D===!1||D instanceof Error)){const Y=D||createError$1({statusCode:404,statusMessage:`Page Not Found: ${i}`});return await callWithNuxt(e,showError,[Y]),!1}if(D||D===!1)return D}}),l.afterEach(async x=>{delete e._processingMiddleware,!e.isHydrating&&d.value&&await callWithNuxt(e,clearError),x.matched.length===0&&await callWithNuxt(e,showError,[createError$1({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`})])}),e.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(i),name:void 0,force:!0})}catch(x){await callWithNuxt(e,showError,[x])}}),{provide:{router:l}}}),layouts={default:()=>__vitePreload(()=>import("./default.d460e1e0.js"),[],import.meta.url).then(e=>e.default||e)},prefetch_client_3cwHvxIDEX=defineNuxtPlugin(()=>{const e=useNuxtApp(),n=useRouter();e.hooks.hook("app:mounted",()=>{n.beforeEach(async t=>{var o;const r=(o=t==null?void 0:t.meta)==null?void 0:o.layout;r&&typeof layouts[r]=="function"&&await layouts[r]()})}),e.hooks.hook("link:prefetch",t=>{var i,l,a,c;if(hasProtocol(t))return;const r=n.resolve(t);if(!r)return;const o=(i=r==null?void 0:r.meta)==null?void 0:i.layout;let s=Array.isArray((l=r==null?void 0:r.meta)==null?void 0:l.middleware)?(a=r==null?void 0:r.meta)==null?void 0:a.middleware:[(c=r==null?void 0:r.meta)==null?void 0:c.middleware];s=s.filter(f=>typeof f=="string");for(const f of s)typeof namedMiddleware[f]=="function"&&namedMiddleware[f]();o&&typeof layouts[o]=="function"&&layouts[o]()})}),globalName="__NUXT_COLOR_MODE__",storageKey="nuxt-color-mode",helper=window[globalName],plugin_client_i8AMfKeYnY=defineNuxtPlugin(e=>{const n=useState("color-mode",()=>reactive({preference:helper.preference,value:helper.value,unknown:!1,forced:!1})).value;useRouter().afterEach(o=>{const s=o.meta.colorMode;s&&s!=="system"?(n.value=s,n.forced=!0):(s==="system"&&console.warn("You cannot force the colorMode to system at the page level."),n.forced=!1,n.value=n.preference==="system"?helper.getColorScheme():n.preference)});let t;function r(){t||!window.matchMedia||(t=window.matchMedia("(prefers-color-scheme: dark)"),t.addEventListener("change",()=>{!n.forced&&n.preference==="system"&&(n.value=helper.getColorScheme())}))}watch(()=>n.preference,o=>{var s;n.forced||(o==="system"?(n.value=helper.getColorScheme(),r()):n.value=o,(s=window.localStorage)==null||s.setItem(storageKey,o))},{immediate:!0}),watch(()=>n.value,(o,s)=>{helper.removeColorScheme(s),helper.addColorScheme(o)}),n.preference==="system"&&r(),e.hook("app:mounted",()=>{n.unknown&&(n.preference=helper.preference,n.value=helper.value,n.unknown=!1)}),e.provide("colorMode",n)});async function imageMeta(e,n){return await _imageMeta(n).catch(r=>(console.error("Failed to get image meta for "+n,r+""),{width:0,height:0,ratio:0}))}async function _imageMeta(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((n,t)=>{const r=new Image;r.onload=()=>{const o={width:r.width,height:r.height,ratio:r.width/r.height};n(o)},r.onerror=o=>t(o),r.src=e})}function getFileExtension(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function createMapper(e){return n=>n?e[n]||n:e.missingValue}function createOperationsGenerator({formatter:e,keyMap:n,joinWith:t="/",valueMap:r}={}){e||(e=(s,i)=>`${s}=${i}`),n&&typeof n!="function"&&(n=createMapper(n));const o=r||{};return Object.keys(o).forEach(s=>{typeof o[s]!="function"&&(o[s]=createMapper(o[s]))}),(s={})=>Object.entries(s).filter(([l,a])=>typeof a<"u").map(([l,a])=>{const c=o[l];return typeof c=="function"&&(a=c(s[l])),l=typeof n=="function"?n(l):l,e(l,a)}).join(t)}function parseSize(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function createImage(e){const n={options:e},t=(o,s={})=>resolveImage(n,o,s),r=(o,s={},i={})=>t(o,{...i,modifiers:defu(s,i.modifiers||{})}).url;for(const o in e.presets)r[o]=(s,i,l)=>r(s,i,{...e.presets[o],...l});return r.options=e,r.getImage=t,r.getMeta=(o,s)=>getMeta(n,o,s),r.getSizes=(o,s)=>getSizes(n,o,s),n.$img=r,r}async function getMeta(e,n,t){const r=resolveImage(e,n,{...t});return typeof r.getMeta=="function"?await r.getMeta():await imageMeta(e,r.url)}function resolveImage(e,n,t){var c,f;if(typeof n!="string"||n==="")throw new TypeError(`input must be a string (received ${typeof n}: ${JSON.stringify(n)})`);if(n.startsWith("data:"))return{url:n};const{provider:r,defaults:o}=getProvider(e,t.provider||e.options.provider),s=getPreset(e,t.preset);if(n=hasProtocol(n)?n:withLeadingSlash(n),!r.supportsAlias)for(const u in e.options.alias)n.startsWith(u)&&(n=joinURL(e.options.alias[u],n.substr(u.length)));if(r.validateDomains&&hasProtocol(n)){const u=parseURL$1(n).host;if(!e.options.domains.find(d=>d===u))return{url:n}}const i=defu(t,s,o);i.modifiers={...i.modifiers};const l=i.modifiers.format;(c=i.modifiers)!=null&&c.width&&(i.modifiers.width=parseSize(i.modifiers.width)),(f=i.modifiers)!=null&&f.height&&(i.modifiers.height=parseSize(i.modifiers.height));const a=r.getImage(n,i,e);return a.format=a.format||l||"",a}function getProvider(e,n){const t=e.options.providers[n];if(!t)throw new Error("Unknown provider: "+n);return t}function getPreset(e,n){if(!n)return{};if(!e.options.presets[n])throw new Error("Unknown preset: "+n);return e.options.presets[n]}function getSizes(e,n,t){var c,f;const r=parseSize((c=t.modifiers)==null?void 0:c.width),o=parseSize((f=t.modifiers)==null?void 0:f.height),s=r&&o?o/r:0,i=[],l={};if(typeof t.sizes=="string")for(const u of t.sizes.split(/[\s,]+/).filter(d=>d)){const d=u.split(":");d.length===2&&(l[d[0].trim()]=d[1].trim())}else Object.assign(l,t.sizes);for(const u in l){const d=e.options.screens&&e.options.screens[u]||parseInt(u);let m=String(l[u]);const v=m.endsWith("vw");if(!v&&/^\d+$/.test(m)&&(m=m+"px"),!v&&!m.endsWith("px"))continue;let R=parseInt(m);if(!d||!R)continue;v&&(R=Math.round(R/100*d));const x=s?Math.round(R*s):o;i.push({width:R,size:m,screenMaxWidth:d,media:`(max-width: ${d}px)`,src:e.$img(n,{...t.modifiers,width:R,height:x},t)})}i.sort((u,d)=>u.screenMaxWidth-d.screenMaxWidth);const a=i[i.length-1];return a&&(a.media=""),{sizes:i.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "),srcset:i.map(u=>`${u.src} ${u.width}w`).join(", "),src:a==null?void 0:a.src}}const contentfulCDN="https://images.ctfassets.net",operationsGenerator$1=createOperationsGenerator({keyMap:{format:"fm",width:"w",height:"h",focus:"f",radius:"r",quality:"q",background:"bg"},valueMap:{format:{jpeg:"jpg"},fit:{cover:"crop",contain:"fill",fill:"scale",thumbnail:"thumb"}},joinWith:"&",formatter:(e,n)=>`${e}=${n}`}),getImage$1=(e,{modifiers:n={},baseURL:t=contentfulCDN}={})=>{const r=operationsGenerator$1(n),{pathname:o}=parseURL$1(e),s=o+(r?"?"+r:"");return{url:withBase(s,t)}},contentfulRuntime$kLIXt3bnoq=Object.freeze(Object.defineProperty({__proto__:null,getImage:getImage$1,operationsGenerator:operationsGenerator$1},Symbol.toStringTag,{value:"Module"})),operationsGenerator=createOperationsGenerator({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,n)=>encodeParam$1(e)+"_"+encodeParam$1(n)}),getImage=(e,{modifiers:n={},baseURL:t}={},r)=>{n.width&&n.height&&(n.resize=`${n.width}x${n.height}`,delete n.width,delete n.height);const o=operationsGenerator(n)||"_";return t||(t=joinURL("/","/_ipx")),{url:joinURL(t,o,encodePath$1(e))}},validateDomains=!0,supportsAlias=!0,ipxRuntime$ALpGplkfdm=Object.freeze(Object.defineProperty({__proto__:null,getImage,supportsAlias,validateDomains},Symbol.toStringTag,{value:"Module"})),imageOptions={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536,smallmobile:340,standardmobile:390,largemobile:450,smalltablet:640,standardtablet:768,largetablet:1e3,smalldesktop:1366,standarddesktop:1920,largedesktop:2880,"4kdesktop":3840},presets:{},provider:"ipx",domains:[],alias:{}};imageOptions.providers={contentful:{provider:contentfulRuntime$kLIXt3bnoq,defaults:{}},ipx:{provider:ipxRuntime$ALpGplkfdm,defaults:{}}};const plugin_OrkQhMqHci=defineNuxtPlugin(()=>({provide:{img:createImage(imageOptions)}})),payload_client_5Om5dvb8Jc=defineNuxtPlugin(e=>{isPrerendered()&&(e.hooks.hook("link:prefetch",n=>{if(!parseURL$1(n).protocol)return loadPayload(n)}),useRouter().beforeResolve(async(n,t)=>{if(n.path===t.path)return;const r=await loadPayload(n.path);r&&Object.assign(e.static.data,r.data)}))});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var contentful_browserExports={},contentful_browser={get exports(){return contentful_browserExports},set exports(e){contentful_browserExports=e}};(function(module,exports){(function(n,t){module.exports=t()})(globalThis,()=>(()=>{var __webpack_modules__={"../node_modules/axios/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`module.exports = __webpack_require__(/*! ./lib/axios */ "../node_modules/axios/lib/axios.js");

//# sourceURL=webpack://contentful/../node_modules/axios/index.js?`)},"../node_modules/axios/lib/adapters/xhr.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../node_modules/axios/lib/core/createError.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "../node_modules/axios/lib/defaults/transitional.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/adapters/xhr.js?`)},"../node_modules/axios/lib/axios.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./utils */ "../node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "../node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "../node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/axios.js?`)},"../node_modules/axios/lib/cancel/Cancel.js":module=>{eval(`

/**
 * A \`Cancel\` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/cancel/Cancel.js?`)},"../node_modules/axios/lib/cancel/CancelToken.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var Cancel = __webpack_require__(/*! ./Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");

/**
 * A \`CancelToken\` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a \`Cancel\` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new \`CancelToken\` and a function that, when called,
 * cancels the \`CancelToken\`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/cancel/CancelToken.js?`)},"../node_modules/axios/lib/cancel/isCancel.js":module=>{eval(`

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/cancel/isCancel.js?`)},"../node_modules/axios/lib/core/Axios.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "../node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/Axios.js?`)},"../node_modules/axios/lib/core/InterceptorManager.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle \`then\` for a \`Promise\`
 * @param {Function} rejected The function to handle \`reject\` for a \`Promise\`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by \`use\`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become \`null\` calling \`eject\`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/InterceptorManager.js?`)},"../node_modules/axios/lib/core/buildFullPath.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/buildFullPath.js?`)},"../node_modules/axios/lib/core/createError.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var enhanceError = __webpack_require__(/*! ./enhanceError */ "../node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/createError.js?`)},"../node_modules/axios/lib/core/dispatchRequest.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../node_modules/axios/lib/defaults/index.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a \`Cancel\` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/dispatchRequest.js?`)},"../node_modules/axios/lib/core/enhanceError.js":module=>{eval(`

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/enhanceError.js?`)},"../node_modules/axios/lib/core/mergeConfig.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/mergeConfig.js?`)},"../node_modules/axios/lib/core/settle.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var createError = __webpack_require__(/*! ./createError */ "../node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/settle.js?`)},"../node_modules/axios/lib/core/transformData.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "../node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/core/transformData.js?`)},"../node_modules/axios/lib/defaults/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "../node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "../node_modules/axios/lib/core/enhanceError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "../node_modules/axios/lib/defaults/transitional.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


//# sourceURL=webpack://contentful/../node_modules/axios/lib/defaults/index.js?`)},"../node_modules/axios/lib/defaults/transitional.js":module=>{eval(`

module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/defaults/transitional.js?`)},"../node_modules/axios/lib/env/data.js":module=>{eval(`module.exports = {
  "version": "0.26.1"
};

//# sourceURL=webpack://contentful/../node_modules/axios/lib/env/data.js?`)},"../node_modules/axios/lib/helpers/bind.js":module=>{eval(`

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/bind.js?`)},"../node_modules/axios/lib/helpers/buildURL.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/buildURL.js?`)},"../node_modules/axios/lib/helpers/combineURLs.js":module=>{eval(`

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')
    : baseURL;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/combineURLs.js?`)},"../node_modules/axios/lib/helpers/cookies.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/cookies.js?`)},"../node_modules/axios/lib/helpers/isAbsoluteURL.js":module=>{eval(`

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\\d+\\-.]*:)?\\/\\//i.test(url);
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/isAbsoluteURL.js?`)},"../node_modules/axios/lib/helpers/isAxiosError.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/isAxiosError.js?`)},"../node_modules/axios/lib/helpers/isURLSameOrigin.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/isURLSameOrigin.js?`)},"../node_modules/axios/lib/helpers/normalizeHeaderName.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/normalizeHeaderName.js?`)},"../node_modules/axios/lib/helpers/parseHeaders.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * \`\`\`
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * \`\`\`
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/parseHeaders.js?`)},"../node_modules/axios/lib/helpers/spread.js":module=>{eval(`

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use \`Function.prototype.apply\`.
 *
 *  \`\`\`js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  \`\`\`
 *
 * With \`spread\` this example can be re-written.
 *
 *  \`\`\`js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  \`\`\`
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/spread.js?`)},"../node_modules/axios/lib/helpers/validator.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var VERSION = (__webpack_require__(/*! ../env/data */ "../node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/helpers/validator.js?`)},"../node_modules/axios/lib/utils.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If \`obj\` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * \`\`\`js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * \`\`\`
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


//# sourceURL=webpack://contentful/../node_modules/axios/lib/utils.js?`)},"../node_modules/call-bind/callBound.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "../node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


//# sourceURL=webpack://contentful/../node_modules/call-bind/callBound.js?`)},"../node_modules/call-bind/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var bind = __webpack_require__(/*! function-bind */ "../node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


//# sourceURL=webpack://contentful/../node_modules/call-bind/index.js?`)},"../node_modules/contentful-resolve-response/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-copy */ "../node_modules/fast-copy/dist/fast-copy.js");
/* harmony import */ var fast_copy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_copy__WEBPACK_IMPORTED_MODULE_0__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var UNRESOLVED_LINK = {}; // unique object to avoid polyfill bloat using Symbol()

/**
 * isLink Function
 * Checks if the object has sys.type "Link"
 * @param object
 */
var isLink = function isLink(object) {
  return object && object.sys && object.sys.type === 'Link';
};

/**
 * isResourceLink Function
 * Checks if the object has sys.type "ResourceLink"
 * @param object
 */
var isResourceLink = function isResourceLink(object) {
  return object && object.sys && object.sys.type === 'ResourceLink';
};

/**
 * Creates a key with spaceId and a key without for entityMap
 *
 * @param {*} sys
 * @param {String} sys.type
 * @param {String} sys.id
 * @param {*} sys.space
 * @param {*} sys.space.sys
 * @param {String} sys.space.id
 * @return {string[]}
 */
var makeEntityMapKeys = function makeEntityMapKeys(sys) {
  return sys.space ? [sys.type + '!' + sys.id, sys.space.sys.id + '!' + sys.type + '!' + sys.id] : [sys.type + '!' + sys.id];
};

/**
 * Looks up in entityMap
 *
 * @param entityMap
 * @param {*} linkData
 * @param {String} linkData.type
 * @param {String} linkData.linkType
 * @param {String} linkData.id
 * @param {String} linkData.urn
 * @return {String}
 */
var lookupInEntityMap = function lookupInEntityMap(entityMap, linkData) {
  var entryId = linkData.entryId,
      linkType = linkData.linkType,
      spaceId = linkData.spaceId;

  if (spaceId) {
    return entityMap.get(spaceId + '!' + linkType + '!' + entryId);
  }
  return entityMap.get(linkType + '!' + entryId);
};

/**
 * getResolvedLink Function
 *
 * @param entityMap
 * @param link
 * @return {undefined}
 */
var getResolvedLink = function getResolvedLink(entityMap, link) {
  var _link$sys = link.sys,
      type = _link$sys.type,
      linkType = _link$sys.linkType;

  if (type === 'ResourceLink') {
    var urn = link.sys.urn;

    var regExp = /.*:spaces\\/(?<spaceId>[A-Za-z0-9]*)\\/entries\\/(?<entryId>[A-Za-z0-9]*)/;
    if (!regExp.test(urn)) {
      return UNRESOLVED_LINK;
    }
    var _urn$match$groups = urn.match(regExp).groups,
        spaceId = _urn$match$groups.spaceId,
        _entryId = _urn$match$groups.entryId;

    var extractedLinkType = linkType.split(':')[1];
    return lookupInEntityMap(entityMap, { linkType: extractedLinkType, entryId: _entryId, spaceId: spaceId }) || UNRESOLVED_LINK;
  }
  var entryId = link.sys.id;

  return lookupInEntityMap(entityMap, { linkType: linkType, entryId: entryId }) || UNRESOLVED_LINK;
};

/**
 * cleanUpLinks Function
 * - Removes unresolvable links from Arrays and Objects
 *
 * @param {Object[]|Object} input
 */
var cleanUpLinks = function cleanUpLinks(input) {
  if (Array.isArray(input)) {
    return input.filter(function (val) {
      return val !== UNRESOLVED_LINK;
    });
  }
  for (var key in input) {
    if (input[key] === UNRESOLVED_LINK) {
      delete input[key];
    }
  }
  return input;
};

/**
 * walkMutate Function
 * @param input
 * @param predicate
 * @param mutator
 * @param removeUnresolved
 * @return {*}
 */
var walkMutate = function walkMutate(input, predicate, mutator, removeUnresolved) {
  if (predicate(input)) {
    return mutator(input);
  }

  if (input && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
    for (var key in input) {
      // eslint-disable-next-line no-prototype-builtins
      if (input.hasOwnProperty(key)) {
        input[key] = walkMutate(input[key], predicate, mutator, removeUnresolved);
      }
    }
    if (removeUnresolved) {
      input = cleanUpLinks(input);
    }
  }
  return input;
};

var normalizeLink = function normalizeLink(entityMap, link, removeUnresolved) {
  var resolvedLink = getResolvedLink(entityMap, link);
  if (resolvedLink === UNRESOLVED_LINK) {
    return removeUnresolved ? resolvedLink : link;
  }
  return resolvedLink;
};

var makeEntryObject = function makeEntryObject(item, itemEntryPoints) {
  if (!Array.isArray(itemEntryPoints)) {
    return item;
  }

  var entryPoints = Object.keys(item).filter(function (ownKey) {
    return itemEntryPoints.indexOf(ownKey) !== -1;
  });

  return entryPoints.reduce(function (entryObj, entryPoint) {
    entryObj[entryPoint] = item[entryPoint];
    return entryObj;
  }, {});
};

/**
 * resolveResponse Function
 * Resolves contentful response to normalized form.
 * @param {Object} response Contentful response
 * @param {{removeUnresolved: Boolean, itemEntryPoints: Array<String>}|{}} options
 * @param {Boolean} options.removeUnresolved - Remove unresolved links default:false
 * @param {Array<String>} options.itemEntryPoints - Resolve links only in those item properties
 * @return {Object}
 */
var resolveResponse = function resolveResponse(response, options) {
  options = options || {};
  if (!response.items) {
    return [];
  }
  var responseClone = fast_copy__WEBPACK_IMPORTED_MODULE_0___default()(response);
  var allIncludes = Object.keys(responseClone.includes || {}).reduce(function (all, type) {
    return [].concat(_toConsumableArray(all), _toConsumableArray(response.includes[type]));
  }, []);

  var allEntries = [].concat(_toConsumableArray(responseClone.items), _toConsumableArray(allIncludes));

  var entityMap = new Map(allEntries.reduce(function (acc, entity) {
    var entries = makeEntityMapKeys(entity.sys).map(function (key) {
      return [key, entity];
    });
    acc.push.apply(acc, _toConsumableArray(entries));
    return acc;
  }, []));

  allEntries.forEach(function (item) {
    var entryObject = makeEntryObject(item, options.itemEntryPoints);

    Object.assign(item, walkMutate(entryObject, function (x) {
      return isLink(x) || isResourceLink(x);
    }, function (link) {
      return normalizeLink(entityMap, link, options.removeUnresolved);
    }, options.removeUnresolved));
  });

  return responseClone.items;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveResponse);

//# sourceURL=webpack://contentful/../node_modules/contentful-resolve-response/dist/esm/index.js?`)},"../node_modules/contentful-sdk-core/dist/index.es-modules.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHttpClient": () => (/* binding */ createHttpClient),
/* harmony export */   "createRequestConfig": () => (/* binding */ createRequestConfig),
/* harmony export */   "enforceObjPath": () => (/* binding */ enforceObjPath),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "freezeSys": () => (/* binding */ freezeSys),
/* harmony export */   "getUserAgentHeader": () => (/* binding */ getUserAgentHeader),
/* harmony export */   "toPlainObject": () => (/* binding */ toPlainObject)
/* harmony export */ });
/* harmony import */ var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-copy */ "../node_modules/fast-copy/dist/fast-copy.js");
/* harmony import */ var fast_copy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_copy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isstring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.isstring */ "../node_modules/lodash.isstring/index.js");
/* harmony import */ var lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isstring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var p_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p-throttle */ "../node_modules/p-throttle/index.js");
/* harmony import */ var p_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(p_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isplainobject */ "../node_modules/lodash.isplainobject/index.js");
/* harmony import */ var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4__);






function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype,
    _groups = new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function (groups, name) {
      var i = g[name];
      if ("number" == typeof i) groups[name] = result[i];else {
        for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      indices && (indices.groups = buildGroups(indices, this));
    }
    return result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) {
        var group = groups[name];
        return "$" + (Array.isArray(group) ? group.join("$") : group);
      }));
    }
    if ("function" == typeof substitution) {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function isNode() {
  /**
   * Save way to check for the global scope which should confirm if an environment is node
   * For reference: https://stackoverflow.com/a/31090240
   */
  var isNodeFunc = new Function('try {return this===global;}catch(e){return false;}');
  return isNodeFunc();
}
function isReactNative() {
  return typeof window !== 'undefined' && 'navigator' in window && 'product' in window.navigator && window.navigator.product === 'ReactNative';
}
function getNodeVersion() {
  return process.versions && process.versions.node ? "v".concat(process.versions.node) : process.version;
}
function getWindow() {
  return window;
}
function noop() {
  return undefined;
}

var PERCENTAGE_REGEX = /*#__PURE__*/_wrapRegExp(/(\\d+)(%)/, {
  value: 1
});
function calculateLimit(type) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var limit = max;
  if (PERCENTAGE_REGEX.test(type)) {
    var _type$match;
    var groups = (_type$match = type.match(PERCENTAGE_REGEX)) === null || _type$match === void 0 ? void 0 : _type$match.groups;
    if (groups && groups.value) {
      var percentage = parseInt(groups.value) / 100;
      limit = Math.round(max * percentage);
    }
  }
  return Math.min(30, Math.max(1, limit));
}
function createThrottle(limit, logger) {
  logger('info', "Throttle request to ".concat(limit, "/s"));
  return p_throttle__WEBPACK_IMPORTED_MODULE_3___default()({
    limit: limit,
    interval: 1000,
    strict: false
  });
}
var rateLimitThrottle = (function (axiosInstance) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var _axiosInstance$defaul = axiosInstance.defaults.logHandler,
    logHandler = _axiosInstance$defaul === void 0 ? noop : _axiosInstance$defaul;
  var limit = lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default()(type) ? calculateLimit(type) : calculateLimit('auto', type);
  var throttle = createThrottle(limit, logHandler);
  var isCalculated = false;
  var requestInterceptorId = axiosInstance.interceptors.request.use(function (config) {
    return throttle(function () {
      return config;
    })();
  }, function (error) {
    return Promise.reject(error);
  });
  var responseInterceptorId = axiosInstance.interceptors.response.use(function (response) {
    if (!isCalculated && lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default()(type) && (type === 'auto' || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers['x-contentful-ratelimit-second-limit']) {
      var rawLimit = parseInt(response.headers['x-contentful-ratelimit-second-limit']);
      var nextLimit = calculateLimit(type, rawLimit);
      if (nextLimit !== limit) {
        if (requestInterceptorId) {
          axiosInstance.interceptors.request.eject(requestInterceptorId);
        }
        limit = nextLimit;
        throttle = createThrottle(nextLimit, logHandler);
        requestInterceptorId = axiosInstance.interceptors.request.use(function (config) {
          return throttle(function () {
            return config;
          })();
        }, function (error) {
          return Promise.reject(error);
        });
      }
      isCalculated = true;
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  return function () {
    axiosInstance.interceptors.request.eject(requestInterceptorId);
    axiosInstance.interceptors.response.eject(responseInterceptorId);
  };
});

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
var defaultWait = function defaultWait(attempts) {
  return Math.pow(Math.SQRT2, attempts);
};
function rateLimit(instance) {
  var maxRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var _instance$defaults = instance.defaults,
    _instance$defaults$re = _instance$defaults.responseLogger,
    responseLogger = _instance$defaults$re === void 0 ? noop : _instance$defaults$re,
    _instance$defaults$re2 = _instance$defaults.requestLogger,
    requestLogger = _instance$defaults$re2 === void 0 ? noop : _instance$defaults$re2;
  instance.interceptors.request.use(function (config) {
    requestLogger(config);
    return config;
  }, function (error) {
    requestLogger(error);
    return Promise.reject(error);
  });
  instance.interceptors.response.use(function (response) {
    // we don't need to do anything here
    responseLogger(response);
    return response;
  }, function (error) {
    var response = error.response;
    var config = error.config;
    responseLogger(error);
    // Do not retry if it is disabled or no request config exists (not an axios error)
    if (!config || !instance.defaults.retryOnError) {
      return Promise.reject(error);
    }

    // Retried already for max attempts
    var doneAttempts = config.attempts || 1;
    if (doneAttempts > maxRetry) {
      error.attempts = config.attempts;
      return Promise.reject(error);
    }
    var retryErrorType = null;
    var wait = defaultWait(doneAttempts);

    // Errors without response did not receive anything from the server
    if (!response) {
      retryErrorType = 'Connection';
    } else if (response.status >= 500 && response.status < 600) {
      // 5** errors are server related
      retryErrorType = "Server ".concat(response.status);
    } else if (response.status === 429) {
      // 429 errors are exceeded rate limit exceptions
      retryErrorType = 'Rate limit';
      // all headers are lowercased by axios https://github.com/mzabriskie/axios/issues/413
      if (response.headers && error.response.headers['x-contentful-ratelimit-reset']) {
        wait = response.headers['x-contentful-ratelimit-reset'];
      }
    }
    if (retryErrorType) {
      // convert to ms and add jitter
      wait = Math.floor(wait * 1000 + Math.random() * 200 + 500);
      instance.defaults.logHandler('warning', "".concat(retryErrorType, " error occurred. Waiting for ").concat(wait, " ms before retrying..."));

      // increase attempts counter
      config.attempts = doneAttempts + 1;

      /* Somehow between the interceptor and retrying the request the httpAgent/httpsAgent gets transformed from an Agent-like object
       to a regular object, causing failures on retries after rate limits. Removing these properties here fixes the error, but retry
       requests still use the original http/httpsAgent property */
      delete config.httpAgent;
      delete config.httpsAgent;
      return delay(wait).then(function () {
        return instance(config);
      });
    }
    return Promise.reject(error);
  });
}

function asyncToken(instance, getToken) {
  instance.interceptors.request.use(function (config) {
    return getToken().then(function (accessToken) {
      config.headers = _objectSpread2(_objectSpread2({}, config.headers), {}, {
        Authorization: "Bearer ".concat(accessToken)
      });
      return config;
    });
  });
}

// Matches 'sub.host:port' or 'host:port' and extracts hostname and port
// Also enforces toplevel domain specified, no spaces and no protocol
var HOST_REGEX = /^(?!\\w+:\\/\\/)([^\\s:]+\\.?[^\\s:]+)(?::(\\d+))?(?!:)$/;

/**
 * Create pre configured axios instance
 * @private
 * @param {AxiosStatic} axios - Axios library
 * @param {CreateHttpClientParams} options - Initialization parameters for the HTTP client
 * @return {ContentfulAxiosInstance} Initialized axios instance
 */
function createHttpClient(axios, options) {
  var defaultConfig = {
    insecure: false,
    retryOnError: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logHandler: function logHandler(level, data) {
      if (level === 'error' && data) {
        var title = [data.name, data.message].filter(function (a) {
          return a;
        }).join(' - ');
        console.error("[error] ".concat(title));
        console.error(data);
        return;
      }
      console.log("[".concat(level, "] ").concat(data));
    },
    // Passed to axios
    headers: {},
    httpAgent: false,
    httpsAgent: false,
    timeout: 30000,
    throttle: 0,
    proxy: false,
    basePath: '',
    adapter: undefined,
    maxContentLength: 1073741824,
    // 1GB
    maxBodyLength: 1073741824 // 1GB
  };

  var config = _objectSpread2(_objectSpread2({}, defaultConfig), options);
  if (!config.accessToken) {
    var missingAccessTokenError = new TypeError('Expected parameter accessToken');
    config.logHandler('error', missingAccessTokenError);
    throw missingAccessTokenError;
  }

  // Construct axios baseURL option
  var protocol = config.insecure ? 'http' : 'https';
  var space = config.space ? "".concat(config.space, "/") : '';
  var hostname = config.defaultHostname;
  var port = config.insecure ? 80 : 443;
  if (config.host && HOST_REGEX.test(config.host)) {
    var parsed = config.host.split(':');
    if (parsed.length === 2) {
      var _parsed = _slicedToArray(parsed, 2);
      hostname = _parsed[0];
      port = _parsed[1];
    } else {
      hostname = parsed[0];
    }
  }

  // Ensure that basePath does start but not end with a slash
  if (config.basePath) {
    config.basePath = "/".concat(config.basePath.split('/').filter(Boolean).join('/'));
  }
  var baseURL = options.baseURL || "".concat(protocol, "://").concat(hostname, ":").concat(port).concat(config.basePath, "/spaces/").concat(space);
  if (!config.headers.Authorization && typeof config.accessToken !== 'function') {
    config.headers.Authorization = 'Bearer ' + config.accessToken;
  }
  var axiosOptions = {
    // Axios
    baseURL: baseURL,
    headers: config.headers,
    httpAgent: config.httpAgent,
    httpsAgent: config.httpsAgent,
    paramsSerializer: (qs__WEBPACK_IMPORTED_MODULE_1___default().stringify),
    proxy: config.proxy,
    timeout: config.timeout,
    adapter: config.adapter,
    maxContentLength: config.maxContentLength,
    maxBodyLength: config.maxBodyLength,
    // Contentful
    logHandler: config.logHandler,
    responseLogger: config.responseLogger,
    requestLogger: config.requestLogger,
    retryOnError: config.retryOnError
  };
  var instance = axios.create(axiosOptions);
  instance.httpClientParams = options;

  /**
   * Creates a new axios instance with the same default base parameters as the
   * current one, and with any overrides passed to the newParams object
   * This is useful as the SDKs use dependency injection to get the axios library
   * and the version of the library comes from different places depending
   * on whether it's a browser build or a node.js build.
   * @private
   * @param {CreateHttpClientParams} httpClientParams - Initialization parameters for the HTTP client
   * @return {ContentfulAxiosInstance} Initialized axios instance
   */
  instance.cloneWithNewParams = function (newParams) {
    return createHttpClient(axios, _objectSpread2(_objectSpread2({}, fast_copy__WEBPACK_IMPORTED_MODULE_0___default()(options)), newParams));
  };

  /**
   * Apply interceptors.
   * Please note that the order of interceptors is important
   */

  if (config.onBeforeRequest) {
    instance.interceptors.request.use(config.onBeforeRequest);
  }
  if (typeof config.accessToken === 'function') {
    asyncToken(instance, config.accessToken);
  }
  if (config.throttle) {
    rateLimitThrottle(instance, config.throttle);
  }
  rateLimit(instance, config.retryLimit);
  if (config.onError) {
    instance.interceptors.response.use(function (response) {
      return response;
    }, config.onError);
  }
  return instance;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Creates request parameters configuration by parsing an existing query object
 * @private
 * @param {Object} query
 * @return {Object} Config object with \`params\` property, ready to be used in axios
 */
function createRequestConfig(_ref) {
  var query = _ref.query;
  var config = {};
  delete query.resolveLinks;
  config.params = fast_copy__WEBPACK_IMPORTED_MODULE_0___default()(query);
  return config;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enforceObjPath(obj, path) {
  if (!(path in obj)) {
    var err = new Error();
    err.name = 'PropertyMissing';
    err.message = "Required property ".concat(path, " missing from:\\n\\n").concat(JSON.stringify(obj), "\\n\\n");
    throw err;
  }
  return true;
}

// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

function deepFreeze(object) {
  var propNames = Object.getOwnPropertyNames(object);
  var _iterator = _createForOfIteratorHelper(propNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      if (value && _typeof(value) === 'object') {
        deepFreeze(value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Object.freeze(object);
}
function freezeSys(obj) {
  deepFreeze(obj.sys || {});
  return obj;
}

function getBrowserOS() {
  var win = getWindow();
  if (!win) {
    return null;
  }
  var userAgent = win.navigator.userAgent;
  // TODO: platform is deprecated.
  var platform = win.navigator.platform;
  var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  var iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  if (macosPlatforms.indexOf(platform) !== -1) {
    return 'macOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return 'Windows';
  } else if (/Android/.test(userAgent)) {
    return 'Android';
  } else if (/Linux/.test(platform)) {
    return 'Linux';
  }
  return null;
}
function getNodeOS() {
  var platform = process.platform || 'linux';
  var version = process.version || '0.0.0';
  var platformMap = {
    android: 'Android',
    aix: 'Linux',
    darwin: 'macOS',
    freebsd: 'Linux',
    linux: 'Linux',
    openbsd: 'Linux',
    sunos: 'Linux',
    win32: 'Windows'
  };
  if (platform in platformMap) {
    return "".concat(platformMap[platform] || 'Linux', "/").concat(version);
  }
  return null;
}
function getUserAgentHeader(sdk, application, integration, feature) {
  var headerParts = [];
  if (application) {
    headerParts.push("app ".concat(application));
  }
  if (integration) {
    headerParts.push("integration ".concat(integration));
  }
  if (feature) {
    headerParts.push('feature ' + feature);
  }
  headerParts.push("sdk ".concat(sdk));
  var platform = null;
  try {
    if (isReactNative()) {
      platform = getBrowserOS();
      headerParts.push('platform ReactNative');
    } else if (isNode()) {
      platform = getNodeOS();
      headerParts.push("platform node.js/".concat(getNodeVersion()));
    } else {
      platform = getBrowserOS();
      headerParts.push('platform browser');
    }
  } catch (e) {
    platform = null;
  }
  if (platform) {
    headerParts.push("os ".concat(platform));
  }
  return "".concat(headerParts.filter(function (item) {
    return item !== '';
  }).join('; '), ";");
}

/**
 * Mixes in a method to return just a plain object with no additional methods
 * @private
 * @param data - Any plain JSON response returned from the API
 * @return Enhanced object with toPlainObject method
 */
function toPlainObject(data) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return Object.defineProperty(data, 'toPlainObject', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function value() {
      return fast_copy__WEBPACK_IMPORTED_MODULE_0___default()(this);
    }
  });
}

/**
 * Handles errors received from the server. Parses the error into a more useful
 * format, places it in an exception and throws it.
 * See https://www.contentful.com/developers/docs/references/errors/
 * for more details on the data received on the errorResponse.data property
 * and the expected error codes.
 * @private
 */
function errorHandler(errorResponse) {
  var config = errorResponse.config,
    response = errorResponse.response;
  var errorName;

  // Obscure the Management token
  if (config && config.headers && config.headers['Authorization']) {
    var token = "...".concat(config.headers['Authorization'].toString().substr(-5));
    config.headers['Authorization'] = "Bearer ".concat(token);
  }
  if (!lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(response) || !lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(config)) {
    throw errorResponse;
  }
  var data = response === null || response === void 0 ? void 0 : response.data;
  var errorData = {
    status: response === null || response === void 0 ? void 0 : response.status,
    statusText: response === null || response === void 0 ? void 0 : response.statusText,
    message: '',
    details: {}
  };
  if (lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(config)) {
    errorData.request = {
      url: config.url,
      headers: config.headers,
      method: config.method,
      payloadData: config.data
    };
  }
  if (data && lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(data)) {
    if ('requestId' in data) {
      errorData.requestId = data.requestId || 'UNKNOWN';
    }
    if ('message' in data) {
      errorData.message = data.message || '';
    }
    if ('details' in data) {
      errorData.details = data.details || {};
    }
    if ('sys' in data) {
      if ('id' in data.sys) {
        errorName = data.sys.id;
      }
    }
  }
  var error = new Error();
  error.name = errorName && errorName !== 'Unknown' ? errorName : "".concat(response === null || response === void 0 ? void 0 : response.status, " ").concat(response === null || response === void 0 ? void 0 : response.statusText);
  try {
    error.message = JSON.stringify(errorData, null, '  ');
  } catch (_unused) {
    var _errorData$message;
    error.message = (_errorData$message = errorData === null || errorData === void 0 ? void 0 : errorData.message) !== null && _errorData$message !== void 0 ? _errorData$message : '';
  }
  throw error;
}




//# sourceURL=webpack://contentful/../node_modules/contentful-sdk-core/dist/index.es-modules.js?`)},"../node_modules/fast-copy/dist/fast-copy.js":function(module,__unused_webpack_exports,__webpack_require__){eval(`(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    var toStringFunction = Function.prototype.toString;
    var create = Object.create, defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getPrototypeOf$1 = Object.getPrototypeOf;
    var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
    var SYMBOL_PROPERTIES = typeof getOwnPropertySymbols === 'function';
    var WEAK_MAP = typeof WeakMap === 'function';
    /**
     * @function createCache
     *
     * @description
     * get a new cache object to prevent circular references
     *
     * @returns the new cache object
     */
    var createCache = (function () {
        if (WEAK_MAP) {
            return function () { return new WeakMap(); };
        }
        var Cache = /** @class */ (function () {
            function Cache() {
                this._keys = [];
                this._values = [];
            }
            Cache.prototype.has = function (key) {
                return !!~this._keys.indexOf(key);
            };
            Cache.prototype.get = function (key) {
                return this._values[this._keys.indexOf(key)];
            };
            Cache.prototype.set = function (key, value) {
                this._keys.push(key);
                this._values.push(value);
            };
            return Cache;
        }());
        return function () { return new Cache(); };
    })();
    /**
     * @function getCleanClone
     *
     * @description
     * get an empty version of the object with the same prototype it has
     *
     * @param object the object to build a clean clone from
     * @param realm the realm the object resides in
     * @returns the empty cloned object
     */
    var getCleanClone = function (object, realm) {
        var prototype = object.__proto__ || getPrototypeOf$1(object);
        if (!prototype) {
            return create(null);
        }
        var Constructor = prototype.constructor;
        if (Constructor === realm.Object) {
            return prototype === realm.Object.prototype ? {} : create(prototype);
        }
        if (~toStringFunction.call(Constructor).indexOf('[native code]')) {
            try {
                return new Constructor();
            }
            catch (_a) { }
        }
        return create(prototype);
    };
    /**
     * @function getObjectCloneLoose
     *
     * @description
     * get a copy of the object based on loose rules, meaning all enumerable keys
     * and symbols are copied, but property descriptors are not considered
     *
     * @param object the object to clone
     * @param realm the realm the object resides in
     * @param handleCopy the function that handles copying the object
     * @returns the copied object
     */
    var getObjectCloneLoose = function (object, realm, handleCopy, cache) {
        var clone = getCleanClone(object, realm);
        // set in the cache immediately to be able to reuse the object recursively
        cache.set(object, clone);
        for (var key in object) {
            if (hasOwnProperty.call(object, key)) {
                clone[key] = handleCopy(object[key], cache);
            }
        }
        if (SYMBOL_PROPERTIES) {
            var symbols = getOwnPropertySymbols(object);
            for (var index = 0, length_1 = symbols.length, symbol = void 0; index < length_1; ++index) {
                symbol = symbols[index];
                if (propertyIsEnumerable.call(object, symbol)) {
                    clone[symbol] = handleCopy(object[symbol], cache);
                }
            }
        }
        return clone;
    };
    /**
     * @function getObjectCloneStrict
     *
     * @description
     * get a copy of the object based on strict rules, meaning all keys and symbols
     * are copied based on the original property descriptors
     *
     * @param object the object to clone
     * @param realm the realm the object resides in
     * @param handleCopy the function that handles copying the object
     * @returns the copied object
     */
    var getObjectCloneStrict = function (object, realm, handleCopy, cache) {
        var clone = getCleanClone(object, realm);
        // set in the cache immediately to be able to reuse the object recursively
        cache.set(object, clone);
        var properties = SYMBOL_PROPERTIES
            ? getOwnPropertyNames(object).concat(getOwnPropertySymbols(object))
            : getOwnPropertyNames(object);
        for (var index = 0, length_2 = properties.length, property = void 0, descriptor = void 0; index < length_2; ++index) {
            property = properties[index];
            if (property !== 'callee' && property !== 'caller') {
                descriptor = getOwnPropertyDescriptor(object, property);
                if (descriptor) {
                    // Only clone the value if actually a value, not a getter / setter.
                    if (!descriptor.get && !descriptor.set) {
                        descriptor.value = handleCopy(object[property], cache);
                    }
                    try {
                        defineProperty(clone, property, descriptor);
                    }
                    catch (error) {
                        // Tee above can fail on node in edge cases, so fall back to the loose assignment.
                        clone[property] = descriptor.value;
                    }
                }
                else {
                    // In extra edge cases where the property descriptor cannot be retrived, fall back to
                    // the loose assignment.
                    clone[property] = handleCopy(object[property], cache);
                }
            }
        }
        return clone;
    };
    /**
     * @function getRegExpFlags
     *
     * @description
     * get the flags to apply to the copied regexp
     *
     * @param regExp the regexp to get the flags of
     * @returns the flags for the regexp
     */
    var getRegExpFlags = function (regExp) {
        var flags = '';
        if (regExp.global) {
            flags += 'g';
        }
        if (regExp.ignoreCase) {
            flags += 'i';
        }
        if (regExp.multiline) {
            flags += 'm';
        }
        if (regExp.unicode) {
            flags += 'u';
        }
        if (regExp.sticky) {
            flags += 'y';
        }
        return flags;
    };

    // utils
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var GLOBAL_THIS = (function () {
        if (typeof globalThis !== 'undefined') {
            return globalThis;
        }
        if (typeof self !== 'undefined') {
            return self;
        }
        if (typeof window !== 'undefined') {
            return window;
        }
        if (typeof __webpack_require__.g !== 'undefined') {
            return __webpack_require__.g;
        }
        if (console && console.error) {
            console.error('Unable to locate global object, returning "this".');
        }
        return this;
    })();
    /**
     * @function copy
     *
     * @description
     * copy an value deeply as much as possible
     *
     * If \`strict\` is applied, then all properties (including non-enumerable ones)
     * are copied with their original property descriptors on both objects and arrays.
     *
     * The value is compared to the global constructors in the \`realm\` provided,
     * and the native constructor is always used to ensure that extensions of native
     * objects (allows in ES2015+) are maintained.
     *
     * @param value the value to copy
     * @param [options] the options for copying with
     * @param [options.isStrict] should the copy be strict
     * @param [options.realm] the realm (this) value the value is copied from
     * @returns the copied value
     */
    function copy(value, options) {
        // manually coalesced instead of default parameters for performance
        var isStrict = !!(options && options.isStrict);
        var realm = (options && options.realm) || GLOBAL_THIS;
        var getObjectClone = isStrict ? getObjectCloneStrict : getObjectCloneLoose;
        /**
         * @function handleCopy
         *
         * @description
         * copy the value recursively based on its type
         *
         * @param value the value to copy
         * @returns the copied value
         */
        var handleCopy = function (value, cache) {
            if (!value || typeof value !== 'object') {
                return value;
            }
            if (cache.has(value)) {
                return cache.get(value);
            }
            var prototype = value.__proto__ || getPrototypeOf(value);
            var Constructor = prototype && prototype.constructor;
            // plain objects
            if (!Constructor || Constructor === realm.Object) {
                return getObjectClone(value, realm, handleCopy, cache);
            }
            var clone;
            // arrays
            if (isArray(value)) {
                // if strict, include non-standard properties
                if (isStrict) {
                    return getObjectCloneStrict(value, realm, handleCopy, cache);
                }
                clone = new Constructor();
                cache.set(value, clone);
                for (var index = 0, length_1 = value.length; index < length_1; ++index) {
                    clone[index] = handleCopy(value[index], cache);
                }
                return clone;
            }
            // dates
            if (value instanceof realm.Date) {
                return new Constructor(value.getTime());
            }
            // regexps
            if (value instanceof realm.RegExp) {
                clone = new Constructor(value.source, value.flags || getRegExpFlags(value));
                clone.lastIndex = value.lastIndex;
                return clone;
            }
            // maps
            if (realm.Map && value instanceof realm.Map) {
                clone = new Constructor();
                cache.set(value, clone);
                value.forEach(function (value, key) {
                    clone.set(key, handleCopy(value, cache));
                });
                return clone;
            }
            // sets
            if (realm.Set && value instanceof realm.Set) {
                clone = new Constructor();
                cache.set(value, clone);
                value.forEach(function (value) {
                    clone.add(handleCopy(value, cache));
                });
                return clone;
            }
            // blobs
            if (realm.Blob && value instanceof realm.Blob) {
                return value.slice(0, value.size, value.type);
            }
            // buffers (node-only)
            if (realm.Buffer && realm.Buffer.isBuffer(value)) {
                clone = realm.Buffer.allocUnsafe
                    ? realm.Buffer.allocUnsafe(value.length)
                    : new Constructor(value.length);
                cache.set(value, clone);
                value.copy(clone);
                return clone;
            }
            // arraybuffers / dataviews
            if (realm.ArrayBuffer) {
                // dataviews
                if (realm.ArrayBuffer.isView(value)) {
                    clone = new Constructor(value.buffer.slice(0));
                    cache.set(value, clone);
                    return clone;
                }
                // arraybuffers
                if (value instanceof realm.ArrayBuffer) {
                    clone = value.slice(0);
                    cache.set(value, clone);
                    return clone;
                }
            }
            // if the value cannot / should not be cloned, don't
            if (
            // promise-like
            typeof value.then === 'function' ||
                // errors
                value instanceof Error ||
                // weakmaps
                (realm.WeakMap && value instanceof realm.WeakMap) ||
                // weaksets
                (realm.WeakSet && value instanceof realm.WeakSet)) {
                return value;
            }
            // assume anything left is a custom constructor
            return getObjectClone(value, realm, handleCopy, cache);
        };
        return handleCopy(value, createCache());
    }
    // Adding reference to allow usage in CommonJS libraries compiled using TSC, which
    // expects there to be a default property on the exported value. See
    // [#37](https://github.com/planttheidea/fast-copy/issues/37) for details.
    copy.default = copy;
    /**
     * @function strictCopy
     *
     * @description
     * copy the value with \`strict\` option pre-applied
     *
     * @param value the value to copy
     * @param [options] the options for copying with
     * @param [options.realm] the realm (this) value the value is copied from
     * @returns the copied value
     */
    copy.strict = function strictCopy(value, options) {
        return copy(value, {
            isStrict: true,
            realm: options ? options.realm : void 0,
        });
    };

    return copy;

}));
//# sourceMappingURL=fast-copy.js.map


//# sourceURL=webpack://contentful/../node_modules/fast-copy/dist/fast-copy.js?`)},"../node_modules/function-bind/implementation.js":module=>{eval(`

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


//# sourceURL=webpack://contentful/../node_modules/function-bind/implementation.js?`)},"../node_modules/function-bind/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var implementation = __webpack_require__(/*! ./implementation */ "../node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


//# sourceURL=webpack://contentful/../node_modules/function-bind/index.js?`)},"../node_modules/get-intrinsic/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "../node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "../node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "../node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;
var reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing \`%\`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening \`%\`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('\`%\` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '\`')
				|| (last === '"' || last === "'" || last === '\`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an \`originalValue\` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


//# sourceURL=webpack://contentful/../node_modules/get-intrinsic/index.js?`)},"../node_modules/has-symbols/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "../node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


//# sourceURL=webpack://contentful/../node_modules/has-symbols/index.js?`)},"../node_modules/has-symbols/shams.js":module=>{eval(`

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


//# sourceURL=webpack://contentful/../node_modules/has-symbols/shams.js?`)},"../node_modules/has/src/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var bind = __webpack_require__(/*! function-bind */ "../node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


//# sourceURL=webpack://contentful/../node_modules/has/src/index.js?`)},"../node_modules/json-stringify-safe/stringify.js":(module,exports)=>{eval(`exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


//# sourceURL=webpack://contentful/../node_modules/json-stringify-safe/stringify.js?`)},"../node_modules/lodash.isplainobject/index.js":module=>{eval(`/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: \`lodash modularize exports="npm" -o ./\`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** \`Object#toString\` result references. */
var objectTag = '[object Object]';

/**
 * Checks if \`value\` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a host object, else \`false\`.
 */
function isHostObject(value) {
  // Many host objects are \`Object\` objects that can coerce to strings
  // despite having improperly defined \`toString\` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes \`func\` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the \`Object\` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [\`toStringTag\`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if \`value\` is object-like. A value is object-like if it's not \`null\`
 * and has a \`typeof\` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is object-like, else \`false\`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if \`value\` is a plain object, that is, an object created by the
 * \`Object\` constructor or one with a \`[[Prototype]]\` of \`null\`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a plain object, else \`false\`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


//# sourceURL=webpack://contentful/../node_modules/lodash.isplainobject/index.js?`)},"../node_modules/lodash.isstring/index.js":module=>{eval(`/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: \`lodash modularize exports="npm" -o ./\`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** \`Object#toString\` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [\`toStringTag\`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if \`value\` is classified as an \`Array\` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is correctly classified, else \`false\`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if \`value\` is object-like. A value is object-like if it's not \`null\`
 * and has a \`typeof\` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is object-like, else \`false\`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if \`value\` is classified as a \`String\` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is correctly classified, else \`false\`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


//# sourceURL=webpack://contentful/../node_modules/lodash.isstring/index.js?`)},"../node_modules/object-inspect/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, \`has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(/*! ./util.inspect */ "?d91c");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or \`null\`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be \`true\`, \`false\`, or \`\\'symbol\\'\`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\\\t", an integer > 0, or \`null\`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be \`true\` or \`false\`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\\(.*\\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\\s*([\\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\\\])/g, '\\\\$1'), /[\\x00-\\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\\\' + x; }
    return '\\\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\\t') {
        baseIndent = '\\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


//# sourceURL=webpack://contentful/../node_modules/object-inspect/index.js?`)},"../node_modules/p-throttle/index.js":module=>{eval(`

class AbortError extends Error {
	constructor() {
		super('Throttled function aborted');
		this.name = 'AbortError';
	}
}

const pThrottle = ({limit, interval, strict}) => {
	if (!Number.isFinite(limit)) {
		throw new TypeError('Expected \`limit\` to be a finite number');
	}

	if (!Number.isFinite(interval)) {
		throw new TypeError('Expected \`interval\` to be a finite number');
	}

	const queue = new Map();

	let currentTick = 0;
	let activeCount = 0;

	function windowedDelay() {
		const now = Date.now();

		if ((now - currentTick) > interval) {
			activeCount = 1;
			currentTick = now;
			return 0;
		}

		if (activeCount < limit) {
			activeCount++;
		} else {
			currentTick += interval;
			activeCount = 1;
		}

		return currentTick - now;
	}

	const strictTicks = [];

	function strictDelay() {
		const now = Date.now();

		if (strictTicks.length < limit) {
			strictTicks.push(now);
			return 0;
		}

		const earliestTime = strictTicks.shift() + interval;

		if (now >= earliestTime) {
			strictTicks.push(now);
			return 0;
		}

		strictTicks.push(earliestTime);
		return earliestTime - now;
	}

	const getDelay = strict ? strictDelay : windowedDelay;

	return function_ => {
		const throttled = function (...args) {
			if (!throttled.isEnabled) {
				return (async () => function_.apply(this, args))();
			}

			let timeout;
			return new Promise((resolve, reject) => {
				const execute = () => {
					resolve(function_.apply(this, args));
					queue.delete(timeout);
				};

				timeout = setTimeout(execute, getDelay());

				queue.set(timeout, reject);
			});
		};

		throttled.abort = () => {
			for (const timeout of queue.keys()) {
				clearTimeout(timeout);
				queue.get(timeout)(new AbortError());
			}

			queue.clear();
			strictTicks.splice(0, strictTicks.length);
		};

		throttled.isEnabled = true;

		return throttled;
	};
};

module.exports = pThrottle;
module.exports.AbortError = AbortError;


//# sourceURL=webpack://contentful/../node_modules/p-throttle/index.js?`)},"../node_modules/qs/lib/formats.js":module=>{eval(`

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


//# sourceURL=webpack://contentful/../node_modules/qs/lib/formats.js?`)},"../node_modules/qs/lib/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var stringify = __webpack_require__(/*! ./stringify */ "../node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


//# sourceURL=webpack://contentful/../node_modules/qs/lib/index.js?`)},"../node_modules/qs/lib/parse.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var utils = __webpack_require__(/*! ./utils */ "../node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\\[[^[\\]]*])/;
    var child = /(\\[[^[\\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


//# sourceURL=webpack://contentful/../node_modules/qs/lib/parse.js?`)},"../node_modules/qs/lib/stringify.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var getSideChannel = __webpack_require__(/*! side-channel */ "../node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "../node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('\`commaRoundTrip\` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


//# sourceURL=webpack://contentful/../node_modules/qs/lib/stringify.js?`)},"../node_modules/qs/lib/utils.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


//# sourceURL=webpack://contentful/../node_modules/qs/lib/utils.js?`)},"../node_modules/side-channel/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "../node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "../node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "../node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


//# sourceURL=webpack://contentful/../node_modules/side-channel/index.js?`)},"./contentful.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClient": () => (/* binding */ createClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful-sdk-core */ "../node_modules/contentful-sdk-core/dist/index.es-modules.js");
/* harmony import */ var _create_global_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-global-options */ "./create-global-options.ts");
/* harmony import */ var _make_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-client */ "./make-client.ts");
/**
 * Contentful Delivery API SDK. Allows you to create instances of a client
 * with access to the Contentful Content Delivery API.
 */




function createClient(params) {
    if (!params.accessToken) {
        throw new TypeError('Expected parameter accessToken');
    }
    if (!params.space) {
        throw new TypeError('Expected parameter space');
    }
    const defaultConfig = {
        resolveLinks: true,
        removeUnresolved: false,
        defaultHostname: 'cdn.contentful.com',
        environment: 'master',
    };
    const config = {
        ...defaultConfig,
        ...params,
    };
    const userAgentHeader = (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)(\`contentful.js/\${"10.0.0-beta-v10.10"}\`, config.application, config.integration);
    config.headers = {
        ...config.headers,
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': userAgentHeader,
    };
    const http = (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.createHttpClient)((axios__WEBPACK_IMPORTED_MODULE_0___default()), config);
    if (!http.defaults.baseURL) {
        throw new Error('Please define a baseURL');
    }
    const getGlobalOptions = (0,_create_global_options__WEBPACK_IMPORTED_MODULE_2__["default"])({
        space: config.space,
        resolveLinks: config.resolveLinks,
        environment: config.environment,
        removeUnresolved: config.removeUnresolved,
        spaceBaseUrl: http.defaults.baseURL,
        environmentBaseUrl: \`\${http.defaults.baseURL}environments/\${config.environment}\`,
    });
    // Append environment to baseURL
    http.defaults.baseURL = getGlobalOptions({}).environmentBaseUrl;
    return (0,_make_client__WEBPACK_IMPORTED_MODULE_3__.makeClient)({
        http,
        getGlobalOptions,
    });
}


//# sourceURL=webpack://contentful/./contentful.ts?`)},"./create-contentful-api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContentfulApi)
/* harmony export */ });
/* harmony import */ var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful-sdk-core */ "../node_modules/contentful-sdk-core/dist/index.es-modules.js");
/* harmony import */ var _paged_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paged-sync */ "./paged-sync.ts");
/* harmony import */ var _utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalize-select */ "./utils/normalize-select.ts");
/* harmony import */ var _utils_resolve_circular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/resolve-circular */ "./utils/resolve-circular.ts");
/* harmony import */ var _utils_validate_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validate-timestamp */ "./utils/validate-timestamp.ts");
/* harmony import */ var _utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/client-helpers */ "./utils/client-helpers.ts");
/* harmony import */ var _utils_validate_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/validate-params */ "./utils/validate-params.ts");
/**
 * Contentful Delivery API Client. Contains methods which allow access to the
 * different kinds of entities present in Contentful (Entries, Assets, etc).
 */







const ASSET_KEY_MAX_LIFETIME = 48 * 60 * 60;
class NotFoundError extends Error {
    sys;
    details;
    constructor(id, environment, space) {
        super('The resource could not be found.');
        this.sys = {
            type: 'Error',
            id: 'NotFound',
        };
        this.details = {
            type: 'Entry',
            id,
            environment,
            space,
        };
    }
}
function createContentfulApi({ http, getGlobalOptions }, options) {
    const notFoundError = (id = 'unknown') => {
        return new NotFoundError(id, getGlobalOptions().environment, getGlobalOptions().space);
    };
    const getBaseUrl = (context) => {
        let baseUrl = context === 'space' ? getGlobalOptions().spaceBaseUrl : getGlobalOptions().environmentBaseUrl;
        if (!baseUrl) {
            throw new Error('Please define baseUrl for ' + context);
        }
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        return baseUrl;
    };
    async function get({ context, path, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.get(baseUrl + path, config);
            return response.data;
        }
        catch (error) {
            (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(error);
        }
    }
    async function post({ context, path, data, config }) {
        const baseUrl = getBaseUrl(context);
        try {
            const response = await http.post(baseUrl + path, data, config);
            return response.data;
        }
        catch (error) {
            (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(error);
        }
    }
    async function getSpace() {
        return get({ context: 'space', path: '' });
    }
    async function getContentType(id) {
        return get({
            context: 'environment',
            path: \`content_types/\${id}\`,
        });
    }
    async function getContentTypes(query = {}) {
        return get({
            context: 'environment',
            path: 'content_types',
            config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query }),
        });
    }
    async function getEntry(id, query = {}) {
        return makeGetEntry(id, query, options);
    }
    async function getEntries(query = {}) {
        return makeGetEntries(query, options);
    }
    const getEntryDefault = getEntryWithLinkResolutionAndWithUnresolvableLinks;
    const getEntriesDefault = getEntriesWithLinkResolutionAndWithUnresolvableLinks;
    async function getEntryWithLinkResolutionAndWithUnresolvableLinks(id, query = {}) {
        return internalGetEntry(id, query, {
            withoutLinkResolution: false,
        });
    }
    async function getEntriesWithLinkResolutionAndWithUnresolvableLinks(query = {}) {
        return internalGetEntries(query, { withoutLinkResolution: false });
    }
    async function getEntryWithLinkResolutionAndWithoutUnresolvableLinks(id, query = {}) {
        return internalGetEntry(id, query, {
            withoutLinkResolution: false,
            withoutUnresolvableLinks: true,
        });
    }
    async function getEntriesWithLinkResolutionAndWithoutUnresolvableLinks(query = {}) {
        return internalGetEntries(query, { withoutLinkResolution: false, withoutUnresolvableLinks: true });
    }
    async function getEntryWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks(id, query = {}) {
        return internalGetEntry(id, {
            ...query,
            locale: '*',
        }, { withoutLinkResolution: false });
    }
    async function getEntriesWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks(query = {}) {
        return internalGetEntries({
            ...query,
            locale: '*',
        }, { withoutLinkResolution: false });
    }
    async function getEntryWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks(id, query = {}) {
        return internalGetEntry(id, { ...query, locale: '*' }, { withoutLinkResolution: false, withoutUnresolvableLinks: true });
    }
    async function getEntriesWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks(query = {}) {
        return internalGetEntries({
            ...query,
            locale: '*',
        }, { withoutLinkResolution: false, withoutUnresolvableLinks: true });
    }
    async function getEntryWithoutLinkResolution(id, query = {}) {
        return internalGetEntry(id, query, {
            withoutLinkResolution: true,
        });
    }
    async function getEntriesWithoutLinkResolution(query = {}) {
        return internalGetEntries(query, {
            withoutLinkResolution: true,
        });
    }
    async function getEntryWithAllLocalesAndWithoutLinkResolution(id, query = {}) {
        return internalGetEntry(id, { ...query, locale: '*' }, { withoutLinkResolution: true });
    }
    async function getEntriesWithAllLocalesAndWithoutLinkResolution(query = {}) {
        return internalGetEntries({
            ...query,
            locale: '*',
        }, { withoutLinkResolution: true });
    }
    async function makeGetEntry(id, query, options = {
        withoutLinkResolution: false,
        withAllLocales: false,
    }) {
        const { withAllLocales } = options;
        (0,_utils_validate_params__WEBPACK_IMPORTED_MODULE_6__.validateLocaleParam)(query, withAllLocales);
        (0,_utils_validate_params__WEBPACK_IMPORTED_MODULE_6__.validateResolveLinksParam)(query);
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithoutLinkResolution)(options)) {
            return getEntryWithAllLocalesAndWithoutLinkResolution(id, query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return getEntryWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks(id, query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return getEntryWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks(id, query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithoutLinkResolution)(options)) {
            return getEntryWithoutLinkResolution(id, query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return getEntryWithLinkResolutionAndWithUnresolvableLinks(id, query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return getEntryWithLinkResolutionAndWithoutUnresolvableLinks(id, query);
        }
        return getEntryDefault(id, query);
    }
    async function internalGetEntry(id, query, options) {
        if (!id) {
            throw notFoundError(id);
        }
        try {
            const response = await internalGetEntries({ 'sys.id': id, ...query }, options);
            if (response.items.length > 0) {
                return response.items[0];
            }
            else {
                throw notFoundError(id);
            }
        }
        catch (error) {
            (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(error);
        }
    }
    async function makeGetEntries(query, options = {
        withoutLinkResolution: false,
        withAllLocales: false,
    }) {
        const { withAllLocales } = options;
        (0,_utils_validate_params__WEBPACK_IMPORTED_MODULE_6__.validateLocaleParam)(query, withAllLocales);
        (0,_utils_validate_params__WEBPACK_IMPORTED_MODULE_6__.validateResolveLinksParam)(query);
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithoutLinkResolution)(options)) {
            return getEntriesWithAllLocalesAndWithoutLinkResolution(query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return getEntriesWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks(query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return getEntriesWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks(query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithoutLinkResolution)(options)) {
            return getEntriesWithoutLinkResolution(query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return getEntriesWithLinkResolutionAndWithUnresolvableLinks(query);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__.isClientWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return getEntriesWithLinkResolutionAndWithoutUnresolvableLinks(query);
        }
        return getEntriesDefault(query);
    }
    async function internalGetEntries(query, options) {
        const { withoutLinkResolution, withoutUnresolvableLinks } = options;
        try {
            const entries = await get({
                context: 'environment',
                path: 'entries',
                config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query: (0,_utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query) }),
            });
            return (0,_utils_resolve_circular__WEBPACK_IMPORTED_MODULE_3__["default"])(entries, {
                resolveLinks: !withoutLinkResolution ?? true,
                removeUnresolved: withoutUnresolvableLinks ?? false,
            });
        }
        catch (error) {
            (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(error);
        }
    }
    async function getAsset(id, query = {}) {
        return get({
            context: 'environment',
            path: \`assets/\${id}\`,
            config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query: (0,_utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query) }),
        });
    }
    async function getAssets(query = {}) {
        return get({
            context: 'environment',
            path: 'assets',
            config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query: (0,_utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query) }),
        });
    }
    async function getTag(id) {
        return get({
            context: 'environment',
            path: \`tags/\${id}\`,
        });
    }
    async function getTags(query = {}) {
        return get({
            context: 'environment',
            path: 'tags',
            config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query: (0,_utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query) }),
        });
    }
    async function createAssetKey(expiresAt) {
        try {
            const now = Math.floor(Date.now() / 1000);
            const currentMaxLifetime = now + ASSET_KEY_MAX_LIFETIME;
            (0,_utils_validate_timestamp__WEBPACK_IMPORTED_MODULE_4__["default"])('expiresAt', expiresAt, { maximum: currentMaxLifetime, now });
        }
        catch (error) {
            (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(error);
        }
        return post({
            context: 'environment',
            path: 'asset_keys',
            data: { expiresAt },
        });
    }
    async function getLocales(query = {}) {
        return get({
            context: 'environment',
            path: 'locales',
            config: (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__.createRequestConfig)({ query: (0,_utils_normalize_select__WEBPACK_IMPORTED_MODULE_2__["default"])(query) }),
        });
    }
    async function sync(query = {}, options = { paginate: true }) {
        const { resolveLinks, removeUnresolved } = getGlobalOptions(query);
        switchToEnvironment(http);
        return (0,_paged_sync__WEBPACK_IMPORTED_MODULE_1__["default"])(http, query, { resolveLinks, removeUnresolved, ...options });
    }
    function parseEntries(data) {
        const { resolveLinks, removeUnresolved } = getGlobalOptions({});
        return (0,_utils_resolve_circular__WEBPACK_IMPORTED_MODULE_3__["default"])(data, { resolveLinks, removeUnresolved });
    }
    /*
     * Switches BaseURL to use /environments path
     * */
    function switchToEnvironment(http) {
        http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
    }
    return {
        version: "10.0.0-beta-v10.10",
        getSpace,
        getContentType,
        getContentTypes,
        getAsset,
        getAssets,
        getTag,
        getTags,
        getLocales,
        parseEntries,
        sync,
        getEntry,
        getEntries,
        createAssetKey,
    };
}


//# sourceURL=webpack://contentful/./create-contentful-api.ts?`)},"./create-global-options.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGlobalOptions)
/* harmony export */ });
/**
 * Link resolution can be set globally, or it can be turned off for the methods
 * which make use of it. The local setting always overrides the global setting.
 * @private
 * @param {boolean} globalSetting - Global library setting for link resolution
 * @returns {function} Link resolver method preconfigured with global setting
 */
function createGlobalOptions(globalSettings) {
    /**
     * Link resolver method
     * @param {Object} query - regular query object used for collection endpoints
     */
    return function getGlobalOptions(query) {
        return Object.assign({}, globalSettings, query);
    };
}


//# sourceURL=webpack://contentful/./create-global-options.ts?`)},"./index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClient": () => (/* reexport safe */ _contentful__WEBPACK_IMPORTED_MODULE_0__.createClient)
/* harmony export */ });
/* harmony import */ var _contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentful */ "./contentful.ts");
/* harmony import */ var _create_global_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-global-options */ "./create-global-options.ts");
/* harmony import */ var _mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/stringify-safe */ "./mixins/stringify-safe.ts");
/* harmony import */ var _utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/normalize-select */ "./utils/normalize-select.ts");
/* harmony import */ var _utils_resolve_circular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/resolve-circular */ "./utils/resolve-circular.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./types/index.ts");








//# sourceURL=webpack://contentful/./index.ts?`)},"./make-client.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeClient": () => (/* binding */ makeClient)
/* harmony export */ });
/* harmony import */ var _create_contentful_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-contentful-api */ "./create-contentful-api.ts");
/* harmony import */ var _utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/client-helpers */ "./utils/client-helpers.ts");


function create({ http, getGlobalOptions }, options, makeInnerClient) {
    const client = (0,_create_contentful_api__WEBPACK_IMPORTED_MODULE_0__["default"])({
        http,
        getGlobalOptions,
    }, options);
    const response = client;
    Object.defineProperty(response, 'withAllLocales', {
        get: () => makeInnerClient({ ...options, withAllLocales: true }),
    });
    Object.defineProperty(response, 'withoutLinkResolution', {
        get: () => makeInnerClient({ ...options, withoutLinkResolution: true }),
    });
    Object.defineProperty(response, 'withoutUnresolvableLinks', {
        get: () => makeInnerClient({ ...options, withoutUnresolvableLinks: true }),
    });
    return Object.create(response);
}
const makeClient = ({ http, getGlobalOptions, }) => {
    function makeInnerClient(options) {
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithAllLocalesAndWithoutLinkResolution)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithLinkResolutionAndWithUnresolvableLinks)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithLinkResolutionAndWithoutUnresolvableLinks)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        if ((0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_1__.isClientWithoutLinkResolution)(options)) {
            return create({ http, getGlobalOptions }, options, makeInnerClient);
        }
        return create({ http, getGlobalOptions }, {
            withoutLinkResolution: false,
            withAllLocales: false,
            withoutUnresolvableLinks: false,
        }, makeInnerClient);
    }
    const client = (0,_create_contentful_api__WEBPACK_IMPORTED_MODULE_0__["default"])({ http, getGlobalOptions }, {
        withoutLinkResolution: false,
        withAllLocales: false,
        withoutUnresolvableLinks: false,
    });
    return {
        ...client,
        get withAllLocales() {
            return makeInnerClient({
                withAllLocales: true,
                withoutLinkResolution: false,
                withoutUnresolvableLinks: false,
            });
        },
        get withoutLinkResolution() {
            return makeInnerClient({ withAllLocales: false, withoutLinkResolution: true });
        },
        get withoutUnresolvableLinks() {
            return makeInnerClient({
                withAllLocales: false,
                withoutLinkResolution: false,
                withoutUnresolvableLinks: true,
            });
        },
    };
};


//# sourceURL=webpack://contentful/./make-client.ts?`)},"./mixins/stringify-safe.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mixinStringifySafe)
/* harmony export */ });
/* harmony import */ var json_stringify_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-stringify-safe */ "../node_modules/json-stringify-safe/stringify.js");
/* harmony import */ var json_stringify_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stringify_safe__WEBPACK_IMPORTED_MODULE_0__);

function mixinStringifySafe(data) {
    return Object.defineProperty(data, 'stringifySafe', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (serializer = null, indent = '') {
            return json_stringify_safe__WEBPACK_IMPORTED_MODULE_0___default()(this, serializer, indent, (key, value) => {
                return {
                    sys: {
                        type: 'Link',
                        linkType: 'Entry',
                        id: value.sys.id,
                        circular: true,
                    },
                };
            });
        },
    });
}


//# sourceURL=webpack://contentful/./mixins/stringify-safe.ts?`)},"./paged-sync.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pagedSync)
/* harmony export */ });
/* harmony import */ var contentful_resolve_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful-resolve-response */ "../node_modules/contentful-resolve-response/dist/esm/index.js");
/* harmony import */ var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful-sdk-core */ "../node_modules/contentful-sdk-core/dist/index.es-modules.js");
/* harmony import */ var _mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/stringify-safe */ "./mixins/stringify-safe.ts");
/**
 * See <a href="https://www.contentful.com/developers/docs/concepts/sync/">Synchronization</a> for more information.
 * @namespace Sync
 */



/**
 * @memberof Sync
 * @typedef SyncCollection
 * @prop {Array<Entities.Entry>} entries - All existing entries on first sync. New and updated entries on subsequent syncs.
 * @prop {Array<Entities.Asset>} assets - All existing assets on first sync. New and updated assets on subsequent syncs.
 * @prop {Array<Sync.DeletedEntry>} deletedEntries - List of deleted Entries since last sync
 * @prop {Array<Sync.DeletedAsset>} deletedAssets - List of deleted Assets since last sync
 * @prop {string} nextSyncToken - Token to be sent to the next sync call
 * @prop {function(): Object} toPlainObject() - Returns this Sync collection as a plain JS object
 * @prop {function(?function=, space=): Object} stringifySafe(replacer,space) - Stringifies the Sync collection, accounting for circular references. Circular references will be replaced with just a Link object, with a <code>circular</code> property set to <code>true</code>. See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">MDN</a> and <a href="https://www.npmjs.com/package/json-stringify-safe">json-stringify-safe</a> for more details on the arguments this method can take.
 */
/**
 * Deleted Entries are the same as Entries, but only appear on the sync API.
 * @memberof Sync
 * @typedef DeletedEntry
 * @type Entities.Entry
 */
/**
 * Deleted Assets are the same as Assets, but only appear on the sync API.
 * @memberof Sync
 * @typedef DeletedAsset
 * @type Entities.Asset
 */
/**
 * This module retrieves all the available pages for a sync operation
 * @private
 * @param {Object} http - HTTP client
 * @param {Object} query - Query object
 * @param {Object} options - Sync options object
 * @param {boolean} [options.resolveLinks = true] - If links should be resolved
 * @param {boolean} [options.removeUnresolved = false] - If unresolvable links should get removed
 * @param {boolean} [options.paginate = true] - If further sync pages should automatically be crawled
 * @return {Promise<SyncCollection>}
 */
async function pagedSync(http, query, options = {}) {
    if (!query || (!query.initial && !query.nextSyncToken && !query.nextPageToken)) {
        throw new Error('Please provide one of \`initial\`, \`nextSyncToken\` or \`nextPageToken\` parameters for syncing');
    }
    if (query && query.content_type && !query.type) {
        query.type = 'Entry';
    }
    else if (query && query.content_type && query.type && query.type !== 'Entry') {
        throw new Error('When using the \`content_type\` filter your \`type\` parameter cannot be different from \`Entry\`.');
    }
    const defaultOptions = { resolveLinks: true, removeUnresolved: false, paginate: true };
    const { resolveLinks, removeUnresolved, paginate } = {
        ...defaultOptions,
        ...options,
    };
    const syncOptions = {
        paginate,
    };
    const response = await getSyncPage(http, [], query, syncOptions);
    // clones response.items used in includes because we don't want these to be mutated
    if (resolveLinks) {
        response.items = (0,contentful_resolve_response__WEBPACK_IMPORTED_MODULE_0__["default"])(response, { removeUnresolved, itemEntryPoints: ['fields'] });
    }
    // maps response items again after getters are attached
    const mappedResponseItems = mapResponseItems(response.items);
    if (response.nextSyncToken) {
        mappedResponseItems.nextSyncToken = response.nextSyncToken;
    }
    if (response.nextPageToken) {
        mappedResponseItems.nextPageToken = response.nextPageToken;
    }
    return (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.freezeSys)((0,_mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__["default"])((0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.toPlainObject)(mappedResponseItems)));
}
/**
 * @private
 * @param {Array<Entities.Entry|Entities.Array|Sync.DeletedEntry|Sync.DeletedAsset>} items
 * @return {Object} Entities mapped to an object for each entity type
 */
function mapResponseItems(items) {
    const reducer = (type) => {
        return (accumulated, item) => {
            if (item.sys.type === type) {
                accumulated.push((0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.toPlainObject)(item));
            }
            return accumulated;
        };
    };
    return {
        entries: items.reduce(reducer('Entry'), []),
        assets: items.reduce(reducer('Asset'), []),
        deletedEntries: items.reduce(reducer('DeletedEntry'), []),
        deletedAssets: items.reduce(reducer('DeletedAsset'), []),
    };
}
/**
 * If the response contains a nextPageUrl, extracts the sync token to get the
 * next page and calls itself again with that token.
 * Otherwise, if the response contains a nextSyncUrl, extracts the sync token
 * and returns it.
 * On each call of this function, any retrieved items are collected in the
 * supplied items array, which gets returned in the end
 * @private
 * @param {Object} http
 * @param {Array<Entities.Entry|Entities.Array|Sync.DeletedEntry|Sync.DeletedAsset>} items
 * @param {Object} query
 * @param {Object} options - Sync page options object
 * @param {boolean} [options.paginate = true] - If further sync pages should automatically be crawled
 * @return {Promise<{items: Array, nextSyncToken: string}>}
 */
async function getSyncPage(http, items, query, { paginate }) {
    if (query.nextSyncToken) {
        query.sync_token = query.nextSyncToken;
        delete query.nextSyncToken;
    }
    if (query.nextPageToken) {
        query.sync_token = query.nextPageToken;
        delete query.nextPageToken;
    }
    if (query.sync_token) {
        delete query.initial;
        delete query.type;
        delete query.content_type;
        delete query.limit;
    }
    // Todo: better type sync response (SyncCollection)
    const response = await http.get('sync', (0,contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__.createRequestConfig)({ query: query }));
    const data = response.data || {};
    items = items.concat(data.items || []);
    if (data.nextPageUrl) {
        if (paginate) {
            delete query.initial;
            query.sync_token = getToken(data.nextPageUrl);
            return getSyncPage(http, items, query, { paginate });
        }
        return {
            items: items,
            nextPageToken: getToken(data.nextPageUrl),
        };
    }
    else if (data.nextSyncUrl) {
        return {
            items: items,
            nextSyncToken: getToken(data.nextSyncUrl),
        };
    }
    else {
        return { items: [] };
    }
}
/**
 * Extracts token out of an url
 * @private
 */
function getToken(url) {
    const urlParts = url.split('?');
    return urlParts.length > 0 ? urlParts[1].replace('sync_token=', '') : '';
}


//# sourceURL=webpack://contentful/./paged-sync.ts?`)},"./types/asset-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/asset-key.ts?`)},"./types/asset.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/asset.ts?`)},"./types/collection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/collection.ts?`)},"./types/content-type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/content-type.ts?`)},"./types/entry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/entry.ts?`)},"./types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset */ "./types/asset.ts");
/* harmony import */ var _asset_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-key */ "./types/asset-key.ts");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./types/collection.ts");
/* harmony import */ var _content_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-type */ "./types/content-type.ts");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry */ "./types/entry.ts");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link */ "./types/link.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale */ "./types/locale.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./types/metadata.ts");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query */ "./types/query/index.ts");
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./space */ "./types/space.ts");
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sync */ "./types/sync.ts");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tag */ "./types/tag.ts");














//# sourceURL=webpack://contentful/./types/index.ts?`)},"./types/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/link.ts?`)},"./types/locale.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/locale.ts?`)},"./types/metadata.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/metadata.ts?`)},"./types/query/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/query/index.ts?`)},"./types/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/space.ts?`)},"./types/sync.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/sync.ts?`)},"./types/tag.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);



//# sourceURL=webpack://contentful/./types/tag.ts?`)},"./utils/client-helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks": () => (/* binding */ isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks),
/* harmony export */   "isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks": () => (/* binding */ isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks),
/* harmony export */   "isClientWithAllLocalesAndWithoutLinkResolution": () => (/* binding */ isClientWithAllLocalesAndWithoutLinkResolution),
/* harmony export */   "isClientWithLinkResolutionAndWithUnresolvableLinks": () => (/* binding */ isClientWithLinkResolutionAndWithUnresolvableLinks),
/* harmony export */   "isClientWithLinkResolutionAndWithoutUnresolvableLinks": () => (/* binding */ isClientWithLinkResolutionAndWithoutUnresolvableLinks),
/* harmony export */   "isClientWithoutLinkResolution": () => (/* binding */ isClientWithoutLinkResolution)
/* harmony export */ });
function isClientWithLinkResolutionAndWithUnresolvableLinks(options) {
    return (options.withoutLinkResolution === false &&
        options.withAllLocales === false &&
        options.withoutUnresolvableLinks === false);
}
function isClientWithLinkResolutionAndWithoutUnresolvableLinks(options) {
    return (options.withAllLocales === false &&
        options.withoutLinkResolution === false &&
        options.withoutUnresolvableLinks === true);
}
function isClientWithoutLinkResolution(options) {
    return options.withoutLinkResolution === true;
}
function isClientWithAllLocalesAndWithLinkResolutionAndWithUnresolvableLinks(options) {
    return (options.withAllLocales === true &&
        options.withoutLinkResolution === false &&
        options.withoutUnresolvableLinks === false);
}
function isClientWithAllLocalesAndWithoutLinkResolution(options) {
    return options.withAllLocales === true && options.withoutLinkResolution === true;
}
function isClientWithAllLocalesAndWithLinkResolutionAndWithoutUnresolvableLinks(options) {
    return (options.withAllLocales === true &&
        options.withoutLinkResolution === false &&
        options.withoutUnresolvableLinks === true);
}


//# sourceURL=webpack://contentful/./utils/client-helpers.ts?`)},"./utils/normalize-select.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeSelect)
/* harmony export */ });
/*
 * sdk relies heavily on sys metadata
 * so we cannot omit the sys property on sdk level entirely
 * and we have to ensure that at least \`id\` and \`type\` are present
 * */
function normalizeSelect(query) {
    if (!query.select) {
        return query;
    }
    // The selection of fields for the query is limited
    // Get the different parts that are listed for selection
    const allSelects = Array.isArray(query.select) ? query.select : query.select.split(',');
    // Move the parts into a set for easy access and deduplication
    const selectedSet = new Set(allSelects);
    // If we already select all of \`sys\` we can just return
    // since we're anyway fetching everything that is needed
    if (selectedSet.has('sys')) {
        return query;
    }
    // We don't select \`sys\` so we need to ensure the minimum set
    selectedSet.add('sys.id');
    selectedSet.add('sys.type');
    // Reassign the normalized sys properties
    return {
        ...query,
        select: [...selectedSet].join(','),
    };
}


//# sourceURL=webpack://contentful/./utils/normalize-select.ts?`)},"./utils/resolve-circular.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resolveCircular)
/* harmony export */ });
/* harmony import */ var _mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/stringify-safe */ "./mixins/stringify-safe.ts");
/* harmony import */ var contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful-resolve-response */ "../node_modules/contentful-resolve-response/dist/esm/index.js");


function resolveCircular(data, { resolveLinks, removeUnresolved }) {
    const wrappedData = (0,_mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    if (resolveLinks) {
        wrappedData.items = (0,contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__["default"])(wrappedData, {
            removeUnresolved,
            itemEntryPoints: ['fields'],
        });
    }
    return wrappedData;
}


//# sourceURL=webpack://contentful/./utils/resolve-circular.ts?`)},"./utils/validate-params.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateLocaleParam": () => (/* binding */ validateLocaleParam),
/* harmony export */   "validateResolveLinksParam": () => (/* binding */ validateResolveLinksParam)
/* harmony export */ });
/* harmony import */ var _validation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-error */ "./utils/validation-error.ts");

function checkLocaleParamIsAll(query) {
    if (query.locale === '*') {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError('locale', \`The use of locale='*' is no longer supported.To fetch an entry in all existing locales, 
      use client.withAllLocales instead of the locale='*' parameter.\`);
    }
}
function checkLocaleParamExists(query) {
    if (query.locale) {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError('locale', 'The \`locale\` parameter is not allowed');
    }
}
function validateLocaleParam(query, isWithAllLocalesClient) {
    if (isWithAllLocalesClient) {
        checkLocaleParamExists(query);
    }
    else {
        checkLocaleParamIsAll(query);
    }
    return;
}
function validateResolveLinksParam(query) {
    if ('resolveLinks' in query) {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError('resolveLinks', \`The use of the 'resolveLinks' parameter is no longer supported. By default, links are resolved. 
      If you do not want to resolve links, use client.withoutLinkResolution.\`);
    }
    return;
}


//# sourceURL=webpack://contentful/./utils/validate-params.ts?`)},"./utils/validate-timestamp.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTimestamp)
/* harmony export */ });
/* harmony import */ var _validation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-error */ "./utils/validation-error.ts");

function validateTimestamp(name, timestamp, options) {
    options = options || {};
    if (typeof timestamp !== 'number') {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError(name, \`only numeric values are allowed for timestamps, provided type was "\${typeof timestamp}"\`);
    }
    if (options.maximum && timestamp > options.maximum) {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError(name, \`value (\${timestamp}) cannot be further in the future than expected maximum (\${options.maximum})\`);
    }
    if (options.now && timestamp < options.now) {
        throw new _validation_error__WEBPACK_IMPORTED_MODULE_0__.ValidationError(name, \`value (\${timestamp}) cannot be in the past, current time was \${options.now}\`);
    }
}


//# sourceURL=webpack://contentful/./utils/validate-timestamp.ts?`)},"./utils/validation-error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationError": () => (/* binding */ ValidationError)
/* harmony export */ });
class ValidationError extends Error {
    constructor(name, message) {
        super(\`Invalid "\${name}" provided, \` + message);
        this.name = 'ValidationError';
    }
}


//# sourceURL=webpack://contentful/./utils/validation-error.ts?`)},"?d91c":()=>{eval(`/* (ignored) */

//# sourceURL=webpack://contentful/./util.inspect_(ignored)?`)}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(n!==void 0)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./index.ts");return __webpack_exports__})())})(contentful_browser);const contentful=getDefaultExportFromCjs(contentful_browserExports),createClientFunc=contentful.createClient,contentful_kWh0mpiTVa=defineNuxtPlugin(()=>{const e=useRuntimeConfig();return{provide:{contentful:createClientFunc({space:e.public.CTF_SPACE_ID,accessToken:e.public.CTF_CDA_ACCESS_TOKEN})}}});function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function _objectSpread2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var load=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(r,o){if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=n,i.defer=t.defer,t.preconnectOrigin){var l=document.createElement("link");l.href=t.preconnectOrigin,l.rel="preconnect",s.appendChild(l)}s.appendChild(i),i.onload=r,i.onerror=o}})},mergeDeep=function e(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(!r.length)return n;var s=r.shift();if(!(!isPlainObject$1(n)||!isPlainObject$1(s))){for(var i in s)isPlainObject$1(s[i])?(n[i]||Object.assign(n,_defineProperty({},i,{})),e(n[i],s[i])):Object.assign(n,_defineProperty({},i,s[i]));return e.apply(void 0,[n].concat(r))}},isBrowser=function e(){return!(typeof window>"u"||typeof document>"u")},warn=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;isBrowser()},validateScreenviewShape=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return warn('Missing "appName" property inside the plugin options.',n.app_name==null),warn('Missing "name" property in the route.',n.screen_name==null),n};function getPathWithBase(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=e.split("/"),r=n.split("/");return t[0]===""&&n[n.length-1]==="/"&&t.shift(),r.join("/")+t.join("/")}var getDefaultParams=function e(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},params={},setOptions=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=getDefaultParams();params=mergeDeep(t,n)},getOptions=function e(){return params},query=function(){var e,n=getOptions(),t=n.globalObjectName;!isBrowser()||typeof window[t]>"u"||(e=window)[t].apply(e,arguments)},config=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=getOptions(),o=r.config,s=r.includes;query.apply(void 0,["config",o.id].concat(n)),Array.isArray(s)&&s.forEach(function(i){query.apply(void 0,["config",i.id].concat(n))})},assignGlobalProperty=function e(n,t){isBrowser()&&(window["ga-disable-".concat(n)]=t)},disable=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=getOptions(),t=n.config,r=n.includes;assignGlobalProperty(t.id,e),Array.isArray(r)&&r.forEach(function(o){return assignGlobalProperty(o.id,e)})},optOut=function(){disable(!0)},optIn=function(){disable(!1)},router,setRouter=function e(n){router=n},getRouter=function e(){return router},event=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=getOptions(),r=t.includes,o=t.defaultGroupName;n.send_to==null&&Array.isArray(r)&&r.length&&(n.send_to=r.map(function(s){return s.id}).concat(o)),query("event",e,n)},pageview=function(e){if(isBrowser()){var n;if(typeof e=="string")n={page_path:e};else if(e.path||e.fullPath){var t=getOptions(),r=t.pageTrackerUseFullPath,o=t.pageTrackerPrependBase,s=getRouter(),i=s&&s.options.base,l=r?e.fullPath:e.path;n=_objectSpread2(_objectSpread2({},e.name&&{page_title:e.name}),{},{page_path:o?getPathWithBase(l,i):l})}else n=e;n.page_location==null&&(n.page_location=window.location.href),n.send_page_view==null&&(n.send_page_view=!0),event("page_view",n)}},screenview=function(e){var n=getOptions(),t=n.appName;if(e){var r;typeof e=="string"?r={screen_name:e}:r=e,r.app_name=r.app_name||t,event("screen_view",r)}},exception=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];event.apply(void 0,["exception"].concat(n))},linker=function(e){config("linker",e)},time=function(e){event("timing_complete",e)},set=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];query.apply(void 0,["set"].concat(n))},refund=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];event.apply(void 0,["refund"].concat(n))},purchase=function(e){event("purchase",e)},customMap=function(e){config({custom_map:e})},api=Object.freeze({__proto__:null,query,config,optOut,optIn,pageview,screenview,exception,linker,time,set,refund,purchase,customMap,event}),attachApi=function e(n){n.config.globalProperties.$gtag=api},registerGlobals=function(){if(isBrowser()){var e=getOptions(),n=e.enabled,t=e.globalObjectName,r=e.globalDataLayerName;return window[t]==null&&(window[r]=window[r]||[],window[t]=function(){window[r].push(arguments)}),window[t]("js",new Date),n||optOut(),window[t]}},mergeDefaultParams=function e(n){return _objectSpread2({send_page_view:!1},n)},addConfiguration=function(){var e=getOptions(),n=e.config,t=e.includes;query("config",n.id,mergeDefaultParams(n.params)),Array.isArray(t)&&t.forEach(function(r){query("config",r.id,mergeDefaultParams(r.params))})},track=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=getOptions(),r=t.appName,o=t.pageTrackerTemplate,s=t.pageTrackerScreenviewEnabled,i=t.pageTrackerSkipSamePath;if(!(i&&e.path===n.path)){var l=e;if(isFunction(o)?l=o(e,n):s&&(l=validateScreenviewShape({app_name:r,screen_name:e.name})),s){screenview(l);return}pageview(l)}},isRouteExcluded=function e(n){var t=getOptions(),r=t.pageTrackerExcludedRoutes;return r.includes(n.path)||r.includes(n.name)},addRoutesTracker=function(){var e=getOptions(),n=e.onBeforeTrack,t=e.onAfterTrack,r=getRouter();r.isReady().then(function(){nextTick().then(function(){var o=r.currentRoute;addConfiguration(),!isRouteExcluded(o.value)&&track(o.value)}),r.afterEach(function(o,s){nextTick().then(function(){isRouteExcluded(o)||(isFunction(n)&&n(o,s),track(o,s),isFunction(t)&&t(o,s))})})})},bootstrap=function(){var e=getOptions(),n=e.onReady,t=e.onError,r=e.globalObjectName,o=e.globalDataLayerName,s=e.config,i=e.customResourceURL,l=e.customPreconnectOrigin,a=e.deferScriptLoad,c=e.pageTrackerEnabled,f=e.disableScriptLoad,u=Boolean(c&&getRouter());if(registerGlobals(),u?addRoutesTracker():addConfiguration(),!f)return load("".concat(i,"?id=").concat(s.id,"&l=").concat(o),{preconnectOrigin:l,defer:a}).then(function(){n&&n(window[r])}).catch(function(d){return t&&t(d),d})},install=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;attachApi(n),setOptions(t),setRouter(r),getOptions().bootstrap&&bootstrap()};const gtag_client_Zw8EQXNVTz=defineNuxtPlugin(e=>{const n=useRuntimeConfig();e.vueApp.use(install,{bootstrap:!1,config:{id:n.public.GOOGLE_ANALYTICS_ID,params:{anonymize_ip:!0}}},e.$router)}),_plugins=[components_plugin_KR1HBZs4kY,vueuse_head_plugin_D7WGfuP1A0,router_Pg0DINazwm,prefetch_client_3cwHvxIDEX,plugin_client_i8AMfKeYnY,plugin_OrkQhMqHci,payload_client_5Om5dvb8Jc,contentful_kWh0mpiTVa,gtag_client_Zw8EQXNVTz],__nuxt_component_0=defineComponent({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:n,attrs:t}){const r=ref(!1);return onMounted(()=>{r.value=!0}),o=>{var a;if(r.value)return(a=n.default)==null?void 0:a.call(n);const s=n.fallback||n.placeholder;if(s)return s();const i=o.fallback||o.placeholder||"",l=o.fallbackTag||o.placeholderTag||"span";return createElementBlock(l,t,i)}}}),Fragment=defineComponent({name:"FragmentWrapper",setup(e,{slots:n}){return()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),_wrapIf=(e,n,t)=>({default:()=>n?h(e,n===!0?{}:n,t):h(Fragment,{},t)}),LayoutLoader=defineComponent({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,n){const t=await layouts[e.name]().then(r=>r.default||r);return()=>h(t,n.attrs,n.slots)}}),__nuxt_component_1=defineComponent({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,n){const t=inject("_route"),r=t===useRoute$1()?useRoute():t,o=computed(()=>unref(e.name)??r.meta.layout??"default");return()=>{const s=o.value&&o.value in layouts,i=r.meta.layoutTransition??appLayoutTransition;return _wrapIf(Transition,s&&i,{default:()=>_wrapIf(LayoutLoader,s&&{key:o.value,name:o.value,...n.attrs},n.slots).default()}).default()}}});function getKeys(e){var n=[],t="";for(t in e)n.push(t);return n}function isPlainObject(e){return e=JSON.stringify(e),!(typeof e!="string"||!/^\{[\s\S]*\}$/.test(e))}function isArray(e){return e instanceof Array}function toArray(e){return Array.prototype.slice.call(e)}function Cookie(){if(!(this instanceof Cookie))return new Cookie}Cookie.prototype={get:function(e){for(var n=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var o=t[r];o.charAt(0)==" ";)o=o.substring(1,o.length);if(o.indexOf(n)==0)return decodeURI(o.substring(n.length,o.length))}return!1},set:function(e,n,t){if(isPlainObject(e))for(const r in e)this.set(r,e[r],n,t);else if(typeof e=="string"){const r=isPlainObject(t)?t:{expires:t},o=r.path!==void 0?`;path=${r.path};path=/`:";path=/",s=r.domain?`;domain=${r.domain}`:"",i=r.secure?";secure":"";let l=r.expires!==void 0?r.expires:"";typeof l=="string"&&l!==""?l=new Date(l):typeof l=="number"&&(l=new Date(+new Date+1e3*60*60*24*l)),l!==""&&"toGMTString"in l&&(l=`;expires=${l.toGMTString()}`);const a=r.sameSite?`;SameSite=${r.sameSite}`:"";document.cookie=`${e}=${encodeURI(n)+l+o+s+i+a}`}},remove:function(e){e=isArray(e)?e:toArray(arguments);for(var n=0,t=e.length;n<t;n++)this.set(e[n],"",-1);return e},clear:function(e){return e?this.remove(e):this.remove(getKeys(this.all()))},all:function(){if(document.cookie==="")return{};for(var e=document.cookie.split("; "),n={},t=0,r=e.length;t<r;t++){var o=e[t].split("=");n[decodeURI(o[0])]=decodeURI(o[1])}return n}};let _Cookie=null;const cookie=function(e,n,t){const r=arguments;if(_Cookie||(_Cookie=Cookie()),r.length===0)return _Cookie.all();if(r.length===1&&e===null)return _Cookie.clear();if(r.length===2&&!n)return _Cookie.clear(e);if(typeof e=="string"&&!n)return _Cookie.get(e);if(typeof e=="string"&&n||isPlainObject(e))return _Cookie.set(e,n,t)};for(const e in Cookie.prototype)cookie[e]=Cookie.prototype[e];const _hoisted_1$5=["innerHTML"],_sfc_main$7=defineComponent({__name:"nuxt-icon",props:{name:null,filled:{type:Boolean,default:!1}},setup(e){const n=e,t=ref("");return watchEffect(async()=>{try{const o=await Object.assign({"/assets/icons/a11y.svg":()=>__vitePreload(()=>import("./a11y.74abcf4a.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/arrow_right.svg":()=>__vitePreload(()=>import("./arrow_right.52bcc224.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/blog.svg":()=>__vitePreload(()=>import("./blog.7aa7fedd.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/buy_me_a_coffee.svg":()=>__vitePreload(()=>import("./buy_me_a_coffee.4179b892.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/chevron_down.svg":()=>__vitePreload(()=>import("./chevron_down.fe43a156.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/codepen.svg":()=>__vitePreload(()=>import("./codepen.bb5ec48a.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/cookie.svg":()=>__vitePreload(()=>import("./cookie.1af783e5.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/dev_to.svg":()=>__vitePreload(()=>import("./dev_to.5aa2c105.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/github.svg":()=>__vitePreload(()=>import("./github.6e7d53d5.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/gumroad.svg":()=>__vitePreload(()=>import("./gumroad.5c7d5be7.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/hashnode.svg":()=>__vitePreload(()=>import("./hashnode.ca9c7212.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/html.svg":()=>__vitePreload(()=>import("./html.14fbe14d.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/j_icon.svg":()=>__vitePreload(()=>import("./j_icon.ac922de4.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/javascript.svg":()=>__vitePreload(()=>import("./javascript.6fff68d0.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/jest.svg":()=>__vitePreload(()=>import("./jest.2f84fc6d.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/link.svg":()=>__vitePreload(()=>import("./link.e310e1a0.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/linkedin.svg":()=>__vitePreload(()=>import("./linkedin.c7be0fb9.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/monitor.svg":()=>__vitePreload(()=>import("./monitor.6ff313bb.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/moon.svg":()=>__vitePreload(()=>import("./moon.2483a517.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/node_js.svg":()=>__vitePreload(()=>import("./node_js.96c359bd.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/npm.svg":()=>__vitePreload(()=>import("./npm.6c3e578e.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/nuxt.svg":()=>__vitePreload(()=>import("./nuxt.697e4846.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/product_hunt.svg":()=>__vitePreload(()=>import("./product_hunt.82c6306e.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/sass.svg":()=>__vitePreload(()=>import("./sass.6f143929.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/storybook.svg":()=>__vitePreload(()=>import("./storybook.338b9986.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/sun.svg":()=>__vitePreload(()=>import("./sun.fc617f4e.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/twitter.svg":()=>__vitePreload(()=>import("./twitter.ea012344.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/typescript.svg":()=>__vitePreload(()=>import("./typescript.f03e5218.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/vs_code.svg":()=>__vitePreload(()=>import("./vs_code.efa70dd3.js"),[],import.meta.url).then(s=>s.default),"/assets/icons/vue.svg":()=>__vitePreload(()=>import("./vue.a854fdfd.js"),[],import.meta.url).then(s=>s.default)})[`/assets/icons/${n.name}.svg`]();t.value=o}catch{console.error(`[nuxt-icons] Icon '${n.name}' doesn't exist in 'assets/icons'`)}}),(r,o)=>(openBlock(),createElementBlock("span",{class:normalizeClass(["nuxt-icon",{"nuxt-icon--fill":!e.filled}]),innerHTML:unref(t)},null,10,_hoisted_1$5))}}),nuxtIcon_vue_vue_type_style_index_0_lang="",_sfc_main$6=defineComponent({__name:"Btn",props:{url:{type:String,default:void 0},icon:{type:String,default:void 0}},setup(e){const n=e;return(t,r)=>{var s,i;const o=_sfc_main$7;return openBlock(),createBlock(resolveDynamicComponent(n.url?("defineNuxtLink"in t?t.defineNuxtLink:unref(defineNuxtLink))({}):"button"),mergeProps({class:"btn",to:n.url,rel:(s=n.url)!=null&&s.startsWith("http")||(i=n.url)!=null&&i.startsWith("//")?"nofollow noopener":void 0},t.$attrs),{default:withCtx(()=>[renderSlot(t.$slots,"default",{},void 0,!0),n.icon?(openBlock(),createBlock(o,{key:0,name:n.icon,class:"btn__icon"},null,8,["name"])):createCommentVNode("",!0)]),_:3},16,["to","rel"])}}}),Btn_vue_vue_type_style_index_0_scoped_46945fbb_lang="",_export_sfc=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},Btn=_export_sfc(_sfc_main$6,[["__scopeId","data-v-46945fbb"]]),_withScopeId$2=e=>(pushScopeId("data-v-7bf145b2"),e=e(),popScopeId(),e),_hoisted_1$4={class:"cookies",role:"region"},_hoisted_2$3=_withScopeId$2(()=>createBaseVNode("h2",{class:"cookies__title"},"Cookies & Privacy",-1)),_hoisted_3$3={class:"cookies__content"},_hoisted_4$3={class:"cookies__btns"},_sfc_main$5=defineComponent({__name:"CookieConsent",emits:["close"],setup(e,{emit:n}){function t(){bootstrap().then(()=>{cookie.set("analyticsConsented","true",{expires:365,sameSite:"Strict"}),n("close")})}function r(){cookie.set("analyticsConsented","false",{expires:183,sameSite:"Strict"}),n("close")}return(o,s)=>{const i=__nuxt_component_0$1;return openBlock(),createElementBlock("div",_hoisted_1$4,[_hoisted_2$3,createBaseVNode("p",_hoisted_3$3,[createTextVNode(" I use analytics to track website usage. Read my "),createVNode(i,{to:"/privacy-policy",class:"link"},{default:withCtx(()=>[createTextVNode("Privacy Policy")]),_:1}),createTextVNode(" to find out more. ")]),createBaseVNode("div",_hoisted_4$3,[createBaseVNode("button",{class:"link",onClick:s[0]||(s[0]=l=>r())},"Reject"),createVNode(Btn,{icon:"cookie",onClick:s[1]||(s[1]=l=>t())},{default:withCtx(()=>[createTextVNode("Allow")]),_:1})])])}}}),CookieConsent_vue_vue_type_style_index_0_scoped_7bf145b2_lang="",CookieConsent=_export_sfc(_sfc_main$5,[["__scopeId","data-v-7bf145b2"]]),useColorMode=()=>useState("color-mode").value,_withScopeId$1=e=>(pushScopeId("data-v-b960d48f"),e=e(),popScopeId(),e),_hoisted_1$3=_withScopeId$1(()=>createBaseVNode("legend",{class:"sr-only"},"Switch theme",-1)),_hoisted_2$2={class:"theme-options"},_hoisted_3$2={class:"theme-option"},_hoisted_4$2=_withScopeId$1(()=>createBaseVNode("label",{for:"theme-system"},"System",-1)),_hoisted_5$2={class:"theme-option"},_hoisted_6$2=_withScopeId$1(()=>createBaseVNode("label",{for:"theme-light"},"Light",-1)),_hoisted_7$1={class:"theme-option"},_hoisted_8$1=_withScopeId$1(()=>createBaseVNode("label",{for:"theme-dark"},"Dark",-1)),_sfc_main$4=defineComponent({__name:"ThemePicker",setup(e){const n=useColorMode();return(t,r)=>{const o=_sfc_main$7;return openBlock(),createElementBlock("fieldset",null,[_hoisted_1$3,createBaseVNode("div",_hoisted_2$2,[createBaseVNode("div",_hoisted_3$2,[withDirectives(createBaseVNode("input",{id:"theme-system","onUpdate:modelValue":r[0]||(r[0]=s=>unref(n).preference=s),type:"radio",name:"theme",value:"system"},null,512),[[vModelRadio,unref(n).preference]]),createVNode(o,{name:"monitor"}),_hoisted_4$2]),createBaseVNode("div",_hoisted_5$2,[withDirectives(createBaseVNode("input",{id:"theme-light","onUpdate:modelValue":r[1]||(r[1]=s=>unref(n).preference=s),type:"radio",name:"theme",value:"light"},null,512),[[vModelRadio,unref(n).preference]]),createVNode(o,{name:"sun"}),_hoisted_6$2]),createBaseVNode("div",_hoisted_7$1,[withDirectives(createBaseVNode("input",{id:"theme-dark","onUpdate:modelValue":r[2]||(r[2]=s=>unref(n).preference=s),type:"radio",name:"theme",value:"dark"},null,512),[[vModelRadio,unref(n).preference]]),createVNode(o,{name:"moon"}),_hoisted_8$1])])])}}}),ThemePicker_vue_vue_type_style_index_0_scoped_b960d48f_lang="",ThemePicker=_export_sfc(_sfc_main$4,[["__scopeId","data-v-b960d48f"]]),_withScopeId=e=>(pushScopeId("data-v-55802641"),e=e(),popScopeId(),e),_hoisted_1$2={class:"nav__wrapper"},_hoisted_2$1=_withScopeId(()=>createBaseVNode("span",{class:"sr-only"}," - Home",-1)),_hoisted_3$1=_withScopeId(()=>createBaseVNode("span",{class:"sr-only"},"Home",-1)),_hoisted_4$1={key:0,class:"nav__primary"},_hoisted_5$1={class:"nav__primary-list"},_hoisted_6$1={key:1},_hoisted_7={key:2},_hoisted_8={key:0,role:"presentation"},_hoisted_9=_withScopeId(()=>createBaseVNode("div",{class:"nav__hamburger-icon"},[createBaseVNode("span"),createBaseVNode("span"),createBaseVNode("span"),createBaseVNode("span")],-1)),_hoisted_10={class:"sr-only"},_hoisted_11={role:"presentation"},_sfc_main$3=defineComponent({__name:"Navigation",setup(e){const n=useRoute$1(),t=ref(!1),r=ref(!1),o=ref(!1),s=ref(!1),i=[{text:"Projects",url:"/projects"},{text:"Blog",url:"/blog"},{text:"More",url:null,submenu:[{text:"Uses",url:"/uses"},{text:"Links",url:"/links"}]}];function l(){const f=[];return i.forEach(u=>{u.submenu?u.submenu.forEach(d=>{f.push(d)}):f.push(u)}),f.filter(u=>u.url)}watch(n,()=>{o.value=!1}),onMounted(()=>{a(),c(),window.addEventListener("resize",a),window.addEventListener("scroll",c)}),onUnmounted(()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",c)});function a(){const f=window.getComputedStyle(document.querySelector("nav.nav")).getPropertyValue("--nav-break");t.value=!window.matchMedia(`(min-width: ${f})`).matches,r.value=!window.matchMedia("(hover: hover)").matches,window.matchMedia(`(min-width: ${f})`).matches&&(o.value=!1)}function c(){s.value=!(document.body.scrollTop>10||document.documentElement.scrollTop>10)}return(f,u)=>{const d=__nuxt_component_0$1,m=_sfc_main$7;return openBlock(),createElementBlock("nav",{class:normalizeClass(["nav",{"nav--sticky":!unref(s)||unref(o)}])},[createBaseVNode("div",_hoisted_1$2,[createVNode(d,{to:"/",class:"nav__name"},{default:withCtx(()=>[createTextVNode(" Jack Domleo "),_hoisted_2$1]),_:1}),createVNode(d,{to:"/",class:"nav__logo"},{default:withCtx(()=>[createVNode(m,{name:"j_icon",filled:""}),_hoisted_3$1]),_:1}),unref(t)?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_4$1,[createBaseVNode("ul",_hoisted_5$1,[(openBlock(),createElementBlock(Fragment$1,null,renderList(i,v=>createBaseVNode("li",{key:v.text,class:"nav__item"},[v.url?(openBlock(),createBlock(d,{key:0,to:v.url},{default:withCtx(()=>[createBaseVNode("span",null,toDisplayString(v.text),1)]),_:2},1032,["to"])):(openBlock(),createElementBlock("div",_hoisted_6$1,[createBaseVNode("span",null,toDisplayString(v.text),1),createVNode(m,{class:"nav__item-chevron",name:"chevron_down"})])),v.submenu?(openBlock(),createElementBlock("ul",_hoisted_7,[(openBlock(!0),createElementBlock(Fragment$1,null,renderList(v.submenu,R=>(openBlock(),createElementBlock("li",{key:R.text},[R.url?(openBlock(),createBlock(d,{key:0,to:R.url},{default:withCtx(()=>[createTextVNode(toDisplayString(R.text),1)]),_:2},1032,["to"])):createCommentVNode("",!0)]))),128)),v.text.toLowerCase()==="more"?(openBlock(),createElementBlock("li",_hoisted_8,[createVNode(ThemePicker)])):createCommentVNode("",!0)])):createCommentVNode("",!0)])),64))])])),unref(t)?(openBlock(),createElementBlock("button",{key:1,class:normalizeClass(["nav__hamburger",{"nav__hamburger--open":unref(o)}]),onClick:u[0]||(u[0]=v=>o.value=!unref(o))},[_hoisted_9,createBaseVNode("span",_hoisted_10,toDisplayString(unref(o)?"Close":"Menu"),1)],2)):createCommentVNode("",!0)]),unref(t)?(openBlock(),createElementBlock("ul",{key:0,class:normalizeClass(["nav__more",{"nav__more--open":unref(t)&&unref(o)}])},[(openBlock(!0),createElementBlock(Fragment$1,null,renderList(l(),v=>(openBlock(),createElementBlock("li",{key:v.text},[createVNode(d,{to:v.url},{default:withCtx(()=>[createTextVNode(toDisplayString(v.text),1)]),_:2},1032,["to"])]))),128)),createBaseVNode("li",_hoisted_11,[createVNode(ThemePicker)])],2)):createCommentVNode("",!0)],2)}}}),Navigation_vue_vue_type_style_index_0_scoped_55802641_lang="",Navigation=_export_sfc(_sfc_main$3,[["__scopeId","data-v-55802641"]]);var richTextHtmlRenderer_es5={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var n=function(){return n=Object.assign||function(b){for(var P,S=1,I=arguments.length;S<I;S++){P=arguments[S];for(var F in P)Object.prototype.hasOwnProperty.call(P,F)&&(b[F]=P[F])}return b},n.apply(this,arguments)};/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var t=/["'&<>]/,r=o;function o(g){var b=""+g,P=t.exec(b);if(!P)return b;var S,I="",F=0,Q=0;for(F=P.index;F<b.length;F++){switch(b.charCodeAt(F)){case 34:S="&quot;";break;case 38:S="&amp;";break;case 39:S="&#39;";break;case 60:S="&lt;";break;case 62:S="&gt;";break;default:continue}Q!==F&&(I+=b.substring(Q,F)),Q=F+1,I+=S}return Q!==F?I+b.substring(Q,F):I}var s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:{};function i(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}function l(g,b){return b={exports:{}},g(b,b.exports),b.exports}var a=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0}),b.BLOCKS=void 0,function(P){P.DOCUMENT="document",P.PARAGRAPH="paragraph",P.HEADING_1="heading-1",P.HEADING_2="heading-2",P.HEADING_3="heading-3",P.HEADING_4="heading-4",P.HEADING_5="heading-5",P.HEADING_6="heading-6",P.OL_LIST="ordered-list",P.UL_LIST="unordered-list",P.LIST_ITEM="list-item",P.HR="hr",P.QUOTE="blockquote",P.EMBEDDED_ENTRY="embedded-entry-block",P.EMBEDDED_ASSET="embedded-asset-block",P.TABLE="table",P.TABLE_ROW="table-row",P.TABLE_CELL="table-cell",P.TABLE_HEADER_CELL="table-header-cell"}(b.BLOCKS||(b.BLOCKS={}))});i(a),a.BLOCKS;var c=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0}),b.INLINES=void 0,function(P){P.HYPERLINK="hyperlink",P.ENTRY_HYPERLINK="entry-hyperlink",P.ASSET_HYPERLINK="asset-hyperlink",P.EMBEDDED_ENTRY="embedded-entry-inline"}(b.INLINES||(b.INLINES={}))});i(c),c.INLINES;var f=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0});var P;(function(S){S.BOLD="bold",S.ITALIC="italic",S.UNDERLINE="underline",S.CODE="code",S.SUPERSCRIPT="superscript",S.SUBSCRIPT="subscript"})(P||(P={})),b.default=P});i(f);var u=l(function(g,b){var P=s&&s.__spreadArray||function(Q,se,J){if(J||arguments.length===2)for(var re=0,ce=se.length,A;re<ce;re++)(A||!(re in se))&&(A||(A=Array.prototype.slice.call(se,0,re)),A[re]=se[re]);return Q.concat(A||Array.prototype.slice.call(se))},S=s&&s.__importDefault||function(Q){return Q&&Q.__esModule?Q:{default:Q}},I;Object.defineProperty(b,"__esModule",{value:!0}),b.V1_MARKS=b.V1_NODE_TYPES=b.TEXT_CONTAINERS=b.HEADINGS=b.CONTAINERS=b.VOID_BLOCKS=b.TABLE_BLOCKS=b.LIST_ITEM_BLOCKS=b.TOP_LEVEL_BLOCKS=void 0;var F=S(f);b.TOP_LEVEL_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,a.BLOCKS.TABLE],b.LIST_ITEM_BLOCKS=[a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],b.TABLE_BLOCKS=[a.BLOCKS.TABLE,a.BLOCKS.TABLE_ROW,a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],b.VOID_BLOCKS=[a.BLOCKS.HR,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET],b.CONTAINERS=(I={},I[a.BLOCKS.OL_LIST]=[a.BLOCKS.LIST_ITEM],I[a.BLOCKS.UL_LIST]=[a.BLOCKS.LIST_ITEM],I[a.BLOCKS.LIST_ITEM]=b.LIST_ITEM_BLOCKS,I[a.BLOCKS.QUOTE]=[a.BLOCKS.PARAGRAPH],I[a.BLOCKS.TABLE]=[a.BLOCKS.TABLE_ROW],I[a.BLOCKS.TABLE_ROW]=[a.BLOCKS.TABLE_CELL,a.BLOCKS.TABLE_HEADER_CELL],I[a.BLOCKS.TABLE_CELL]=[a.BLOCKS.PARAGRAPH],I[a.BLOCKS.TABLE_HEADER_CELL]=[a.BLOCKS.PARAGRAPH],I),b.HEADINGS=[a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6],b.TEXT_CONTAINERS=P([a.BLOCKS.PARAGRAPH],b.HEADINGS,!0),b.V1_NODE_TYPES=[a.BLOCKS.DOCUMENT,a.BLOCKS.PARAGRAPH,a.BLOCKS.HEADING_1,a.BLOCKS.HEADING_2,a.BLOCKS.HEADING_3,a.BLOCKS.HEADING_4,a.BLOCKS.HEADING_5,a.BLOCKS.HEADING_6,a.BLOCKS.OL_LIST,a.BLOCKS.UL_LIST,a.BLOCKS.LIST_ITEM,a.BLOCKS.HR,a.BLOCKS.QUOTE,a.BLOCKS.EMBEDDED_ENTRY,a.BLOCKS.EMBEDDED_ASSET,c.INLINES.HYPERLINK,c.INLINES.ENTRY_HYPERLINK,c.INLINES.ASSET_HYPERLINK,c.INLINES.EMBEDDED_ENTRY,"text"],b.V1_MARKS=[F.default.BOLD,F.default.CODE,F.default.ITALIC,F.default.UNDERLINE]});i(u),u.V1_MARKS,u.V1_NODE_TYPES,u.TEXT_CONTAINERS,u.HEADINGS,u.CONTAINERS,u.VOID_BLOCKS,u.TABLE_BLOCKS,u.LIST_ITEM_BLOCKS,u.TOP_LEVEL_BLOCKS;var d=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0})});i(d);var m=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0})});i(m);var v=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0});var P={nodeType:a.BLOCKS.DOCUMENT,data:{},content:[{nodeType:a.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};b.default=P});i(v);var R=l(function(g,b){Object.defineProperty(b,"__esModule",{value:!0}),b.isText=b.isBlock=b.isInline=void 0;function P(Q,se){for(var J=0,re=Object.keys(Q);J<re.length;J++){var ce=re[J];if(se===Q[ce])return!0}return!1}function S(Q){return P(c.INLINES,Q.nodeType)}b.isInline=S;function I(Q){return P(a.BLOCKS,Q.nodeType)}b.isBlock=I;function F(Q){return Q.nodeType==="text"}b.isText=F});i(R),R.isText,R.isBlock,R.isInline;var x=l(function(g,b){var P=s&&s.__createBinding||(Object.create?function(J,re,ce,A){A===void 0&&(A=ce);var H=Object.getOwnPropertyDescriptor(re,ce);(!H||("get"in H?!re.__esModule:H.writable||H.configurable))&&(H={enumerable:!0,get:function(){return re[ce]}}),Object.defineProperty(J,A,H)}:function(J,re,ce,A){A===void 0&&(A=ce),J[A]=re[ce]}),S=s&&s.__setModuleDefault||(Object.create?function(J,re){Object.defineProperty(J,"default",{enumerable:!0,value:re})}:function(J,re){J.default=re}),I=s&&s.__exportStar||function(J,re){for(var ce in J)ce!=="default"&&!Object.prototype.hasOwnProperty.call(re,ce)&&P(re,J,ce)},F=s&&s.__importStar||function(J){if(J&&J.__esModule)return J;var re={};if(J!=null)for(var ce in J)ce!=="default"&&Object.prototype.hasOwnProperty.call(J,ce)&&P(re,J,ce);return S(re,J),re},Q=s&&s.__importDefault||function(J){return J&&J.__esModule?J:{default:J}};Object.defineProperty(b,"__esModule",{value:!0}),b.helpers=b.EMPTY_DOCUMENT=b.MARKS=b.INLINES=b.BLOCKS=void 0,Object.defineProperty(b,"BLOCKS",{enumerable:!0,get:function(){return a.BLOCKS}}),Object.defineProperty(b,"INLINES",{enumerable:!0,get:function(){return c.INLINES}}),Object.defineProperty(b,"MARKS",{enumerable:!0,get:function(){return Q(f).default}}),I(u,b),I(d,b),I(m,b),Object.defineProperty(b,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return Q(v).default}});var se=F(R);b.helpers=se});i(x);var w=x.helpers;x.EMPTY_DOCUMENT;var y=x.MARKS,k=x.INLINES,O=x.BLOCKS,C,D,Y=function(g){return'"'.concat(g.replace(/"/g,"&quot;"),'"')},N=(C={},C[O.PARAGRAPH]=function(g,b){return"<p>".concat(b(g.content),"</p>")},C[O.HEADING_1]=function(g,b){return"<h1>".concat(b(g.content),"</h1>")},C[O.HEADING_2]=function(g,b){return"<h2>".concat(b(g.content),"</h2>")},C[O.HEADING_3]=function(g,b){return"<h3>".concat(b(g.content),"</h3>")},C[O.HEADING_4]=function(g,b){return"<h4>".concat(b(g.content),"</h4>")},C[O.HEADING_5]=function(g,b){return"<h5>".concat(b(g.content),"</h5>")},C[O.HEADING_6]=function(g,b){return"<h6>".concat(b(g.content),"</h6>")},C[O.EMBEDDED_ENTRY]=function(g,b){return"<div>".concat(b(g.content),"</div>")},C[O.UL_LIST]=function(g,b){return"<ul>".concat(b(g.content),"</ul>")},C[O.OL_LIST]=function(g,b){return"<ol>".concat(b(g.content),"</ol>")},C[O.LIST_ITEM]=function(g,b){return"<li>".concat(b(g.content),"</li>")},C[O.QUOTE]=function(g,b){return"<blockquote>".concat(b(g.content),"</blockquote>")},C[O.HR]=function(){return"<hr/>"},C[O.TABLE]=function(g,b){return"<table>".concat(b(g.content),"</table>")},C[O.TABLE_ROW]=function(g,b){return"<tr>".concat(b(g.content),"</tr>")},C[O.TABLE_HEADER_CELL]=function(g,b){return"<th>".concat(b(g.content),"</th>")},C[O.TABLE_CELL]=function(g,b){return"<td>".concat(b(g.content),"</td>")},C[k.ASSET_HYPERLINK]=function(g){return $(k.ASSET_HYPERLINK,g)},C[k.ENTRY_HYPERLINK]=function(g){return $(k.ENTRY_HYPERLINK,g)},C[k.EMBEDDED_ENTRY]=function(g){return $(k.EMBEDDED_ENTRY,g)},C[k.HYPERLINK]=function(g,b){var P=typeof g.data.uri=="string"?g.data.uri:"";return"<a href=".concat(Y(P),">").concat(b(g.content),"</a>")},C),z=(D={},D[y.BOLD]=function(g){return"<b>".concat(g,"</b>")},D[y.ITALIC]=function(g){return"<i>".concat(g,"</i>")},D[y.UNDERLINE]=function(g){return"<u>".concat(g,"</u>")},D[y.CODE]=function(g){return"<code>".concat(g,"</code>")},D[y.SUPERSCRIPT]=function(g){return"<sup>".concat(g,"</sup>")},D[y.SUBSCRIPT]=function(g){return"<sub>".concat(g,"</sub>")},D),$=function(g,b){return"<span>type: ".concat(r(g)," id: ").concat(r(b.data.target.sys.id),"</span>")};function ee(g,b){return b===void 0&&(b={}),!g||!g.content?"":V(g.content,{renderNode:n(n({},N),b.renderNode),renderMark:n(n({},z),b.renderMark)})}function V(g,b){var P=b.renderNode,S=b.renderMark;return g.map(function(I){return B(I,{renderNode:P,renderMark:S})}).join("")}function B(g,b){var P=b.renderNode,S=b.renderMark;if(w.isText(g)){var I=r(g.value);return g.marks.length>0?g.marks.reduce(function(Q,se){return S[se.type]?S[se.type](Q):Q},I):I}else{var F=function(Q){return V(Q,{renderMark:S,renderNode:P})};return!g.nodeType||!P[g.nodeType]?"":P[g.nodeType](g,F)}}e.documentToHtmlString=ee})(richTextHtmlRenderer_es5);var Contentful;(e=>{(n=>{n.HOME="2QHyZ7VxF5oLnaQdSZOGQF",n.FOOTER="6LjVGiRVd7SMt9ewdVBNbQ"})(e.EntryIDs||(e.EntryIDs={}))})(Contentful||(Contentful={}));var dayjs_minExports={},dayjs_min={get exports(){return dayjs_minExports},set exports(e){dayjs_minExports=e}};(function(e,n){(function(t,r){e.exports=r()})(commonjsGlobal,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",a="hour",c="day",f="week",u="month",d="quarter",m="year",v="date",R="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(B){var g=["th","st","nd","rd"],b=B%100;return"["+B+(g[(b-20)%10]||g[b]||g[0])+"]"}},k=function(B,g,b){var P=String(B);return!P||P.length>=g?B:""+Array(g+1-P.length).join(b)+B},O={s:k,z:function(B){var g=-B.utcOffset(),b=Math.abs(g),P=Math.floor(b/60),S=b%60;return(g<=0?"+":"-")+k(P,2,"0")+":"+k(S,2,"0")},m:function B(g,b){if(g.date()<b.date())return-B(b,g);var P=12*(b.year()-g.year())+(b.month()-g.month()),S=g.clone().add(P,u),I=b-S<0,F=g.clone().add(P+(I?-1:1),u);return+(-(P+(b-S)/(I?S-F:F-S))||0)},a:function(B){return B<0?Math.ceil(B)||0:Math.floor(B)},p:function(B){return{M:u,y:m,w:f,d:c,D:v,h:a,m:l,s:i,ms:s,Q:d}[B]||String(B||"").toLowerCase().replace(/s$/,"")},u:function(B){return B===void 0}},C="en",D={};D[C]=y;var Y=function(B){return B instanceof ee},N=function B(g,b,P){var S;if(!g)return C;if(typeof g=="string"){var I=g.toLowerCase();D[I]&&(S=I),b&&(D[I]=b,S=I);var F=g.split("-");if(!S&&F.length>1)return B(F[0])}else{var Q=g.name;D[Q]=g,S=Q}return!P&&S&&(C=S),S||!P&&C},z=function(B,g){if(Y(B))return B.clone();var b=typeof g=="object"?g:{};return b.date=B,b.args=arguments,new ee(b)},$=O;$.l=N,$.i=Y,$.w=function(B,g){return z(B,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var ee=function(){function B(b){this.$L=N(b.locale,null,!0),this.parse(b)}var g=B.prototype;return g.parse=function(b){this.$d=function(P){var S=P.date,I=P.utc;if(S===null)return new Date(NaN);if($.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var F=S.match(x);if(F){var Q=F[2]-1||0,se=(F[7]||"0").substring(0,3);return I?new Date(Date.UTC(F[1],Q,F[3]||1,F[4]||0,F[5]||0,F[6]||0,se)):new Date(F[1],Q,F[3]||1,F[4]||0,F[5]||0,F[6]||0,se)}}return new Date(S)}(b),this.$x=b.x||{},this.init()},g.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},g.$utils=function(){return $},g.isValid=function(){return this.$d.toString()!==R},g.isSame=function(b,P){var S=z(b);return this.startOf(P)<=S&&S<=this.endOf(P)},g.isAfter=function(b,P){return z(b)<this.startOf(P)},g.isBefore=function(b,P){return this.endOf(P)<z(b)},g.$g=function(b,P,S){return $.u(b)?this[P]:this.set(S,b)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(b,P){var S=this,I=!!$.u(P)||P,F=$.p(b),Q=function(X,oe){var ue=$.w(S.$u?Date.UTC(S.$y,oe,X):new Date(S.$y,oe,X),S);return I?ue:ue.endOf(c)},se=function(X,oe){return $.w(S.toDate()[X].apply(S.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(oe)),S)},J=this.$W,re=this.$M,ce=this.$D,A="set"+(this.$u?"UTC":"");switch(F){case m:return I?Q(1,0):Q(31,11);case u:return I?Q(1,re):Q(0,re+1);case f:var H=this.$locale().weekStart||0,W=(J<H?J+7:J)-H;return Q(I?ce-W:ce+(6-W),re);case c:case v:return se(A+"Hours",0);case a:return se(A+"Minutes",1);case l:return se(A+"Seconds",2);case i:return se(A+"Milliseconds",3);default:return this.clone()}},g.endOf=function(b){return this.startOf(b,!1)},g.$set=function(b,P){var S,I=$.p(b),F="set"+(this.$u?"UTC":""),Q=(S={},S[c]=F+"Date",S[v]=F+"Date",S[u]=F+"Month",S[m]=F+"FullYear",S[a]=F+"Hours",S[l]=F+"Minutes",S[i]=F+"Seconds",S[s]=F+"Milliseconds",S)[I],se=I===c?this.$D+(P-this.$W):P;if(I===u||I===m){var J=this.clone().set(v,1);J.$d[Q](se),J.init(),this.$d=J.set(v,Math.min(this.$D,J.daysInMonth())).$d}else Q&&this.$d[Q](se);return this.init(),this},g.set=function(b,P){return this.clone().$set(b,P)},g.get=function(b){return this[$.p(b)]()},g.add=function(b,P){var S,I=this;b=Number(b);var F=$.p(P),Q=function(re){var ce=z(I);return $.w(ce.date(ce.date()+Math.round(re*b)),I)};if(F===u)return this.set(u,this.$M+b);if(F===m)return this.set(m,this.$y+b);if(F===c)return Q(1);if(F===f)return Q(7);var se=(S={},S[l]=r,S[a]=o,S[i]=t,S)[F]||1,J=this.$d.getTime()+b*se;return $.w(J,this)},g.subtract=function(b,P){return this.add(-1*b,P)},g.format=function(b){var P=this,S=this.$locale();if(!this.isValid())return S.invalidDate||R;var I=b||"YYYY-MM-DDTHH:mm:ssZ",F=$.z(this),Q=this.$H,se=this.$m,J=this.$M,re=S.weekdays,ce=S.months,A=function(oe,ue,ae,_){return oe&&(oe[ue]||oe(P,I))||ae[ue].slice(0,_)},H=function(oe){return $.s(Q%12||12,oe,"0")},W=S.meridiem||function(oe,ue,ae){var _=oe<12?"AM":"PM";return ae?_.toLowerCase():_},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:J+1,MM:$.s(J+1,2,"0"),MMM:A(S.monthsShort,J,ce,3),MMMM:A(ce,J),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:A(S.weekdaysMin,this.$W,re,2),ddd:A(S.weekdaysShort,this.$W,re,3),dddd:re[this.$W],H:String(Q),HH:$.s(Q,2,"0"),h:H(1),hh:H(2),a:W(Q,se,!0),A:W(Q,se,!1),m:String(se),mm:$.s(se,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:F};return I.replace(w,function(oe,ue){return ue||X[oe]||F.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(b,P,S){var I,F=$.p(P),Q=z(b),se=(Q.utcOffset()-this.utcOffset())*r,J=this-Q,re=$.m(this,Q);return re=(I={},I[m]=re/12,I[u]=re,I[d]=re/3,I[f]=(J-se)/6048e5,I[c]=(J-se)/864e5,I[a]=J/o,I[l]=J/r,I[i]=J/t,I)[F]||J,S?re:$.a(re)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return D[this.$L]},g.locale=function(b,P){if(!b)return this.$L;var S=this.clone(),I=N(b,P,!0);return I&&(S.$L=I),S},g.clone=function(){return $.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},B}(),V=ee.prototype;return z.prototype=V,[["$ms",s],["$s",i],["$m",l],["$H",a],["$W",c],["$M",u],["$y",m],["$D",v]].forEach(function(B){V[B[1]]=function(g){return this.$g(g,B[0],B[1])}}),z.extend=function(B,g){return B.$i||(B(g,ee,z),B.$i=!0),z},z.locale=N,z.isDayjs=Y,z.unix=function(B){return z(1e3*B)},z.en=D[C],z.Ls=D,z.p={},z})})(dayjs_min);const dayjs=dayjs_minExports;function calculateYearsExperience(){const e=dayjs(new Date("2018-09-03")),n=Math.abs(e.diff(new Date,"quarter")),t=Math.floor(n/4),r=n%4;let o="";return r===1?o=`just over ${t}`:r===2?o=`${t} and a half`:r===3?o=`nearly ${t+1}`:o=`${t}`,o}const variables={CURRENT_YEAR:new Date().getFullYear(),NO_OF_YEARS_EXPERIENCE:calculateYearsExperience()};function getVariable(e){const n=variables[e];return n?n.toString():""}function replaceVariablesInString(e){const n=/[#][{]([A-Z0-9_]+)[}]/g,t=e.match(n);return t&&[...new Set(t)].forEach(o=>{const s=o.replace("#{","").replace("}","").trim(),i=new RegExp(o,"g");e=e.replace(i,getVariable(s))}),e}function formatCMSVariables(e){if(typeof e=="object")for(const n in e)typeof e[n]=="string"?e[n]=replaceVariablesInString(e[n]):e[n]!==null&&typeof e[n]=="object"&&formatCMSVariables(e[n]);return e}const _hoisted_1$1={class:"footer"},_hoisted_2={class:"footer__quick-links"},_hoisted_3={class:"footer__social"},_hoisted_4={class:"sr-only"},_hoisted_5={class:"footer__legal"},_hoisted_6=["innerHTML"],_sfc_main$2=defineComponent({__name:"SiteFooter",async setup(e){let n,t;const{data:r}=([n,t]=withAsyncContext(()=>useAsyncData(o=>o.$contentful.getEntry(Contentful.EntryIDs.FOOTER),"$mMA9bTNYLP")),n=await n,t(),n);return r.value.fields=formatCMSVariables(r.value.fields),(o,s)=>{const i=_sfc_main$7,l=__nuxt_component_0$1;return openBlock(),createElementBlock("footer",_hoisted_1$1,[createVNode(l,{to:"/",class:"footer__logo"},{default:withCtx(()=>[createVNode(i,{name:"j_icon",filled:""})]),_:1}),createBaseVNode("ul",_hoisted_2,[(openBlock(!0),createElementBlock(Fragment$1,null,renderList(unref(r).fields.quickLinks,a=>(openBlock(),createElementBlock("li",{key:a.id},[createVNode(l,{to:a.value,rel:a.value.startsWith("https://")?"noopener":void 0},{default:withCtx(()=>[createTextVNode(toDisplayString(a.key),1)]),_:2},1032,["to","rel"])]))),128))]),createBaseVNode("ul",_hoisted_3,[(openBlock(!0),createElementBlock(Fragment$1,null,renderList(unref(r).fields.socialLinks,a=>(openBlock(),createElementBlock("li",{key:a.id},[createVNode(l,{href:a.value,target:"_blank",rel:"noopener noreferrer"},{default:withCtx(()=>[createVNode(i,{class:"footer__social-icon",name:a.key.toLowerCase()},null,8,["name"]),createBaseVNode("span",_hoisted_4,toDisplayString(a.key),1)]),_:2},1032,["href"])]))),128))]),createBaseVNode("p",_hoisted_5,[createVNode(l,{href:"/privacy-policy",class:"link"},{default:withCtx(()=>[createTextVNode("Privacy Policy")]),_:1})]),createBaseVNode("div",{class:"footer__legal",innerHTML:unref(richTextHtmlRenderer_es5.documentToHtmlString)(unref(r).fields.legalText)},null,8,_hoisted_6)])}}}),SiteFooter_vue_vue_type_style_index_0_scoped_41c87f34_lang="",SiteFooter=_export_sfc(_sfc_main$2,[["__scopeId","data-v-41c87f34"]]),_hoisted_1={class:"page"},_sfc_main$1=defineComponent({__name:"app",async setup(e){var i,l,a,c,f;let n,t;const{data:r}=([n,t]=withAsyncContext(()=>useAsyncData(u=>u.$contentful.getAsset("2HwSTbJwsbPDLabrSltaa3"),"$siNM9WAguS")),n=await n,t(),n),o=ref("unknown");o.value=cookie.get("analyticsConsented"),o.value==="true"&&bootstrap().then(()=>{});function s(){o.value=cookie.get("analyticsConsented")}return useHead({htmlAttrs:{lang:"en-GB"},titleTemplate:u=>{const d="Jack Domleo - Frontend & UX Developer";return u?`${u} | ${d}`:d},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"name",content:"Jack Domleo"},{property:"og:locale",content:"en_GB"},{property:"og:type",content:"website"},{property:"og:host",content:"https://jackdomleo.dev"},{property:"og:image",content:(l=(i=r.value)==null?void 0:i.fields.file)==null?void 0:l.url},{property:"og:image:height",content:"630"},{property:"og:image:width",content:"1200"},{property:"og:image:type",content:(c=(a=r.value)==null?void 0:a.fields.file)==null?void 0:c.contentType},{property:"og:image:alt",content:(f=r.value)==null?void 0:f.fields.description},{property:"twitter:title",content:"Jack Domleo - Frontend & UX Developer"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@jackdomleo7"},{property:"twitter:creator",content:"@jackdomleo7"},{name:"format-detection",content:"telephone=no"},{name:"monetization",content:"$ilp.uphold.com/HQqg9QM4JyEj"},{name:"color-scheme",content:"light dark"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}),(u,d)=>{const m=__nuxt_component_0,v=__nuxt_component_1;return openBlock(),createElementBlock("div",_hoisted_1,[createVNode(m,null,{default:withCtx(()=>[unref(o)===!1?(openBlock(),createBlock(CookieConsent,{key:0,onClose:s})):createCommentVNode("",!0)]),_:1}),createVNode(Navigation),createBaseVNode("main",null,[createVNode(v)]),createVNode(SiteFooter)])}}}),app_vue_vue_type_style_index_0_scoped_c178a837_lang="",AppComponent=_export_sfc(_sfc_main$1,[["__scopeId","data-v-c178a837"]]),_sfc_main={__name:"nuxt-root",setup(e){const n=defineAsyncComponent(()=>__vitePreload(()=>import("./error-component.29dda77b.js"),[],import.meta.url).then(l=>l.default||l)),t=()=>null,r=useNuxtApp(),o=r.deferHydration();provide("_route",useRoute$1()),r.hooks.callHookWith(l=>l.map(a=>a()),"vue:setup");const s=useError();onErrorCaptured((l,a,c)=>{r.hooks.callHook("vue:error",l,a,c).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),isNuxtError(l)&&(l.fatal||l.unhandled)&&callWithNuxt(r,showError,[l])});const{islandContext:i}=!1;return(l,a)=>(openBlock(),createBlock(Suspense,{onResolve:unref(o)},{default:withCtx(()=>[unref(s)?(openBlock(),createBlock(unref(n),{key:0,error:unref(s)},null,8,["error"])):unref(i)?(openBlock(),createBlock(unref(t),{key:1,context:unref(i)},null,8,["context"])):(openBlock(),createBlock(unref(AppComponent),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=$fetch.create({baseURL:baseURL()}));let entry;const plugins=normalizePlugins(_plugins);entry=async function(){var o;const t=Boolean((o=window.__NUXT__)==null?void 0:o.serverRendered)?createSSRApp(_sfc_main):createApp(_sfc_main),r=createNuxtApp({vueApp:t});try{await applyPlugins(r,plugins)}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}try{await r.hooks.callHook("app:created",t),await r.hooks.callHook("app:beforeMount",t),t.mount("#"+appRootId),await r.hooks.callHook("app:mounted",t),await nextTick()}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}},entry().catch(e=>{console.error("Error while mounting app:",e)});export{pushScopeId as A,popScopeId as B,computed as C,parseSize as D,ref as E,Fragment$1 as F,onMounted as G,h as H,getFileExtension as I,withCtx as J,__nuxt_component_0$1 as K,Contentful as L,reactive as M,Btn as N,KeepAlive as O,provide as P,appPageTransition as Q,RouterView as R,_wrapIf as S,Suspense as T,nextTick as U,appKeepalive as V,Transition as W,defu as X,__vitePreload as _,_sfc_main$7 as a,defineComponent as b,createBlock as c,defineAsyncComponent as d,useRoute$1 as e,formatCMSVariables as f,guardReactiveProps as g,useHead as h,createElementBlock as i,createBaseVNode as j,createTextVNode as k,createCommentVNode as l,useAsyncData as m,normalizeProps as n,openBlock as o,dayjs as p,_export_sfc as q,useNuxtApp as r,commonjsGlobal as s,toDisplayString as t,unref as u,richTextHtmlRenderer_es5 as v,withAsyncContext as w,useRuntimeConfig as x,createVNode as y,renderList as z};
