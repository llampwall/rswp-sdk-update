"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var i=require("react"),l=require("../../contexts/form/form.cjs.js");function m(e){if(e&&e.__esModule)return e;var t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var o=m(i);function s({applicationId:e,cardTokenizeResponseReceived:t,locationId:r,children:a,formProps:n={"aria-label":"Payment form",id:"rswps-form"},overrides:u,...c},f){return o.createElement(l.default,{...c,applicationId:e,cardTokenizeResponseReceived:t,locationId:r,overrides:u},o.createElement("div",{"data-testid":"rswps-form",...n,ref:f,role:"form"},a))}const d=o.forwardRef(s);exports.default=d;
//# sourceMappingURL=payment-form.cjs.js.map
