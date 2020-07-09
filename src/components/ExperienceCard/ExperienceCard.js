import React from 'react'

import './experience-card.css';

export const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <section>
                <p><b>CompanyName: </b> {experience.companyName}</p>
                <p><b>Designation: </b> {experience.designation}</p>
                <p><b>Year: </b> {experience.year}</p>
            </section>
        </div>
    )
}