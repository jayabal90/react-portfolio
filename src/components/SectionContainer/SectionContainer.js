import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';
import { Projects } from './../Projects/Projects';
import {Qualifications} from './../Qualifications/Qualifications';
import {Experiences} from '../Experiences/Experiences';
import {Contacts} from './../Contacts/Contacts';

import './section-container.css';

export const SectionContainer = ({ 
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects,
    qualifications,
    experiences,
    contacts
 }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About bio={about.bio} />,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />,
                        qualifications: <Qualifications qualifications={qualifications} />,
                        experiences: <Experiences experiences={experiences} />,
                        contacts: <Contacts contacts={contacts} />

                    }[selectedSection]
                }
            </div>
        </div>
    )
}