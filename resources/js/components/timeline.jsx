import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Timeline() {
    useReveal();
    const experiences = [
         {
            date: "Sett 2026 \n → Ott 2026",
            org: "Oggi Lavoro / TC-Web",
            role: "Training on the Job — Testing",
            desc: "Percorso di formazione sul campo nel Software Testing: progettazione e pianificazione di test case su Jira Xray, gestione dei difetti e tracciabilità dei bug, testing funzionale su applicativo desktop ed esecuzione dei test."
        },
        {
            date: "Apr 2026 \n → Giu 2026",
            org: "Forma — Next-Gen Full Stack Developer",
            role: "Full Stack Developer — Java & Angular",
            desc: "Percorso formativo di 256 ore incentrato su Java, programmazione ad oggetti, basi di dati relazionali, Spring Boot e Angular. Approfondimento di TypeScript, fondamenti di DevOps e containerizzazione con Docker, oltre a strumenti di sviluppo assistito da AI. Sviluppo in IntelliJ IDEA, con progetti pratici tra cui un'applicazione full stack per la gestione di un cinema."
        },
        {
            date: "2012 \n → 2025",
            org: "Settore Alberghiero",
            role: "Operatore di Sala & Team Leader",
            desc: "Tredici anni nel settore hospitality, con ruoli di crescente responsabilità. Gestione del servizio in ambienti ad alto ritmo, coordinamento del team e problem solving quotidiano. Un'esperienza che ha formato un approccio al lavoro basato su organizzazione e puntualità."
        },
         {
            date: "Mag 2025 \n → Nov 2025",
            org: "Arsnet S.R.L",
            role: "Junior Web Developer",
            desc: "Sviluppo di un gestionale aziendale custom per l'ottimizzazione della logistica. Mi sono occupato della digitalizzazione dei processi relativi alla gestione dei dipendenti, monitoraggio dei cantieri e assegnazione dei mezzi, migliorando l'efficienza operativa del team."
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
                <div className="section-num">03 // TIMELINE</div>
                <h2 className="section-title">Percorso & Esperienza</h2>
            </div>

            <div className="timeline reveal">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">
                            {exp.date.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="timeline-body">
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
