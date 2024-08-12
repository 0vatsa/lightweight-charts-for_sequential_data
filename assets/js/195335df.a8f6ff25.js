"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87251],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=c(a),h=n,u=g["".concat(o,".").concat(h)]||g[h]||y[h]||i;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[g]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={id:"OhlcData",title:"Interface: OhlcData<HorzScaleItem>",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/OhlcData",id:"version-4.1/api/interfaces/OhlcData",title:"Interface: OhlcData<HorzScaleItem>",description:"Represents a bar with a Time and open, high, low, and close prices.",source:"@site/versioned_docs/version-4.1/api/interfaces/OhlcData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/OhlcData",permalink:"/lightweight-charts/docs/4.1/api/interfaces/OhlcData",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"OhlcData",title:"Interface: OhlcData<HorzScaleItem>",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"Overrides",id:"overrides",level:4},{value:"open",id:"open",level:3},{value:"high",id:"high",level:3},{value:"low",id:"low",level:3},{value:"close",id:"close",level:3},{value:"customValues",id:"customvalues",level:3},{value:"Inherited from",id:"inherited-from",level:4}],s={toc:c},g="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Represents a bar with a ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#time"},"Time")," and open, high, low, and close prices."),(0,n.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/4.1/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time")))))),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"OhlcData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem")),(0,n.yg)("p",null,"The bar time."),(0,n.yg)("h4",{id:"overrides"},"Overrides"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData"},"WhitespaceData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData#time"},"time")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"open"},"open"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"open"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The open price."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"high"},"high"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"high"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The high price."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"low"},"low"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"low"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The low price."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"close"},"close"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"close"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The close price."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"customvalues"},"customValues"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"customValues"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Record"),"<",(0,n.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"unknown"),">"),(0,n.yg)("p",null,"Additional custom values which will be ignored by the library, but\ncould be used by plugins."),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData"},"WhitespaceData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData#customvalues"},"customValues")))}y.isMDXComponent=!0}}]);