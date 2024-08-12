"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72837],{15680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),g=p(t),h=n,d=g["".concat(s,".").concat(h)]||g[h]||c[h]||i;return t?a.createElement(d,o(o({ref:r},f),{},{components:t})):a.createElement(d,o({ref:r},f))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98161:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const i={id:"BarsInfo",title:"Interface: BarsInfo",sidebar_label:"BarsInfo",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/BarsInfo",id:"version-3.8/api/interfaces/BarsInfo",title:"Interface: BarsInfo",description:"Represents a range of bars and the number of bars outside the range.",source:"@site/versioned_docs/version-3.8/api/interfaces/BarsInfo.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarsInfo",permalink:"/lightweight-charts/docs/3.8/api/interfaces/BarsInfo",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"BarsInfo",title:"Interface: BarsInfo",sidebar_label:"BarsInfo",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"barsBefore",id:"barsbefore",level:3},{value:"barsAfter",id:"barsafter",level:3},{value:"from",id:"from",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"to",id:"to",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],f={toc:p},g="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(g,(0,a.A)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Represents a range of bars and the number of bars outside the range."),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"Partial"),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/Range"},(0,n.yg)("inlineCode",{parentName:"a"},"Range")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time")),">",">"),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"BarsInfo"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"barsbefore"},"barsBefore"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"barsBefore"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The number of bars before the start of the range.\nPositive value means that there are some bars before (out of logical range from the left) the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/Range#from"},"from")," logical index in the series.\nNegative value means that the first series' bar is inside the passed logical range, and between the first series' bar and the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/Range#from"},"from")," logical index are some bars."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"barsafter"},"barsAfter"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"barsAfter"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The number of bars after the end of the range.\nPositive value in the ",(0,n.yg)("inlineCode",{parentName:"p"},"barsAfter")," field means that there are some bars after (out of logical range from the right) the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/Range#to"},"to")," logical index in the series.\nNegative value means that the last series' bar is inside the passed logical range, and between the last series' bar and the ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/Range#to"},"to")," logical index are some bars."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"from"},"from"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"from"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time"))),(0,n.yg)("p",null,"The from value. The start of the range."),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,"Partial.from"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"to"},"to"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"to"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time"))),(0,n.yg)("p",null,"The to value. The end of the range."),(0,n.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.yg)("p",null,"Partial.to"))}c.isMDXComponent=!0}}]);