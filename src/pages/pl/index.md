---
title: KT DEVELOPMENT
layout: layout.njk
permalink: /
---

<!-- Styl lokalny tylko dla TEJ strony:
     • układ jak w referencji (AI||IA po lewej, duże logo po prawej, „kartonik” z hasłem)
     • hamburger tylko na mobile (≤768px), bez ruszania innych podstron -->
<style>
  :root{ --pink:#DF1995; --ink:#111; --page-max:1200px; --gutter:32px; }
  .hero-logos, .hero, section{ max-width: var(--page-max); margin-left:auto; margin-right:auto; }

  /* ===== AI||IA — litery + dwie pionowe kreski ===== */
  .ai-lockup{ display:inline-grid; grid-auto-flow:column; align-items:center; gap: clamp(14px, 1.8vw, 26px); }
  .ai-lockup .ch{ line-height:1; letter-spacing:.02em; }
  .ai-lockup .ch.a{ font-weight:800; }
  .ai-lockup .ch.i{ font-weight:600; }
  .ai-lockup .bar{ width:3px; display:block; }
  .ai-lockup .bar.ink{ background: var(--ink); }
  .ai-lockup .bar.pink{ background: var(--pink); margin-left:-6px; } /* zbliżenie kresek */
  .ai-lockup .pink{ color: var(--pink); }
  .ai-lockup .ink{ color: var(--ink); }

  /* ===== Desktop (jak na zrzucie) ===== */
  @media (min-width: 1024px){
    .hero-logos{ display:grid; grid-template-columns: 1fr 1.25fr; align-items:center; gap:40px; margin-top:24px; padding:0 var(--gutter); }
    .ai-lockup .ch{ font-size: clamp(72px, 9vw, 140px); }
    .ai-lockup .bar{ height: clamp(90px, 11vw, 160px); }

    .kt-logo{ display:flex; justify-content:center; align-items:center; }
    .kt-logo img{ width:100%; max-width: 640px; height:auto; display:block; }

    .hero{ margin-top:48px; padding:32px; background:#f5f5f5; border-radius:16px; text-align:center; }
    .hero h2{ margin:0 0 12px; font-size:28px; }
    .hero p{ max-width:760px; margin:0 auto 16px; color:#555; line-height:1.55; }
    .cta-button{ border-radius:12px; padding:12px 22px; font-weight:600; background:var(--pink); color:#fff; text-decoration:none; }

    section{ padding-left:var(--gutter); padding-right:var(--gutter); }
    h3{ color:var(--pink); }
  }

  /* ===== Mobile (bezpieczne skalowanie) ===== */
  @media (max-width: 1023px){
    .hero-logos{ display:flex; flex-direction:column; gap:24px; align-items:center; margin-top:16px; padding:0 16px; }
    .ai-lockup .ch{ font-size: clamp(36px, 12vw, 64px); }
    .ai-lockup .bar{ height: clamp(44px, 14vw, 80px); }
    .kt-logo img{ max-width: clamp(240px, 80vw, 480px); height:auto; }
    .hero{ padding:24px 16px; background:#f7f7f7; border-radius:16px 16px 0 0; text-align:center; }
    section{ padding:0 16px; }
  }

  /* ===== HAMBURGER tylko na mobile (≤768px) ===== */
  @media (min-width: 769px){
    .hamburger, .mobile-drawer, .mobile-drawer-backdrop{ display:none !important; }
  }
  @media (max-width: 768px){
    /* Ukryj poziome menu z headera na telefonach */
    header .nav{ display:none !important; }

    .hamburger{
      position: fixed; left: max(16px, env(safe-area-inset-left)); top: max(16px, env(safe-area-inset-top));
      width:50px; height:50px; display:flex; align-items:center; justify-content:center; flex-direction:column;
      background:var(--pink); color:#fff; border-radius:8px; box-shadow:0 4px 20px rgba(223,25,149,.3); z-index:12090;
      -webkit-tap-highlight-color: transparent; touch-action: manipulation;
    }
    .hamburger span{ display:block; width:20px; height:2px; background:#fff; border-radius:2px; transition:all .3s ease; }
    .hamburger span+span{ margin-top:6px; }

    .mobile-drawer{
      position:fixed; top:0; left:0; height:100dvh; width:80vw; max-width:320px; background:#fff;
      transform:translateX(-100%); transition:transform .25s ease; z-index:12095; padding:20px; box-shadow:2px 0 20px rgba(0,0,0,.12);
      display:block; overflow-y:auto;
    }
    .mobile-drawer header{ display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
    .mobile-drawer .close{ font-size:24px; background:none; border:0; padding:8px; cursor:pointer; }
    .mobile-drawer nav{ display:flex; flex-direction:column; gap:14px; }
    .mobile-drawer a{ text-decoration:none; color:#333; font-weight:500; padding:12px 8px; border-bottom:1px solid #eee; }

    .mobile-drawer-backdrop{
      position:fixed; inset:0; background:rgba(0,0,0,.3); backdrop-filter:blur(2px);
      opacity:0; pointer-events:none; transition:opacity .2s ease; z-index:12085; display:block;
    }

    /* Interakcje (checkbox steruje) */
    #menu-toggle:checked + .hamburger span:nth-child(1){ transform:rotate(45deg) translate(6px,6px); }
    #menu-toggle:checked + .hamburger span:nth-child(2){ opacity:0; }
    #menu-toggle:checked + .hamburger span:nth-child(3){ transform:rotate(-45deg) translate(6px,-6px); }
    #menu-toggle:checked ~ .mobile-drawer{ transform:translateX(0); }
    #menu-toggle:checked ~ .mobile-drawer-backdrop{ opacity:1; pointer-events:auto; }
  }
</style>

<!-- === HAMBURGER (MOBILE-ONLY) — ważna kolejność rodzeństwa! === -->
<input type="checkbox" id="menu-toggle" class="menu-toggle" style="position:absolute;left:-9999px;top:-9999px" />
<label for="menu-toggle" class="hamburger" aria-label="Otwórz menu" aria-controls="mobile-drawer" aria-expanded="false">
  <span></span><span></span><span></span>
</label>
<aside id="mobile-drawer" class="mobile-drawer" role="navigation" aria-label="Menu">
  <header>
    <h2>Menu</h2>
    <label for="menu-toggle" class="close" aria-label="Zamknij">×</label>
  </header>
  <nav>
    <a href="#about">O nas</a>
    <a href="#offer">Oferta</a>
    <a href="#projects">Projekty</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Kontakt</a>
  </nav>
</aside>
<label for="menu-toggle" class="mobile-drawer-backdrop" aria-hidden="true"></label>

<!-- ===== HERO / LOGA ===== -->
<section class="hero-logos">
  <div class="ai-lockup" role="img" aria-label="AI | IA">
    <span class="ch a" style="color:var(--pink)">A</span>
    <span class="ch i" style="color:var(--ink)">I</span>
    <span class="bar ink" aria-hidden="true"></span>
    <span class="bar pink" aria-hidden="true"></span>
    <span class="ch i" style="color:var(--pink)">I</span>
    <span class="ch a" style="color:var(--ink)">A</span>
  </div>
  <div class="kt-logo">
    <img src="/base_logo_white_background.png" alt="Kacper Turczyński Development — logo" />
  </div>
</section>

<!-- ===== HERO ===== -->
<section class="hero">
  <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
  <p>KT DEVELOPMENT to firma doradczo‑strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
  <a href="#contact" class="cta-button">Skontaktuj się</a>
</section>

<!-- ===== O NAS ===== -->
<section id="about">
  <h3>Kim jesteśmy</h3>
  <p>Twórca: Kacper Turczyński – doradca strategiczny, operator rzeczywistości, człowiek, który nie tylko rozumie AI, ale potrafi je zastosować w życiu i biznesie.</p>
</section>

<!-- ===== OFERTA ===== -->
<section id="offer">
  <h3>Oferta</h3>
  <ul>
    <li><strong>Konsulting strategiczny</strong> – Transformujemy chaos w strukturę i cele.</li>
    <li><strong>Integracja AI</strong> – Wdrażamy AI nie dla mody, ale dla wyniku.</li>
  </ul>
</section>

<!-- ===== KONTAKT ===== -->
<section id="contact">
  <h3>Kontakt</h3>
  <p>Masz projekt? Napisz: <a href="mailto:kontakt@ktdevelopment.pl">kontakt@ktdevelopment.pl</a></p>
</section>

<footer>
  <p>© 2025 KT DEVELOPMENT. Wszystkie prawa zastrzeżone.</p>
</footer>
