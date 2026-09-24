/* אבי סנטר — נגישות והודעת פרטיות, משותף לכל העמודים */
(function(){
  var d=document;
  /* 1. סגנונות נגישות: פוקוס בולט, הפחתת תנועה, עצירת רצועה נעה בריחוף */
  var css=':focus-visible{outline:3px solid #D5001C!important;outline-offset:2px!important}'+
    '.a11y-skip{position:absolute;right:8px;top:-60px;z-index:10000;background:#1A1A1A;color:#fff!important;padding:10px 16px;border-radius:6px;font-weight:700;text-decoration:none}.a11y-skip:focus{top:8px}'+
    '.ticker:hover *,.ticker:focus-within *{animation-play-state:paused!important}'+
    '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}'+
    '.pv-note{position:fixed;left:8px;right:8px;bottom:8px;z-index:9998;max-width:720px;margin:0 auto;background:#1A1A1A;color:#fff;border-radius:10px;padding:6px 8px 6px 12px;display:flex;gap:10px;align-items:center;box-shadow:0 4px 16px rgba(0,0,0,.25);font:13px/1.4 Arial,sans-serif;direction:rtl;box-sizing:border-box}'+
    '.pv-note p{margin:0;flex:1 1 auto;color:#fff}.pv-note a{color:#FFD5DA;text-decoration:underline}'+
    '.pv-note button{flex:0 0 auto;background:#B8001A;color:#fff;border:0;border-radius:50px;padding:0 18px;font-weight:700;font-size:14px;cursor:pointer;min-height:44px}';
  var st=d.createElement('style'); st.textContent=css; d.head.appendChild(st);

  /* 2. קישור "דלג לתוכן הראשי" בכל עמוד שאין בו */
  function skip(){
    var has=[].some.call(d.querySelectorAll('a[href^="#"]'),function(a){return /דלג/.test(a.textContent);});
    if(has) return;
    var target=d.getElementById('main')||d.querySelector('main')||d.querySelector('article')||d.querySelector('h1');
    if(!target) return;
    if(!target.id) target.id='main-content';
    if(!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1');
    var a=d.createElement('a'); a.href='#'+target.id; a.className='a11y-skip'; a.textContent='דלג לתוכן הראשי';
    d.body.insertBefore(a,d.body.firstChild);
  }

  /* 3. הודעת עוגיות ופרטיות — שורה דקה, מוצגת פעם אחת, לא מסתירה את כפתור הוואטסאפ */
  function note(){
    var k='avi_privacy_notice_v1';
    try{ if(localStorage.getItem(k)) return; }catch(e){}
    var box=d.createElement('div'); box.className='pv-note'; box.setAttribute('role','region'); box.setAttribute('aria-label','הודעה על עוגיות ופרטיות');
    box.innerHTML='<p>האתר משתמש בעוגיות לשיפור השירות. <a href="/pratiut">פרטים</a></p><button type="button">הבנתי</button>';
    d.body.appendChild(box);
    /* משאירים מקום לכפתור וואטסאפ צף בפינה, כדי שההודעה לא תסתיר אותו ולא נזיז אותו מעל כפתורים אחרים */
    var vh=window.innerHeight, vw=window.innerWidth;
    [].forEach.call(d.querySelectorAll('a[href*="wa.me"]'),function(a){
      if(getComputedStyle(a).position!=='fixed') return;
      var r=a.getBoundingClientRect(); var bx=box.getBoundingClientRect();
      if(r.bottom<bx.top) return;
      if(r.left<vw/2) box.style.left=Math.round(r.right+8)+'px'; else box.style.right=Math.round(vw-r.left+8)+'px';
    });
    box.querySelector('button').addEventListener('click',function(){
      try{localStorage.setItem(k,'1');}catch(e){}
      box.remove();
    });
  }
  function init(){ skip(); note(); }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',init); else init();
})();
