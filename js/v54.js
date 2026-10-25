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
    w.querySelector('.rv47next').addEventListener('click',function(){ next(); });
    w.querySelector('.rv47prev').addEventListener('click',function(){ cur--; show(); });
    if(pb) pb.addEventListener('click',function(){ paused=!paused; pb.setAttribute('aria-pressed',paused?'true':'false'); pb.textContent=paused?'\u25B6':'\u275A\u275A'; });
    if(reduce&&pb){ paused=true; pb.textContent='\u25B6'; pb.setAttribute('aria-pressed','true'); }
    w.addEventListener('mouseenter',function(){ w._h=1; }); w.addEventListener('mouseleave',function(){ w._h=0; });
    w.addEventListener('focusin',function(){ w._h=1; }); w.addEventListener('focusout',function(){ w._h=0; });
    window.addEventListener('resize',show);
    show(); setInterval(function(){ if(!paused&&!w._h&&!d.hidden) next(); },500);
  });
})();
