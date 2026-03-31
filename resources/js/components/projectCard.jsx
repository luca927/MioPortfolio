import React from 'react';
import useReveal from '../hooks/useReveal';

export default function ProjectCard({ project }) {
    useReveal();


    return (
        <div className="project-card reveal">
            <div className="project-num">{project.num}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-footer">
                <span className={`status-badge ${project.statusClass}`}>
                    {project.status}
                </span>
                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}