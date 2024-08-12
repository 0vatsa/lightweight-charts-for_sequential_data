"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73492],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/HandleScaleOptions",id:"api/interfaces/HandleScaleOptions",title:"Interface: HandleScaleOptions",description:"Represents options for how the chart is scaled by the mouse and touch gestures.",source:"@site/docs/api/interfaces/HandleScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HandleScaleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/HandleScaleOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Properties",id:"properties",level:2},{value:"mouseWheel",id:"mousewheel",level:3},{value:"pinch",id:"pinch",level:3},{value:"axisPressedMouseMove",id:"axispressedmousemove",level:3},{value:"axisDoubleClickReset",id:"axisdoubleclickreset",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Represents options for how the chart is scaled by the mouse and touch gestures."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"mousewheel"},"mouseWheel"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"mouseWheel"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Enable scaling with the mouse wheel."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"pinch"},"pinch"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"pinch"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Enable scaling with pinch/zoom gestures."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"axispressedmousemove"},"axisPressedMouseMove"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"axisPressedMouseMove"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AxisPressedMouseMoveOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"AxisPressedMouseMoveOptions"))),(0,a.yg)("p",null,"Enable scaling the price and/or time scales by holding down the left mouse button and moving the mouse."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"axisdoubleclickreset"},"axisDoubleClickReset"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"axisDoubleClickReset"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AxisDoubleClickOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"AxisDoubleClickOptions"))),(0,a.yg)("p",null,"Enable resetting scaling by double-clicking the left mouse button."))}d.isMDXComponent=!0}}]);