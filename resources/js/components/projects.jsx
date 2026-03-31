import React from "react";
import ProjectCard from "./projectCard";

export default function projects() {
    const projectsData = [
        {
            num: "001",
            title: "Sito di Notizie Giornalistiche",
            desc: "Piattaforma editoriale sviluppata come progetto d'esame per Aulab Hackademy. Gestione articoli, categorie e pannello admin.",
            status: "Completato",
            statusClass: "status-done",
            tags: ["Laravel", "MySQL", "Bootstrap"]
        },
        {
            num: "002",
            title: "Gestionale Aziendale",
            desc: "Piattaforma ibrida per aziende: interfaccia desktop per l'ufficio e web app ottimizzata per i dipendenti in cantiere.",
            status: "In sviluppo",
            statusClass: "status-dev",
            tags: ["Laravel", "JavaScript", "PWA"]
        },
        {
            num: "003",
            title: "Sito Moda & Design",
            desc: "Piattaforma dedicata al mondo della moda e del design. Vetrina di prodotti con focus sull'estetica e l'esperienza visiva.",
            status: "In progetto",
            statusClass: "status-planned",
            tags: ["Laravel", "Tailwind", "JavaScript"]
        },
        {
            num: "004",
            title: "Transit Traces",
            desc: "Web-documentary interattivo che documenta le rotte migratorie transfrontaliere con mappe dinamiche.",
            status: "In sviluppo",
            statusClass: "status-dev",
            tags: ["Laravel", "Mapbox API", "Scroll-telling"]
        }
    ];

    return (
        <section id="projects">
            <div className="section-header">
                <div className="section-num">02</div>
                <h2 className="section-title">Progetti</h2>
            </div>
            <div className="projects-grid">
                {projectsData.map((item, index) => (
                    <ProjectCard key={index} project={item} />
                ))}
            </div>
        </section>
    );
}