import React from 'react';
import useReveal from '../hooks/useReveal';

export default function ProjectCard({ project }) {
    useReveal();

    return (
        <div className={`project-card ${project.bentoClass || ''} reveal`}>
            <div className="project-card-header">
                <span className="project-num">{project.num}</span>
                <span className={`status-badge ${project.statusClass}`}>
                    <span className="status-dot"></span>
                    <span>{project.status}</span>
                </span>
            </div>

            <div className="project-card-body">
                <h3 className="project-title">
                    <span>{project.title}</span>
                    <span className="project-arrow">↗</span>
                </h3>
                <p className="project-desc">{project.desc}</p>
            </div>

            <div className="project-footer">
                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
