---
title: KT DEVELOPMENT
layout: layout.njk
permalink: /
---

<!-- Styl lokalny tylko dla TEJ strony: odwzorowanie wyglądu z przesłanego index.html
     + drobne poprawki layoutu (desktop) i bezpieczne skalowanie (mobile). -->
<style>
  :root{ --pink:#DF1995; --ink:#111; --page-max:1200px; --gutter:32px; }
  .pink{ color:var(--pink); }

  /* Ustal spójne szerokości sekcji na stronie */
  .hero-logos, .hero, section{ max-width: var(--page-max); margin-left:auto; margin-right:auto; }

  /* ===== HERO / LOGA (jak w referencji) ===== */
  .hero-logos{ margin-top:24px; }
  @media (min-width: 1024px){
    .hero-logos{ display:grid; grid-template-columns: 1fr 1.25fr; align-items:center; gap:40px; padding:0 var(--gutter); }
  }
  @media (max-width: 1023px){
    .hero-logos{ display:flex; flex-direction:column; align-items:center; gap:24px; padding:0 16px; }
  }

  /* "AI | IA" z lewym i prawym blokiem + separator (z referencji) */
  .logo-with-ai{ display:flex; align-items:center; gap: clamp(18px, 3.5vw, 42px); }
  .left-ai, .right-ai{ display:flex; align-items:center; gap: clamp(8px, 1.6vw, 18px); line-height:1; font-weight:800; }
  .left-ai span, .right-ai span{ font-size: clamp(64px, 9vw, 140px); letter-spacing:.02em; }
  .separator{ border-left: 3px solid var(--ink); height: clamp(90px, 11vw, 160px); width:0; }

  /* Prawa kolumna z logo (obrazek) */
  .kt-logo{ display:flex; justify-content:center; align-items:center; }
  .kt-logo img{ width:100%; max-width:640px; height:auto; display:block; }

  /* ===== HERO (szary kartonik, jak na zrzucie) ===== */
  .hero{ margin-top:48px; padding:32px; background:#f5f5f5; border-radius:16px; text-align:center; }
  .hero h2{ margin:0 0 12px; font-size:28px; }
  .hero p{ max-width:760px; margin:0 auto 16px; color:#555; line-height:1.55; }
  .cta-button{ display:inline-block; border-radius:12px; padding:12px 22px; font-weight:600; background:var(--pink); color:#fff; text-decoration:none; }

  /* ===== Sekcje niżej ===== */
  section{ padding-left: var(--gutter); padding-right: var(--gutter); }
  h3{ color: var(--pink); }

  /* ===== HAMBURGER tylko na mobile (ukrywa poziome menu na telefonach) ===== */
  @media (min-width: 769px){
    .hamburger, .mobile-drawer, .mobile-drawer-backdrop{ display:none !important; }
  }
  @media (max-width: 768px){
    header .nav{ display:none !important; }
    .hamburger{
      position:fixed; left:max(16px, env(safe-area-inset-left)); top:max(16px, env(safe-area-inset-top));
      width:50px; height:50px; display:flex; align-items:center; justify-content:center; flex-direction:column;
      background:var(--pink); color:#fff; border-radius:8px; box-shadow:0 4px 20px rgba(223,25,149,.3); z-index:12090;
      -webkit-tap-highlight-color:transparent; touch-action:manipulation;
    }
    .hamburger span{ display:block; width:20px; height:2px; background:#fff; border-radius:2px; transition:all .3s ease; }
    .hamburger span+span{ margin-top:6px; }
    .mobile-drawer{ position:fixed; top:0; left:0; height:100dvh; width:80vw; max-width:320px; background:#fff; transform:translateX(-100%); transition:transform .25s ease; z-index:12095; padding:20px; box-shadow:2px 0 20px rgba(0,0,0,.12); display:block; overflow-y:auto; }
    .mobile-drawer-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,.3); backdrop-filter:blur(2px); opacity:0; pointer-events:none; transition:opacity .2s ease; z-index:12085; display:block; }
    #menu-toggle:checked + .hamburger span:nth-child(1){ transform:rotate(45deg) translate(6px,6px); }
    #menu-toggle:checked + .hamburger span:nth-child(2){ opacity:0; }
    #menu-toggle:checked + .hamburger span:nth-child(3){ transform:rotate(-45deg) translate(6px,-6px); }
    #menu-toggle:checked ~ .mobile-drawer{ transform:translateX(0); }
    #menu-toggle:checked ~ .mobile-drawer-backdrop{ opacity:1; pointer-events:auto; }
  }
</style>

<!-- ===== HERO / LOGA (zgodnie z przesłanym plikiem) ===== -->
<section class="hero-logos">
  <div class="logo-with-ai">
    <div class="left-ai"><span class="pink">A</span><span>I</span></div>
    <div class="separator" aria-hidden="true"></div>
    <div class="right-ai"><span class="pink">I</span><span>A</span></div>
  </div>
  <div class="kt-logo">
    <div style="width:300px;height:150px;background:#f0f0f0;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;color:#DF1995;">
      KT DEVELOPMENT
    </div>
  </div>
</section>

<!-- ===== HERO ===== -->
<section class="hero">
  <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
  <p>KT DEVELOPMENT to firma doradczo-strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
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

