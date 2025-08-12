<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title or "KT Development" }}</title>
    <!-- Podbij numer po zmianach CSS -->
    <link rel="stylesheet" href="{{ '/styles.css?v=12' | url }}" />

    <!-- Nadpisanie stylów żeby usunąć szarą kreskę -->
    <style>
      header {
        border: none !important;
        box-shadow: none !important;
      }
      header .container-column {
        border: none !important;
        box-shadow: none !important;
      }
    </style>
  </head>
  <body>

    <header>
      <!-- === HAMBURGER + DRAWER (MOBILE) === -->
      <input type="checkbox" id="menu-toggle" class="menu-toggle" />

      <label
        for="menu-toggle"
        class="hamburger"
        aria-label="Otwórz menu"
        aria-controls="mobile-drawer"
        aria-expanded="false"
      >
        <span></span><span></span><span></span>
      </label>

      <div class="mobile-drawer-backdrop" id="menu-backdrop"></div>

      <aside id="mobile-drawer" class="mobile-drawer" role="navigation" aria-label="Główne">
        <header>
          <h2>Menu</h2>
          <button class="close" id="menu-close" aria-label="Zamknij">×</button>
        </header>
        <nav>
          <a href="/" data-home>Strona główna</a>
          <a href="/pl/oferta/">Oferta</a>
          <a href="/pl/projekty/">Projekty</a>
          <a href="/blog/">Blog</a>
          <a href="/pl/kontakt/">Kontakt</a>
        </nav>
      </aside>
      <!-- === /HAMBURGER === -->

      <div class="container-column">
        <div class="logo-title">
          <!-- Samo logo bez widocznego H1 -->
          <a href="/" data-home aria-label="KT Development">
            <img src="/base_icon_white_background.png" alt="KT Development" class="logo" />
            <!-- Ukryty tekst dla czytników -->
            <span style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">
              KT Development
            </span>
          </a>
        </div>

        <nav class="nav">
          <a href="/" data-home>Strona główna</a>
          <a href="/pl/oferta/">Oferta</a>
          <a href="/pl/projekty/">Projekty</a>
          <a href="/blog/">Blog</a>
          <a href="/pl/kontakt/">Kontakt</a>
        </nav>

        <div class="language-switcher">
          <a href="/pl/index/">PL</a> | <a href="/en/">EN</a>
        </div>
      </div>
    </header>

    <main id="main-content">
      {{ content | safe }}
    </main>

    <!-- JS: aria-expanded, Esc, klik w backdrop/X, zamykanie po kliknięciu linku, cleanup na desktopie -->
    <script>
      (function () {
        const cb = document.getElementById('menu-toggle');
        const trigger = document.querySelector('label[for="menu-toggle"]');
        const drawer = document.getElementById('mobile-drawer');
        const backdrop = document.getElementById('menu-backdrop');
        const closeBtn = document.getElementById('menu-close');

        function sync() {
          const open = cb.checked;
          if (trigger) trigger.setAttribute('aria-expanded', String(open));
          document.body.style.overflow = open ? 'hidden' : '';
        }

        cb.addEventListener('change', sync);
        sync();

        backdrop.addEventListener('click', () => { cb.checked = false; sync(); });
        closeBtn.addEventListener('click', () => { cb.checked = false; sync(); });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') { cb.checked = false; sync(); }
        });

        drawer.addEventListener('click', (e) => {
          if (e.target.tagName === 'A') { cb.checked = false; sync(); }
        });

        const mq = window.matchMedia('(min-width: 769px)');
        mq.addEventListener('change', (e) => {
          if (e.matches) { cb.checked = false; sync(); }
        });
      })();
    </script>

    <!-- JS: HOME zawsze na / z dopiętym ?lang=... -->
    <script>
      (function(){
        const LS_KEY = 'site_lang';
        const getLang = () => localStorage.getItem(LS_KEY) || 'pl';

        function updateHomeHrefs(){
          document.querySelectorAll('a[data-home]').forEach(a => {
            a.setAttribute('href', '/?lang=' + getLang());
          });
        }

        updateHomeHrefs();

        window.addEventListener('storage', (e)=>{
          if(e.key === LS_KEY) updateHomeHrefs();
        });

        document.addEventListener('click', function(e){
          const a = e.target.closest('a[data-home]');
          if(!a) return;
          e.preventDefault();
          const url = '/?lang=' + getLang();
          if(location.pathname === '/'){
            const params = new URLSearchParams(location.search);
            params.set('lang', getLang());
            history.pushState({}, '', '/?'+params.toString());
            window.scrollTo({top:0, behavior:'smooth'});
          }else{
            location.assign(url);
          }
        }, true);
      })();
    </script>
  </body>
</html>
