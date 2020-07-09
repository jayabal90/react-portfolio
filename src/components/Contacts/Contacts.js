import React from 'react';

import './contact.css';

export const Contacts = ({ contacts }) => {
    return (
        <div className="contact-container">
            
            <div className="sectioon-list">
                <section>
                    <address><strong>Mobile</strong> : <b>{contacts.mobile}</b></address>
                </section>  
             </div> 

            <div className="sectioon-list">
                <section>
                    <address><strong>Email </strong>: <b>{contacts.email}</b></address>
                </section> 
            </div>
            <div className="sectioon-list">
                <section>
                    <address><strong>Github </strong>: <a href={contacts.github}>{contacts.github}</a></address>
                </section> 
            </div>
            <div className="sectioon-list">
                <section>
                    <address><strong>Linked In </strong>: <a href={contacts.linkedIn}>{contacts.linkedIn}</a></address>
                </section> 
            </div>   
            <div className="sectioon-list">
                <section>
                     <address><strong>Skype : </strong><b>{contacts.skype}</b></address>
                </section>
            </div> 
        </div>
    )
}