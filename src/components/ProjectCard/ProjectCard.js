import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <section>
                <p><b>Name: </b> {project.name}</p>
                <p><b>Description: </b> {project.description}</p>
                <p><b>Teamsize: </b> {project.team}</p>
                <p><b>Duration: </b> {project.duration}</p>
                <p><b>Client: </b> {project.client}</p>
                <p><b>Technology: </b>{project.tech}</p>
            </section>
        </div>
    )
}