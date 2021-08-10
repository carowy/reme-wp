import React from 'react';
import planIcon from '../images/plan-icon.png';
import montage from '../images/montage.png';
import cityIcon from '../images/city.png'
import propertyIcon from '../images/property.png';
import brickWall from '../images/brick-wall.png';
import { Link } from 'react-router-dom';

const welcomeHeadeing = {
    fontWeight: '700'
}

const dFlex = {
    display: "flex",
    justifyContent: "center"
}

function Home() {
    return (
        <div>
            <section className="home-s1">
                <div>
                    <div id="home-welcome-text">
                        <div>
                            <h1 className="display-1" style={welcomeHeadeing}>Suuremahulised</h1>
                        </div>
                        <div>
                        <h1 className="display-1" style={welcomeHeadeing} >betoonitööd</h1>
                        </div>
                    </div>
                    <div id="home-welcome-animation">
                        <div id="home-animation-wrapper">
                            <span>Projekteerimine</span>
                            <span>Betoonitööd</span>
                            <span>Montaažitööd</span>
                            <span>Müüritööd</span>
                            <span>Projekteerimine</span>
                        </div>
                    </div>
                    <div id="home-welcome-button">
                        <Link to="/about"><button>Loe lähemalt</button></Link>
                    </div>
                </div>
                
            </section>
            <section className="home-s2" id="ehitusteenused">
                <div className="home-s2-wrapper">
                    <div id="home-s2-heading">
                        <h1 className="display-4">Teenused</h1>
                    </div>
                    <div className="service-cards">

                        <div id="card">
                            <div style={dFlex}>
                                <img src={planIcon} width="110" height="100" alt="plan-icon" />
                            </div>
                            <div>
                                <h3>Projekteerimine</h3>
                            </div>
                            <div>
                                <p>Teostame konstruktsioonide projekteerimist koostööpartneritega.</p>
                            </div>
                        </div>
                        
                        <div id="card">
                            <div style={dFlex}>
                                <img src={montage} width="110" height="100" alt="plan-icon" />
                            </div>
                            <div>
                                <h3>Montaašitööd</h3>
                            </div>
                            <div>
                                <p>Teostame raudbetoonelementide montaažitöid. Pikaajalised kogemused tagavad kiire tööde teostuse ja kõrge kvaliteedi.</p>
                            </div>
                        </div>

                        <div id="card">
                            <div style={dFlex}>
                                <img src={propertyIcon} width="110" height="100" alt="plan-icon" />
                            </div>
                            <div>
                                <h3>Betoonitööd</h3>
                            </div>
                            <div>
                                <p>Teostame monoliitsete seinte, lagede, postide, talade, treppide armeerimist ja betoneerimist.</p>
                            </div>
                        </div>

                        <div id="card">
                            <div style={dFlex}>
                                <img src={cityIcon} width="110" height="100" alt="plan-icon" />
                            </div>
                            <div>
                                <h3>Betoonpõrandate ehitus</h3>
                            </div>
                            <div>
                                <p>Teostame betoonpõrandate ehitust korterelamutele, tööstushoonetele ja farmidele.</p>
                            </div>
                        </div>

                        <div id="card">
                            <div style={dFlex}>
                                <img src={brickWall} width="110" height="100" alt="plan-icon" />
                            </div>
                            <div>
                                <h3>Müüritööd</h3>
                            </div>
                            <div>
                                <p>Teostame suuremahulisi ja väikseid müüri ladumisi.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="home-s3">
                
            </section>
        </div>
    )
}
export default Home;
