---
title: Strona główna
layout: layout.njk
permalink: /
---

<!-- Lokalny styl tylko dla TEJ strony: AI|IA cieńsze (300) + JEDEN czarny separator (2px).
     Dodatkowo lekki układ jak w referencji: AI|IA po lewej, duże logo po prawej; mobile skaluje się bezpiecznie. -->
<style>
  :root{ --pink:#DF1995; --ink:#111; --page-max:1200px; --gutter:32px; --ai-weight:300; --bar:2px; }
  .hero-logos, .hero, section{ max-width: var(--page-max); margin-left:auto; margin-right:auto; }

  /* ===== AI|IA – litery cieńsze + 1 separator ===== */
  .ai-lockup{ display:inline-grid; grid-auto-flow:column; align-items:center; gap: clamp(14px, 1.8vw, 26px); }
  .ai-lockup .ch{ line-height:1; letter-spacing:.01em; font-weight: var(--ai-weight); }
  .ai-lockup .pink{ color: var(--pink); }
  .ai-lockup .ink{ color: var(--ink); }
  .ai-lockup .bar{ width: var(--bar); background: var(--ink); display:block; }

  /* ===== Desktop (jak na zrzucie) ===== */
  @media (min-width: 1024px){
    .hero-logos{ display:grid; grid-template-columns: 1fr 1.25fr; align-items:center; gap:40px; margin-top:24px; padding:0 var(--gutter); }
    .ai-lockup .ch{ font-size: clamp(68px, 8.6vw, 132px); }
    .ai-lockup .bar{ height: clamp(88px, 10.8vw, 154px); }

    .kt-logo{ display:flex; justify-content:center; align-items:center; }
    .kt-logo img{ width:100%; max-width: 640px; height:auto; display:block; }

    .hero{ margin-top:48px; padding:32px; background:#f5f5f5; border-radius:16px; text-align:center; }
    .hero h2{ margin:0 0 12px; font-size:28px; }
    .hero p{ max-width:760px; margin:0 auto 16px; color:#555; line-height:1.55; }
    .cta-button{ border-radius:12px; padding:12px 22px; font-weight:600; background:var(--pink); color:#fff; text-decoration:none; }

    section{ padding-left:var(--gutter); padding-right:var(--gutter); }
    h3{ color: var(--pink); }
  }

  /* ===== Mobile (skalowanie) ===== */
  @media (max-width: 1023px){
    .hero-logos{ display:flex; flex-direction:column; gap:24px; align-items:center; margin-top:16px; padding:0 16px; }
    .ai-lockup .ch{ font-size: clamp(34px, 12vw, 60px); }
    .ai-lockup .bar{ height: clamp(42px, 14vw, 76px); }
    .kt-logo img{ max-width: clamp(240px, 80vw, 480px); height:auto; }
    .hero{ padding:24px 16px; background:#f7f7f7; border-radius:16px 16px 0 0; text-align:center; }
    section{ padding:0 16px; }
  }
</style>

<!-- ===== HERO / LOGA ===== -->
<section class="hero-logos">
  <div class="ai-lockup" role="img" aria-label="AI | IA">
    <span class="ch pink">A</span>
    <span class="ch ink">I</span>
    <span class="bar" aria-hidden="true"></span>
    <span class="ch pink">I</span>
    <span class="ch ink">A</span>
  </div>
  <div class="kt-logo">
    <img src="/base_logo_white_background.png" alt="Kacper Turczyński Development — logo" />
  </div>
</section>

<!-- ===== HERO ===== -->
<section class="hero">
  <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
  <p>KT DEVELOPMENT to firma doradczo‑strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
  <a href="/pl/kontakt/" class="cta-button">Skontaktuj się</a>
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
