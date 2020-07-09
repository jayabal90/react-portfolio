import React from 'react';

import { SideNav } from './../SideNav/sidenav';
import { SectionContainer } from './../SectionContainer/SectionContainer';

import './portfolio.css';

export const Portfolio = ({ 
    handleSectionClick,
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
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
					selectedHeading={selectedHeading}
					selectedQuote={selectedQuote}
					about={about}
					skills={skills}
                    projects={projects} 
                    qualifications={qualifications}
    				experiences={experiences}
    				contacts={contacts}
                    
                />
            </div>
        </div>
    );
};