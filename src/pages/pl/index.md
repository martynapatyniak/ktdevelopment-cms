---
title: Strona główna
layout: layout.njk
permalink: /
---

<style>
  /* Reset i podstawowe style */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
    font-family: 'Arial', sans-serif;
    background: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  /* Desktop: ukryj elementy hamburgera z tej strony */
  @media (min-width: 769px){
    .hamburger, .mobile-drawer, .mobile-drawer-backdrop { display: none !important; }
  }
  
  /* Mobile: pokaż hamburger + drawer i ukryj poziome menu z layoutu */
  @media (max-width: 768px){
    header .nav{ display:none !important; }

    /* Przycisk w lewym górnym rogu */
    .hamburger{
      position: fixed; left: max(16px, env(safe-area-inset-left)); top: max(16px, env(safe-area-inset-top));
      width:50px; height:50px; display:flex; align-items:center; justify-content:center; flex-direction:column;
      background:#DF1995; color:#fff; border-radius:8px; box-shadow:0 4px 20px rgba(223,25,149,.3); z-index:12090;
      -webkit-tap-highlight-color: transparent; touch-action: manipulation;
    }
    .hamburger span{ display:block; width:20px; height:2px; background:#fff; border-radius:2px; transition:all .3s ease; }
    .hamburger span + span{ margin-top:6px; }

    /* Drawer + backdrop */
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

  /* Header z nawigacją */
  header {
    background: white;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo img {
    height: 40px;
  }

  .logo h1 {
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
  }

  .nav {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav a:hover {
    color: #DF1995;
  }

  .lang-switch {
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .lang-switch a {
    text-decoration: none;
    color: #666;
    padding: 0.25rem 0.5rem;
  }

  .lang-switch a.active {
    color: #DF1995;
    font-weight: bold;
  }

  /* Główna sekcja hero z logami */
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 2rem 2rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }

  .logos-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin-bottom: 4rem;
    width: 100%;
    max-width: 1200px;
  }

  .ai-logo {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .ai-logo h1 {
    font-size: clamp(4rem, 12vw, 8rem);
    font-weight: 300;
    letter-spacing: 2px;
    background: linear-gradient(45deg, #DF1995, #ff6b9d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .kt-logo-container {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kt-logo-circle {
    width: 300px;
    height: 300px;
    border: 2px solid #DF1995;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0 10px 40px rgba(223, 25, 149, 0.1);
    padding: 2rem;
  }

  .kt-logo-circle img {
    height: 60px;
    margin-bottom: 1rem;
  }

  .kt-logo-circle h2 {
    font-size: 1rem;
    color: #333;
    text-align: center;
    line-height: 1.3;
    font-weight: 500;
  }

  .kt-logo-circle .business-partner {
    font-size: 0.7rem;
    color: #666;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Hero content */
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-content h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #333;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  .hero-content p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }

  .cta-button {
    background: #DF1995;
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    box-shadow: 0 4px 20px rgba(223, 25, 149, 0.3);
  }

  .cta-button:hover {
    background: #c91680;
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(223, 25, 149, 0.4);
  }

  /* Sekcje content */
  section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  section h3 {
    font-size: 2rem;
    color: #DF1995;
    margin-bottom: 2rem;
    text-align: center;
  }

  section p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #555;
  }

  section ul {
    list-style: none;
    padding-left: 0;
  }

  section ul li {
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
    font-size: 1.1rem;
    color: #555;
  }

  section ul li:last-child {
    border-bottom: none;
  }

  section ul li strong {
    color: #DF1995;
    font-weight: 600;
  }

  /* Footer */
  footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .header-content {
      padding: 0 1rem;
    }

    .logos-container {
      flex-direction: column;
      gap: 3rem;
    }

    .kt-logo-circle {
      width: 250px;
      height: 250px;
    }

    .hero-content h2 {
      font-size: 2rem;
    }

    .hero-content p {
      font-size: 1rem;
    }

    section {
      padding: 3rem 1rem;
    }
  }
</style>

<!-- Ważna kolejność rodzeństwa: input → label.hamburger → aside.drawer → label.backdrop -->
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

<!-- Header z nawigacją -->
<header>
  <div class="header-content">
    <div class="logo">
      <img src="/base_logo_white_background.png" alt="KT Development Logo" />
      <h1>KT DEVELOPMENT</h1>
    </div>
    <nav class="nav">
      <a href="#about">O nas</a>
      <a href="#offer">Oferta</a>
      <a href="#projects">Projekty</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Kontakt</a>
    </nav>
    <div class="lang-switch">
      <a href="#" class="active">PL</a>
      <span>|</span>
      <a href="#">EN</a>
    </div>
  </div>
</header>

<!-- Główna sekcja hero -->
<section class="hero-section">
  <div class="logos-container">
    <div class="ai-logo">
      <h1>AI | IA</h1>
    </div>
    <div class="kt-logo-container">
      <div class="kt-logo-circle">
        <img src="/base_logo_white_background.png" alt="Logo KT Development" />
        <h2>KACPER TURCZYŃSKI<br>DEVELOPMENT</h2>
        <div class="business-partner">BUSINESS PARTNER</div>
      </div>
    </div>
  </div>
  
  <div class="hero-content">
    <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
    <p>KT DEVELOPMENT to firma doradczo‑strategiczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
    <a href="/pl/kontakt/" class="cta-button">Skontaktuj się</a>
  </div>
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
