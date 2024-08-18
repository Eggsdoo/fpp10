import React from "react";
import './about.css';
import logoImg from '../../assets/spp-logo.png';
import mainImg from '../../assets/wajid-zaman.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-logo-title">
                <img src={logoImg} alt="Logo" className="about-logo" /> 
                <h1 className="about-title">Sustainable Progress Party</h1>
            </div>

            <div className="about-content">
                <h1>Meet Umar Khalil</h1>
                <h2><em>"Umar Khalil, leader of the "Sustainable Progress" party, is an electrical engineer with a solid background in renewable energy industries."</em></h2>
                <p><strong>His professional journey reflects a deep commitment to economic progress through sustainable practices, driven by a belief in government facilitation as a key driver of innovation.</strong></p>
                <p><strong>As a member of the Canadian youth, Umar Khalil understands the unique challenges and aspirations of younger generations and feels the urgent need to create a future where sustainability and economic growth go hand in hand.</strong></p>
                <p><strong>Umar was also nominated as a Board Member to his local Masjid. He helped funding, took on the role of website updates and development and started programs for the younger community members to give them a third space where they can can develop bonds and further their connection to the community.</strong></p>
                <p><strong>His leadership focuses on harnessing green technology to build a prosperous Canada, ensuring that today's policies lay the foundation for tomorrow’s advancements.</strong></p>
            </div>

            <div className="about-portrait">
                <img src={mainImg} alt="Portrait" />
            </div>
        </section>
    );
}

export default About;