import React from "react";
import './platform.css';
import logoImg from '../../assets/spp-logo.png';

const Platform = () => {
    return (
        <div className="platform-section">
            <div className="platform-logo-title">
                <img src={logoImg} alt="Logo" className="platform-logo" />
                <h1 className="platform-title">Sustainable Progressive Party</h1>
            </div>

            <div className="platform-content">
                <h1>Core Policies</h1>
                <h2>We at the Sustainable Progress Party aim to foster economic growth by supporting green jobs and innovation through tax incentives and partnerships with companies. We also plan to promote environmental sustainability via EV sharing, sustainable construction, nuclear energy, and education while advocating for social equality by lowering taxes for youth and offering scholarships in sustainability studies.</h2>
                <h3><em>1. Economic Growth and Fair Employment.</em></h3>
                <p>a. We will drive the green economy forward by implementing supply-side policies that pave the way for economic prosperity in the sustainable energy sector. We will lower taxes for working youth and entrepreneurs who are committed to green energy solutions and startups, believing that a market-driven approach is key to creating green jobs, fostering innovation, and securing Canada’s economic future. By collaborating with companies, we will ensure that economic progress is not only maintained but also strengthened through sustainable practices.</p>
                <h3><em>2. Climate Change and Environmental Sustainability.</em></h3>
                <p>a. We will advance sustainable transportation by promoting EV sharing and eco-friendly modes like scooters and bikes, and partner with public transit systems to reduce emissions and improve accessibility. Our sustainable construction policy will subsidize builders using green materials and meeting energy-efficient standards, while our environmental education initiatives will integrate sustainability into school curricula. Additionally, we will introduce nuclear energy into Canada’s power grid to reduce reliance on fossil fuels and provide a reliable, low-carbon energy supply.</p>
                <h3><em>3. Social Equality and Affordable Housing.</em></h3>
                <p>a. We will lower taxes for working youth to promote economic stability and provide them with greater financial freedom to invest in their futures. This policy aims to empower young professionals to pursue green careers and start eco-friendly businesses, while also fostering innovation in green technologies and sustainable practices through targeted tax incentives.</p>
            </div>
        </div>
    );
}

export default Platform;