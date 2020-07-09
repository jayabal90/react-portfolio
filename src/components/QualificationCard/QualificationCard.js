import React from 'react'

import './qualification-card.css';

export const QualificationCard = ({ qualification }) => {
    return (
        <div className="qualification-card">
            <section>
                <p><b>Degree: </b> {qualification.degree}</p>
                <p><b>Year: </b> {qualification.year}</p>
                <p><b>Percentage: </b> {qualification.percentage}</p>
                <p><b>Instituition: </b> {qualification.instituition}</p>
            </section>
        </div>
    )
}