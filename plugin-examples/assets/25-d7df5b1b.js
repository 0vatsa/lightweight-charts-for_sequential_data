var D=Object.defineProperty;var B=(o,t,e)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(B(o,typeof t!="symbol"?t+"":t,e),e);import{V as k,d as I,b as E}from"./lightweight-charts.production-999d5cd8.js";import{g as W}from"./sample-data-c7d89ab8.js";import{D as b}from"./delegate-be319f8b.js";import{p as C}from"./positions-0a54307c.js";const P=21,M=21,T=17,y=4,Z=2,R=13,H=13,N=50,A=5.81,u=26,z=20,S=9,$=[new Path2D("M5.34004 1.12254C4.7902 0.438104 3.94626 0 3 0C1.34315 0 0 1.34315 0 3C0 3.94626 0.438104 4.7902 1.12254 5.34004C1.04226 5.714 1 6.10206 1 6.5C1 9.36902 3.19675 11.725 6 11.9776V10.9725C3.75002 10.7238 2 8.81628 2 6.5C2 4.01472 4.01472 2 6.5 2C8.81628 2 10.7238 3.75002 10.9725 6H11.9776C11.9574 5.77589 11.9237 5.55565 11.8775 5.34011C12.562 4.79026 13.0001 3.9463 13.0001 3C13.0001 1.34315 11.6569 0 10.0001 0C9.05382 0 8.20988 0.438111 7.66004 1.12256C7.28606 1.04227 6.89797 1 6.5 1C6.10206 1 5.714 1.04226 5.34004 1.12254ZM4.28255 1.46531C3.93534 1.17484 3.48809 1 3 1C1.89543 1 1 1.89543 1 3C1 3.48809 1.17484 3.93534 1.46531 4.28255C2.0188 3.02768 3.02768 2.0188 4.28255 1.46531ZM8.71751 1.46534C9.97237 2.01885 10.9812 3.02774 11.5347 4.28262C11.8252 3.93541 12.0001 3.48812 12.0001 3C12.0001 1.89543 11.1047 1 10.0001 1C9.51199 1 9.06472 1.17485 8.71751 1.46534Z"),new Path2D("M7 7V4H8V8H5V7H7Z"),new Path2D("M10 8V10H8V11H10V13H11V11H13V10H11V8H10Z")],X=[new Path2D("M5.11068 1.65894C3.38969 2.08227 1.98731 3.31569 1.33103 4.93171C0.938579 4.49019 0.700195 3.90868 0.700195 3.27148C0.700195 1.89077 1.81948 0.771484 3.2002 0.771484C3.9664 0.771484 4.65209 1.11617 5.11068 1.65894Z"),new Path2D("M12.5 3.37148C12.5 4.12192 12.1694 4.79514 11.6458 5.25338C11.0902 3.59304 9.76409 2.2857 8.09208 1.7559C8.55066 1.21488 9.23523 0.871484 10 0.871484C11.3807 0.871484 12.5 1.99077 12.5 3.37148Z"),new Path2D("M6.42896 11.4999C8.91424 11.4999 10.929 9.48522 10.929 6.99994C10.929 4.51466 8.91424 2.49994 6.42896 2.49994C3.94367 2.49994 1.92896 4.51466 1.92896 6.99994C1.92896 9.48522 3.94367 11.4999 6.42896 11.4999ZM6.00024 3.99994V6.99994H4.00024V7.99994H7.00024V3.99994H6.00024Z"),new Path2D("M4.08902 0.934101C4.4888 1.08621 4.83946 1.33793 5.11068 1.65894C5.06565 1.67001 5.02084 1.68164 4.97625 1.69382C4.65623 1.78123 4.34783 1.89682 4.0539 2.03776C3.16224 2.4653 2.40369 3.12609 1.8573 3.94108C1.64985 4.2505 1.47298 4.58216 1.33103 4.93171C1.05414 4.6202 0.853937 4.23899 0.760047 3.81771C0.720863 3.6419 0.700195 3.45911 0.700195 3.27148C0.700195 1.89077 1.81948 0.771484 3.2002 0.771484C3.51324 0.771484 3.81285 0.829023 4.08902 0.934101ZM12.3317 4.27515C12.4404 3.99488 12.5 3.69015 12.5 3.37148C12.5 1.99077 11.3807 0.871484 10 0.871484C9.66727 0.871484 9.34974 0.936485 9.05938 1.05448C8.68236 1.20769 8.35115 1.45027 8.09208 1.7559C8.43923 1.8659 8.77146 2.00942 9.08499 2.18265C9.96762 2.67034 10.702 3.39356 11.2032 4.26753C11.3815 4.57835 11.5303 4.90824 11.6458 5.25338C11.947 4.98973 12.1844 4.65488 12.3317 4.27515ZM9.18112 3.43939C8.42029 2.85044 7.46556 2.49994 6.42896 2.49994C3.94367 2.49994 1.92896 4.51466 1.92896 6.99994C1.92896 9.48522 3.94367 11.4999 6.42896 11.4999C8.91424 11.4999 10.929 9.48522 10.929 6.99994C10.929 5.55126 10.2444 4.26246 9.18112 3.43939ZM6.00024 3.99994H7.00024V7.99994H4.00024V6.99994H6.00024V3.99994Z")],U=10,Y=new Path2D("M9.35359 1.35359C9.11789 1.11789 8.88219 0.882187 8.64648 0.646484L5.00004 4.29293L1.35359 0.646484C1.11791 0.882212 0.882212 1.11791 0.646484 1.35359L4.29293 5.00004L0.646484 8.64648C0.882336 8.88204 1.11804 9.11774 1.35359 9.35359L5.00004 5.70714L8.64648 9.35359C8.88217 9.11788 9.11788 8.88217 9.35359 8.64649L5.70714 5.00004L9.35359 1.35359Z");class O{constructor(){n(this,"_chart");n(this,"_series");n(this,"_unSubscribers",[]);n(this,"_clicked",new b);n(this,"_mouseMoved",new b)}attached(t,e){this._chart=t,this._series=e;const i=this._chart.chartElement();this._addMouseEventListener(i,"mouseleave",this._mouseLeave),this._addMouseEventListener(i,"mousemove",this._mouseMove),this._addMouseEventListener(i,"click",this._mouseClick)}detached(){this._series=void 0,this._clicked.destroy(),this._mouseMoved.destroy(),this._unSubscribers.forEach(t=>{t()}),this._unSubscribers=[]}clicked(){return this._clicked}mouseMoved(){return this._mouseMoved}_addMouseEventListener(t,e,i){const s=i.bind(this);t.addEventListener(e,s);const r=()=>{t.removeEventListener(e,s)};this._unSubscribers.push(r)}_mouseLeave(){this._mouseMoved.fire(null)}_mouseMove(t){this._mouseMoved.fire(this._determineMousePosition(t))}_mouseClick(t){this._clicked.fire(this._determineMousePosition(t))}_determineMousePosition(t){if(!this._chart||!this._series)return null;const e=this._chart.chartElement(),i=e.getBoundingClientRect(),s=this._series.priceScale().width(),r=this._chart.timeScale().height(),a=t.clientX-i.x,h=t.clientY-i.y,l=h>e.clientHeight-r,c=e.clientWidth-s-a,d=c<0;return{x:a,y:h,xPositionRelativeToPriceScale:c,overPriceScale:d,overTimeScale:l}}}class V{constructor(){n(this,"_data",null)}update(t){this._data=t}}class j extends V{draw(t){t.useBitmapCoordinateSpace(e=>{if(!this._data)return;this._drawAlertLines(e),this._drawAlertIcons(e),this._data.alerts.some(s=>s.showHover&&s.hoverRemove)||(this._drawCrosshairLine(e),this._drawCrosshairLabelButton(e)),this._drawAlertLabel(e)})}_drawHorizontalLine(t,e){const i=t.context;try{const s=C(e.y,t.verticalPixelRatio,e.lineWidth),r=s.position+s.length/2;i.save(),i.beginPath(),i.lineWidth=e.lineWidth,i.strokeStyle=e.color;const a=4*t.horizontalPixelRatio;i.setLineDash([a,a]),i.moveTo(0,r),i.lineTo((e.width-P)*t.horizontalPixelRatio,r),i.stroke()}finally{i.restore()}}_drawAlertLines(t){var i;if(!((i=this._data)!=null&&i.alerts))return;const e=this._data.color;this._data.alerts.forEach(s=>{this._drawHorizontalLine(t,{width:t.mediaSize.width,lineWidth:1,color:e,y:s.y})})}_drawAlertIcons(t){var s;if(!((s=this._data)!=null&&s.alerts))return;const e=this._data.color,i=this._data.alertIcon;this._data.alerts.forEach(r=>{this._drawLabel(t,{width:t.mediaSize.width,labelHeight:T,y:r.y,roundedCorners:2,icon:i,iconScaling:H/R,padding:{left:y,top:Z},color:e})})}_calculateLabelWidth(t){return S*2+u+t*A}_drawAlertLabel(t){var h;if(!((h=this._data)!=null&&h.alerts))return;const e=t.context,i=this._data.alerts.find(l=>l.showHover);if(!i||!i.showHover)return;const s=this._calculateLabelWidth(i.text.length),r=C(t.mediaSize.width/2,t.horizontalPixelRatio,s),a=C(i.y,t.verticalPixelRatio,z);e.save();try{const l=4*t.horizontalPixelRatio;e.beginPath(),e.roundRect(r.position,a.position,r.length,a.length,l),e.fillStyle="#FFFFFF",e.fill();const c=r.position+r.length-u*t.horizontalPixelRatio;i.hoverRemove&&(e.beginPath(),e.roundRect(c,a.position,u*t.horizontalPixelRatio,a.length,[0,l,l,0]),e.fillStyle="#F0F3FA",e.fill()),e.beginPath();const d=C(c/t.horizontalPixelRatio,t.horizontalPixelRatio,1);e.fillStyle="#F1F3FB",e.fillRect(d.position,a.position,d.length,a.length),e.beginPath(),e.roundRect(r.position,a.position,r.length,a.length,l),e.strokeStyle="#131722",e.lineWidth=1*t.horizontalPixelRatio,e.stroke(),e.beginPath(),e.fillStyle="#131722",e.textBaseline="middle",e.font=`${Math.round(12*t.verticalPixelRatio)}px sans-serif`,e.fillText(i.text,r.position+S*t.horizontalPixelRatio,i.y*t.verticalPixelRatio),e.beginPath();const _=9;e.translate(c+t.horizontalPixelRatio*(u-_)/2,(i.y-5)*t.verticalPixelRatio);const m=_/U*t.horizontalPixelRatio;e.scale(m,m),e.fillStyle="#131722",e.fill(Y,"evenodd")}finally{e.restore()}}_drawCrosshairLine(t){var e;(e=this._data)!=null&&e.crosshair&&this._drawHorizontalLine(t,{width:t.mediaSize.width,lineWidth:1,color:this._data.color,y:this._data.crosshair.y})}_drawCrosshairLabelButton(t){var e,i;!((e=this._data)!=null&&e.button)||!((i=this._data)!=null&&i.crosshair)||this._drawLabel(t,{width:t.mediaSize.width,labelHeight:M,y:this._data.crosshair.y,roundedCorners:[2,0,0,2],icon:this._data.button.crosshairLabelIcon,iconScaling:H/R,padding:{left:y,top:y},color:this._data.button.hovering?this._data.button.hoverColor:this._data.color})}_drawLabel(t,e){const i=t.context;try{i.save(),i.beginPath();const s=C(e.y,t.verticalPixelRatio,e.labelHeight),r=(e.width-(P+1))*t.horizontalPixelRatio;i.roundRect(r,s.position,P*t.horizontalPixelRatio,s.length,G(e.roundedCorners,t.horizontalPixelRatio)),i.fillStyle=e.color,i.fill(),i.beginPath(),i.translate(r+e.padding.left*t.horizontalPixelRatio,s.position+e.padding.top*t.verticalPixelRatio),i.scale(e.iconScaling*t.horizontalPixelRatio,e.iconScaling*t.verticalPixelRatio),i.fillStyle="#FFFFFF",e.icon.forEach(a=>{i.beginPath(),i.fill(a,"evenodd")})}finally{i.restore()}}}function G(o,t){return typeof o=="number"?o*t:o.map(e=>e*t)}class J extends V{draw(t){t.useBitmapCoordinateSpace(e=>{this._data&&this._drawCrosshairLabel(e)})}_drawCrosshairLabel(t){var i;if(!((i=this._data)!=null&&i.crosshair))return;const e=t.context;try{const r=t.bitmapSize.width-8*t.horizontalPixelRatio;e.save(),e.beginPath(),e.fillStyle=this._data.color;const a=C(this._data.crosshair.y,t.verticalPixelRatio,M),h=2*t.horizontalPixelRatio;e.roundRect(0,a.position,r,a.length,[0,h,h,0]),e.fill(),e.beginPath(),e.fillStyle="#FFFFFF",e.textBaseline="middle",e.textAlign="right",e.font=`${Math.round(12*t.verticalPixelRatio)}px sans-serif`;const l=e.measureText(this._data.crosshair.text);e.fillText(this._data.crosshair.text,l.width+10*t.horizontalPixelRatio,this._data.crosshair.y*t.verticalPixelRatio)}finally{e.restore()}}}class L{constructor(t){n(this,"_renderer");this._renderer=t?new J:new j}zOrder(){return"top"}renderer(){return this._renderer}update(t){this._renderer.update(t)}}class K{constructor(){n(this,"_alertAdded",new b);n(this,"_alertRemoved",new b);n(this,"_alertChanged",new b);n(this,"_alertsChanged",new b);n(this,"_alerts");n(this,"_alertsArray",[]);this._alerts=new Map,this._alertsChanged.subscribe(()=>{this._updateAlertsArray()},this)}destroy(){this._alertsChanged.unsubscribeAll(this)}alertAdded(){return this._alertAdded}alertRemoved(){return this._alertRemoved}alertChanged(){return this._alertChanged}alertsChanged(){return this._alertsChanged}addAlert(t){const e=this._getNewId(),i={price:t,id:e};return this._alerts.set(e,i),this._alertAdded.fire(i),this._alertsChanged.fire(),e}removeAlert(t){this._alerts.has(t)&&(this._alerts.delete(t),this._alertRemoved.fire(t),this._alertsChanged.fire())}alerts(){return this._alertsArray}_updateAlertsArray(){this._alertsArray=Array.from(this._alerts.values()).sort((t,e)=>e.price-t.price)}_getNewId(){let t=Math.round(Math.random()*1e6).toString(16);for(;this._alerts.has(t);)t=Math.round(Math.random()*1e6).toString(16);return t}}class Q extends K{constructor(){super();n(this,"_chart");n(this,"_series");n(this,"_mouseHandlers");n(this,"_paneViews",[]);n(this,"_pricePaneViews",[]);n(this,"_lastMouseUpdate",null);n(this,"_currentCursor",null);n(this,"_symbolName","");n(this,"_hoveringID","");this._mouseHandlers=new O}attached({chart:e,series:i,requestUpdate:s}){this._chart=e,this._series=i,this._paneViews=[new L(!1)],this._pricePaneViews=[new L(!0)],this._mouseHandlers.attached(e,i),this._mouseHandlers.mouseMoved().subscribe(r=>{this._lastMouseUpdate=r,s()},this),this._mouseHandlers.clicked().subscribe(r=>{if(r&&this._series){if(this._isHovering(r)){const a=this._series.coordinateToPrice(r.y);a&&(this.addAlert(a),s())}this._hoveringID&&(this.removeAlert(this._hoveringID),s())}},this)}detached(){this._mouseHandlers.mouseMoved().unsubscribeAll(this),this._mouseHandlers.clicked().unsubscribeAll(this),this._mouseHandlers.detached(),this._series=void 0}paneViews(){return this._paneViews}priceAxisPaneViews(){return this._pricePaneViews}updateAllViews(){var s;const e=this.alerts(),i=this._calculateRendererData(e,this._lastMouseUpdate);this._currentCursor=null,((s=i==null?void 0:i.button)!=null&&s.hovering||i!=null&&i.alerts.some(r=>r.showHover&&r.hoverRemove))&&(this._currentCursor="pointer"),this._paneViews.forEach(r=>r.update(i)),this._pricePaneViews.forEach(r=>r.update(i))}hitTest(){return this._currentCursor?{cursorStyle:this._currentCursor,externalId:"user-alerts-primitive",zOrder:"top"}:null}setSymbolName(e){this._symbolName=e}_isHovering(e){return!!(e&&e.xPositionRelativeToPriceScale>=1&&e.xPositionRelativeToPriceScale<P)}_isHoveringRemoveButton(e,i,s,r){if(!e||!i||Math.abs(e.y-s)>z/2)return!1;const h=S*2+u+r*A,l=(i+h-u)*.5;return Math.abs(e.x-l)<=u/2}_calculateRendererData(e,i){var m;if(!this._series)return null;const s=this._series.priceFormatter(),r=i&&!i.overTimeScale,a=r,h=i&&this._series.coordinateToPrice(i.y),l=s.format(h??-100);let c=1/0,d=-1;const _=e.map((f,w)=>{const v=this._series.priceToCoordinate(f.price)??-100;if(i!=null&&i.y&&v>=0){const g=Math.abs(i.y-v);g<c&&(d=w,c=g)}return{y:v,showHover:!1,price:f.price,id:f.id}});if(this._hoveringID="",d>=0&&c<N){const f=((m=this._chart)==null?void 0:m.timeScale().width())??0,w=_[d],v=`${this._symbolName} crossing ${this._series.priceFormatter().format(w.price)}`,g=this._isHoveringRemoveButton(i,f,w.y,v.length);_[d]={..._[d],showHover:!0,text:v,hoverRemove:g},g&&(this._hoveringID=w.id)}return{alertIcon:X,alerts:_,button:a?{hovering:this._isHovering(i),hoverColor:"#50535E",crosshairLabelIcon:$}:null,color:"#131722",crosshair:r?{y:i.y,text:l}:null}}}const q=document.querySelector("#chart");if(!q)throw new Error("Chart Container Missing!");const p=k("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{labelVisible:!1,style:I.Solid,width:1}},handleScale:!1,handleScroll:!1}),F=p.addAreaSeries({lineColor:"rgb(4,153,129)",topColor:"rgba(4,153,129, 0.4)",bottomColor:"rgba(4,153,129, 0)",priceLineVisible:!1,lastPriceAnimation:E.Continuous}),ee=W();F.setData(ee);const x=new Q;x.setSymbolName("AAPL");F.attachPrimitive(x);p.timeScale().fitContent();x.alertAdded().subscribe(o=>{console.log(`➕ Alert added @ ${o.price} with the id: ${o.id}`)});x.alertRemoved().subscribe(o=>{console.log(`❌ Alert removed with the id: ${o}`)});
