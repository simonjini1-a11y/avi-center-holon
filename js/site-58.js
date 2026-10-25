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
    '.pgrid .pq{display:flex!important;align-items:center!important;justify-content:center!important;margin:0 10px 10px!important;min-height:36px;height:auto!important;border-radius:8px!important;background:transparent!important;color:#0E7A3F!important;font:700 13px/1.2 Heebo,Arial,sans-serif!important;text-decoration:none!important;text-align:center;padding:0 6px!important;border:1.5px solid #0E7A3F!important}.pq:hover{background:#0E7A3F!important;color:#fff!important}'+
    '.mbar{background:#fff!important}.mbar a{background:transparent!important;color:#1A1A1A!important;font:700 12px/1.2 Heebo,Arial,sans-serif!important;gap:3px!important}'+'.mbar .mb-i{width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center}.mbar .mb-ph{background:#D5001C}'+'.dfab a{display:flex!important;align-items:center;gap:8px}.dfab img{border-radius:7px}.df-ph{width:28px;height:28px;border-radius:7px;background:#D5001C;display:inline-flex;align-items:center;justify-content:center}'+'.pq{display:flex!important;align-items:center;justify-content:center;gap:6px}'+'.st46{background:#fff;border-bottom:1px solid #E8E3D9;padding:8px 20px;display:flex;align-items:center;gap:8px;font:700 15px/1.3 Heebo,Arial,sans-serif;justify-content:center}.st46 i{width:10px;height:10px;border-radius:50%;display:inline-block;flex:0 0 auto}'+'.sfoot{background:#1F1D1A!important;border-top:0!important;color:#D9D4CA!important}.sfoot a{color:#D9D4CA!important}.sfoot a:hover{color:#fff!important}.sfoot h3{color:#fff!important}.sfoot .nav-brand .bt{color:#fff!important}.sfoot .nav-brand .bb{color:#FF8A99!important}.sfoot-nap{color:#D9D4CA!important}.sfoot-top,.sfoot-bot{border-color:#3A3631!important}.sfoot-hrs{margin:4px 0 0;color:#D9D4CA}.sfoot-ic{display:flex;gap:10px;margin-top:10px}.sfoot-ic img,.sfoot-ic .ph{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center}.sfoot-ic .ph{background:#D5001C}'+
    '.hero46{text-align:right!important;padding:18px 20px 6px!important;border-bottom:0!important}.hero46 .container{max-width:1200px;margin:0 auto}.hero46 .badge,.hero46 .hero-badge{font:700 13px/1.4 Heebo,Arial,sans-serif!important;letter-spacing:0!important;color:#625D55!important;margin:0 0 6px!important;text-transform:none!important}'+'h1.h46{font:900 clamp(26px,4vw,40px)/1.15 Heebo,Arial,sans-serif;color:#1A1A1A;margin:0 0 12px;letter-spacing:0}'+'.hero46 .lead,.hero46 .hero-sub{background:#fff;border:1px solid #E8E3D9;border-radius:12px;padding:12px 16px;font:400 16px/1.6 Heebo,Arial,sans-serif;color:#333;max-width:820px;margin:0 0 12px!important;text-align:right}'+'.hero46 .ctas,.hero46 .hero-ctas{justify-content:flex-start!important}'+'@media(max-width:768px){.hero46 .ctas,.hero46 .hero-ctas{display:none!important}.hero46+.stats{display:none!important}}'+'.pgrid figure img{aspect-ratio:1/1;object-fit:cover;width:100%;height:auto}'+'.nf46{display:flex;align-items:center;gap:12px;max-width:820px;margin:18px auto 0;background:#fff;border:1px solid #E8E3D9;border-radius:12px;padding:12px 16px;text-decoration:none;color:#1A1A1A;font:700 16px/1.4 Heebo,Arial,sans-serif}.nf46 img{width:40px;height:40px;border-radius:10px;flex:0 0 auto}'+
    '.toc p[role=heading]{font-size:15px;color:var(--red);text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;font-weight:700}'+
    '.pg46{font:800 20px/1.3 Heebo,Arial,sans-serif;color:#1A1A1A;margin:26px 0 12px;text-align:right}.pg46 span{font-weight:400;color:#625D55;font-size:16px}'+
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


  /* 46. אחרי גלריית המוצרים: לא מצאתם? */
  function nf(){
    var gs=d.querySelectorAll('.pgrid'); var g=gs[gs.length-1]; if(!g||d.querySelector('.nf46')) return;
    var a=d.createElement('a'); a.className='nf46'; a.target='_blank'; a.rel='noopener';
    a.href='https://wa.me/972544247393?text='+encodeURIComponent(RU?'Здравствуйте! Ищу товар, вот фото:':'היי אבי, אני מחפש מוצר, הנה תמונה:');
    a.innerHTML='<img src="/images/icon-whatsapp-v58.png" alt="" width="40" height="40" loading="lazy"><span>'+(RU?'Не нашли? В магазине есть больше. Пришлите фото в WhatsApp':'לא מצאתם? יש עוד בחנות. שלחו תמונה בוואטסאפ')+'</span>';
    g.insertAdjacentElement('afterend',a);
  }

  /* 46. מפה נטענת רק בלחיצה */
  function map46(){
    var m=d.querySelector('.map46'); if(!m) return; var b=m.querySelector('.map46-btn'); if(!b) return;
    b.addEventListener('click',function(){
      var f=d.createElement('iframe'); f.src=m.getAttribute('data-src'); f.title='מפה: אבי סנטר טמבוריה, קרן היסוד 1, קריית שרת, חולון';
      f.setAttribute('loading','lazy'); f.setAttribute('referrerpolicy','no-referrer-when-downgrade'); f.setAttribute('allowfullscreen','');
      f.style.cssText='border:0;width:100%;height:100%;display:block';
      m.innerHTML=''; m.appendChild(f); f.focus();
    });
  }
  /* 46. סטטוס פתוח/סגור – שורה מתחת לתפריט */
  function stat46(){
    var day,mins;
    try{var pt=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Jerusalem',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
      var g=function(t){for(var i=0;i<pt.length;i++){if(pt[i].type===t)return pt[i].value;}};
      day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')); mins=parseInt(g('hour'),10)*60+parseInt(g('minute'),10);
    }catch(e){var x=new Date();day=x.getDay();mins=x.getHours()*60+x.getMinutes();}
    var close=day<=4?1140:(day===5?840:0), open=close&&mins>=480&&mins<close, txt;
    if(open){ txt=RU?('Открыто · закроется в '+(day===5?'14:00':'19:00')):('פתוח עכשיו · ייסגר בשעה '+(day===5?'14:00':'19:00')); }
    else{ var w; if(close&&mins<480) w=RU?'сегодня':'היום'; else if(day<=4) w=RU?'завтра':'מחר'; else w=RU?'в воскресенье':'ביום ראשון';
      txt=RU?('Закрыто · откроется '+w+' в 08:00'):('סגור כעת · ייפתח '+w+' בשעה 08:00'); }
    return {open:open,txt:txt};
  }
  function status(){
    var ls=d.getElementById('live-status-text');
    var paint=function(){var s=stat46(), col=s.open?'#0E7A3F':'#B00E28';
      [].forEach.call(d.querySelectorAll('.st46'),function(b){var sp=b.querySelector('span'),ii=b.querySelector('i'); if(sp){sp.textContent=s.txt;sp.style.color=col;} if(ii) ii.style.background=col;});
      if(ls){ls.textContent=s.txt; var dot=d.getElementById('live-status-dot'); if(dot) dot.style.background=col;}};
    if(!ls && !d.querySelector('.st46')){
      var nav=d.querySelector('nav'); if(!nav) return;
      var el=d.createElement('div'); el.className='st46'; el.setAttribute('role','status');
      el.innerHTML='<i aria-hidden="true"></i><span></span>';
      var host=nav.parentNode===d.body?nav:nav; host.insertAdjacentElement('afterend',el);
    }
    paint(); setInterval(paint,60000);
  }
  /* 46. תחתית – שעות ואייקונים */
  function foot(){
    var t=d.querySelector('.sfoot-top'); if(!t||d.querySelector('.sfoot-ic')) return;
    var wa='https://wa.me/972544247393'; var nav='https://waze.com/ul?ll=32.007941,34.791490&navigate=yes';
    var box=d.createElement('div');
    box.innerHTML='<p class="sfoot-hrs">'+(RU?'Вс–Чт 8:00–19:00 · Пт 8:00–14:00':'א׳–ה׳ 8:00–19:00 · ו׳ 8:00–14:00 · שבת סגור')+'</p>'+
      '<div class="sfoot-ic"><a href="'+wa+'" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="/images/icon-whatsapp-v58.png" alt="" width="40" height="40" loading="lazy"></a>'+
      '<a class="ph" href="tel:054-424-7393" aria-label="'+(RU?'Позвонить':'התקשרו')+'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></a>'+
      '<a href="'+nav+'" target="_blank" rel="noopener" aria-label="Waze"><img src="/images/icon-waze-v58.png" alt="" width="40" height="40" loading="lazy"></a></div>';
    var nap=t.querySelector('.sfoot-nap'); (nap||t).insertAdjacentElement(nap?'afterend':'beforeend',box);
  }
  /* 4. פס יצירת קשר קבוע בתחתית המסך בנייד */
  function bar(){
    if(d.querySelector('.mbar')) return;
    var wa='https://wa.me/972544247393?text='+encodeURIComponent(RU?'Здравствуйте! У меня вопрос:':'היי אבי, יש לי שאלה:');
    var nav='https://waze.com/ul?ll=32.007941,34.791490&navigate=yes';
    var el=d.createElement('div'); el.className='mbar'; el.setAttribute('role','navigation');
    el.setAttribute('aria-label',RU?'Быстрая связь':'יצירת קשר מהירה');
    el.innerHTML='<a class="mb-call" href="tel:054-424-7393"><span class="mb-i mb-ph"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span>'+(RU?'Позвонить':'התקשרו')+'</a>'+
      '<a class="mb-wa" href="'+wa+'" target="_blank" rel="noopener"><img class="mb-i" src="/images/icon-whatsapp-v58.png" alt="" width="36" height="36">WhatsApp</a>'+
      '<a class="mb-nav" href="'+nav+'" target="_blank" rel="noopener"><img class="mb-i" src="/images/icon-waze-v58.png" alt="" width="36" height="36">'+(RU?'Маршрут':'נווטו')+'</a>';
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
    el.innerHTML='<a class="df-wa" href="'+wa+'" target="_blank" rel="noopener"><img src="/images/icon-whatsapp-v58.png" alt="" width="28" height="28">WhatsApp</a>'+
      '<a class="df-call" href="tel:054-424-7393"><span class="df-ph"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span>054-424-7393</a>';
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
      a.textContent=(RU?'Есть в наличии? ›':'יש במלאי? שאלו ›');
      if(name) a.setAttribute('aria-label',(RU?'Есть в наличии? ':'יש במלאי? שאלו – ')+name);
      f.appendChild(a);
    });
  }
  /* 7. במדריך: מתחת לתמונה הראשונה – יש במלאי? וואטסאפ או שיחה */
  function acta(){
    if(!/^\/blog-/.test(location.pathname)||d.querySelector('.acta')) return;
    var art=d.querySelector('article'); if(!art||art.querySelector('a[href*="wa.me"]')) return;
    var h1=art.querySelector('h1'); var pic=art.querySelector('picture');
    var anchor=pic?(pic.closest('a')||pic):h1; if(!anchor) return;
    var topic=h1?h1.textContent.split(/[:?]/)[0].trim():'';
    var wa='https://wa.me/972544247393?text='+encodeURIComponent('היי אבי, קראתי באתר: '+topic+'. יש לכם את מה שצריך במלאי?');
    var el=d.createElement('div'); el.className='acta';
    el.innerHTML='<p>כל מה שצריך לעבודה הזאת יש בחנות בקריית שרת, חולון. לא בטוחים מה לקנות? שאלו את אבי.</p>'+
      '<a class="ac-wa" href="'+wa+'" target="_blank" rel="noopener"><img class="ico51" style="display:inline-block!important;width:20px!important;height:20px!important;max-width:none!important;max-height:none!important;margin:0 0 0 6px!important;vertical-align:-4px;border-radius:5px" src="/images/icon-whatsapp-v58.png" alt="" width="20" height="20">יש במלאי? שאלו</a>'+
      '<a class="ac-call" href="tel:054-424-7393"><span class="ph51" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span>התקשרו</a>';
    anchor.parentNode.insertBefore(el,anchor.nextSibling);
  }
  function init(){ skip(); bar(); dfab(); pq(); hideFloat(); note(); status(); foot(); nf(); map46(); }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded',init); else init();
})();
