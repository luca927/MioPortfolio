import React from "react";
import useReveal from '../hooks/useReveal';

export default function Skills() {
    useReveal();

    const mySkills = [
        { name: "PHP", pct: 80, cat: "Backend" },
        { name: "Laravel", pct: 75, cat: "Backend Framework" },
        { name: "JavaScript", pct: 70, cat: "Frontend & Logic" },
        { name: "MySQL", pct: 72, cat: "Database Relazionale" },
        { name: "HTML5 / CSS3", pct: 90, cat: "Markup & Semantic" },
        { name: "Tailwind CSS", pct: 78, cat: "Modern CSS" },
        { name: "Bootstrap", pct: 82, cat: "UI Component Library" },
        { name: "Python", pct: 40, cat: "Scripting & Basics" },
        { name: "Docker", pct: 50, cat: "DevOps" },
        { name: "Testing & QA", pct: 55, cat: "Jira Xray · Test Design · Bug Tracking" },
        { name: "Typescript", pct: 55, cat: "Frontend & Logic" },
        { name: "Spring Boot", pct: 60, cat: "Backend Framework" },
        { name: "Angular", pct: 60, cat: "Frontend Framework"},
        { name: "Java", pct: 65, cat: "Backend"},
        { name: "Wordpress", pct: 55, cat: "CMS / Temi & plugin custom"}
    ];
    
    return (
        <section id="skills" className="reveal">
            <div className="section-header">
                <div className="section-num">01 // COMPETENZE</div>
                <h2 className="section-title">Skills & Tecnologie</h2>
            </div>
            

            <div className="skills-grid reveal">
                {mySkills.map((skill, index) => (
                    <div key={index} className="skill-item"> 
                        <div className="skill-top-row">
                            <span className="skill-cat-pill">{skill.cat}</span>
                            <span className="skill-pct">{skill.pct}%</span>
                        </div>
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-bar">
                            <div 
                                className="skill-fill" 
                                style={{ width: `${skill.pct}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
