import React from 'react';
import { ExperienceCard } from './../ExperienceCard/ExperienceCard';
import './experience.css';


export const Experiences = ({ experiences }) => {
    return (
        <div className="experience-container">
            <div className="">
                    {
                        experiences.experienceList.map(experience => <ExperienceCard key={experience} experience={experience} />)
                    }
            </div>
        </div>
    )
}