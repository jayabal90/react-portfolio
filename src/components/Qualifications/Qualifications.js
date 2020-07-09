import React from 'react';
import {QualificationCard} from './../QualificationCard/QualificationCard';

import './qualification.css';

export const Qualifications = ({ qualifications }) => {
    
    return (
        
        <div className="qualification-container">
            <div className="">
                    {
                        qualifications.qualificationList.map(qualification => <QualificationCard key={qualification} qualification={qualification} />)
                    }
            </div>
        </div>
    )
}