import React from "react";
import './message.css';
import logoImg from '../../assets/spp-logo.png';

const Message = () => {
    return (
        <section className="message-section">
            <div className="message-logo-title">
                <img src={logoImg} alt="Logo" className="message-logo" /> 
                <h1 className="message-title">Sustainable Progressive Party</h1>
            </div>


            <div className="message-content">
                <h1>Our Message</h1>
                <h2><em>We are the Sustainable Progress Party, unwavering in our commitment to crafting a prosperous, sustainable, and resilient future for every Canadian.</em></h2>
                <p><strong>Our mission is to drive forward economic growth, environmental stewardship, and social equity through innovative and forward-thinking policies that meet the needs of both present and future generations.</strong></p>
                <p><strong>We envision a fair, sustainable, and resilient Canada, where every citizen not only survives but thrives, and where opportunities for success are accessible to all. Our dedication to these principles is the foundation of a stronger, greener, and more just Canada for today and tomorrow.</strong></p>
            </div>
        </section>
    );
}

export default Message;