/* === MOBILE POLISH (≤768px) — dopasowanie do screena === */
@media (max-width: 768px){
  /* Header: logo nad tytułem, wyśrodkowane */
  .container-column{ align-items:center; text-align:center; padding: 0 16px; }
  .logo-title{ flex-direction:column; align-items:center; gap:8px; margin: 8px 0 0; }
  .logo{ height: 56px; width:auto; margin:0; }
  .logo-title h1{ margin:0; font-weight:800; font-size: clamp(28px, 7.2vw, 40px); letter-spacing: .2px; }

  /* Przełącznik języka w prawym górnym rogu */
  .language-switcher{ position: fixed; right: 16px; top: 16px; z-index: 12080; font-size: 14px; }
  .language-switcher span{ padding: 0 6px; }

  /* Sekcja z logotypami AI | IA + duże koło po prawej  */
  .hero-logos{ 
    display: grid; 
    grid-template-columns: 1fr 2fr; 
    align-items: center; 
    gap: clamp(12px, 4vw, 24px); 
    max-width: 680px; 
    margin: 20px auto 8px; 
    padding: 0 12px;
  }
  .ai-logo{ display:flex; align-items:center; justify-content:flex-start; }
  .ai-logo h1{ 
    margin:0; 
    font-size: clamp(22px, 7vw, 32px); 
    font-weight: 700; 
    letter-spacing: .08em; 
  }
  .kt-logo{ display:flex; justify-content:center; align-items:center; }
  .kt-logo img{ 
    width: 100%; 
    max-width: clamp(240px, 70vw, 420px);
    height: auto; 
    display:block; 
  }

  /* Hero (hasło + CTA) */
  .hero{ 
    padding: clamp(20px, 6vw, 32px) 16px; 
    background: #f7f7f7; 
    border-radius: 16px 16px 0 0; 
  }
  .hero h2{ 
    text-align:center; 
    font-size: clamp(22px, 6.4vw, 28px); 
    margin: 0 0 8px; 
  }
  .hero p{ 
    max-width: 640px; 
    margin: 0 auto 16px; 
    text-align:center; 
    color:#555; 
    line-height: 1.55; 
  }
  .cta-button{ 
    display:inline-block; 
    margin: 0 auto; 
    border-radius: 12px; 
    padding: 12px 18px; 
    font-weight: 600; 
  }

  /* Hamburger: lewy górny róg, nad wszystkim */
  .hamburger{
    position: fixed !important;
    left: max(16px, env(safe-area-inset-left)) !important;
    top:  max(16px, env(safe-area-inset-top)) !important;
    display: flex !important;
    z-index: 12090 !important;
  }
  .mobile-drawer-backdrop{ z-index: 12085 !important; }
  .mobile-drawer{ z-index: 12095 !important; }

  /* Drobne spacingi dalej na stronie */
  section{ padding: 20px 16px; }
}
