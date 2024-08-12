var p=Object.defineProperty;var m=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var c=(e,t,i)=>(m(e,typeof t!="symbol"?t+"":t,i),i);import{B as _}from"./lightweight-charts.production-999d5cd8.js";import{f as x}from"./full-width-c985ee69.js";import{a as B}from"./positions-0a54307c.js";const b={..._,lastValueVisible:!1,priceLineVisible:!1,cellShader:e=>{const t=Math.min(Math.max(0,e),100);return`rgba(0, ${100+t*1.55}, ${0+t}, ${.2+t*.8})`},cellBorderWidth:1,cellBorderColor:"transparent"};class g{constructor(){c(this,"_data",null);c(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(l=>this._drawImpl(l,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const l=this._options,u=this._data.bars.map(o=>({x:o.x,cells:o.originalData.cells.map(r=>({amount:r.amount,low:i(r.low),high:i(r.high)}))})),a=this._data.barSpacing>l.cellBorderWidth*3;for(let o=this._data.visibleRange.from;o<this._data.visibleRange.to;o++){const r=u[o],n=x(r.x,this._data.barSpacing/2,t.horizontalPixelRatio),s=a?l.cellBorderWidth*t.horizontalPixelRatio:0,h=a?l.cellBorderWidth*t.verticalPixelRatio:0;for(const f of r.cells){const d=B(f.low,f.high,t.verticalPixelRatio);t.context.fillStyle=l.cellShader(f.amount),t.context.fillRect(n.position+s,d.position+h,n.length-s*2,d.length-1-h*2),a&&l.cellBorderWidth&&l.cellBorderColor!=="transparent"&&(t.context.beginPath(),t.context.rect(n.position+s/2,d.position+h/2,n.length-s,d.length-1-h),t.context.strokeStyle=l.cellBorderColor,t.context.lineWidth=s,t.context.stroke())}}}}class P{constructor(){c(this,"_renderer");this._renderer=new g}priceValueBuilder(t){if(t.cells.length<1)return[NaN];let i=1/0,l=-1/0;t.cells.forEach(a=>{a.low<i&&(i=a.low),a.high>l&&(l=a.high)});const u=i+(l-i)/2;return[i,l,u]}isWhitespace(t){return t.cells===void 0||t.cells.length<1}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return b}}export{P as H};
