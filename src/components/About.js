import React from 'react';
import image1 from '../images/maestro.jpg'
import { Image } from 'react-bootstrap';
import bureauVeritas from '../images/iso-sertificate-2.png';
import betYhing from '../images/betooniyhing.jpg';
import creditRating from '../images/Creditinfo_mark_EST_1.png';

function About() {
    return (
        <div>
            <section className="about-section1">
                <div>
                    <h1 className="display-4">REME GRUPI EESMÄRK..</h1>
                </div>
                <div> 
                    <p>..on pakkuda oma praegustele ja tulevastele tellijatele kvaliteetset ja paindlikku ehitusteenust.</p>
                </div>
            </section>
            <section className="about-section2">
                <div id="about-section2-wrapper">
                    <div id="about-section2-text">
                        <div>
                            <p>
                                Reme Grupp keskendub betoonitööde täislahenduste pakkumisele.
                                Pikaajalised kogemused, paindlikkus, usaldusväärsus, tähtaegadest kinnipidamine ning eelkõige kõrge kvaliteet on aidanud Reme Grupil võita tellijate usalduse. Sõltuvalt tellijate vajadustest teostab Reme Grupp nii väikesemahulisi betoonitöid kui ka suuri, keerukaid ja innovaatilisi projekte.
                            </p>
                        </div>
                    </div>
                   <div id="about-section2-image">
                        <Image src={image1} width="450" fluid id="about-image" />
                   </div>
                </div>
            </section>
            <section className="about-section3" id="certificates">
                <div>
                    <h1 id="certificates-title">Sertifikaadid</h1>
                </div>
                <div className="about-section3-wrapper">
                    <div id="sertificate">
                        <div id="sertificate-logo">
                            <Image src={bureauVeritas} width="250" fluid/>
                        </div>
                    </div>
                    <div id="sertificate">
                        <div id="sertificate-logo">
                            <Image src={betYhing} width="300" fluid/>
                        </div>
                    </div>
                    <div id="sertificate">
                        <div id="sertificate-logo">
                            <Image src={creditRating} width="220" fluid/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;