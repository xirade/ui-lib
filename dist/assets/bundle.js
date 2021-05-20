(()=>{"use strict";var n={625:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,'.dropdown .trigger {\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n  position: relative;\n  cursor: pointer;\n}\n.dropdown .trigger::after {\n  content: ">";\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  transform: rotate(90deg) scale(0.5, 1);\n  font-weight: bold;\n  transition: transform 0.3s ease-out;\n}\n.dropdown .trigger.active::after {\n  transform: rotate(-90deg) scale(0.5, 1);\n}\n.dropdown .content {\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: linear, step-end;\n}\n.dropdown .content.active {\n  height: inherit;\n  opacity: 1;\n  padding-left: 20px;\n  transition: opacity 0.8s ease-out, height 1s step-start;\n}\n',""]);const o=i},835:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,".snackbar{\n    padding: 20px;\n    position: fixed;\n    left: 50%;\n    margin-left: -120px;\n    top: 0;\n    border-radius: 0 0 5px 5px;\n    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);\n    background: #ff6565;\n    text-align: center;\n    color: #fff;\n    margin-top: -100%;\n    transition: all 0.2s;\n  }\n  .snackbar.active{\n    margin-top: 0;\n  }",""]);const o=i},94:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,".tabs > ul {\n  padding: 0;\n}\n.tabs .trigger {\n  list-style-type: none;\n  padding: 10px;\n  background: #f2f2f2;\n  margin: 4px;\n  border-radius: 6px;\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.tabs .trigger:hover {\n  background: #999;\n}\n\n.tabs .trigger.active {\n  background: #ff6565;\n  color: white;\n}\n.tabs .content {\n  background: #fbfbfb;\n  padding: 10px 20px;\n  border-radius: 6px;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease-out, step-end;\n}\n.tabs .content.active {\n  height: inherit;\n  opacity: 1;\n  transition: opacity 0.8s ease-out, height 1s step-start;\n}\n",""]);const o=i},739:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,'.tooltip {\n  position: relative;\n  display: inline-block;\n  color: #ff6565;\n  border-bottom: 1px dotted #ff6565;\n  cursor: help;\n}\n.tip {\n  visibility: hidden;\n  width: 150px;\n  background-color: #ff6565;\n  color: #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 5px 0;\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tip.active {\n  visibility: visible;\n  opacity: 1;\n}\n.tip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  border-width: 4px;\n  border-style: solid;\n  border-color: transparent;\n  border-top-color: #ff6565;\n}\n',""]);const o=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},379:(n,t,e)=>{var r,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function a(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},r=[],i=0;i<n.length;i++){var c=n[i],s=t.base?c[0]+t.base:c[0],l=e[s]||0,u="".concat(s," ").concat(l);e[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function d(n,t,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}function f(n,t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(n,t){var e,r,i;if(t.singleton){var o=v++;e=p||(p=s(t)),r=d.bind(null,e,o,!1),i=d.bind(null,e,o,!0)}else e=s(t),r=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var i=a(e[r]);o[i].references--}for(var s=c(n,t),l=0;l<e.length;l++){var u=a(e[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}e=s}}}}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),r=e(739);function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=t,this.message=t.getAttribute("data-message")}var t,e;return t=n,(e=[{key:"init",value:function(){var n=document.createElement("div");n.classList.add("tip"),n.textContent=this.message,this.element.appendChild(n),this.element.addEventListener("mouseenter",(function(){n.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){n.classList.remove("active")}))}}])&&i(t.prototype,e),n}();var a=e(625);function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const s=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=t,this.trigger=t.querySelector(".trigger"),this.content=t.querySelector(".content")}var t,e;return t=n,(e=[{key:"init",value:function(){var n=this;this.trigger.addEventListener("click",(function(){n.trigger.classList.toggle("active"),n.content.classList.toggle("active")}))}}])&&c(t.prototype,e),n}();var l=e(94);function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;const d=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=t,this.tabs=t.querySelectorAll(".trigger")}var t,e;return t=n,(e=[{key:"init",value:function(){var n=this;this.tabs.forEach((function(t){t.addEventListener("click",(function(t){n.toggleTabs(t),n.toggleContent(t)}))}))}},{key:"toggleTabs",value:function(n){this.tabs.forEach((function(n){return n.classList.remove("active")})),n.target.classList.add("active")}},{key:"toggleContent",value:function(n){this.container.querySelectorAll(".content").forEach((function(n){n.classList.remove("active")}));var t=n.target.getAttribute("data-target");this.container.querySelector(t).classList.add("active")}}])&&u(t.prototype,e),n}();var f=e(835);function p(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t()(f.Z,{insert:"head",singleton:!1}),f.Z.locals;const v=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.snackbar=document.createElement("div")}var t,e;return t=n,(e=[{key:"init",value:function(){this.snackbar.classList.add("snackbar"),document.querySelector("body").appendChild(this.snackbar)}},{key:"show",value:function(n){var t=this;this.snackbar.textContent=n,this.snackbar.classList.add("active"),setTimeout((function(){t.snackbar.classList.remove("active")}),4e3)}}])&&p(t.prototype,e),n}();new o(document.querySelector(".tooltip")).init(),document.querySelectorAll(".dropdown").forEach((function(n){new s(n).init()})),new d(document.querySelector(".tabs")).init();var h=new v;h.init(),document.querySelector("button").addEventListener("click",(function(){h.show("you clicked me :)")}))})()})();