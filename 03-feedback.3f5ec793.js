function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,l=f||s||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,u,f,s=0,l=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,s=t,a=e.apply(o,n)}function E(e){return s=e,u=setTimeout(j,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-s>=o}function j(){var e=g();if(S(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return c?d(n,o-(e-s)):n}(e))}function O(e){return u=void 0,v&&r?b(e):(r=i=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return E(f);if(c)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(c="maxWait"in n)?m(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?a:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector("form.feedback-form"),userEmail:document.querySelector("form input"),userMessage:document.querySelector("form textarea")};let E={email:"",message:""};!function(){const e=localStorage.getItem("feedback-form-state");if(!e)return;{const t=JSON.parse(e);E.email=t.email,E.message=t.message,b.userEmail.value=E.email,b.userMessage.value=E.message}}(),b.userEmail.addEventListener("input",e(t)((()=>{E.email=b.userEmail.value,localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500)),b.userMessage.addEventListener("input",e(t)((()=>{E.message=b.userMessage.value,localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),b.userEmail.value&&b.userMessage.value?(e.currentTarget.reset(),console.log(E),localStorage.removeItem("feedback-form-state"),E={email:"",message:""}):alert("Please make sure all fields are filled!")}));
//# sourceMappingURL=03-feedback.3f5ec793.js.map