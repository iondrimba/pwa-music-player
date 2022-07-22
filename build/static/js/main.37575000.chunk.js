(this["webpackJsonppwa-playlist"]=this["webpackJsonppwa-playlist"]||[]).push([[0],[,,,,,function(t,e,a){"use strict";var n=a(0),r=(a(21),a(1));class i extends n.Component{shouldComponentUpdate(t){return t.tabEnabled!==this.props.tabEnabled||t.className!==this.props.className}render(){return Object(r.jsx)("button",{type:"button",tabIndex:this.props.tabEnabled?"0":"-1",name:this.props.label,"aria-label":this.props.label,className:"icon-button ".concat(this.props.className),onClick:this.props.onClick,children:this.props.icon})}}e.a=i},function(t,e,a){"use strict";function n(t){return new Promise((e=>setTimeout(e,t)))}a.d(e,"a",(function(){return n}))},,function(t,e,a){"use strict";var n=a(0),r=(a(18),a(1));class i extends n.Component{shouldComponentUpdate(t){return t.active!==this.props.active||t.tabEnabled!==this.props.tabEnabled}render(){return Object(r.jsx)("button",{type:"button",tabIndex:this.props.tabEnabled?"0":"-1","aria-label":this.props.name,className:"".concat(this.props.className||""," media-button ").concat(this.props.active?"media-button--active":""),onClick:this.props.onClick,children:this.props.icon})}}e.a=i},function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(0);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createElement("path",{d:"M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z"});function c(t,e){var a=t.title,c=t.titleId,o=i(t,["title","titleId"]);return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 124 124",ref:e,"aria-labelledby":c},o),a?n.createElement("title",{id:c},a):null,s)}var o=n.forwardRef(c);a.p},function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));const n=[{label:"Design inspired by",link:"https://dribbble.com/shots/3000629-Music-Player-Sketch-Freebie",author:"Armas Nurbahari"},{label:"Songs API by",link:"https://developers.soundcloud.com/docs/api",author:"Soundcloud"},{label:"Pause icon by",link:"https://www.flaticon.com/authors/smashicons",author:"Smashicons"},{label:"Left arrow icon by",link:"https://www.flaticon.com/authors/lucy-g",author:"Lucy G"},{label:"Play arrow icon by",link:"https://www.freepik.com/",author:"Freepik"},{label:"Help icon by",link:"https://www.flaticon.com/authors/anton-saputro",author:"Anton Saputro"},{label:"Close icon by",link:"https://www.flaticon.com/authors/chanut",author:"Chanut"},{label:"Repeat icon by",link:"https://www.flaticon.com/free-icon/repeat-arrows_16720#term=repeat&page=1&position=81",author:"Freepik"},{label:"Link icon by",link:"https://www.flaticon.com/free-icon/link_455691#term=link&page=1&position=17",author:"Creaticca Creative Agency"},{label:"Headphones icon by",link:"https://www.flaticon.com/free-icon/headphones_1288446",author:"Surang"}],r={tracks:[...[...new Array(10)].map(((t,e)=>({id:e,title:"loading...",artist:"loading..."})))],previousView:"/",currentView:"",repeat:!1,changingTrack:!1,track:{currentTime:0,percentage:0,paused:!0,played:!1,playing:!1,artwork_url:""}}},,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),c=a(2),o=a(3),l=a.n(o),u=a(4),h=a(12),p=a(8);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createElement("path",{d:"M107.582 336.852l-27.578-13.786v-27.054c0-4.426-3.582-8-8-8h-8v-56c0-42.305 13.953-82.074 40.351-114.992l-12.484-10.016C63.59 142.289 48.004 186.69 48.004 232.012v56h-16v-56c0-54.504 20.36-106.563 57.336-146.57L77.59 74.585c-39.711 42.969-61.586 98.879-61.586 157.426v57.468c-9.285 3.313-16 12.114-16 22.532v160c0 13.23 10.77 24 24 24h48c4.418 0 8-3.578 8-8v-27.059l27.578-13.789a7.993 7.993 0 0 0 4.422-7.152v-96c0-3.035-1.711-5.801-4.422-7.16zm-91.578 18.472l1.379 1.375c9.43 9.438 14.62 21.977 14.62 35.313 0 13.336-5.19 25.87-14.62 35.312l-1.38 1.375zm48 124.688h-40c-4.406 0-8-3.586-8-8v-20.688l12.687-12.691c12.457-12.453 19.313-29.016 19.313-46.621 0-17.61-6.856-34.168-19.313-46.625l-12.687-12.688v-20.687c0-4.418 3.594-8 8-8h40zm32-44.946l-16 8V340.953l16 8zm0 0M480.004 289.48v-57.468c0-47.633-14.328-93.403-41.43-132.352l-13.137 9.14c25.231 36.259 38.567 78.868 38.567 123.212v56h-16v-56c0-31.856-7.672-63.555-22.2-91.672l-14.214 7.344c13.55 26.222 20.414 54.59 20.414 84.328v56h-8c-4.414 0-8 3.574-8 8v27.054L388.43 336.86a7.988 7.988 0 0 0-4.426 7.153v96a8.017 8.017 0 0 0 4.426 7.16l27.574 13.781v27.059a8 8 0 0 0 8 8h48c13.234 0 24-10.77 24-24v-160c0-10.418-6.711-19.219-16-22.532zm-80 145.586v-86.113l16-8v102.113zm72 44.946h-40v-176h40c4.41 0 8 3.582 8 8v20.687l-12.688 12.688c-12.457 12.457-19.312 29.015-19.312 46.625 0 17.605 6.855 34.168 19.312 46.62l12.688 12.692v20.688c0 4.414-3.59 8-8 8zm8-124.688V428.7l-1.375-1.375c-9.434-9.441-14.625-21.976-14.625-35.312 0-13.336 5.191-25.875 14.625-35.313zm0 0M248.004 16.012c44.434 0 87.113 13.383 123.426 38.71l9.16-13.128C341.574 14.394 295.727.012 248.004.012c-22.55 0-44.848 3.23-66.277 9.597l4.558 15.336c19.945-5.925 40.711-8.933 61.719-8.933zm0 0"}),v=n.createElement("path",{d:"M198.012 38.305l3.984 15.504c14.953-3.848 30.434-5.797 46.008-5.797 42.305 0 82.066 13.949 115 40.351l10.008-12.488c-35.285-28.29-79.68-43.863-125.008-43.863-16.918 0-33.742 2.117-49.992 6.293zm0 0M328.004 160.012h-160c-13.23 0-24 10.765-24 24v288c0 13.23 10.77 24 24 24h160c13.234 0 24-10.77 24-24v-288c0-13.235-10.766-24-24-24zm8 312c0 4.414-3.59 8-8 8h-160c-4.406 0-8-3.586-8-8v-288c0-4.418 3.594-8 8-8h160c4.41 0 8 3.582 8 8zm0 0"}),f=n.createElement("path",{d:"M312.004 192.012h-128c-4.414 0-8 3.574-8 8v224a8 8 0 0 0 8 8h128c4.418 0 8-3.578 8-8v-224c0-4.426-3.582-8-8-8zm-8 224h-112v-208h112zm0 0M232.004 448.012h32v16h-32zm0 0"}),y=n.createElement("path",{d:"M228.941 351.402a8.001 8.001 0 0 0 8.719-1.734l32-32a7.99 7.99 0 0 0 0-11.313l-32-32c-2.297-2.289-5.726-2.992-8.719-1.738a8.009 8.009 0 0 0-4.937 7.395v64c0 3.23 1.953 6.16 4.937 7.39zm11.063-52.078l12.687 12.688-12.687 12.687zm0 0M408.004 120.012V59.324l18.344 18.344 11.312-11.313-32-32a7.988 7.988 0 0 0-8.719-1.738 8.009 8.009 0 0 0-4.937 7.395V97.48c-2.512-.894-5.184-1.468-8-1.468-13.23 0-24 10.765-24 24 0 13.23 10.77 24 24 24 13.234 0 24-10.77 24-24zm-32 0c0-4.418 3.594-8 8-8 4.41 0 8 3.582 8 8 0 4.414-3.59 8-8 8-4.406 0-8-3.586-8-8zm0 0M152.004 88.012V27.324l18.344 18.344 11.312-11.313-32-32C147.363.06 143.934-.637 140.941.617a8.009 8.009 0 0 0-4.937 7.395V65.48c-2.512-.894-5.184-1.468-8-1.468-13.23 0-24 10.765-24 24 0 13.23 10.77 24 24 24 13.234 0 24-10.77 24-24zm-24 8c-4.406 0-8-3.586-8-8 0-4.418 3.594-8 8-8 4.41 0 8 3.582 8 8 0 4.414-3.59 8-8 8zm0 0"});function w(t,e){var a=t.title,r=t.titleId,i=b(t,["title","titleId"]);return n.createElement("svg",d({viewBox:"0 0 496 496.01",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,m,v,f,y)}var j=n.forwardRef(w),k=(a.p,a(9));function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var x=n.createElement("path",{d:"M443.5 273.1c0 25.1-20.4 45.5-45.5 45.5H271.5V162.3c4.8-1.8 9.9-3.1 15.1-3.9 4.1-0.6 8.3-1 12.5-1 42.3 0 77 32.7 80.3 74.1 5.7-2.5 11.9-4 18.6-4C423.1 227.6 443.5 248 443.5 273.1zM224.2 193.2v125.4h15.1v-134.5c-3.4 3.7-6.4 7.8-9 12.1C228.4 195 226.3 194.1 224.2 193.2zM247.6 318.6h15.1v-152.4c-5.4 2.7-10.5 6.1-15.1 9.9V318.6zM151.8 208.9v109.7h15.1V196.9C161.3 200.2 156.2 204.2 151.8 208.9zM106.5 231.6v86.5c1.9 0.2 3.7 0.4 5.7 0.4h7.9v-86.6c-2.6-0.5-5.2-0.7-7.9-0.7C110.3 231.3 108.4 231.4 106.5 231.6zM86.5 310.2c3.4 2.5 7.2 4.5 11.3 5.9v-82.4c-4.1 1.4-7.9 3.4-11.3 5.9V310.2zM128.4 234.4v84.2h15.1v-98.7c-3.4 5.6-6 11.8-7.5 18.4C133.6 236.8 131.1 235.5 128.4 234.4zM175.9 318.6h15.1V188.8c-5.3 0.7-10.3 2-15.1 3.8V318.6zM200.1 318.6h15.1v-128.3c-4.8-1.2-9.9-1.9-15.1-1.9V318.6L200.1 318.6zM79.1 303.4v-56.9c-6.6 7.6-10.6 17.6-10.6 28.5C68.5 285.8 72.5 295.7 79.1 303.4z"});function C(t,e){var a=t.title,r=t.titleId,i=g(t,["title","titleId"]);return n.createElement("svg",O({viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,x)}var S=n.forwardRef(C);a.p;function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function E(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var N=n.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"});function z(t,e){var a=t.title,r=t.titleId,i=E(t,["title","titleId"]);return n.createElement("svg",P({width:32,viewBox:"0 0 16 16",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,N)}var A=n.forwardRef(z),_=(a.p,a(20),a(1));class M extends n.Component{componentDidMount(){requestAnimationFrame((()=>{[...document.querySelector(".home").querySelectorAll(".hidden")].map((t=>t.classList.add("active")))}))}shouldComponentUpdate(t){return t.active!==this.props.active}render(){return Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("h1",{className:"title hidden",children:"React Music Player"}),Object(_.jsx)("p",{className:"subtitle hidden",children:"made with SoundCloud API"}),Object(_.jsx)(j,{className:"icon hidden",width:"100",fill:"#ccc"}),Object(_.jsx)(p.a,{className:"hidden",tabEnabled:this.props.active,name:"button show playlist",active:!0,onClick:this.props.onStartClick,icon:Object(_.jsx)(k.a,{width:24})}),Object(_.jsxs)("footer",{className:"footer",children:[Object(_.jsxs)("a",{href:"https://github.com/iondrimba/pwa-music-player","aria-label":"Github repository",tabIndex:this.props.active?"0":"-1",target:"_blank",rel:"noopener noreferrer",className:"github project",children:[" ",Object(_.jsx)(A,{fill:"#b9b9b9"})]}),Object(_.jsxs)("a",{href:"https://developers.soundcloud.com/docs/api",tabIndex:this.props.active?"0":"-1",target:"_blank",rel:"noopener noreferrer",className:"soundcloud",children:["powered by ",Object(_.jsx)(S,{"aria-label":"Soundcloud",fill:"#b9b9b9",width:64})]})]})]})}}var T=M;var V=(t,e)=>t/e*100;function I(){return(I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function L(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var R=n.createElement("path",{d:"M231.2 336.033c-9.35 0-17 7.65-17 17v11.333c0 9.35 7.65 17 17 17s17-7.65 17-17v-11.333c0-9.35-7.65-17-17-17z"}),B=n.createElement("path",{d:"M163.2 194.367c.283 0 .283 0 0 0 9.35 0 17-7.083 17-16.433 0 0 .283-13.6 7.083-26.917 8.5-17 23.517-25.5 45.617-25.5 20.683 0 35.983 5.667 44.483 16.717 7.083 9.067 9.067 21.533 5.667 35.133-4.25 16.717-18.7 31.167-32.583 45.333-17 17.567-34.85 35.417-34.85 59.5 0 9.35 7.65 17 17 17s17-7.65 17-17c0-10.2 12.183-22.667 25.217-35.7 16.15-16.433 34.567-35.133 41.083-60.633 6.233-23.517 1.983-47.033-11.617-64.317-10.483-13.6-31.45-30.033-71.117-30.033-44.483 0-65.733 23.8-75.933 44.2-10.2 20.4-10.767 39.95-10.767 42.217 0 9.066 7.367 16.433 16.717 16.433z"});function H(t,e){var a=t.title,r=t.titleId,i=L(t,["title","titleId"]);return n.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 473.733 473.733",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,R,B)}var U=n.forwardRef(H);a.p;function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function F(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var W=n.createElement("path",{d:"M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z"});function D(t,e){var a=t.title,r=t.titleId,i=F(t,["title","titleId"]);return n.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 129 129",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,W)}var G=n.forwardRef(D);a.p;function J(){return(J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function Q(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var $=n.createElement("path",{d:"M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"});function K(t,e){var a=t.title,r=t.titleId,i=Q(t,["title","titleId"]);return n.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.971 47.971",ref:e,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,$)}var X=n.forwardRef(K);a.p;const Y=(t,e)=>{t.classList.add(e)};var Z=a(6),tt=a(5);a(22);class et extends n.PureComponent{constructor(){super(),this.title=r.a.createRef(),this.menu=r.a.createRef()}_activeHiddenElements(){[...this.menu.current.querySelectorAll(".hidden")].map((t=>Y(t,"active")))}_animateTitle(){var t,e,a=this;t=this.title.current,e="active",t.classList.remove(e),requestAnimationFrame(Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)(100);case 2:Y(a.title.current,"active");case 3:case"end":return t.stop()}}),t)}))))}componentDidMount(){var t=this;requestAnimationFrame(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)(1200);case 2:t._activeHiddenElements();case 3:case"end":return e.stop()}}),e)}))))}componentDidUpdate(t){t.activeView!==this.props.activeView&&this._animateTitle()}render(){return Object(_.jsxs)("nav",{ref:this.menu,className:"menu menu--".concat(this.props.activeView),children:[Object(_.jsx)(tt.a,{label:"navigate back",tabEnabled:!0,className:"hidden icon-button icon-button--back",onClick:this.props.onBackClick,icon:Object(_.jsx)(G,{className:"icon icon--back",width:16})}),Object(_.jsx)("h1",{ref:this.title,className:"hidden menu__title",children:"list"===this.props.activeView?"Queue":"Now playing"}),Object(_.jsx)(tt.a,{label:"about the app",tabEnabled:!0,className:"hidden icon-button icon-button--help",onClick:this.props.onAboutClick,icon:Object(_.jsx)(U,{className:"icon icon--help",width:27})}),Object(_.jsx)(tt.a,{label:"close about",tabEnabled:!0,className:"icon-button icon-button--close",onClick:this.props.onCloseClick,icon:Object(_.jsx)(X,{className:"icon icon--close",width:12})})]})}}var at=et;a(23);class nt extends n.PureComponent{render(){return Object(_.jsx)("section",{"aria-hidden":!this.props.active,className:"".concat(this.props.className," page ").concat(this.props.active?"active":"unactive"),children:r.a.cloneElement(this.props.children,{active:this.props.active})})}}var rt=nt;a(24);class it extends n.PureComponent{constructor(){super(),this.loader=r.a.createRef()}_addActiveClass(){this.loader.current.classList.add("animate")}componentDidMount(){const t=setTimeout(this._addActiveClass,100);clearTimeout(t)}render(){return Object(_.jsx)("div",{ref:this.loader,className:"loader","aria-label":"loading.."})}}var st=it;class ct{constructor(t,e){this.element=t,this.context=e,this.repeatPlayback=!1,this._ended=this._ended.bind(this),this.stopHandler=()=>{}}_createAnalyser(){this.analyser=this.context.createAnalyser()}_createMediaElementSource(){this.source=this.context.createMediaElementSource(this.element),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}_ended(){this.repeatPlayback?this.play():this.stopHandler()}_canplay(){this.canplayCallback()}canplay(t){this.canplayCallback=t}setup(){this._createAnalyser(),this._createMediaElementSource(),this.element.addEventListener("canplay",this._canplay.bind(this)),this.element.addEventListener("ended",this._ended)}setTimerHandler(t){this.element.addEventListener("timeupdate",t)}setStopHandler(t){this.stopHandler=t}setVolume(t){this.element.volume=t}setAudioSource(t){this.element.src=t}resume(){this.context.resume()}play(){this.element.play()}pause(){this.element.pause()}repeat(t){this.repeatPlayback=t}}var ot=a(10);a(25);const lt=Object(n.lazy)((()=>a.e(4).then(a.bind(null,37)))),ut=Object(n.lazy)((()=>a.e(5).then(a.bind(null,35)))),ht=Object(n.lazy)((()=>a.e(3).then(a.bind(null,36))));class pt extends n.PureComponent{constructor(t){var e;super(t),e=this,this.onStartClick=()=>{this.changeView("list")},this.fetchPlayList=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.playlistUrl);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.updateSate(n);case 7:case"end":return t.stop()}}),t)}))),this.selectTrack=t=>this.state.tracks.filter((e=>Number(t)===e.id))[0],this.timeupdate=t=>{this.setState({track:Object(c.a)(Object(c.a)({},this.state.track),{},{currentTime:t.target.currentTime,percentage:V(t.target.currentTime,t.target.duration)/100})})},this.onListClick=t=>{t!==this.state.track.id&&this.audio.setAudioSource("");const e=Object(c.a)(Object(c.a)({},this.selectTrack(t)),{},{currentTime:0,percentage:0,playing:this.state.track.id===t&&this.state.track.playing,played:this.state.track.id===t&&this.state.track.played,paused:this.state.track.id!==t||this.state.track.paused});this.setState((()=>({track:e}))),this.changeView("detail"),this.onPlayClick(e)},this.onPlayClick=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.played){t.next=8;break}return t.next=3,fetch(a.stream_url);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.audio.setAudioSource(r.http_mp3_128_url);case 8:e.setState((()=>({track:Object(c.a)(Object(c.a)({},a),{},{paused:!1,playing:!0,played:!0})}))),e.audio.resume(),e.audio.play();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.onPauseClick=t=>{this.audio.pause(),this.setState((()=>({track:Object(c.a)(Object(c.a)({},t),{},{paused:!0,playing:!1})})))},this.onBackClick=()=>{this.history.go(-1),this.setState((()=>({currentView:this.history.location.state.view||"/"})))},this.onAboutClick=()=>{this.changeView("about")},this.onPlayNext=()=>{this.changeTrack(this.getNextTrack())},this.onPlayPrev=()=>{this.changeTrack(this.getPreviousTrack())},this.onRepeatClick=()=>{const t=!this.state.repeat;this.setState((()=>({repeat:t}))),this.audio.repeat(t)},this.playlistUrl="https://soundcloud-api.vercel.app/api",this.state=Object(c.a)({},ot.b),this.history=Object(h.a)()}componentDidMount(){this.history.listen((t=>{this.setState((()=>({currentView:t.location.state.view||"/"}))),"list"!==t.location.state.view||this.state.tracks[0].id||this.fetchPlayList()})),this.setupAudio(),this.history.push("/",{view:"home"})}updateSate(t){const e={tracks:[...t.map(((t,e)=>Object.assign({},Object(c.a)(Object(c.a)({},this.state.track),{},{id:t.id,stream_url:"".concat(this.playlistUrl,"/stream/").concat(t.id),uri:t.uri,duration:t.duration,favoritings_count:t.favoritings_count,artist:t.user.username,artwork_url:t.artwork_url?t.artwork_url.replace("large","t50x50"):"",title:t.title.toLowerCase(),permalink_url:t.permalink_url,index:e}))))],playlistLoaded:!0};this.setState((()=>e))}changeView(t){this.history.push("/".concat(t),{view:t})}setTrack(t){this.setState((()=>({track:t,currentTime:0,paused:!0,played:!1,playing:!1,changingTrack:!0})))}canChangeTrack(){return!1===this.state.changingTrack}getNextTrack(){const t=this.state.tracks[this.state.track.index+1];return t?Object(c.a)({},t):null}getPreviousTrack(){const t=this.state.tracks[this.state.track.index-1];return t?Object(c.a)({},t):null}changeTrack(t){this.audio.setAudioSource(""),this.canChangeTrack()&&t&&(this.setTrack(t),this.onPlayClick(t))}setupAudio(){this.timeupdate=this.timeupdate.bind(this),this.audioStop=this.audioStop.bind(this),this.audio=new ct(document.querySelector("#audio"),this.props.audioContext),this.audio.setup(),this.audio.setTimerHandler(this.timeupdate),this.audio.setStopHandler(this.audioStop),this.audio.canplay((()=>{this.setState((()=>({changingTrack:!1})))}))}audioStop(){this.setState({track:Object(c.a)(Object(c.a)({},this.state.track),{},{currentTime:0,percentage:0,playing:!1,played:!1,paused:!0})})}render(){return Object(_.jsxs)("main",{className:"app",children:[Object(_.jsx)("audio",{id:"audio",crossOrigin:"anonymous"}),Object(_.jsxs)("div",{className:"shell",children:[Object(_.jsx)(at,{history:this.history,activeView:this.state.currentView,onBackClick:this.onBackClick,onAboutClick:this.onAboutClick,onCloseClick:this.onBackClick}),Object(_.jsxs)("div",{className:"page-wrapper",children:[Object(_.jsx)(rt,{className:"home",active:"home"===this.state.currentView,children:Object(_.jsx)(T,{onStartClick:this.onStartClick})}),Object(_.jsxs)(n.Suspense,{fallback:Object(_.jsx)(st,{}),children:[Object(_.jsx)(rt,{className:"list",active:"list"===this.state.currentView,children:Object(_.jsx)(lt,{track:this.state.track,tracks:this.state.tracks,onClick:this.onListClick})}),Object(_.jsx)(rt,{className:"detail",active:"detail"===this.state.currentView,children:Object(_.jsx)(ht,{track:this.state.track,repeat:this.state.repeat,onRepeatClick:this.onRepeatClick,onPlayClick:this.onPlayClick,onPlayNext:this.onPlayNext,onPlayPrev:this.onPlayPrev,onPauseClick:this.onPauseClick})}),Object(_.jsx)(rt,{className:"about",active:"about"===this.state.currentView,children:Object(_.jsx)(ut,{})})]})]})]})]})}}var dt=pt;const bt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(t,e){navigator.serviceWorker.register(t).then((t=>{t.onupdatefound=()=>{const a=t.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((t=>{console.error("Error during service worker registration:",t)}))}window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext&&(window.audioContext=new window.AudioContext),s.a.render(Object(_.jsx)(dt,{audioContext:window.audioContext}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const e="".concat("","/service-worker.js");bt?(!function(t,e){fetch(t).then((a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((t=>{t.unregister().then((()=>{window.location.reload()}))})):mt(t,e)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):mt(e,t)}))}}()}],[[26,1,2]]]);
//# sourceMappingURL=main.37575000.chunk.js.map