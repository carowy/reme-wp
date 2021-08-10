import React from 'react';
import logo from './images/reme-logo-black.png';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <footer className="footer">
            <div id="footer-extra-div">
                <div className="footer-wrapper">
                    <div className="footer-s1">
                        <div>
                            <img src={logo} width="200" height="auto" alt="Reme logo"/>
                        </div>
                        
                    </div>
                    <div className="footer-s2">
                        <div>
                            <h4>Sisukord</h4>
                        </div>
                        <div>
                            <Nav.Link href="/" id="footer-link">Avaleht</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link href="/about" id="footer-link">Ettevõttest</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link href="/#ehitusteenused" id="footer-link">Ehitusteenused</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link href="/projects" id="footer-link">Tehtud tööd</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link href="/contact" id="footer-link">Kontakt</Nav.Link>
                        </div>
                    </div>
                    <div className="footer-s3">
                        <div>
                            <h4>Muu kasulik</h4>
                        </div>
                        <div>
                            <Nav.Link href="/contact#contact-form" id="footer-link">Kontaktvorm</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link href="/about#certificates" id="footer-link">Sertifikaadid</Nav.Link>
                        </div>
                    </div>
                    
                </div>
                <div id="footer-barrier">
                    
                </div>
                <div className="footer-s4">
                    <div>
                        <div>
                            <p>© Reme Grupp OÜ</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer;
