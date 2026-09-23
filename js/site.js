/* אבי סנטר — נגישות והודעת פרטיות, משותף לכל העמודים */
(function(){
  var d=document;
  /* 1. סגנונות נגישות: פוקוס בולט, הפחתת תנועה, עצירת רצועה נעה בריחוף */
  var css=':focus-visible{outline:3px solid #D5001C!important;outline-offset:2px!important}'+
    '.a11y-skip{position:absolute;right:8px;top:-60px;z-index:10000;background:#1A1A1A;color:#fff!important;padding:10px 16px;border-radius:6px;font-weight:700;text-decoration:none}.a11y-skip:focus{top:8px}'+
    '.ticker:hover *,.ticker:focus-within *{animation-play-state:paused!important}'+
    '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}'+
    '.pv-note{position:fixed;left:12px;right:12px;bottom:12px;z-index:9998;max-width:720px;margin:0 auto;background:#1A1A1A;color:#fff;border-radius:10px;padding:14px 16px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;box-shadow:0 6px 24px rgba(0,0,0,.25);font:14px/1.6 Arial,sans-serif;direction:rtl}'+
    '.pv-note p{margin:0;flex:1 1 260px;color:#fff}.pv-note a{color:#FFD5DA;text-decoration:underline}'+
    '.pv-note button{background:#D5001C;color:#fff;border:0;border-radius:50px;padding:10px 22px;font-weight:700;font-size:14px;cursor:pointer;min-height:44px}';
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

  /* 3. הודעת עוגיות ופרטיות — מוצגת פעם אחת */
  function note(){
    var k='avi_privacy_notice_v1';
    try{ if(localStorage.getItem(k)) return; }catch(e){}
    var box=d.createElement('div'); box.className='pv-note'; box.setAttribute('role','region'); box.setAttribute('aria-label','הודעה על עוגיות ופרטיות');
    box.innerHTML='<p>האתר משתמש בעוגיות ובכלים לניתוח שימוש (Google Analytics, Microsoft Clarity) כדי לשפר את השירות. פרטים ב<a href="/pratiut">מדיניות הפרטיות</a>.</p><button type="button">הבנתי</button>';
    box.querySelector('button').addEventListener('click',function(){ try{localStorage.setItem(k,'1');}catch(e){} box.remove(); });
    d.body.appendChild(box);
  }
  function init(){ skip(); note(); }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',init); else init();
})();
