var w=Object.defineProperty;var x=(a,t,e)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(x(a,typeof t!="symbol"?t+"":t,e),e);import{V as g}from"./lightweight-charts.production-999d5cd8.js";import{g as m}from"./sample-data-c7d89ab8.js";class A{constructor(t){i(this,"_data");this._data=t}draw(t){t.useMediaCoordinateSpace(e=>{const s=e.context;s.font=this._data.font;const n=s.measureText(this._data.text).width,h=20;let r=h;const o=e.mediaSize.width,c=e.mediaSize.height;switch(this._data.horzAlign){case"right":{r=o-h-n;break}case"middle":{r=o/2-n/2;break}}const l=10,p=this._data.lineHeight;let d=l+p;switch(this._data.vertAlign){case"middle":{d=c/2+p/2;break}case"bottom":{d=c-l;break}}s.fillStyle=this._data.color,s.fillText(this._data.text,r,d)})}}class f{constructor(t){i(this,"_source");this._source=t}update(){}renderer(){return new A(this._source._data)}}class T{constructor(t){i(this,"_paneViews");i(this,"_data");i(this,"requestUpdate");this._data=t,this._paneViews=[new f(this)]}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}attached({requestUpdate:t}){this.requestUpdate=t}detached(){this.requestUpdate=void 0}applyOptions(t){this._data={...this._data,...t},this.requestUpdate&&this.requestUpdate()}}const V=window.chart=g("chart",{autoSize:!0}),u=V.addLineSeries();u.setData(m());const _=new T({vertAlign:"middle",horzAlign:"middle",text:"Anchored Text",lineHeight:54,font:"italic bold 54px Arial",color:"red"});u.attachPrimitive(_);setTimeout(()=>{_.applyOptions({text:"New Text"})},2e3);
