import React from "react";
import './staff.css';
// import logoImg from '../../assets/party1-images/2.png';
// import testImg from '../../assets/party1-images/test.png';
import staff1 from '../../assets/16.png';
import staff2 from '../../assets/30.png';
import staff3 from '../../assets/22.png';
import staff4 from '../../assets/1.png'; 
import staff5 from '../../assets/7.png';


const Staff = () => {
    return (
        <section className="staff-section">
            {/* <div className="staff-logo-title">
                <img src={logoImg} alt="Logo" className="staff-logo" />
                <h1 className="staff-title">ShellKeeper's Party</h1>
            </div> */}

            <div className="staff-content">
                <h1>Meet Our Staff</h1>
            </div>

            <div className="staff-display">
                <div className="staff-display-description">
                    <img src={staff1} alt="Staff 1" />
                    <h5>Umar Khalil</h5>
                    <p>Party Leader</p>
                </div>
                <div className="staff-display-description">
                    <img src={staff2} alt="Staff 2" />
                    <h5>Adil Monir</h5>
                    <p>Campaigns Director</p>
                </div>
                <div className="staff-display-description">
                    <img src={staff3} alt="Staff 3" />
                    <h5>Oromiya Ali</h5>
                    <p>Communicaions Director</p>
                </div>
                <div className="staff-display-description">
                    <img src={staff4} alt="Staff 4" />
                    <h5>Yousef Ibrahim</h5>
                    <p>Operations Director</p>
                </div>
                <div className="staff-display-description">
                    <img src={staff5} alt="Staff 4" />
                    <h5>Maryam Khalil</h5>
                    <p>Policy Advisor</p>
                </div>                

            </div>
        </section>
    );
}

export default Staff;
