import React from 'react';

import { SkillCard } from './../SkillCard/SkillCard';

import './skills.css';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className="industry-skill-container">
                {
                    skills.industryKnowledge.map(skill => <SkillCard key={skill} skill={skill} />)
                }
            </div>
            <h3>Tech Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.techSkills.map(skill => <SkillCard key={skill} skill={skill} />)
                }
            </div>
            <h3>Interpersonal Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.interpersonalSkills.map(skill => <SkillCard key={skill} skill={skill} />)
                }
            </div>
            
        </div>
    )
}