"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var a=require("react"),o=require("./use-isomorphic-layout-effect.cjs.js");function n(e){if(e&&e.__esModule)return e;var t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var u=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,u.get?u:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var c=n(a);function i(e){const t=c.useRef(e);return o.useIsomorphicLayoutEffect(()=>{t.current=e},[e]),c.useCallback((...r)=>t.current(...r),[])}exports.useDynamicCallback=i;
//# sourceMappingURL=use-dynamic-callback.cjs.js.map
