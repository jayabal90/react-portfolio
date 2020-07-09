import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars0.githubusercontent.com/u/14891428?s=400&u=50f3f755df480c43664e9a303aa601dd46bbddfb&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Jayabal A</h2>
            <p className="subtitle">“It's not a faith in technology. It's faith in people.”</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("qualifications")}>Qualifications</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experiences")}>Experiences</p>
                <p className="section-list-element" onClick={() => handleSectionClick("contacts")}>Contacts</p>
            </div>
        </div>
    );
};
