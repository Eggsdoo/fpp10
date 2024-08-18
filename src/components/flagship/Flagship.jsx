import React from "react";
import './flagship.css';
import logoImg from '../../assets/spp-logo.png';

const Flagship = () => {
    return (
        <section className="flagship-section">
            <div className="flagship-logo-title">
                <img src={logoImg} alt="Logo" className="flagship-logo" />
                <h1 className="flagship-title">Sustainable Progressive Party</h1>
            </div>

            <div className="flagship-content">
                <h1>Green Growth Empowerment Policy</h1>
                <h2><em>Our flagship policy focuses on lowering taxes for working youth and individuals who want to start green startups. By creating a favorable tax environment, we will empower the next generation to lead in sustainable industries, driving both economic growth and environmental responsibility.</em></h2>
                <p><strong>This policy will simplify regulatory processes, reduce bureaucratic red tape, and ensure that small businesses and entrepreneurs can thrive in Canada’s green economy.</strong></p>
                <p><strong>Through these initiatives, we aim to create a "Sustainable Progress" where every citizen has the opportunity to thrive in a society that is just, equitable, and sustainable. Our vision is of a Canada where progress and prosperity are shared by all.</strong></p>
                {/* <p><strong>Most importantly, this centralized authority will be required to fulfill the obligation of ensuring housing accountability as outlined within the act. The Strong and Free Party will therefore get more housing built for common Canadians and ensure a greater level of fiscal accountability and transparency.</strong></p> */}
            </div>
        </section>
    );
}

export default Flagship;