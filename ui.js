const $=s=>document.querySelector(s);const host=$('#mascot');let api=null,paused=false,tour=false;
if(new URLSearchParams(location.search).has('embed'))document.body.classList.add('embed');
let active='script';
const snippets={script:`<script type="module" src="/taiga/assets/taiga.js"></script>\n<taiga-mascot\n  style="display:block;width:100%;height:640px"\n  accent="#ff7900" speed="1"\n></taiga-mascot>`,iframe:`<iframe src="/taiga/index.html?embed=1"\n  title="TAIGA interactive mascot"\n  style="width:100%;height:640px;border:0"\n  loading="lazy"\n  allow="gyroscope; accelerometer"\n></iframe>`};
function snippet(){ $('#snippet').textContent=snippets[active] }snippet();
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{active=b.dataset.tab;document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));snippet()});
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(snippets[active]);$('#copy').textContent='Copied';setTimeout(()=>$('#copy').textContent='Copy code',1600)}catch{$('#copy').textContent='Select code to copy'}};
host.addEventListener('taiga:ready',e=>{api=e.detail;$('#loader').remove();$('#state').textContent='READY TO CONNECT';$('#notice').textContent=matchMedia('(prefers-reduced-motion: reduce)').matches?'Reduced motion is on. Drag or use the arrow keys to explore.':''});
host.addEventListener('taiga:error',()=>{$('#loader')?.remove();$('#state').textContent='VIDEO PREVIEW';$('.stage-top span:first-child').textContent='3D RENDER';$('#notice').textContent='WebGL is unavailable in this browser. Showing a non-interactive video of the 3D model.';for(const s of ['#demo','#pause','#reset','#gyro','#speed','#dof'])$(s).disabled=true;$('#png').textContent='Download PNG';$('#record').textContent='Download WebM';$('.hint').textContent='3D turntable · 12-second loop'});
host.addEventListener('taiga:stats',e=>{const d=e.detail;$('#stats').textContent=`${d.fps} FPS · ${Math.round(d.triangles/1000)}K TRIANGLES`;$('#state').textContent=d.hover?`${d.hover.toUpperCase()} ACTIVE`:tour?'360° TOUR':paused?'MOTION PAUSED':'READY TO CONNECT';host.dataset.diagnostics=JSON.stringify(d)});
$('#reset').onclick=()=>{api?.reset();tour=false;$('#demo').textContent='360° tour'};
$('#pause').onclick=()=>{paused=!paused;api?.setPaused(paused);$('#pause').textContent=paused?'Play':'Pause';$('#pause').setAttribute('aria-pressed',paused)};
$('#demo').onclick=()=>{tour=!tour;api?.setDemo(tour);$('#demo').textContent=tour?'Stop tour':'360° tour'};
$('#speed').oninput=e=>{api?.setSpeed(e.target.value);$('#speed-value').textContent=e.target.value+'×'};
$('#dof').onchange=e=>api?.setDepthOfField(e.target.checked);
$('#gyro').onclick=async()=>{try{await api?.enableGyro();$('#notice').textContent='Tilt tracking enabled. Touch drag is also available.'}catch(e){$('#notice').textContent=e.message}};
$('#png').onclick=async()=>{if(!api){download('downloads/TAIGA_3D_Front.png');return;}$('#png').disabled=true;try{await api.snapshot()}finally{$('#png').disabled=false}};
$('#record').onclick=async()=>{if(!api){download('downloads/TAIGA_3D_Interactive.webm');return;}$('#record').disabled=true;$('#record').textContent='Recording… 12 seconds';try{await api.record();$('#notice').textContent='Your 3D animation is ready.'}catch(e){$('#notice').textContent=e.message}finally{$('#record').disabled=false;$('#record').textContent='Record 12s WebM'}};

function download(path){const a=document.createElement("a");a.href=path;a.download=path.split("/").pop();a.click()}
