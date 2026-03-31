import React, { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

export default function Hero() {
    useReveal();

    // 2. Questo codice gira SOLO quando il componente è apparso a schermo
    useEffect(() => {
        // Se usi ScrollReveal, devi dirgli di controllare di nuovo la pagina
        // Se avevi una funzione tipo ScrollReveal().reveal('.reveal'), chiamala qui
        if (window.ScrollReveal) {
            window.ScrollReveal().reveal('.reveal', { 
                distance: '50px',
                duration: 1000,
                delay: 200
            });
        }
    }, []);

    const skills = ['PHP', 'Laravel', 'JavaScript', 'React', 'Python'];
    const basics = ['HTML', 'CSS', 'MySQL', 'Git'];

    return (
        <>

        <section id="hero">
            <div class="hero-left">
                <div class="hero-tag reveal">Disponibile per opportunità</div>
                <h1 class="hero-name reveal">Luca Casalone</h1>
                <div class="hero-title reveal">Junior Web Developer</div>
                <p class="hero-desc reveal">
                    Sviluppo siti web e applicazioni moderne, specializzato nello stack 
                    PHP/Laravel + JavaScript. Organizzato, puntuale e abituato a lavorare 
                    in team — qualità affinate in anni di ristorazione, dove problem solving 
                    e collaborazione erano all'ordine del giorno.
                </p>
                <div class="hero-cta reveal">
                    <a href="#projects" class="btn-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                        Vedi i progetti
                    </a>
                    <a href="#percorso" class="btn-secondary reveal">Il mio percorso →</a>
                </div>
            </div>

            <div className="hero-right">
                {/* Nota: In React non usiamo {{ asset() }}. 
                    Se l'immagine è in public/img/, il percorso è semplicemente: */}
                <img src="/img/sorriso1.jpg" alt="Luca Casalone" className="hero-photo" />
            </div>
        </section>
        <div className="hero-stack-bar">
                <span className="stack-bar-label">// stack</span>
                <div className="stack-bar-tags">
                    {/* Cicliamo i linguaggi principali */}
                    {skills.map(skill => (
                        <span key={skill} className="tag amber">{skill}</span>
                    ))}
                    {/* Cicliamo le basi */}
                    {basics.map(base => (
                        <span key={base} className="tag">{base}</span>
                    ))}
                </div>
                
                <div className="hero-stats-inline">
                    <div className="stat-inline">
                        <span className="stat-label">// Formazione</span>
                        <span className="stat-value">Aulab Hackademy</span>
                    </div>
                    {/* ... aggiungi le altre stat che avevi nel Blade ... */}
                </div>
            </div>
        </>
    );
                
} 
    