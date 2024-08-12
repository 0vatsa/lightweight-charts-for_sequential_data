"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3711],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),g=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=g(t),m=a,c=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return t?r.createElement(c,i(i({ref:n},y),{},{components:t})):r.createElement(c,i({ref:n},y))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=t(58168),a=(t(96540),t(15680));const l={id:"WatermarkOptions",title:"Interface: WatermarkOptions",sidebar_label:"WatermarkOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/WatermarkOptions",id:"version-4.2/api/interfaces/WatermarkOptions",title:"Interface: WatermarkOptions",description:"Watermark options.",source:"@site/versioned_docs/version-4.2/api/interfaces/WatermarkOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/WatermarkOptions",permalink:"/lightweight-charts/docs/api/interfaces/WatermarkOptions",draft:!1,editUrl:null,tags:[],version:"4.2",sidebarPosition:0,frontMatter:{id:"WatermarkOptions",title:"Interface: WatermarkOptions",sidebar_label:"WatermarkOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},g=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"visible",id:"visible",level:3},{value:"text",id:"text",level:3},{value:"fontSize",id:"fontsize",level:3},{value:"fontFamily",id:"fontfamily",level:3},{value:"fontStyle",id:"fontstyle",level:3},{value:"horzAlign",id:"horzalign",level:3},{value:"vertAlign",id:"vertalign",level:3}],y={toc:g},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Watermark options."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"color"},"color"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"color"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Watermark color."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"'rgba(0, 0, 0, 0)'")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"visible"},"visible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"visible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Display the watermark."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"text"},"text"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"text"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Text of the watermark. Word wrapping is not supported."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"''")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"fontsize"},"fontSize"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"fontSize"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Font size in pixels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"48")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"fontfamily"},"fontFamily"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"fontFamily"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Font family."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"fontstyle"},"fontStyle"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"fontStyle"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Font style."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"''")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"horzalign"},"horzAlign"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"horzAlign"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#horzalign"},(0,a.yg)("inlineCode",{parentName:"a"},"HorzAlign"))),(0,a.yg)("p",null,"Horizontal alignment inside the chart area."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"'center'")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"vertalign"},"vertAlign"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"vertAlign"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#vertalign"},(0,a.yg)("inlineCode",{parentName:"a"},"VertAlign"))),(0,a.yg)("p",null,"Vertical alignment inside the chart area."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"'center'")))}u.isMDXComponent=!0}}]);