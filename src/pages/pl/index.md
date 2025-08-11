---
title: Strona główna
layout: layout.njk
permalink: /
---

<!-- Styl dopasowany do zrzutu (desktop) + bezpieczny mobile tylko dla tej strony -->
<style>
  :root{ --page-max: 1200px; --gutter: 32px; --pink:#DF1995; }

  /* Ustal szerokość sekcji na stronie */
  .hero-logos, .hero, section{ max-width: var(--page-max); margin-left:auto; margin-right:auto; }

  /* DESKTOP (jak na screenie) */
  @media (min-width: 1024px){
    /* górny blok z AI|IA i dużym logotypem po prawej */
    .hero-logos{
      display:grid;
      grid-template-columns: 1fr 1.2fr;
      align-items:center;
      gap:40px;
      margin-top:24px;
      padding:0 var(--gutter);
    }
    .ai-logo{ display:flex; align-items:center; justify-content:flex-start; }
    .ai-logo h1{
      margin:0;
      font-size: clamp(72px, 9vw, 140px);
      font-weight:700;
      letter-spacing:.08em;
    }
    .kt-logo{ display:flex; justify-content:center; align-items:center; }
    .kt-logo img{
      width:100%;
      max-width:640px;  /* wielkość koła jak na screenie */
      height:auto; display:block;
    }

    /* szary „kartonik” z hasłem i CTA */
    .hero{
      margin-top:48px;
      padding:32px;
      background:#f5f5f5;
      border-radius:16px;
      text-align:center;
    }
    .hero h2{ margin:0 0 12px; font-size:28px; }
    .hero p{ max-width:760px; margin:0 auto 16px; color:#555; line-height:1.55; }
    .cta-button{ border-radius:12px; padding:12px 22px; font-weight:600; }

    /* zwykłe sekcje niżej */
    section{ padding-left:var(--gutter); padding-right:var(--gutter); }
    h3{ color:var(--pink); }
  }

  /* MOBILE (bezpiecznie – nic się nie rozjedzie) */
  @media (max-width: 1023px){
    .hero-logos{
      display:flex; flex-direction:column; gap:24px; align-items:center;
      margin-top:16px; padding:0 16px;
    }
    .ai-logo h1{ font-size: clamp(36px, 12vw, 64px); margin:0; }
    .kt-logo img{ max-width: clamp(240px, 80vw, 480px); height:auto; }
    .hero{ padding:24px 16px; background:#f7f7f7; border-radius:16px 16px 0 0; text-align:center; }
    section{ padding:0 16px; }
  }
</style>

<!-- Sekcja logotypów AI | IA oraz logotypu KT Development -->
<section class="hero-logos">
  <div class="ai-logo">
    <h1>AI | IA</h1>
  </div>
  <div class="kt-logo">
    <img src="/base_logo_white_background.png" alt="Logo KT Development" />
    <h2>Kacper Turczyński Development</h2>
  </div>
</section>

<!-- Hasło i CTA -->
<section class="hero">
  <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
  <p>KT DEVELOPMENT to firma doradczo-strategyczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
  <a href="/pl/kontakt/" class="cta-button">Skontaktuj się</a>
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

<!-- Blog -->
<section id="blog">
  <h3>Blog &amp; Publikacje</h3>
  <p>Tutaj pojawią się treści o AI, strategii i podejmowaniu decyzji w XXI wieku.</p>
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
