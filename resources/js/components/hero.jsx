import React, { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

export default function Hero() {
    useReveal();

    useEffect(() => {
        if (window.ScrollReveal) {
            window.ScrollReveal().reveal('.reveal', { 
                distance: '50px',
                duration: 1000,
                delay: 200
            });
        }
    }, []);

    const skills = ['PHP', 'Laravel', 'JavaScript', 'React', 'Python', 'Java', 'Spring Boot', 'Angular', 'Typescript', 'Docker', 'Jira Xray'];
    const basics = ['HTML', 'CSS', 'MySQL', 'Git', 'Tailwind CSS', 'Bootstrap'];

    return (
        <>
            <section id="hero">
                <div className="hero-left">
                    <div className="hero-tag reveal">
                        <span className="pulse-dot"></span>
                        <span>Disponibile per opportunità</span>
                    </div>

                    <h1 className="hero-name reveal">
                        Luca <span className="text-gradient">Casalone</span>
                    </h1>

                    <div className="hero-title reveal">
                        Junior Web Developer
                    </div>

                    <p className="hero-desc reveal">
                       "Sviluppo siti web e applicazioni moderne con un solido stack <strong>Laravel e JavaScript</strong>. 
                        Ho di recente completato un percorso Full Stack in ambiente enterprise, ampliando le mie competenze con <strong>Java, Spring Boot e Angular</strong>, 
                        e sto approfondendo il <strong>Software Testing</strong> (Jira Xray, test design, bug tracking) in un percorso di training on the job. 
                        Il mio obiettivo è offrire soluzioni sempre più versatili, performanti e affidabili.
                        Organizzato, puntuale e abituato a lavorare in team: qualità affinate in anni di ristorazione, 
                        dove il problem solving e la collaborazione sotto pressione erano la norma,
                        e che oggi riverso con dedizione in ogni riga di codice."
                    </p>

                    <div className="hero-cta reveal">
                        <a href="#projects" className="btn-primary">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2"/>
                                <path d="M8 21h8M12 17v4"/>
                            </svg>
                            Vedi i progetti
                        </a>
                        <a href="#percorso" className="btn-secondary">Il mio percorso →</a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-photo-wrapper">
                        <div className="hero-photo-glow"></div>
                        <img src="/img/sorriso1.jpg" alt="Luca Casalone" className="hero-photo" />
                        <div className="hero-photo-badge">
                            <span className="code-accent">&lt;/&gt;</span>
                            <span>Full Stack Dev</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-stack-bar">
                <span className="stack-bar-label">// tech stack</span>
                <div className="stack-bar-tags">
                    {skills.map(skill => (
                        <span key={skill} className="tag amber">{skill}</span>
                    ))}
                    {basics.map(base => (
                        <span key={base} className="tag">{base}</span>
                    ))}
                </div>
                
                <div className="hero-stats-inline">
                    <div className="stat-inline">
                        <span className="stat-label">// Formazione</span>
                        <span className="stat-value">Aulab Hackademy</span>
                    </div>
                    <div className="stat-inline">
                        <span className="stat-label">// Attestato</span>
                        <span className="stat-value">Full Stack Dev</span>
                    </div>
                    <div className="stat-inline">
                        <span className="stat-label">// IDE</span>
                        <span className="stat-value">IntelliJ IDEA</span>
                    </div>
                    <div className="stat-inline">
                        <span className="stat-label">// Lingue</span>
                        <span className="stat-value">IT · EN B2 · FR B1</span>
                    </div>
                    <div className="stat-inline">
                        <span className="stat-label">// Posizione</span>
                        <span className="stat-value">Torino, Italia IT</span>
                    </div>
                </div>
            </div>
        </>
    );
}
