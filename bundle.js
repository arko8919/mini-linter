!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=19)}([function(n,e,t){"use strict";n.exports=function(n,e){return e.toLowerCase().split(n).filter(function(n){return 0!==n.length})}},function(n,e,t){"use strict";var r=document.getElementById("text-area");n.exports=function(n){var e=r.value;if(Array.isArray(n)){for(var t=0;t<n.length;t++){var o=new RegExp("\\b"+n[t]+"\\b","gi");e=e.replace(o,function(n){return'<mark class="match">'+n+"</mark>"})}return e}var i=new RegExp("\\b"+n+"\\b","gi");return e.replace(i,function(n){return'<mark class="match">'+n+"</mark>"})}},function(n,e,t){n.exports=t.p+"539caf2f0b2569607451b2336efa9ca7.png"},function(n,e,t){"use strict";var r=t(0),o=document.querySelectorAll(".string-data p span");n.exports=function(n){var e=r(/\W+/,n);o[0].innerHTML=e.length;var t=n.split(/\w[.?!][\s|$]/);o[1].innerHTML=t.length,o[2].innerHTML=n.length}},function(n,e,t){"use strict";n.exports=function(n,e,t){console.log(t);var r=document.createElement("label"),o=document.createElement("input"),i=document.createElement("span"),a=document.createElement("span"),s=document.createTextNode(t);r.appendChild(s),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.setAttribute("id",t),o.setAttribute("type","checkbox"),o.setAttribute("class","checkbox"),a.setAttribute("class","remove"),i.setAttribute("class","check-mark"),e.includes(t)&&o.setAttribute("checked",""),n.appendChild(r)}},function(n,e,t){"use strict";var r=t(1),o=t(4),i=document.getElementsByClassName("overused-words-list")[0],a=i.getElementsByClassName("remove"),s=document.getElementById("overused-words-output"),d=document.getElementsByClassName("checkbox");n.exports=function(n,e){for(;i.hasChildNodes();)i.removeChild(i.firstChild);n.forEach(function(t,l){o(i,e,t),a[l].addEventListener("click",function(t){var o=t.target.parentElement.id;console.log(t.target.parentElement.id);for(var i=0;i<e.length;i++)e[i]===o&&e.splice(i,1);for(var a=0;a<n.length;a++)n[a]===o&&n.splice(a,1);t.target.parentElement.remove(),s.innerHTML=r(e),t.preventDefault()}),d[l].addEventListener("change",function(n){if(n.target.checked)e.push(n.target.parentElement.id),console.log(n.target.parentElement.id);else for(var t=e.length-1;t>=0;t--)if(e[t]===n.target.parentElement.id){e.splice(t,1);break}s.innerHTML=r(e),n.preventDefault()})})}},function(n,e,t){"use strict";var r=t(5),o=t(0),i=document.getElementById("input"),a={overusedWords:[],checkedWords:[],constantWords:["passionate","creative","driven","responsible","strategic","organizational","expert","other","more","new","good","best","many","important","great","first","able"],changeableWords:function(){var n=this,e=o(/,\s*|\s+/g,i.value);[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(new Set(e))).filter(function(e){return!n.overusedWords.includes(e)}).forEach(function(e){return n.overusedWords.push(e)}),r(this.overusedWords,this.checkedWords),i.value=""},unchangeableWords:function(n){this.overusedWords.includes(this.constantWords[n])||(this.overusedWords.push(this.constantWords[n]),r(this.overusedWords,this.checkedWords))}};n.exports=a},function(n,e,t){"use strict";n.exports=function(n,e){for(var t=0;t<n.length;t++)n[t].textContent.match(/^\w+/).toString()===e?(n[t].style.backgroundColor="#FF3B3F",n[t].style.color="#EFEFEF"):(n[t].style.backgroundColor="#EFEFEF",n[t].style.color="#000")}},function(n,e,t){"use strict";n.exports=function(n,e,t){var r=document.createElement("li"),o=document.createTextNode(e+" : "+t);r.appendChild(o),n.appendChild(r)}},function(n,e,t){"use strict";var r=t(8),o=t(1),i=t(7),a=document.getElementById("repeated-words-output"),s=document.getElementsByClassName("repeated-words-list")[0],d=s.getElementsByTagName("li"),l=document.getElementById("text-area"),c={highlighted:!1,currentWord:""};n.exports=function(n){for(;s.hasChildNodes();)s.removeChild(s.firstChild);n.forEach(function(n,e){r(s,n[0],n[1]),d[e].addEventListener("click",function(e){!c.highlighted||c.highlighted&&c.currentWord!==n[0]?(a.innerHTML=o(n[0]),c.highlighted=!0,c.currentWord=n[0],i(d,c.currentWord)):(c.highlighted=!1,c.currentWord=n[0],e.target.style.backgroundColor="#EFEFEF",e.target.style.color="#000",a.innerHTML=l.value),e.preventDefault()})}),c.highlighted&&(a.innerHTML=o(c.currentWord),i(d,c.currentWord))}},function(n,e,t){"use strict";n.exports=function(n){var e={};n.forEach(function(n){return e[n]=(e[n]||0)+1});var t=[];for(var r in e)t.push([r,e[r]]);return t.sort(function(n,e){return e[1]-n[1]}),t}},function(n,e,t){"use strict";var r=t(10),o=t(9),i=t(1),a=t(0),s=document.getElementById("overused-words-output");n.exports=function(n,e){var t=a(/\W+/,n),d=r(t);o(d),s.innerHTML=i(e)}},function(n,e,t){"use strict";var r=document.getElementsByClassName("editor-sections")[0],o=document.getElementsByClassName("active"),i=document.getElementsByClassName("underline")[0];n.exports=function(n){o[0].className=o[0].className.replace("active",""),this.className+=" active";var e=this.getAttribute("value");"add-text"===e?(r.style.left="0",i.style.left="0"):"add-overused-words"===e?(r.style.left="-100%",i.style.left="33.33%"):"instruction"===e&&(r.style.left="-200%",i.style.left="66.66%"),n.preventDefault()}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),d=null,l=0,c=[],u=t(13);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function g(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),v(e,n.attrs),m(n,e),e}function v(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=d||(d=g(e)),r=x.bind(null,t,a,!1),o=x.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(e,n.attrs),m(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){f(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=h(n,e);return p(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&p(h(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var w,y=(w=[],function(n,e){return w[n]=e,w.filter(Boolean).join("\n")});function x(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){var r=t(16);(n.exports=t(15)(!1)).push([n.i,"/* Font Size */\n/* Font Family */\n/* Colors */\n.row::after {\n  display: table;\n  clear: both;\n  content: ''; }\n\n[class*='col-'] {\n  float: left; }\n\n/* For mobile phones: */\n[class*='col-'] {\n  width: 100%; }\n\n@media only screen and (min-width: 600px) {\n  /* For desktop and tablets: */\n  .col-1 {\n    width: 8.33%; }\n  .col-2 {\n    width: 16.66%; }\n  .col-3 {\n    width: 25%; }\n  .col-4 {\n    width: 33.33%; }\n  .col-5 {\n    width: 41.66%; }\n  .col-6 {\n    width: 50%; }\n  .col-7 {\n    width: 58.33%; }\n  .col-8 {\n    width: 66.66%; }\n  .col-9 {\n    width: 75%; }\n  .col-10 {\n    width: 83.33%; }\n  .col-11 {\n    width: 91.66%; }\n  .col-12 {\n    width: 100%; } }\n\nheader {\n  height: 10%;\n  font-family: \"Roboto Mono\", monospace; }\n  @media only screen and (min-width: 600px) {\n    header {\n      height: 20%; } }\n  @media only screen and (max-width: 600px), screen and (max-height: 468px) and (orientation: landscape) {\n    header {\n      min-height: 6rem; } }\n  header h1 {\n    margin: 0;\n    padding-top: 0.3125rem;\n    text-transform: uppercase; }\n  header p {\n    text-align: center; }\n\nmain {\n  overflow: hidden;\n  height: 80%; }\n  @media only screen and (min-width: 600px) {\n    main {\n      height: 70%; } }\n  @media only screen and (max-width: 480px), screen and (max-height: 468px) and (orientation: landscape) {\n    main {\n      min-height: 40rem; } }\n  @media only screen and (min-width: 481px), screen and (max-height: 468px) and (orientation: landscape) {\n    main {\n      min-height: 30rem; } }\n  main .container {\n    height: 92%; }\n    @media only screen and (min-height: 468px) {\n      main .container {\n        height: 95%; } }\n    main .container .content {\n      border-top: 0.0625rem solid #A9A9A9;\n      border-bottom: 0.0625rem solid #A9A9A9; }\n\nfooter {\n  position: relative;\n  height: 10%;\n  text-align: center; }\n  @media only screen and (max-width: 600px), screen and (max-height: 468px) and (orientation: landscape) {\n    footer {\n      min-height: 6rem; } }\n  footer .social-media {\n    text-align: center; }\n    footer .social-media a {\n      color: #A9A9A9;\n      font-size: 2.625rem;\n      cursor: pointer; }\n  footer p {\n    margin: 0;\n    padding: 0; }\n\n.add-overused-words {\n  left: 100%; }\n  .add-overused-words div:first-child {\n    height: 30%;\n    padding-bottom: 0.625rem;\n    border-bottom: 0.0625rem solid #A9A9A9;\n    text-align: center; }\n    @media only screen and (min-width: 600px) {\n      .add-overused-words div:first-child {\n        height: 100%;\n        padding-top: 5%;\n        padding-bottom: 0;\n        border-bottom: none; } }\n    .add-overused-words div:first-child label {\n      display: block;\n      text-transform: uppercase; }\n    .add-overused-words div:first-child input {\n      width: 50%;\n      margin-bottom: 0.3125rem;\n      padding: 0.1875rem; }\n      @media only screen and (min-width: 600px) {\n        .add-overused-words div:first-child input {\n          width: 80%; } }\n    .add-overused-words div:first-child button {\n      display: block;\n      width: 25%;\n      margin: 0 auto;\n      padding: 0.3125rem;\n      border: none;\n      outline: none;\n      color: #FFF;\n      background-color: #FF3B3F;\n      box-shadow: 0 0 5px 0 #000;\n      font-family: \"Roboto Mono\", monospace;\n      font-weight: bold;\n      text-transform: uppercase;\n      cursor: pointer;\n      transition: all .5s; }\n      @media only screen and (max-width: 480px) and (max-height: 480px) {\n        .add-overused-words div:first-child button {\n          display: inline-block;\n          padding: 0.1875rem; } }\n      @media only screen and (min-width: 600px) {\n        .add-overused-words div:first-child button {\n          width: 50%; } }\n      .add-overused-words div:first-child button:hover {\n        color: #FF3B3F;\n        background-color: #FFF; }\n    .add-overused-words div:first-child p {\n      display: none;\n      margin: 2.5rem 1.25rem 0;\n      padding: 0.3125rem;\n      border-radius: 0.3125rem;\n      color: #EFEFEF;\n      background-color: #A9A9A9; }\n      @media only screen and (min-width: 600px) {\n        .add-overused-words div:first-child p {\n          display: block; } }\n  .add-overused-words div:last-child {\n    overflow-y: auto;\n    height: 70%;\n    text-align: center; }\n    @media only screen and (min-width: 600px) {\n      .add-overused-words div:last-child {\n        overflow-y: auto;\n        height: 100%;\n        padding-top: 3.125rem;\n        border-left: 1px solid #A9A9A9; } }\n    .add-overused-words div:last-child h3 {\n      margin: 0 0.625rem; }\n    .add-overused-words div:last-child ol {\n      padding: 0.3125rem; }\n      @media only screen and (min-width: 600px) {\n        .add-overused-words div:last-child ol {\n          text-align: left; } }\n      .add-overused-words div:last-child ol li {\n        display: inline-block;\n        position: relative;\n        width: 10rem;\n        margin: 0.3125rem;\n        padding-left: 3.125rem; }\n        .add-overused-words div:last-child ol li button {\n          position: absolute;\n          top: 50%;\n          -ms-transform: translate(0, -50%);\n              transform: translate(0, -50%);\n          left: 0;\n          color: #EFEFEF;\n          background-color: #FF3B3F;\n          font-size: 1.25rem;\n          cursor: pointer; }\n\n.add-text {\n  left: 0; }\n  .add-text #text-area, .add-text #repeated-words-output, .add-text #overused-words-output {\n    width: 100%;\n    height: 100%;\n    padding: 0.625rem;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.25rem;\n    white-space: pre-wrap;\n    letter-spacing: 0.0625rem;\n    word-wrap: break-word; }\n  .add-text #text-area {\n    z-index: 1;\n    border: none;\n    border-top: 1px solid #CAEBF2;\n    background-color: transparent;\n    resize: none; }\n  .add-text #repeated-words-output {\n    position: absolute;\n    z-index: -2;\n    top: 0;\n    left: 0;\n    color: transparent;\n    background-color: #EFEFEF; }\n    .add-text #repeated-words-output mark {\n      color: transparent;\n      background-color: #CAEBF2; }\n  .add-text #overused-words-output {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    color: transparent; }\n    .add-text #overused-words-output mark {\n      color: transparent;\n      background-color: orange; }\n\n.instruction {\n  left: 200%; }\n  .instruction article {\n    padding: 0.625rem; }\n\n.editor {\n  position: relative;\n  height: 60%;\n  border-right: 0.0625rem solid #A9A9A9;\n  border-left: 0.0625rem solid #A9A9A9; }\n  @media only screen and (min-width: 600px) {\n    .editor {\n      height: 100%; } }\n  .editor .editor-nav {\n    height: 10%;\n    font-size: 0;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .editor .editor-nav .editor-nav-buttons {\n      width: 33.33%;\n      margin: 0;\n      padding: 0;\n      border: none;\n      outline: none;\n      background-color: transparent;\n      font-size: 1.25rem;\n      text-transform: uppercase;\n      cursor: pointer; }\n    .editor .editor-nav .active {\n      color: #FF3B3F; }\n    .editor .editor-nav .underline {\n      position: relative;\n      left: 0;\n      width: 33.33%;\n      border-bottom: 0.125rem solid #FF3B3F;\n      transition: all .5s; }\n  .editor .editor-sections {\n    position: relative;\n    left: 0;\n    width: 100%;\n    height: 85%;\n    transition: all .5s; }\n    @media only screen and (orientation: landscape) and (max-height: 321px) {\n      .editor .editor-sections {\n        height: 80%; } }\n    .editor .editor-sections section {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n.overused-words, .repeated-words {\n  overflow-y: auto;\n  position: relative;\n  z-index: 10;\n  height: 20%;\n  min-height: 10rem;\n  padding: 0.3125rem;\n  background-color: #EFEFEF;\n  font-size: 1rem;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  @media only screen and (min-width: 600px) {\n    .overused-words, .repeated-words {\n      height: 100%; } }\n  .overused-words h4, .repeated-words h4 {\n    text-transform: uppercase; }\n\n.repeated-words ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .repeated-words ul li {\n    padding: 0.625rem 0 0.3125rem 0;\n    border-bottom: 0.0625rem solid #FF3B3F;\n    font-family: \"Roboto Mono\", monospace;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.overused-words {\n  min-height: 10rem; }\n  .overused-words label {\n    display: block;\n    position: relative;\n    margin-bottom: 0.125rem;\n    padding: 0 1.5rem;\n    font-family: \"Roboto Mono\", monospace;\n    cursor: pointer; }\n    .overused-words label .check-mark {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1.25rem;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n      background-color: #DCDCDC; }\n      .overused-words label .check-mark:after {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 0.3125rem;\n        height: 0.625rem;\n        border: solid #EFEFEF;\n        border-width: 0 0.1875rem 0.1875rem 0;\n        content: '';\n        -ms-transform: translate(-50%, -50%) rotate(45deg);\n            transform: translate(-50%, -50%) rotate(45deg); }\n    .overused-words label input {\n      position: absolute;\n      margin: 0;\n      opacity: 0;\n      cursor: pointer; }\n      .overused-words label input:checked ~ .check-mark:after {\n        display: block; }\n      .overused-words label input:checked ~ .check-mark {\n        background-color: #FF3B3F; }\n    .overused-words label .remove {\n      position: absolute;\n      top: 50%;\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n      position: absolute;\n      right: 0.3125rem;\n      width: 0.75rem;\n      height: 100%; }\n      .overused-words label .remove:after {\n        position: absolute;\n        top: 50%;\n        -ms-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n        left: 0.1875rem;\n        width: 100%;\n        border: solid #000;\n        border-width: 0.125rem 0 0 0;\n        content: ''; }\n\n.string-data {\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 5%;\n  border-top: 0.0625rem solid #CAEBF2;\n  text-align: center; }\n  @media only screen and (orientation: landscape) and (max-height: 321px) {\n    .string-data {\n      height: 10%; } }\n  .string-data p {\n    display: inline-block;\n    margin: 0;\n    padding: 0 0.5rem 0 0.5rem;\n    font-size: 0.875rem; }\n\nhtml {\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 100%; }\n  @media only screen and (max-width: 320px) {\n    html {\n      font-size: 8px; } }\n  @media only screen and (min-width: 321px) {\n    html {\n      font-size: 10px; } }\n  @media only screen and (min-width: 468px) {\n    html {\n      font-size: 12px; } }\n  @media only screen and (min-width: 768px) {\n    html {\n      font-size: 14px; } }\n  @media only screen and (min-width: 1224px) {\n    html {\n      font-size: 16px; } }\n  @media only screen and (min-width: 1824px) {\n    html {\n      font-size: 18px; } }\n  @media only screen and (orientation: landscape) and (max-height: 468px) {\n    html {\n      font-size: 12px; } }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nbody {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background: url("+r(t(2))+') repeat;\n  font-family: "Roboto", sans-serif; }\n  body h1, body h2, body h3, body h4 {\n    text-align: center; }\n  body h4 {\n    display: inline-block;\n    margin: 0.125rem 0;\n    border-bottom: 1px solid #CAEBF2; }\n',""])},function(n,e,t){var r=t(17);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(14)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){"use strict";t(18),t(2);var r=t(12),o=t(11),i=t(6),a=t(3),s=document.getElementById("text-area"),d=document.getElementById("overused-words-btn"),l=document.getElementsByClassName("example-words"),c=document.getElementsByClassName("editor-nav-buttons");Array.from(c,function(n){return n.addEventListener("click",r)}),s.addEventListener("input",function(n){o(s.value,i.checkedWords),a(s.value),n.preventDefault()}),d.addEventListener("click",function(n){i.changeableWords(),n.preventDefault()});for(var u=function(n){l[n].addEventListener("click",function(e){i.unchangeableWords(n),e.preventDefault()})},p=0;p<l.length;p++)u(p)}]);