/*! For license information please see 3.c6ba5d65.chunk.js.LICENSE.txt */
(this["webpackJsonppwa-playlist"]=this["webpackJsonppwa-playlist"]||[]).push([[3],{27:function(e,t,r){"use strict";var a=r(0),n=(r(28),r(1));class i extends a.Component{shouldComponentUpdate(e){return e.percent!==this.props.percent}render(){return Object(n.jsxs)("div",{className:"progress-bar",children:[Object(n.jsx)("div",{className:"progress-bar__mask",style:{transform:"scale(".concat(this.props.percent,", 1)")},children:Object(n.jsx)("div",{className:"progress-bar__progress"})}),Object(n.jsx)("div",{className:"progress-bar__bg"})]})}}t.a=i},28:function(e,t,r){},32:function(e,t,r){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}function a(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function n(e){return"#"+e.map(a).join("")}function i(e){return(299*e[0]+587*e[1]+114*e[2])/1e3<128}function s(e){return e?Array.isArray(e)?"number"===typeof e[0]?[e.slice()]:e:[e]:e}function o(e,t,r){for(var a=0;a<r.length;a++)if(c(e,t,r[a]))return!0;return!1}function c(e,t,r){switch(r.length){case 3:if(l(e,t,r))return!0;break;case 4:if(u(e,t,r))return!0;break;case 5:if(d(e,t,r))return!0;break;default:return!1}}function l(e,t,r){return 255!==e[t+3]||e[t]===r[0]&&e[t+1]===r[1]&&e[t+2]===r[2]}function u(e,t,r){return e[t+3]&&r[3]?e[t]===r[0]&&e[t+1]===r[1]&&e[t+2]===r[2]&&e[t+3]===r[3]:e[t+3]===r[3]}function h(e,t,r){return e>=t-r&&e<=t+r}function d(e,t,r){var a=r[0],n=r[1],i=r[2],s=r[3],o=r[4],c=e[t+3],l=h(c,s,o);return s?!(c||!l)||!!(h(e[t],a,o)&&h(e[t+1],n,o)&&h(e[t+2],i,o)&&l):l}function p(e,t,r){for(var a={},n=24,i=r.ignoredColor,s=r.step,c=[0,0,0,0,0],l=0;l<t;l+=s){var u=e[l],h=e[l+1],d=e[l+2],p=e[l+3];if(!i||!o(e,l,i)){var f=Math.round(u/n)+","+Math.round(h/n)+","+Math.round(d/n);a[f]?a[f]=[a[f][0]+u*p,a[f][1]+h*p,a[f][2]+d*p,a[f][3]+p,a[f][4]+1]:a[f]=[u*p,h*p,d*p,p,1],c[4]<a[f][4]&&(c=a[f])}}var v=c[0],m=c[1],b=c[2],g=c[3],j=c[4];return g?[Math.round(v/g),Math.round(m/g),Math.round(b/g),Math.round(g/j)]:r.defaultColor}function f(e,t,r){for(var a=0,n=0,i=0,s=0,c=0,l=r.ignoredColor,u=r.step,h=0;h<t;h+=u){var d=e[h+3],p=e[h]*d,f=e[h+1]*d,v=e[h+2]*d;l&&o(e,h,l)||(a+=p,n+=f,i+=v,s+=d,c++)}return s?[Math.round(a/s),Math.round(n/s),Math.round(i/s),Math.round(s/c)]:r.defaultColor}function v(e,t,r){for(var a=0,n=0,i=0,s=0,c=0,l=r.ignoredColor,u=r.step,h=0;h<t;h+=u){var d=e[h],p=e[h+1],f=e[h+2],v=e[h+3];l&&o(e,h,l)||(a+=d*d*v,n+=p*p*v,i+=f*f*v,s+=v,c++)}return s?[Math.round(Math.sqrt(a/s)),Math.round(Math.sqrt(n/s)),Math.round(Math.sqrt(i/s)),Math.round(s/c)]:r.defaultColor}function m(e){return b(e,"defaultColor",[0,0,0,0])}function b(e,t,r){return"undefined"===typeof e[t]?r:e[t]}var g=10,j=100;function y(e){return-1!==e.search(/\.svg(\?|$)/i)}function w(e){if(e instanceof HTMLImageElement){var t=e.naturalWidth,r=e.naturalHeight;return!e.naturalWidth&&y(e.src)&&(t=r=j),{width:t,height:r}}return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:{width:e.width,height:e.height}}function O(e,t){var r,a=b(t,"left",0),n=b(t,"top",0),i=b(t,"width",e.width),s=b(t,"height",e.height),o=i,c=s;return"precision"===t.mode||(i>s?(r=i/s,o=j,c=Math.round(o/r)):(r=s/i,c=j,o=Math.round(c/r)),(o>i||c>s||o<g||c<g)&&(o=i,c=s)),{srcLeft:a,srcTop:n,srcWidth:i,srcHeight:s,destWidth:o,destHeight:c}}function x(){return"undefined"===typeof window?new OffscreenCanvas(1,1):document.createElement("canvas")}var _="FastAverageColor: ";function k(e,t,r){e.silent||(console.error(_+t),r&&console.error(r))}function C(e){return Error(_+e)}return function(){function t(){e(this,t)}return r(t,[{key:"getColorAsync",value:function(e,t){if(!e)return Promise.reject(C("call .getColorAsync() without resource."));if("string"===typeof e){var r=new Image;return r.crossOrigin="",r.src=e,this._bindImageEvents(r,t)}if(e instanceof Image&&!e.complete)return this._bindImageEvents(e,t);var a=this.getColor(e,t);return a.error?Promise.reject(a.error):Promise.resolve(a)}},{key:"getColor",value:function(e,t){var r=m(t=t||{});if(!e)return k(t,"call .getColor(null) without resource."),this.prepareResult(r);var a=O(w(e),t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight)return k(t,'incorrect sizes for resource "'.concat(e.src,'".')),this.prepareResult(r);if(!this._ctx&&(this._canvas=x(),this._ctx=this._canvas.getContext&&this._canvas.getContext("2d"),!this._ctx))return k(t,"Canvas Context 2D is not supported in this browser."),this.prepareResult(r);this._canvas.width=a.destWidth,this._canvas.height=a.destHeight;var n=r;try{this._ctx.clearRect(0,0,a.destWidth,a.destHeight),this._ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var i=this._ctx.getImageData(0,0,a.destWidth,a.destHeight).data;n=this.getColorFromArray4(i,t)}catch(s){k(t,"security error (CORS) for resource ".concat(e.src,".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"),s)}return this.prepareResult(n)}},{key:"getColorFromArray4",value:function(e,t){t=t||{};var r=4,a=e.length,n=m(t);if(a<r)return n;var i,o=a-a%r,c=(t.step||1)*r;switch(t.algorithm||"sqrt"){case"simple":i=f;break;case"sqrt":i=v;break;case"dominant":i=p;break;default:throw C("".concat(t.algorithm," is unknown algorithm."))}return i(e,o,{defaultColor:n,ignoredColor:s(t.ignoredColor),step:c})}},{key:"prepareResult",value:function(e){var t=e.slice(0,3),r=[].concat(t,e[3]/255),a=i(e);return{value:e,rgb:"rgb("+t.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:n(t),hexa:n(e),isDark:a,isLight:!a}}},{key:"destroy",value:function(){delete this._canvas,delete this._ctx}},{key:"_bindImageEvents",value:function(e,t){var r=this;return new Promise((function(a,n){var i=function(){c();var i=r.getColor(e,t);i.error?n(i.error):a(i)},s=function(){c(),n(C('Error loading image "'.concat(e.src,'".')))},o=function(){c(),n(C('Image "'.concat(e.src,'" loading aborted.')))},c=function(){e.removeEventListener("load",i),e.removeEventListener("error",s),e.removeEventListener("abort",o)};e.addEventListener("load",i),e.addEventListener("error",s),e.addEventListener("abort",o)}))}}]),t}()}()},33:function(e,t,r){},34:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(27),s=r(8),o=r(3),c=r.n(o),l=r(4),u=r(32),h=r.n(u),d=r(6);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var v=a.createElement("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z"}),m=a.createElement("path",{d:"M16 28.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 28.138zM16 19c1.968 0 3.569 1.602 3.569 3.569S17.968 26.138 16 26.138s-3.569-1.601-3.569-3.568S14.032 19 16 19zM7 46c.234 0 .47-.082.66-.249l16.313-14.362L34.275 41.69a.999.999 0 1 0 1.414-1.414l-4.807-4.807 9.181-10.054 11.261 10.323a1 1 0 0 0 1.351-1.475l-12-11a1.031 1.031 0 0 0-.72-.262 1.002 1.002 0 0 0-.694.325l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 44.249A1 1 0 0 0 7 46z"});function b(e,t){var r=e.title,n=e.titleId,i=f(e,["title","titleId"]);return a.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58",ref:t,"aria-labelledby":n},i),r?a.createElement("title",{id:n},r):null,v,m)}var g=a.forwardRef(b),j=(r.p,r(33),r(1));class y extends a.PureComponent{constructor(e){var t;super(e),t=this,this.onLoadImage=function(){var e=Object(l.a)(c.a.mark((function e(r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fac.getColor(r.target,{algorithm:"simple"}),e.next=3,Object(d.a)(200);case 3:requestAnimationFrame((()=>{t._hideLoader(),t._setAlbumShadowColor(a),t._displayAlbumCover()}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.loader=n.a.createRef(),this.image=n.a.createRef(),this.view=n.a.createRef(),this.fac=new h.a,this._onLoadDummyImage=this._onLoadDummyImage.bind(this)}_onLoadDummyImage(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(200);case 2:e.image.current.src=e.props.src,e.image.current.classList.remove("album-cover__image--loaded"),e.icon.classList.remove("album-cover__icon--active");case 5:case"end":return t.stop()}}),t)})))()}_displayLoadingCover(){this.imageDummy.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded"),requestAnimationFrame((()=>{this.view.current.style.boxShadow="rgba(107, 179, 237, .5) 0px 24px 35px -16px",this.loader.current.classList.remove("hide"),this.loader.current.classList.add("show"),this.icon.classList.add("album-cover__icon--active")}))}_setAlbumShadowColor(e){const t=e.hex.replace("#","").match(/[A-Za-z0-9]{2}/g).map((e=>parseInt(e,16)));this.view.current.style.boxShadow="0 24px 35px -16px rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", 0.7)")}_displayAlbumCover(){var e=this;return Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.image.current.classList.add("album-cover__image--loaded");case 1:case"end":return t.stop()}}),t)})))()}_hideLoader(){this.loader.current.classList.add("hide")}componentDidMount(){this.icon=document.querySelector(".album-cover__icon"),this.imageDummy=new Image,this.imageDummy.onload=this._onLoadDummyImage}componentDidUpdate(e){e.src!==this.props.src&&this._displayLoadingCover()}render(){return Object(j.jsxs)("div",{ref:this.view,className:"album-cover",children:[Object(j.jsx)(g,{className:"album-cover__icon"}),Object(j.jsx)("div",{ref:this.loader,className:"album-cover__loader"}),Object(j.jsx)("img",{ref:this.image,className:"album-cover__image",crossOrigin:"",onLoad:this.onLoadImage,alt:this.props.alt})]})}}var w=y;var O=e=>{const t=parseInt(e,10);let r=Math.floor(t/3600),a=Math.floor((t-3600*r)/60),n=t-3600*r-60*a;return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},x=r(5),_=r(9);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},k.apply(this,arguments)}function C(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var E=a.createElement("path",{d:"M15.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2zM28.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2z"});function L(e,t){var r=e.title,n=e.titleId,i=C(e,["title","titleId"]);return a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",ref:t,"aria-labelledby":n},i),r?a.createElement("title",{id:n},r):null,E)}var M=a.forwardRef(L);r.p;function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},I.apply(this,arguments)}function N(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var P=a.createElement("path",{d:"M23.491 144.032c0-28.762 23.399-52.155 52.161-52.155h185.706l-46.874 46.874 14.31 14.305 71.301-71.295L228.8 10.47l-14.3 14.31 46.863 46.868H75.657c-39.912 0-72.389 32.477-72.389 72.389v7.419h20.228v-7.424h-.005z"}),H=a.createElement("path",{d:"M276.604 156.058c0 28.762-23.404 52.155-52.166 52.155H38.726l46.879-46.874L71.29 147.04 0 218.335l71.295 71.29 14.299-14.31-46.874-46.868h185.711c39.917 0 72.394-32.471 72.394-72.388v-7.419h-20.228v7.419h.007z"});function S(e,t){var r=e.title,n=e.titleId,i=N(e,["title","titleId"]);return a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300.095 300.095",ref:t,"aria-labelledby":n},i),r?a.createElement("title",{id:n},r):null,P,H)}var A=a.forwardRef(S);r.p;function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},R.apply(this,arguments)}function z(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var D=a.createElement("path",{d:"M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"}),W=a.createElement("path",{d:"M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"});function q(e,t){var r=e.title,n=e.titleId,i=z(e,["title","titleId"]);return a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.092 512.092",ref:t,"aria-labelledby":n},i),r?a.createElement("title",{id:n},r):null,D,W)}var T=a.forwardRef(q);r.p,r(34);class F extends a.PureComponent{constructor(...e){super(...e),this.onPlayClick=()=>{this.props.onPlayClick(this.props.track)},this.onPauseClick=()=>{this.props.onPauseClick(this.props.track)},this.onLinkClick=()=>{window.open(this.props.track.permalink_url)}}render(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{className:"detail__track","aria-live":"polite","aria-atomic":"false",children:[Object(j.jsx)(w,{hide:!this.props.active,src:this.props.track.artwork_url.replace("t50x50","t300x300"),alt:"album artwork from track ".concat(this.props.track.title)}),Object(j.jsxs)("div",{className:"detail__controls",children:[Object(j.jsxs)("div",{className:"detail__info",children:[Object(j.jsx)("h3",{className:"title",children:this.props.track.title}),Object(j.jsx)("p",{className:"artist",children:this.props.track.artist})]}),Object(j.jsx)(i.a,{percent:this.props.track.percentage}),Object(j.jsxs)("div",{className:"detail__timing",children:[Object(j.jsx)("time",{className:"time",children:O(this.props.track.currentTime)}),Object(j.jsx)("time",{className:"time",children:O(this.props.track.duration/1e3)})]}),Object(j.jsxs)("div",{className:"detail__buttons",children:[Object(j.jsx)(x.a,{label:"repeat song",tabEnabled:this.props.active,className:"icon-button ".concat(this.props.repeat?"icon-button--high-light":""),onClick:this.props.onRepeatClick,icon:Object(j.jsx)(A,{className:"icon icon--back",width:16})}),Object(j.jsxs)("button",{name:"previous song",tabIndex:this.props.active?"0":"-1",className:"prev-button",onClick:this.props.onPlayPrev,children:[Object(j.jsx)("div",{className:"divider"}),Object(j.jsx)(_.a,{width:16})]}),Object(j.jsx)(s.a,{name:"pause button",className:"pause",tabEnabled:this.props.active,active:this.props.track.playing&&!this.props.track.paused,onClick:this.onPauseClick,icon:Object(j.jsx)(M,{width:24})}),Object(j.jsx)(s.a,{name:"play button",className:"play",tabEnabled:this.props.active,active:!this.props.track.playing&&this.props.track.paused,onClick:this.onPlayClick,icon:Object(j.jsx)(_.a,{width:24})}),Object(j.jsxs)("button",{name:"next song button",tabIndex:this.props.active?"0":"-1",className:"next-button",onClick:this.props.onPlayNext,children:[Object(j.jsx)(_.a,{width:16}),Object(j.jsx)("div",{className:"divider"})]}),Object(j.jsx)(x.a,{label:"song link",tabEnabled:this.props.active,className:"icon-button",onClick:this.onLinkClick,icon:Object(j.jsx)(T,{className:"icon icon--back",width:16})})]})]})]})})}}t.default=F}}]);
//# sourceMappingURL=3.c6ba5d65.chunk.js.map