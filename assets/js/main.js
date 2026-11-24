(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var U='c';function wc(T,V){if(T>10||V<4.8)return T;return 13.12+0.6215*T-11.37*Math.pow(V,0.16)+0.3965*T*Math.pow(V,0.16);}
function W(){var t=+$('wc-t').value,v=+$('wc-w').value,f=wc(t,v),ft=Math.round(f);$('wc-tv').textContent=U==='c'?t+' °C':Math.round(t*1.8+32)+' °F';$('wc-wv').textContent=U==='c'?v+' km/h':Math.round(v/1.609)+' mph';$('wc-f').textContent=(U==='c'?ft:Math.round(f*1.8+32))+'°';
 var risk=f>0?'chilly':f>-10?'cold':f>-25?'very cold':'frostbite risk';$('wc-r').textContent=risk;
 var L=[['Base','#9ED8EF',f>8?'Light synthetic tee':f>-5?'Long-sleeve merino or synthetic':'Midweight merino, plus leggings'],['Mid','#FF9A5C',f>8?'None needed':f>0?'Light fleece':f>-12?'Warm fleece or synthetic jacket':'Thick fleece plus insulated jacket'],['Shell','#FF6A1A',v>15?'Windproof anorak, hood up':'Anorak in your pack, ready'],['Extras','#DCE2E7',f>3?'Cap or light buff':f>-10?'Hat, gloves, buff':'Insulated hat, mitts, face cover']];
 $('wc-s').innerHTML=L.map(function(x,i){return '<div style="--c:'+x[1]+';animation-delay:'+i*.06+'s"><span>'+x[0]+'</span><b>'+x[2]+'</b></div>';}).join('');$('wc-n').textContent=v<5?'Little wind today, so your layers will feel close to the real temperature.':'The wind makes it feel '+(U==='c'?Math.max(0,Math.round(t-f))+'\u00B0C':Math.max(0,Math.round((t-f)*1.8))+'\u00B0F')+' colder than the air. A windproof shell blocks most of that loss.';}
if($('wc-t')){['wc-t','wc-w'].forEach(function(i){$(i).addEventListener('input',W);});var ub=[].slice.call(document.querySelectorAll('.an-units button'));ub.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){U=b.dataset.u;ub.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});W();});});W();}
var V={e:1,h:1,r:1};function grp(id,k){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){V[k]=+b.dataset.v;bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});vt();});});}
function vt(){var s=V.e*2+V.h*1.5+(V.r===2?-0.5:0),p=Math.max(0.08,Math.min(1,(s+1)/8.5)),lv=p<.35?'Basic':p<.6?'Good':p<.85?'High':'Very high';$('vt-v').textContent=lv;$('vt-arc').style.strokeDashoffset=315*(1-p);$('vt-arc').style.stroke=p<.35?'#9ED8EF':p<.6?'#FFD166':p<.85?'#FF9A5C':'#FF6A1A';$('vt-n').style.transform='rotate('+(-90+p*180)+'deg)';
 var t=[];if(V.r===0)t.push('No rain: a windproof, non-waterproof anorak breathes best of all.');else if(V.r===2)t.push('Steady rain: choose a fully waterproof shell with taped seams and a stiffened hood peak.');else t.push('Showers: a water-repellent or light waterproof anorak is enough.');
 if(V.e>=2)t.push('Open the half-zip before you start to climb, not after you feel hot.');if(V.e===3)t.push('Look for pit zips or a mesh-backed pocket that doubles as a vent.');if(V.h===2)t.push('In muggy air no membrane keeps up: slow the pace and vent often.');if(V.h===0&&V.e<=1)t.push('Dry cold and gentle pace: a warmer mid layer matters more than breathability.');
 $('vt-l').innerHTML=t.map(function(x,i){return '<li style="animation:anin .4s '+(i*.06)+'s both">'+x+'</li>';}).join('');}
if($('vt-e')){grp('vt-e','e');grp('vt-h','h');grp('vt-r','r');vt();}
})();
