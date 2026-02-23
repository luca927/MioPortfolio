<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luca Casalone - Junior Web Developer</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">

  {{-- Vite compila e inietta automaticamente app.css e app.js --}}
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>

<!-- Navbar -->
 <nav>
    <a href="#hero" class="nav-logo">LC</a>

    <ul class="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Progetti</a></li>
        <li><a href="#percorso">Percorso</a></li>
    </ul>
    
    <div class="nav-contacts">
    <a href="mailto:casaloneluca7@gmail.com" class="btn-contact">Contattami</a>
    
    <a href="https://github.com/luca927" target="_blank" class="nav-icon" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    </a>

    <a href="https://www.linkedin.com/in/luca-casalone-a85a7413b" target="_blank" class="nav-icon" title="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    </a>
</div>

    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">☰</button>
 </nav>

 <!-- Mobile menu -->
 <div id="mobileMenu" class="mobile-menu">
    <a href="#skills"  onclick="toggleMenu()">Skills</a>
    <a href="#projects" onclick="toggleMenu()">Progetti</a>
    <a href="#percorso" onclick="toggleMenu()">Percorso</a>
    <a href="mailto:casaloneluca7@gmail.com">Email</a>
    <a href="https://github.com/" target="_blank" >GitHub</a>
    <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
</div>

<!-- Hero Section -->
<section id="hero">
    <div class="hero-left">
        <div class="hero-tag reveal">Disponibile per opportunità</div>
        <h1 class="hero-name reveal">Luca<br>Casalone</h1>
        <div class="hero-title reveal">Junior Web Developer</div>
        <div class="hero-photo-wrap">
          <img src="{{ asset('img/me.jpg') }}" alt="Luca Casalone" class="hero-photo">
        </div>
        <p class="hero-desc reveal">
        Sviluppo siti web e applicazioni moderne, con attenzione alla struttura del codice,
        all'esperienza utente e alle performance. Specializzato nello stack PHP/Laravel + JavaScript.
        </p>
        <div class="hero-cta reveal">
        <a href="#projects" class="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            Vedi i progetti
        </a>
        <a href="#percorso" class="btn-secondary">Il mio percorso →</a>
        </div>
    </div>
    <div class="hero-right">
        <div class="hero-card reveal">
            <div class="hero-card-label">// Stack tecnologico</div>
            <div class="hero-stack">
                <span class="tag amber">PHP</span>
                <span class="tag amber">Laravel</span>
                <span class="tag amber">JavaScript</span>
                <span class="tag amber">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">Bootstrap</span>
                <span class="tag">Tailwind CSS</span>
                <span class="tag amber">MySQL</span>
            </div>
            <div class="hero-stat">
                <span class="stat-label">// Formazione</span>
                <span class="stat-value">Aulab Hackademy</span>
            </div>
            <div class="hero-stat">
                <span class="stat-label">// Attestato</span>
                <span class="stat-value">Full Stack Web Developer Junior</span>
            </div>
            <div class="hero-stat">
                <span class="stat-label">// Progetti Attivi</span>
                <span class="stat-value">4 in sviluppo</span>
            </div>
            <div class="hero-stat">
                <span class="stat-label">// Posizione</span>
                <span class="stat-value">Italia, Torino</span>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills">
  <div class="section-header">
    <div class="section-num">01</div>
    <h2 class="section-title">Skills</h2>
  </div>
  <div class="skills-grid">
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">PHP</span><span class="skill-pct">80%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="80"></div></div>
      <div class="skill-cat">Backend</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">Laravel</span><span class="skill-pct">75%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="75"></div></div>
      <div class="skill-cat">Framework Backend</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">JavaScript</span><span class="skill-pct">70%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="70"></div></div>
      <div class="skill-cat">Frontend / Logica</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">MySQL</span><span class="skill-pct">72%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="72"></div></div>
      <div class="skill-cat">Database</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">HTML / CSS</span><span class="skill-pct">90%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="90"></div></div>
      <div class="skill-cat">Markup & Stile</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">Tailwind CSS</span><span class="skill-pct">78%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="78"></div></div>
      <div class="skill-cat">Utility Framework</div>
    </div>
    <div class="skill-item reveal">
      <div class="skill-header"><span class="skill-name">Bootstrap</span><span class="skill-pct">82%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="82"></div></div>
      <div class="skill-cat">UI Framework</div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects">
    <div class="section-header">
        <div class="section-num">02</div>
        <h2 class="section-title">Progetti</h2>
    </div>
    <div class="projects-grid">

        <div class="project-card reveal">
            <div class="project-num">001</div>
            <h3 class="project-title">Sito di Notizie Giornalistiche</h3>
            <p class="project-desc">Piattaforma editoriale sviluppata come progetto d'esame per Aulab Hackademy. Gestione articoli, categorie, autori e sistema di pubblicazione con pannello admin.</p>
      <div class="project-footer">
        <span class="status-badge status-done">Completato</span>
        <div class="project-tags">
          <span class="tag">Laravel</span><span class="tag">MySQL</span><span class="tag">Bootstrap</span>
        </div>
        </div>
    </div>

    <div class="project-card reveal">
      <div class="project-num">002</div>
      <div class="project-title">Gestionale Aziendale</div>
      <p class="project-desc">Piattaforma ibrida per aziende: interfaccia desktop per l'ufficio e web app ottimizzata per i dipendenti in cantiere. Accesso differenziato per ruolo.</p>
      <div class="project-footer">
        <span class="status-badge status-dev">In sviluppo</span>
        <div class="project-tags">
          <span class="tag">Laravel</span><span class="tag">JavaScript</span><span class="tag">PWA</span>
        </div>
      </div>
    </div>

    <div class="project-card reveal">
      <div class="project-num">003</div>
      <div class="project-title">Sito Moda & Design</div>
      <p class="project-desc">Piattaforma dedicata al mondo della moda e del design. Vetrina di prodotti con focus sull'estetica, l'esperienza visiva e la navigazione fluida.</p>
      <div class="project-footer">
        <span class="status-badge status-planned">In progetto</span>
        <div class="project-tags">
          <span class="tag">Laravel</span><span class="tag">Tailwind</span><span class="tag">JavaScript</span>
        </div>
      </div>
    </div>

    <div class="project-card reveal">
    <div class="project-num">004</div>
    <h3 class="project-title">Transit Traces</h3> <p class="project-desc">
        Web-documentary interattivo che documenta le rotte migratorie transfrontaliere. 
        Un'esperienza immersiva che combina storytelling multimediale, mappe dinamiche e 
        testimonianze dirette per dare voce alle storie in transito.
    </p>
    <div class="project-footer">
        <span class="status-badge status-dev">In sviluppo</span>
        <div class="project-tags">
            <span class="tag">Laravel</span>
            <span class="tag">Mapbox API</span>
            <span class="tag">Scroll-telling</span>
        </div>
    </div>
    </div>
    </div>
</section>

<!-- Percorso -->
<section id="percorso">
    <div class="section-header">
    <div class="section-num">03</div>
    <h2 class="section-title">Percorso</h2>
  </div>
  <div class="timeline">

    <div class="timeline-item reveal">
      <div class="timeline-date">Sett 2021<br>→ Mar 2022</div>
      <div class="timeline-body">
        <div class="timeline-org">Aulab Hackademy</div>
        <div class="timeline-role">Full Stack Web Developer Junior</div>
        <p class="timeline-desc">Bootcamp intensivo di sviluppo web full stack. Studio e pratica di PHP, Laravel, JavaScript, HTML, CSS, Bootstrap, Tailwind e MySQL. Progetto finale: sito di notizie giornalistiche sviluppato in team con metodologia agile. Attestato rilasciato a marzo 2022.</p>
      </div>
    </div>

    <div class="timeline-item reveal">
      <div class="timeline-date">2022<br>→ Oggi</div>
      <div class="timeline-body">
        <div class="timeline-org">Progetti Personali</div>
        <div class="timeline-role">Sviluppo Autonomo & Freelance</div>
        <p class="timeline-desc">Progettazione e sviluppo di soluzioni web su misura. Gestionale aziendale con logica PWA, sito editoriale narrativo e progetto nel settore moda/design. Costante aggiornamento sulle nuove tecnologie e best practice.</p>
      </div>
    </div>

  </div>
</section>

<!-- contatto -->
<section id="contatto"> 
   <div class="section-header">
    <div class="section-num">04</div>
    <h2 class="section-title">Contatto</h2>
  </div>
  <div class="contact-section-inner">

    <div class="contact-left reveal">
      <p class="contact-intro">
        Hai un progetto in mente o vuoi semplicemente parlare di sviluppo web?
        Scrivimi, rispondo solitamente entro 24 ore.
      </p>
      <div class="contact-info-item">
        <div class="ci-icon">✉</div>
        <div>
          <div class="ci-label">Email</div>
          <div class="ci-value">luca@example.com</div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="ci-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.012-1.243-.012-2.252-3.338.725-4.042-1.418-4.042-1.418-.544-1.387-1.332-1.756-1.332-1.756-1.087-.744.082-.729.082-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.243 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.7.825.58C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </div>
        <div>
          <div class="ci-label">GitHub</div>
          <div class="ci-value">github.com/lucacasalone</div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="ci-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </div>
        <div>
          <div class="ci-label">LinkedIn</div>
          <div class="ci-value">linkedin.com/in/lucacasalone</div>
        </div>
      </div>
    </div>

    <div class="contact-right reveal">
      {{-- Il form viene inviato al controller Laravel tramite POST --}}
      <form id="contactForm" action="{{ route('contatto.store') }}" method="POST">
        @csrf

        <div class="form-group">
          <label class="form-label" for="nome">Nome</label>
          <input class="form-input" type="text" id="nome" name="nome"
                 value="{{ old('nome') }}" placeholder="Il tuo nome" required>
          @error('nome')
            <div class="form-error" style="display:block">{{ $message }}</div>
          @enderror
        </div>

        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input class="form-input" type="email" id="email" name="email"
                 value="{{ old('email') }}" placeholder="tua@email.com" required>
          @error('email')
            <div class="form-error" style="display:block">{{ $message }}</div>
          @enderror
        </div>

        <div class="form-group">
          <label class="form-label" for="messaggio">Messaggio</label>
          <textarea class="form-textarea" id="messaggio" name="messaggio"
                    placeholder="Raccontami del tuo progetto..." required>{{ old('messaggio') }}</textarea>
          @error('messaggio')
            <div class="form-error" style="display:block">{{ $message }}</div>
          @enderror
        </div>

        <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
          Invia messaggio →
        </button>

        @if(session('success'))
          <div class="form-success" style="display:block">
            ✓ {{ session('success') }}
          </div>
        @endif
      </form>
    </div>

  </div>

<!-- Footer -->
<footer>
  <span class="footer-copy">© {{ date('Y') }} Luca Casalone — Junior Web Developer</span>
  <div class="footer-links">
    <a href="#hero">Top ↑</a>
    <a href="https://github.com/"   target="_blank">GitHub</a>
    <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
  </div>
</footer>


</body>
</html>