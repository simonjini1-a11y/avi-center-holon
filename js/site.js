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
    '.dfab{display:none}'+
    '.wa-fixed{display:none!important}'+
    '@media (min-width:769px){.dfab{display:flex;flex-direction:column;gap:8px;position:fixed;left:18px;bottom:18px;z-index:9990}.dfab a{display:flex;align-items:center;gap:8px;padding:0 18px;min-height:48px;border-radius:50px;font:700 15px/1 Arial,sans-serif;color:#fff!important;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.18)}.dfab .df-wa{background:#0E7A3F}.dfab .df-call{background:#D5001C}.dfab a:hover{filter:brightness(1.08)}html.pv-open .pv-note{left:230px}}'+
    '@media (max-width:768px){.nav-ct{display:none!important}}'+
    '.pgrid{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))!important;gap:14px!important;align-items:stretch}'+
    '@media (max-width:480px){.pgrid{grid-template-columns:1fr 1fr!important;gap:10px!important}}'+
    '.pgrid figure{display:flex;flex-direction:column;margin:0;background:#fff;border:1px solid #E8E3D9;border-radius:10px;overflow:hidden}'+
    '.pgrid figure>a{display:block}.pgrid picture{display:block;margin:0!important;border:0!important;border-radius:0!important}'+
    '.pgrid img{display:block;width:100%!important;max-width:none!important;height:auto;aspect-ratio:4/5!important;object-fit:cover;margin:0!important;border:0!important;border-radius:0!important;background:#F4F2EE}'+
    '.pgrid figcaption{flex:1 1 auto;margin:0!important;padding:10px 10px 8px!important;font:600 14px/1.35 Arial,sans-serif!important;color:#1A1A1A!important;text-align:right!important}'+
    '.pgrid .pq{display:flex!important;align-items:center!important;justify-content:center!important;gap:6px;margin:0 10px 10px!important;min-height:42px;height:auto!important;border-radius:8px!important;background:#0E7A3F!important;color:#fff!important;font:700 13px/1.2 Arial,sans-serif!important;text-decoration:none!important;text-align:center;padding:0 6px!important;border:0!important}.pq:hover{filter:brightness(1.08)}'+
    '.mbar{display:none}'+
    '@media (max-width:768px){.mbar{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;position:fixed;left:0;right:0;top:auto;bottom:0;z-index:9990;background:#fff;border-top:1px solid #E8E3D9;box-shadow:0 -2px 12px rgba(0,0,0,.08);padding:6px 8px calc(6px + env(safe-area-inset-bottom))}.mbar a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:52px;border-radius:10px;font:700 13px/1.2 Arial,sans-serif;text-decoration:none;color:#fff!important}.mbar .mb-ic{font-size:18px;line-height:1}.mbar .mb-call{background:#D5001C}.mbar .mb-wa{background:#0E7A3F}.mbar .mb-nav{background:#1A1A1A}body{padding-bottom:76px}.wa-fixed{display:none!important}.btt,#btt{bottom:88px!important}.pv-note{bottom:80px!important;padding:4px 6px 4px 10px;font-size:12px}.pv-note button{min-height:34px!important;padding:0 14px!important;font-size:13px!important}html{scroll-padding-bottom:84px}html.pv-open{scroll-padding-bottom:140px}}'+
    '@media (max-width:600px){.stat{padding:16px 8px!important}.stat-n{font-size:30px!important;overflow-wrap:anywhere}nav{padding-left:14px!important;padding-right:14px!important;gap:8px!important}nav>div{flex-wrap:nowrap!important;overflow-x:auto;scrollbar-width:none;max-width:62vw}nav>div::-webkit-scrollbar{display:none}nav>div a{white-space:nowrap;flex:0 0 auto}}'+
    '.pv-note button{flex:0 0 auto;background:#B8001A;color:#fff;border:0;border-radius:50px;padding:0 18px;font-weight:700;font-size:14px;cursor:pointer;min-height:44px}';
  css+='@media (max-width:768px){nav[aria-label]:not(#navbar){flex-wrap:wrap!important;padding:8px 12px!important;row-gap:6px!important}nav[aria-label]:not(#navbar)>div{justify-content:flex-start!important;max-width:100%!important;width:100%!important;flex-wrap:nowrap!important;overflow-x:auto;scrollbar-width:none}nav[aria-label]:not(#navbar)>div a{flex:0 0 auto}}';
  css+='.acta{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin:0 auto 24px;max-width:520px;padding:12px;border:1px solid #E8E3D9;border-radius:10px;background:#fff;font:600 14px/1.4 Arial,sans-serif;color:#1A1A1A;text-align:center}.acta p{margin:0;flex:1 1 100%}.acta a{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:50px;color:#fff!important;text-decoration:none;font-weight:700}.acta .ac-wa{background:#0E7A3F}.acta .ac-call{background:#D5001C}';
  css+='main p a:not([class]),article p a:not([class]),.faq-body a,figcaption a{text-decoration:underline!important;text-underline-offset:2px}';
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
  /* 5. כפתורי קשר צפים במחשב (בנייד יש פס תחתון) */
  function dfab(){
    if(d.querySelector('.dfab')) return;
    var wa='https://wa.me/972544247393?text='+encodeURIComponent(RU?'Здравствуйте! У меня вопрос:':'היי אבי, יש לי שאלה:');
    var el=d.createElement('div'); el.className='dfab'; el.setAttribute('role','navigation'); el.setAttribute('aria-label',RU?'Быстрая связь':'יצירת קשר מהירה');
    el.innerHTML='<a class="df-wa" href="'+wa+'" target="_blank" rel="noopener"><span aria-hidden="true">💬</span>WhatsApp</a>'+
      '<a class="df-call" href="tel:054-424-7393"><span aria-hidden="true">📞</span>054-424-7393</a>';
    d.body.appendChild(el);
  }
  /* 6. בכל מוצר בגלריה: כפתור "יש במלאי?" שפותח וואטסאפ עם שם המוצר */
  function pq(){
    if(/shikpul|ru-klyuchi/.test(location.pathname)) return;
    [].forEach.call(d.querySelectorAll('.pgrid figure'),function(f){
      if(f.querySelector('.pq')) return;
      var c=f.querySelector('figcaption'); var name=c?c.textContent.replace(/\s+/g,' ').trim():'';
      var msg=RU?('Здравствуйте! Видел на сайте: '+name+'. Есть в наличии?'):('היי אבי, ראיתי באתר: '+name+'. יש במלאי?');
      var a=d.createElement('a'); a.className='pq'; a.target='_blank'; a.rel='noopener';
      a.href='https://wa.me/972544247393?text='+encodeURIComponent(msg);
      a.innerHTML='<span aria-hidden="true">💬</span>'+(RU?'Есть в наличии?':'יש במלאי? שאלו');
      if(name) a.setAttribute('aria-label',(RU?'Есть в наличии? ':'יש במלאי? שאלו – ')+name);
      f.appendChild(a);
    });
  }
  /* 7. במדריך: מתחת לתמונה הראשונה – יש במלאי? וואטסאפ או שיחה */
  function acta(){
    if(!/^\/blog-/.test(location.pathname)||d.querySelector('.acta')) return;
    var art=d.querySelector('article'); if(!art) return;
    var h1=art.querySelector('h1'); var pic=art.querySelector('picture');
    var anchor=pic?(pic.closest('a')||pic):h1; if(!anchor) return;
    var topic=h1?h1.textContent.split(/[:?]/)[0].trim():'';
    var wa='https://wa.me/972544247393?text='+encodeURIComponent('היי אבי, קראתי באתר: '+topic+'. יש לכם את מה שצריך במלאי?');
    var el=d.createElement('div'); el.className='acta';
    el.innerHTML='<p>כל מה שצריך לעבודה הזאת יש בחנות בקריית שרת, חולון. לא בטוחים מה לקנות? שאלו את אבי.</p>'+
      '<a class="ac-wa" href="'+wa+'" target="_blank" rel="noopener"><span aria-hidden="true">💬</span>יש במלאי? שאלו</a>'+
      '<a class="ac-call" href="tel:054-424-7393"><span aria-hidden="true">📞</span>התקשרו</a>';
    anchor.parentNode.insertBefore(el,anchor.nextSibling);
  }
  function init(){ skip(); bar(); dfab(); pq(); acta(); hideFloat(); note(); }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',init); else init();
})();
