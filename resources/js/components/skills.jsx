import React from "react";
import useReveal from '../hooks/useReveal';

export default function Skills() {
    useReveal();

    const mySkills = [
        { name: "PHP", pct: 80, cat: "Backend" },
        { name: "Laravel", pct: 75, cat: "Framework Backend" },
        { name: "JavaScript", pct: 70, cat: "Frontend / Logica" },
        { name: "MySQL", pct: 72, cat: "Database" },
        { name: "HTML / CSS", pct: 90, cat: "Markup & Stile" },
        { name: "Tailwind CSS", pct: 78, cat: "Utility Framework" },
        { name: "Bootstrap", pct: 82, cat: "UI Framework" },
        { name: "Python", pct: 40, cat: "Linguaggio Generico" }
    ];
    
    return (
        <section id="skills" className="reveal">
            <div className="section-header">
                <div className="section-num">01</div>
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid reveal">
                {/* 2. Usiamo .map() per creare automaticamente tutti gli elementi */}
                {mySkills.map((skill, index) => (
                    <div key={index} className="skill-item"> 
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-pct">{skill.pct}%</span>
                        </div>
                        <div className="skill-bar">
                            {/* In React, lo stile inline si scrive come oggetto {{ }} */}
                            <div 
                                className="skill-fill" 
                                style={{ width: `${skill.pct}%` }}
                            ></div>
                        </div>
                        <div className="skill-cat">{skill.cat}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}