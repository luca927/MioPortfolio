import React from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
    const projectsData = [
        {
            num: "001",
            title: "Sito di Notizie Giornalistiche",
            desc: "Piattaforma editoriale sviluppata come progetto d'esame per Aulab Hackademy. Gestione articoli, categorie e pannello admin completo.",
            status: "Completato",
            statusClass: "status-done",
            tags: ["Laravel", "MySQL", "Bootstrap"],
            bentoClass: "bento-wide"
        },
        {
            num: "002",
            title: "Gestionale Aziendale",
            desc: "Piattaforma ibrida per aziende: interfaccia desktop per l'ufficio e web app ottimizzata per i dipendenti in cantiere.",
            status: "Completato",
            statusClass: "status-done",
            tags: ["Laravel", "JavaScript", "PWA"],
            bentoClass: "bento-narrow"
        },
        {
            num: "003",
            title: "Sito Moda & Design",
            desc: "Piattaforma dedicata al mondo della moda e del design. Vetrina di prodotti con focus sull'estetica e l'esperienza visiva.",
            status: "In progetto",
            statusClass: "status-planned",
            tags: ["Laravel", "Tailwind", "JavaScript"],
            bentoClass: "bento-narrow"
        },
        {
            num: "004",
            title: "Transit Traces",
            desc: "Web-documentary interattivo che documenta le rotte migratorie transfrontaliere con mappe dinamiche e narrazione a scorrimento.",
            status: "In sviluppo",
            statusClass: "status-dev",
            tags: ["Laravel", "Mapbox API", "Scroll-telling"],
            bentoClass: "bento-wide"
        },
        {
            num: "005",
            title: "Gestionale Cinema",
            desc: "Applicazione full stack per la gestione di un cinema: film, sale, spettacoli, prenotazioni e clienti. Backend REST con autenticazione JWT e frontend con architettura a feature.",
            status: "In sviluppo",
            statusClass: "status-dev",
            tags: ["Spring Boot", "Angular", "Java"],
            bentoClass: "bento-wide"
        },
          {
            num: "006",
            title: "Aurora Accademia olistica",
            desc: "Sito per una massaggiatrice e accademia di formazione olistica a Chieri (TO): landing page del corso in formato long-form e opt-in page con thank-you page dedicata, per la raccolta contatti e la vendita di percorsi formativi.",
            status: "Completato",
            statusClass: "status-done",
            tags: ["HTML", "Tailwind", "Javascript", "Mailerlite"],
            bentoClass: "bento-wide"
        }
    ];

    return (
        <section id="projects">
            <div className="section-header">
                <div className="section-num">02 // ARCHIVIO</div>
                <h2 className="section-title">Progetti Selezionati</h2>
            </div>
            <div className="projects-grid">
                {projectsData.map((item, index) => (
                    <ProjectCard key={index} project={item} />
                ))}
            </div>
        </section>
    );
}
