(function(){
  var d=document;
  function ready(f){ if(d.readyState!=='loading') f(); else d.addEventListener('DOMContentLoaded',f); }
  ready(function(){
    var h=d.querySelector('.h47'), b=h&&h.querySelector('.h47menu');
    if(b){ b.addEventListener('click',function(){ var o=h.classList.toggle('open'); b.setAttribute('aria-expanded',o?'true':'false'); }); }
    [].forEach.call(d.querySelectorAll('.tk47'),function(t){
      var btn=t.querySelector('button'); if(!btn) return;
      btn.addEventListener('click',function(){ var p=t.classList.toggle('paused'); btn.setAttribute('aria-pressed',p?'true':'false'); btn.textContent=p?'\u25B6':'\u275A\u275A'; });
    });
    var w=d.querySelector('.rv47'); if(!w) return;
    var cards=[].slice.call(w.querySelectorAll('.rv47c')), cur=0, paused=false, timer=null;
    var num=w.querySelector('.rv47num'), tot=w.querySelector('.rv47tot'), pb=w.querySelector('.rv47p');
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function per(){ return window.innerWidth<=900?2:4; }
    function show(){ var p=per(), sets=Math.ceil(cards.length/p); cur=(cur+sets)%sets;
      cards.forEach(function(c,i){ c.hidden=!(i>=cur*p&&i<cur*p+p); });
      if(num) num.textContent=String(cur+1); if(tot) tot.textContent=String(sets); }
    function next(){ cur++; show(); }
    var timer=null, DELAY=1000;
    function restart(){ if(timer) clearInterval(timer); timer=setInterval(function(){ if(!paused&&!w._h&&!d.hidden) next(); },DELAY); }
    w.querySelector('.rv47next').addEventListener('click',function(){ next(); restart(); });
    w.querySelector('.rv47prev').addEventListener('click',function(){ cur--; show(); restart(); });
    if(pb) pb.addEventListener('click',function(){ paused=!paused; pb.setAttribute('aria-pressed',paused?'true':'false'); pb.textContent=paused?'\u25B6':'\u275A\u275A'; });
    if(reduce&&pb){ paused=true; pb.textContent='\u25B6'; pb.setAttribute('aria-pressed','true'); }
    /* pause only while a real mouse is over the cards, or keyboard focus is inside; touch never freezes it */
    w.addEventListener('pointerenter',function(e){ if(e.pointerType==='mouse') w._h=1; });
    w.addEventListener('pointerleave',function(e){ if(e.pointerType==='mouse') w._h=0; });
    w.addEventListener('focusin',function(e){ try{ if(e.target.matches(':focus-visible')) w._h=1; }catch(x){} });
    w.addEventListener('focusout',function(){ w._h=0; });
    /* swipe on phones: RTL – swipe left shows the next reviews */
    var g=w.querySelector('.rv47g'), sx=0, sy=0;
    if(g){ g.addEventListener('touchstart',function(e){ var t=e.changedTouches[0]; sx=t.clientX; sy=t.clientY; },{passive:true});
      g.addEventListener('touchend',function(e){ var t=e.changedTouches[0], dx=t.clientX-sx, dy=t.clientY-sy;
        if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){ if(dx<0){ next(); } else { cur--; show(); } restart(); } },{passive:true}); }
    var lastW=window.innerWidth;
    window.addEventListener('resize',function(){ if(window.innerWidth!==lastW){ lastW=window.innerWidth; show(); } });
    show(); restart();
  });
})();
