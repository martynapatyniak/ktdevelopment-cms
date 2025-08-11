---
title: Strona główna
layout: layout.njk
permalink: /
---

<!--
  BILINGUAL (PL/EN) — NO RELOAD TOGGLE
  - Używa istniejącego w layout.njk przełącznika języka: .language-switcher a (PL | EN)
  - JS przechwytuje klik i przełącza zawartość lokalnie, bez przeładowania strony
  - Stan zapisujemy w localStorage + odświeżamy atrybuty ARIA i URL (?lang=pl|en) przez history.replaceState
  - Fallback: jeśli JS nie zadziała, linki normalnie prowadzą na /pl/ i /en/
-->

<style>
  /* Pokazuj tylko aktualny język */
  html[data-lang="pl"] .lang-en{ display:none !important; }
  html[data-lang="en"] .lang-pl{ display:none !important; }

  /* Podświetlenie aktywnego języka w istniejącym przełączniku */
  .language-switcher a[aria-current="true"]{ font-weight:700; text-decoration:underline; }
</style>

<main id="home" class="home">
  <!-- ================== POLSKI ================== -->
  <div class="lang-pl" lang="pl">
    <!-- Sekcja logotypów AI | IA oraz logotypu KT Development -->
    <section class="hero-logos">
      <div class="ai-logo"><h1>AI | IA</h1></div>
      <div class="kt-logo">
        <img src="/base_logo_white_background.png" alt="Logo KT Development" />
        <h2>Kacper Turczyński Development</h2>
      </div>
    </section>

    <!-- Hasło i CTA -->
    <section class="hero">
      <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
      <p>KT DEVELOPMENT to firma doradczo‑strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
      <a href="/pl/kontakt/" class="cta-button">Skontaktuj się</a>
    </section>

    <!-- Kim jesteśmy -->
    <section id="about">
      <h3>Kim jesteśmy</h3>
      <p>Twórca: Kacper Turczyński – doradca strategiczny, operator rzeczywistości, człowiek, który nie tylko rozumie AI, ale potrafi je zastosować w życiu i biznesie.</p>
      <p>Wartości: Prawda, efektywność, wolność. Rola AI: partner, nie narzędzie.</p>
    </section>

    <!-- Oferta -->
    <section id="offer">
      <h3>Oferta</h3>
      <ul>
        <li><strong>Konsulting strategiczny</strong> — Transformujemy chaos w strukturę i cele.</li>
        <li><strong>Integracja AI</strong> — Wdrażamy AI nie dla mody, ale dla wyniku.</li>
        <li><strong>Systemy decyzyjne</strong> — Tworzymy modele, które wspierają ludzi, nie ich zastępują.</li>
        <li><strong>Transformacja firm</strong> — Nowe ramy dla starego świata. Bez bullshitu.</li>
      </ul>
    </section>

    <!-- Projekty -->
    <section id="projects">
      <h3>Wybrane projekty</h3>
      <ul>
        <li><strong>CANAL++ WizzAir</strong> — partnerstwo strategiczne w branży medialno‑lotniczej.</li>
        <li><strong>MODUS</strong> — zakończona współpraca z największym dostawcą dla WizzAir.</li>
        <li><strong>In progress</strong> — nowe kierunki na styku AI, consultingu i decyzji.</li>
      </ul>
    </section>

    <!-- Blog -->
    <section id="blog">
      <h3>Blog &amp; Publikacje</h3>
      <p>Tutaj pojawią się treści o AI, strategii i podejmowaniu decyzji w XXI wieku.</p>
    </section>

    <!-- Kontakt -->
    <section id="contact">
      <h3>Kontakt</h3>
      <p>Masz projekt lub potrzebujesz partnera do rozmowy strategicznej? Napisz:
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
      <div class="ai-logo"><h1>AI | IA</h1></div>
      <div class="kt-logo">
        <img src="/base_logo_white_background.png" alt="KT Development logo" />
        <h2>Kacper Turczyński Development</h2>
      </div>
    </section>

    <!-- Hero -->
    <section class="hero">
      <h2>Decisions that bend reality</h2>
      <p>KT DEVELOPMENT is a strategy & advisory company combining technology, AI and human awareness — so things work better, faster and smarter.</p>
      <a href="/en/contact/" class="cta-button">Contact us</a>
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

    <!-- Blog -->
    <section id="blog-en">
      <h3>Blog &amp; Publications</h3>
      <p>Articles on AI, strategy and decision‑making in the 21st century will appear here.</p>
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
    // Podmień ?lang= w URL bez przeładowania
    const params = new URLSearchParams(location.search);
    params.set('lang', lang);
    history.replaceState({}, '', location.pathname + '?' + params.toString() + location.hash);
    // aria-current na przełączniku
    document.querySelectorAll('.language-switcher a').forEach(a=>{
      const code = (a.textContent||'').trim().toLowerCase();
      a.setAttribute('aria-current', code===lang ? 'true':'false');
      a.setAttribute('aria-pressed', code===lang ? 'true':'false');
    });
  }

  // Inicjalizacja
  applyLang(lang);

  // Przechwyć klik w istniejącym przełączniku w nagłówku (layout.njk)
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
