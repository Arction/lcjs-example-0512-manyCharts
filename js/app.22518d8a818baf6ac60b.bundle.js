(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,n)=>{const a=n(377),{lightningChart:l,AxisTickStrategies:r,emptyLine:s,AxisScrollStrategies:o,emptyFill:i,disableThemeEffects:c,isImageFill:d,SolidFill:h,ColorRGBA:m,Themes:p}=a,y=document.getElementById("chart")||document.body;y===document.body&&(y.style.width="100vw",y.style.height="100vh",y.style.margin="0px"),y.style.display="flex",y.style.flexDirection="column",y.style.overflow="hidden";const f=document.createElement("canvas");y.append(f);const u=l({sharedContextOptions:{useIndividualCanvas:!1,canvas:f}}),S=[];for(let e=0;e<10;e+=1){const e=document.createElement("div");y.append(e),e.style.flexGrow="1",e.style.display="flex",e.style.flexDirection="row";for(let t=0;t<10;t+=1){const t=document.createElement("div");e.append(t),t.style.flexGrow="1";const n=u.ChartXY({container:t,interactable:!1,animationsEnabled:!1,theme:c(p.darkGold)}).setTitle("").setPadding(0);d(n.engine.getBackgroundFillStyle())&&n.engine.setBackgroundFillStyle(new h({color:m(0,0,0)})),n.forEachAxis((e=>e.setTickStrategy(r.Empty).setStrokeStyle(s).setThickness(0))),n.axisX.setScrollStrategy(o.progressive).setInterval({end:0,start:-600,stopAxisAfter:!1});const a=n.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setMaxSampleCount(Math.ceil(600)).setStrokeStyle((e=>e.setThickness(1))),l=Math.round(2*Math.random());0===l?a.setAreaFillStyle(i).setPointFillStyle(i):1===l||a.setStrokeStyle(s).setAreaFillStyle(i).setPointSize(1),S.push({chart:n,series:a})}}const g=S.map((()=>{let e=[];const t=Math.round(5*Math.random());if(0===t)return e=new Array(120).fill(0).map(((e,t,n)=>Math.sin(2*t*Math.PI/n.length))),e;if(1===t)return e=new Array(120).fill(0).map(((e,t,n)=>t)),e;if(2===t)return e=new Array(180).fill(0).map(((e,t,n)=>t*Math.sin(2*t*Math.PI/60))),e;if(3===t)return e=new Array(900).fill(0).map(((e,t,n)=>t%90==0?Math.random():0)),e;if(4===t){let t=0;for(let n=0;n<3e3;n+=1){const n=t+(2*Math.random()-1);t=n,e.push(n)}return e.push(...e.slice().reverse()),e}let n=Math.random();const a=.93+.065*Math.random();for(let t=0;t<1200;t+=1)Math.random()>a&&(n=Math.random()),e.push(n);return e}));let M=performance.now(),w=0,k=0;const x=()=>{const e=performance.now();let t=Math.min(e-M,1e3)/1e3*60+w;w=t%1,t=Math.floor(t),t>0&&(S.forEach(((e,n)=>{const a=g[n],l=[];for(let e=0;e<t;e+=1)l[e]=a[(k+e)%a.length];e.series.appendSamples({yValues:l})})),k+=t),M=e,requestAnimationFrame(x)};x()}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);