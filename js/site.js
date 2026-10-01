/* אבי סנטר — נגישות והודעת פרטיות, משותף לכל העמודים */
(function(){
  var d=document;
  var RU=/^ru/i.test(d.documentElement.lang||'');
  /* 1. סגנונות נגישות: פוקוס בולט, הפחתת תנועה, עצירת רצועה נעה בריחוף */
  var css=':focus-visible{outline:3px solid #D5001C!important;outline-offset:2px!important}'+
    '.ticker a:focus-visible,.ticker button:focus-visible{outline:3px solid #fff!important;outline-offset:-4px!important}'+
    '.step-num{color:#fff!important}.box h3,.box h4,.highlight h3,.highlight h4{color:#A8001A!important}.rev-google-stars{letter-spacing:0}'+
    'html.pv-open{scroll-padding-bottom:70px}'+
    '.a11y-skip{position:absolute;right:8px;top:-60px;z-index:10000;background:#1A1A1A;color:#fff!important;padding:10px 16px;border-radius:6px;font-weight:700;text-decoration:none}.a11y-skip:focus{top:8px}'+
    '.ticker:hover *,.ticker:focus-within *{animation-play-state:paused!important}'+
    '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}'+
    '.pv-note{position:fixed;left:8px;right:8px;bottom:8px;z-index:9998;max-width:720px;margin:0 auto;background:#1A1A1A;color:#fff;border-radius:10px;padding:6px 8px 6px 12px;display:flex;gap:10px;align-items:center;box-shadow:0 4px 16px rgba(0,0,0,.25);font:13px/1.4 Arial,sans-serif;direction:rtl;box-sizing:border-box}'+
    '.pv-note p{margin:0;flex:1 1 auto;color:#fff}.pv-note a{color:#FFD5DA;text-decoration:underline}'+
    '.mbar{display:none}'+
    '@media (max-width:768px){.mbar{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;position:fixed;left:0;right:0;top:auto;bottom:0;z-index:9990;background:#fff;border-top:1px solid #E8E3D9;box-shadow:0 -2px 12px rgba(0,0,0,.08);padding:6px 8px calc(6px + env(safe-area-inset-bottom))}.mbar a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:52px;border-radius:10px;font:700 13px/1.2 Arial,sans-serif;text-decoration:none;color:#fff!important}.mbar .mb-ic{font-size:18px;line-height:1}.mbar .mb-call{background:#D5001C}.mbar .mb-wa{background:#0E7A3F}.mbar .mb-nav{background:#1A1A1A}body{padding-bottom:76px}.wa-fixed{display:none!important}.btt,#btt{bottom:88px!important}.pv-note{bottom:80px!important;padding:4px 6px 4px 10px;font-size:12px}.pv-note button{min-height:34px!important;padding:0 14px!important;font-size:13px!important}html{scroll-padding-bottom:84px}html.pv-open{scroll-padding-bottom:140px}}'+
    '@media (max-width:600px){.stat{padding:16px 8px!important}.stat-n{font-size:30px!important;overflow-wrap:anywhere}nav{padding-left:14px!important;padding-right:14px!important;gap:8px!important}nav>div{flex-wrap:nowrap!important;overflow-x:auto;scrollbar-width:none;max-width:62vw}nav>div::-webkit-scrollbar{display:none}nav>div a{white-space:nowrap;flex:0 0 auto}}'+
    '.pv-note button{flex:0 0 auto;background:#B8001A;color:#fff;border:0;border-radius:50px;padding:0 18px;font-weight:700;font-size:14px;cursor:pointer;min-height:44px}';
  var st=d.createElement('style'); st.textContent=css; d.head.appendChild(st);

  /* 2. קישור "דלג לתוכן הראשי" בכל עמוד שאין בו */
  function skip(){
    var has=[].some.call(d.querySelectorAll('a[href^="#"]'),function(a){return /דלג|Перейти/.test(a.textContent);});
    if(has) return;
    var target=d.getElementById('main')||d.querySelector('main')||d.querySelector('article')||d.querySelector('h1');
    if(!target) return;
    if(!target.id) target.id='main-content';
    if(!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1');
    var a=d.createElement('a'); a.href='#'+target.id; a.className='a11y-skip'; a.textContent=RU?'Перейти к содержанию':'דלג לתוכן הראשי';
    d.body.insertBefore(a,d.body.firstChild);
  }

  /* 3. הודעת עוגיות ופרטיות — שורה דקה, מוצגת פעם אחת, לא מסתירה את כפתור הוואטסאפ */
  function note(){
    var k='avi_privacy_notice_v1';
    try{ if(localStorage.getItem(k)) return; }catch(e){}
    var box=d.createElement('div'); box.className='pv-note'; box.setAttribute('role','region'); box.setAttribute('aria-label',RU?'Уведомление о файлах cookie':'הודעה על עוגיות ופרטיות');
    if(RU){box.style.direction='ltr';box.setAttribute('lang','ru');}
    box.innerHTML=RU?'<p>Сайт использует файлы cookie для улучшения сервиса. <a href="/pratiut">Подробнее (иврит)</a></p><button type="button">Понятно</button>':'<p>האתר משתמש בעוגיות לשיפור השירות. <a href="/pratiut">פרטים</a></p><button type="button">הבנתי</button>';
    d.body.appendChild(box); d.documentElement.classList.add('pv-open');
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
      box.remove(); d.documentElement.classList.remove('pv-open');
      var m=d.getElementById('main')||d.querySelector('main'); if(m){ if(!m.hasAttribute('tabindex')) m.setAttribute('tabindex','-1'); try{m.focus({preventScroll:true});}catch(e){} }
    });
  }
  /* 4. פס יצירת קשר קבוע בתחתית המסך בנייד */
  function bar(){
    if(d.querySelector('.mbar')) return;
    var wa='https://wa.me/972544247393?text='+encodeURIComponent(RU?'Здравствуйте! У меня вопрос:':'היי אבי, יש לי שאלה:');
    var nav='https://waze.com/ul?ll=32.007832,34.791624&navigate=yes';
    var el=d.createElement('div'); el.className='mbar'; el.setAttribute('role','navigation');
    el.setAttribute('aria-label',RU?'Быстрая связь':'יצירת קשר מהירה');
    el.innerHTML='<a class="mb-call" href="tel:054-424-7393"><span class="mb-ic" aria-hidden="true">📞</span>'+(RU?'Позвонить':'התקשר')+'</a>'+
      '<a class="mb-wa" href="'+wa+'" target="_blank" rel="noopener"><span class="mb-ic" aria-hidden="true">💬</span>WhatsApp</a>'+
      '<a class="mb-nav" href="'+nav+'" target="_blank" rel="noopener"><span class="mb-ic" aria-hidden="true">🧭</span>'+(RU?'Маршрут':'נווט לחנות')+'</a>';
    d.body.appendChild(el);
  }
  function hideFloat(){
    [].forEach.call(d.querySelectorAll('a[href*="wa.me"]'),function(a){
      if(!a.closest('.mbar') && getComputedStyle(a).position==='fixed') a.classList.add('wa-fixed');
    });
  }
  function init(){ skip(); bar(); hideFloat(); note(); }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',init); else init();
})();
