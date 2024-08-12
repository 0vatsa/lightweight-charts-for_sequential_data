"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60081],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>g});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(g,l(l({ref:r},s),{},{components:n})):t.createElement(g,l({ref:r},s))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92476:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=n(58168),i=(n(96540),n(15680));const a={id:"PriceScaleMode",title:"Enumeration: PriceScaleMode",sidebar_label:"PriceScaleMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/enums/PriceScaleMode",id:"version-4.2/api/enums/PriceScaleMode",title:"Enumeration: PriceScaleMode",description:"Represents the price scale mode.",source:"@site/versioned_docs/version-4.2/api/enums/PriceScaleMode.md",sourceDirName:"api/enums",slug:"/api/enums/PriceScaleMode",permalink:"/lightweight-charts/docs/api/enums/PriceScaleMode",draft:!1,editUrl:null,tags:[],version:"4.2",sidebarPosition:0,frontMatter:{id:"PriceScaleMode",title:"Enumeration: PriceScaleMode",sidebar_label:"PriceScaleMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Normal",id:"normal",level:3},{value:"Logarithmic",id:"logarithmic",level:3},{value:"Percentage",id:"percentage",level:3},{value:"IndexedTo100",id:"indexedto100",level:3}],s={toc:p},u="wrapper";function d(e){let{components:r,...n}=e;return(0,i.yg)(u,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents the price scale mode."),(0,i.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.yg)("h3",{id:"normal"},"Normal"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Normal")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"0")),(0,i.yg)("p",null,"Price scale shows prices. Price range changes linearly."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"logarithmic"},"Logarithmic"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Logarithmic")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"1")),(0,i.yg)("p",null,"Price scale shows prices. Price range changes logarithmically."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"percentage"},"Percentage"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Percentage")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"2")),(0,i.yg)("p",null,"Price scale shows percentage values according the first visible value of the price scale.\nThe first visible value is 0% in this mode."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"indexedto100"},"IndexedTo100"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"IndexedTo100")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"3")),(0,i.yg)("p",null,"The same as percentage mode, but the first value is moved to 100."))}d.isMDXComponent=!0}}]);