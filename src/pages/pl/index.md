---
title: Strona główna
layout: layout.njk
permalink: /
---

<style>
  /* === USUŃ SZARĄ LINIĘ POD NAGŁÓWKIEM === */
  header, .header{ border-bottom:none !important; box-shadow:none !important; }

  /* === NO-RELOAD LANGUAGE TOGGLE (widoczność bloków) === */
  html[data-lang="pl"] .lang-en{ display:none !important; }
  html[data-lang="en"] .lang-pl{ display:none !important; }
  .language-switcher a[aria-current="true"]{ font-weight:700; text-decoration:underline; }

  /* === AI|IA — wersja jak wcześniej (różowo-czarne, duże) === */
  :root{ --pink:#DF1995; --ink:#111; }
  .ai-lockup{ display:inline-grid; grid-auto-flow:column; align-items:center; gap: clamp(8px, 1.2vw, 16px); }
  .ai-lockup .ch{ line-height:1; font-weight:300; letter-spacing:0; font-size: clamp(64px, 8.5vw, 140px); }
  .ai-lockup .pink{ color: var(--pink); }
  .ai-lockup .ink{ color: var(--ink); }
  .ai-lockup .bar{ width: 2px; height: clamp(80px, 10vw, 150px); background: var(--ink); display:block; }

  @media (max-width: 1023px){
    .ai-lockup{ gap: clamp(6px, 2.5vw, 10px); }
    .ai-lockup .ch{ font-size: clamp(36px, 12vw, 64px); }
    .ai-lockup .bar{ height: clamp(42px, 14vw, 76px); }
  }
</style>

<main id="home" class="home">
  <!-- ================== POLSKI ================== -->
  <div class="lang-pl" lang="pl">
    <!-- Sekcja logotypów AI | IA oraz logotypu KT Development -->
    <section class="hero-logos">
      <div class="ai-lockup" role="img" aria-label="AI | IA">
        <span class="ch pink">A</span>
        <span class="ch ink">I</span>
        <span class="bar" aria-hidden="true"></span>
        <span class="ch pink">I</span>
        <span class="ch ink">A</span>
      </div>
      <div class="kt-logo">
        <img src="/base_logo_white_background.png" alt="Logo KT Development" />
      </div>
    </section>

    <!-- Hasło i CTA -->
    <section class="hero">
      <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
      <p>KT DEVELOPMENT to firma doradczo-strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
      <a href="https://calendly.com/kacper-turczynski-ktdevelopment/45-minute-meeting-spotkanie?back=1" class="cta-button">Umów konsultacje</a>
    </section>

    <!-- Kim jesteśmy -->
    <section id="about">
      <h3>Kim jesteśmy</h3>
      <p>Twórca: Kacper Turczyński – doradca strategiczny, operator rzeczywistości, człowiek, który nie tylko rozumie AI, ale potrafi je zastosować w życiu i biznesie.</p>
      <p>Wartości: Prawda, efektywność, wolność.  Rola AI: partner, nie narzędzie.</p>
    </section>

    <!-- Oferta -->
    <section id="offer">
      <h3>Oferta</h3>
      <ul>
        <li><strong>Konsulting strategiczny</strong> — Transformujemy chaos w strukturę i cele.</li>
        <li><strong>Integracja AI</strong> — Wdrażamy AI nie dla mody, ale dla wyniku.</li>
        <li><strong>Systemy decyzyjne</strong> — Tworzymy modele, które wspierają ludzi, nie ich zastępują.</li>
        <li><strong>Transformacja firm</strong> — Nowe ramy dla starego świata.  Bez bullshitu.</li>
      </ul>
    </section>

    <!-- Projekty -->
    <section id="projects">
      <h3>Wybrane projekty</h3>
      <ul>
        <li><strong>CANAL++ WizzAir</strong> — partnerstwo strategiczne w branży medialno-lotniczej.</li>
        <li><strong>MODUS</strong> — zakończona współpraca z największym dostawcą dla WizzAir.</li>
        <li><strong>In progress</strong> — nowe kierunki na styku AI, consultingu i decyzji.</li>
      </ul>
    </section>

    <!-- Kontakt -->
    <section id="contact">
      <h3>Kontakt</h3>
      <p>Masz projekt lub potrzebujesz partnera do rozmowy strategicznej?  Napisz:
        <a href="mailto:kontakt@ktdevelopment.pl">kontakt@ktdevelopment.pl</a></p>
    </section>

    <footer>
      <p>© 2025 KT DEVELOPMENT. Wszystkie prawa zastrzeżone.</p>
    </footer>
  </div>

  <!-- ================== ENGLISH ================== -->
  <div class="lang-en" lang="en">
    <!-- Logos section -->
    <section class="hero-logos">
      <div class="ai-lockup" role="img" aria-label="AI | IA">
        <span class="ch pink">A</span>
        <span class="ch ink">I</span>
        <span class="bar" aria-hidden="true"></span>
        <span class="ch pink">I</span>
        <span class="ch ink">A</span>
      </div>
      <div class="kt-logo">
        <img src="/base_logo_white_background.png" alt="KT Development logo" />
      </div>
    </section>

    <!-- Hero -->
    <section class="hero">
      <h2>Decisions that bend reality</h2>
      <p>KT DEVELOPMENT is a strategy & advisory company combining technology, AI and human awareness — so things work better, faster and smarter.</p>
      <a href="https://calendly.com/kacper-turczynski-ktdevelopment/45-minute-meeting-spotkanie?back=1" class="cta-button">Book a consultation</a>
    </section>

    <!-- About -->
    <section id="about-en">
      <h3>Who we are</h3>
      <p>Founder: Kacper Turczyński — strategic advisor, operator of reality, a person who not only understands AI but applies it in life and business.</p>
      <p>Values: Truth, efficiency, freedom. Role of AI: a partner, not a tool.</p>
    </section>

    <!-- Offer -->
    <section id="offer-en">
      <h3>Offer</h3>
      <ul>
        <li><strong>Strategic consulting</strong> — We turn chaos into structure and goals.</li>
        <li><strong>AI integration</strong> — Implementing AI for outcomes, not hype.</li>
        <li><strong>Decision systems</strong> — Models that support people rather than replace them.</li>
        <li><strong>Business transformation</strong> — New frames for the old world. No nonsense.</li>
      </ul>
    </section>

    <!-- Projects -->
    <section id="projects-en">
      <h3>Selected projects</h3>
      <ul>
        <li><strong>CANAL++ × WizzAir</strong> — strategic partnership across media & aviation.</li>
        <li><strong>MODUS</strong> — completed cooperation with the largest WizzAir supplier.</li>
        <li><strong>In progress</strong> — new directions at the intersection of AI, consulting and decisions.</li>
      </ul>
    </section>

    <!-- Contact -->
    <section id="contact-en">
      <h3>Contact</h3>
      <p>Have a project or need a strategic sparring partner? Write to:
        <a href="mailto:kontakt@ktdevelopment.pl">kontakt@ktdevelopment.pl</a></p>
    </section>

    <footer>
      <p>© 2025 KT DEVELOPMENT. All rights reserved.</p>
    </footer>
  </div>
</main>

<!-- Skrypty językowe i nawigacyjne bez zmian -->
<script>
(function(){
  const LS_KEY = 'site_lang';
  const qs = new URLSearchParams(location.search);
  const urlLang = qs.get('lang');
  const saved = localStorage.getItem(LS_KEY);
  const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().startsWith('pl') ? 'pl' : 'en';
  let lang = (urlLang==='pl'||urlLang==='en') ? urlLang : (saved || navLang);

  function applyLang(newLang){
    lang = newLang;
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(LS_KEY, lang);
    const params = new URLSearchParams(location.search);
    params.set('lang', lang);
    history.replaceState({}, '', location.pathname + '?' + params.toString() + location.hash);
    document.querySelectorAll('.language-switcher a').forEach(a=>{
      const code = (a.textContent||'').trim().toLowerCase();
      a.setAttribute('aria-current', code===lang ? 'true':'false');
      a.setAttribute('aria-pressed', code===lang ? 'true':'false');
    });
  }
  applyLang(lang);

  const switcher = document.querySelector('.language-switcher');
  if(switcher){
    switcher.addEventListener('click', function(e){
      const a = e.target.closest('a');
      if(!a) return;
      const code = (a.textContent||'').trim().toLowerCase();
      if(code==='pl' || code==='en'){
        e.preventDefault();
        applyLang(code);
      }
    }, true);
  }
})();
</script>

<script>
(function(){
  const labels = {
    pl: { home: 'Strona główna', offer: 'Oferta', projects: 'Projekty', blog: 'Blog', contact: 'Kontakt' },
    en: { home: 'Home',          offer: 'Offer',  projects: 'Projects', blog: 'Blog', contact: 'Contact' }
  };
  function normalize(href){
    try{ return new URL(href, location.origin).pathname; }catch(_){ return href||''; }
  }
  function setNavLabels(lang){
    const L = labels[lang] || labels.pl;
    document.querySelectorAll('header .nav a, #mobile-drawer nav a').forEach(a=>{
      const p = normalize(a.getAttribute('href'));
      let key = null;
      if (p==='/' || p==='/pl/' || p==='/pl/index/') key='home';
      else if (p.startsWith('/pl/oferta/')) key='offer';
      else if (p.startsWith('/pl/projekty/')) key='projects';
      else if (p.startsWith('/blog/')) key='blog';
      else if (p.startsWith('/pl/kontakt/')) key='contact';
      if(key) a.textContent = L[key];
    });
  }
  function currentLang(){ return document.documentElement.getAttribute('data-lang') || 'pl'; }
  setNavLabels(currentLang());
  new MutationObserver(muts=>{
    for(const m of muts){ if(m.type==='attributes' && m.attributeName==='data-lang'){ setNavLabels(currentLang()); break; } }
  }).observe(document.documentElement, { attributes:true });
})();
</script>

<script>
(function(){
  function currentLang(){ return document.documentElement.getAttribute('data-lang') || 'pl'; }
  function pathOf(href){ try{ return new URL(href, location.origin).pathname; }catch(_){ return href||''; } }
  function isHomeLink(a){
    const p = pathOf(a.getAttribute('href'));
    const t = (a.textContent||'').trim().toLowerCase();
    return t==='strona główna' || t==='home' || p==='/' || p==='/pl/' || p==='/pl/index/';
  }
  function rewriteHomeHrefs(){
    document.querySelectorAll('header .nav a, #mobile-drawer nav a').forEach(a=>{
      if(isHomeLink(a)) a.setAttribute('href','/?lang='+currentLang());
    });
  }
  rewriteHomeHrefs();
  new MutationObserver(m=>{
    for(const x of m){ if(x.type==='attributes' && x.attributeName==='data-lang'){ rewriteHomeHrefs(); break; }}
  }).observe(document.documentElement,{ attributes:true });

  document.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a || !isHomeLink(a)) return;
    e.preventDefault();
    const url='/?lang='+currentLang();
    if(location.pathname==='/' && new URLSearchParams(location.search).get('lang')===currentLang()){
      window.scrollTo({top:0, behavior:'smooth'});
    }else{
      location.assign(url);
    }
    const cb=document.getElementById('menu-toggle'); if(cb){ cb.checked=false; }
  }, true);
})();
</script>
