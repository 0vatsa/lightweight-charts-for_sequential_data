"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2754],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>m});var a=n(96540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,l=function(e,r){if(null==e)return{};var n,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},g=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,l=e.mdxType,t=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(n),d=l,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||t;return n?a.createElement(m,i(i({ref:r},g),{},{components:n})):a.createElement(m,i({ref:r},g))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var t=n.length,i=new Array(t);i[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<t;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66852:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>s});var a=n(58168),l=(n(96540),n(15680));const t={id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/AreaStyleOptions",id:"version-4.2/api/interfaces/AreaStyleOptions",title:"Interface: AreaStyleOptions",description:"Represents style options for an area series.",source:"@site/versioned_docs/version-4.2/api/interfaces/AreaStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/AreaStyleOptions",permalink:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions",draft:!1,editUrl:null,tags:[],version:"4.2",sidebarPosition:0,frontMatter:{id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"topColor",id:"topcolor",level:3},{value:"bottomColor",id:"bottomcolor",level:3},{value:"invertFilledArea",id:"invertfilledarea",level:3},{value:"lineColor",id:"linecolor",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineType",id:"linetype",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"pointMarkersVisible",id:"pointmarkersvisible",level:3},{value:"pointMarkersRadius",id:"pointmarkersradius",level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",level:3},{value:"crosshairMarkerBorderWidth",id:"crosshairmarkerborderwidth",level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",level:3}],g={toc:s},y="wrapper";function u(e){let{components:r,...n}=e;return(0,l.yg)(y,(0,a.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Represents style options for an area series."),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("h3",{id:"topcolor"},"topColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"topColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Color of the top part of the area."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"'rgba( 46, 220, 135, 0.4)'")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"bottomcolor"},"bottomColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"bottomColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Color of the bottom part of the area."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"'rgba( 40, 221, 100, 0)'")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"invertfilledarea"},"invertFilledArea"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"invertFilledArea"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Invert the filled area. Fills the area above the line if set to true."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"linecolor"},"lineColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lineColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Line color."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"'#33D778'")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"linestyle"},"lineStyle"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lineStyle"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,l.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.yg)("p",null,"Line style."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"Solid")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"linewidth"},"lineWidth"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lineWidth"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,l.yg)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.yg)("p",null,"Line width in pixels."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"3")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"linetype"},"lineType"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lineType"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineType"},(0,l.yg)("inlineCode",{parentName:"a"},"LineType"))),(0,l.yg)("p",null,"Line type."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineType#simple"},"Simple")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"linevisible"},"lineVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lineVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Show series line."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pointmarkersvisible"},"pointMarkersVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"pointMarkersVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Show circle markers on each point."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"false")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"pointmarkersradius"},"pointMarkersRadius"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"pointMarkersRadius"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"number")),(0,l.yg)("p",null,"Circle markers radius in pixels."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"undefined")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")),(0,l.yg)("p",null,"Show the crosshair marker."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"number")),(0,l.yg)("p",null,"Crosshair marker radius in pixels."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"4")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"Crosshair marker border color. An empty string falls back to the color of the series under the crosshair."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"''")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string")),(0,l.yg)("p",null,"The crosshair marker background color. An empty string falls back to the color of the series under the crosshair."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"''")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"crosshairmarkerborderwidth"},"crosshairMarkerBorderWidth"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"crosshairMarkerBorderWidth"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"number")),(0,l.yg)("p",null,"Crosshair marker border width in pixels."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"2")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode"},(0,l.yg)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,l.yg)("p",null,"Last price animation mode."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode#disabled"},"Disabled")))}u.isMDXComponent=!0}}]);