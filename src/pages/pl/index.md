---
title: Strona główna
layout: layout.njk
permalink: /pl/index/
---

<!-- === HAMBURGER (MOBILE-ONLY) – korzysta z globalnego CSS === -->
<input type="checkbox" id="menu-toggle" class="menu-toggle" />
<label for="menu-toggle" class="hamburger" aria-label="Otwórz menu" aria-controls="mobile-drawer" aria-expanded="false">
  <span></span><span></span><span></span>
</label>

<aside id="mobile-drawer" class="mobile-drawer" role="navigation" aria-label="Menu">
  <header>
    <h2>Menu</h2>
    <!-- Zamykacz jako label, działa bez JS -->
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

<!-- Backdrop również jako label (klik zamyka) -->
<label for="menu-toggle" class="mobile-drawer-backdrop" aria-hidden="true"></label>
<!-- === /HAMBURGER === -->

<!-- Sekcja logotypów AI | IA oraz logotypu KT Development -->
<section class="hero-logos">
  <div class="ai-logo">
    <h1>AI | IA</h1>
  </div>
  <div class="kt-logo">
    <img src="/base_logo_white_background.png" alt="Logo KT Development" />
    <h2>Kacper Turczyński Development</h2>
  </div>
</section>

<!-- Hasło i CTA -->
<section class="hero">
  <h2>Decyzje, które zakrzywiają rzeczywistość</h2>
  <p>KT DEVELOPMENT to firma doradczo‑strategyczna, która łączy technologię, AI i ludzką świadomość w jednym celu – by rzeczy działały lepiej, szybciej i mądrzej.</p>
  <a href="/pl/kontakt/" class="cta-button">Skontaktuj się</a>
</section>

<!-- Kim jesteśmy -->
<section id="about">
  <h3>Kim jesteśmy</h3>
  <p>Twórca: Kacper Turczyński – doradca strategiczny, operator rzeczywistości, człowiek, który nie tylko rozumie AI, ale potrafi je zastosować w życiu i biznesie.</p>
  <p>Wartości: Prawda, efektywność, wolność.  Rola AI: partner, nie narzędzie.</p>
</section>

<!-- Oferta -->
<section id="offer">
  <h3>Oferta</h3>
  <ul>
    <li><strong>Konsulting strategiczny</strong> — Transformujemy chaos w strukturę i cele.</li>
    <li><strong>Integracja AI</strong> — Wdrażamy AI nie dla mody, ale dla wyniku.</li>
    <li><strong>Systemy decyzyjne</strong> — Tworzymy modele, które wspierają ludzi, nie ich zastępują.</li>
    <li><strong>Transformacja firm</strong> — Nowe ramy dla starego świata.  Bez bullshitu.</li>
  </ul>
</section>

<!-- Projekty -->
<section id="projects">
  <h3>Wybrane projekty</h3>
  <ul>
    <li><strong>CANAL++ WizzAir</strong> — partnerstwo strategiczne w branży medialno‑lotniczej.</li>
    <li><strong>MODUS</strong> — zakończona współpraca z największym dostawcą dla WizzAir.</li>
    <li><strong>In progress</strong> — nowe kierunki na styku AI, consultingu i decyzji.</li>
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
  <p>© 2025 KT DEVELOPMENT. Wszystkie prawa zastrzeżone.</p>
</footer>
