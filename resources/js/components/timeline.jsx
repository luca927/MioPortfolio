import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Timeline() {
    useReveal();
    const experiences = [
        {
            date: "2012 \n → 2025",
            org: "Settore Alberghiero",
            role: "Operatore di Sala & Team Leader",
            desc: "Tredici anni nel settore hospitality, con ruoli di crescente responsabilità. Gestione del servizio in ambienti ad alto ritmo, coordinamento del team e problem solving quotidiano. Un'esperienza che ha formato un approccio al lavoro basato su organizzazione e puntualità."
        },
        {
            date: "Sett 2021 \n → Mar 2022",
            org: "Aulab Hackademy",
            role: "Full Stack Web Developer Junior",
            desc: "Bootcamp intensivo di sviluppo web full stack. Studio e pratica di PHP, Laravel, JavaScript, HTML, CSS, Bootstrap, Tailwind e MySQL. Progetto finale: sito di notizie giornalistiche sviluppato in team."
        },
        {
            date: "2022 \n → Oggi",
            org: "Progetti Personali",
            role: "Sviluppo Autonomo & Freelance",
            desc: "Progettazione e sviluppo di soluzioni web su misura. Gestionale aziendale con logica PWA, sito editoriale narrativo e progetto nel settore moda/design. Costante aggiornamento sulle nuove tecnologie."
        }
    ];

    return (
        <section id="percorso" className="reveal">
            <div className="section-header">
                <div className="section-num">03</div>
                <h2 className="section-title">Percorso</h2>
            </div>

            <div className="timeline reveal">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">
                            {/* Usiamo dangerouslySetInnerHTML o semplicemente lo split per gestire il <br> */}
                            {exp.date.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="timeline-body reveal">
                            <div className="timeline-org">{exp.org}</div>
                            <div className="timeline-role">{exp.role}</div>
                            <p className="timeline-desc">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}