var _=Object.defineProperty;var m=(a,t,i)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var e=(a,t,i)=>(m(a,typeof t!="symbol"?t+"":t,i),i);import{B as x,V as f}from"./lightweight-charts.production-999d5cd8.js";import{s as b,g as R}from"./sample-data-c7d89ab8.js";import{p as v,a as P}from"./positions-0a54307c.js";const w={...x,lineWidth:2};class W{constructor(){e(this,"_data",null);e(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(l=>this._drawImpl(l,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const l=this._options,h=this._data.bars.map(s=>({x:s.x,y:i(s.originalData.value)??0})),u=Math.min(this._options.lineWidth,this._data.barSpacing),c=this._data.barSpacing,d=Math.floor(c/2),p=i(0);for(let s=this._data.visibleRange.from;s<this._data.visibleRange.to;s++){const o=h[s],n=v(o.x,t.horizontalPixelRatio,u),r=P(p??0,o.y,t.verticalPixelRatio);t.context.beginPath(),t.context.fillStyle=l.color,t.context.fillRect(n.position,r.position,n.length,r.length),t.context.arc(o.x*t.horizontalPixelRatio,o.y*t.verticalPixelRatio,d*t.horizontalPixelRatio,0,Math.PI*2),t.context.fill()}}}class y{constructor(){e(this,"_renderer");this._renderer=new W}priceValueBuilder(t){return[0,t.value]}isWhitespace(t){return t.value===void 0}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return w}}const B=window.chart=f("chart",{autoSize:!0}),z=new y,L=B.addCustomSeries(z,{lineWidth:2}),V=b(R(100),10);L.setData(V);
