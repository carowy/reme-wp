import React from 'react'
import Form from 'react-bootstrap/Form';

function Contact() {

    return (
        <div>
            <section className="contact-s1">
                <div>
                    <div>
                        <h1 className="display-4">Kontakt</h1>
                    </div>
                    <div>
                        <p>Teeme kõik selleks, et saaksime pakkuda Teile parimaid betoonitööde lahendusi alates kontseptsiooni väljatöötamisest, projekteerimisest kuni teostuseni.</p>
                    </div>
                    <div>
                        <a href="#contact-information-s"><button id="contact-now-button">Võta otse ühendust</button></a>
                    </div>
                </div>
            </section>
            <section className="contact-s2" id="contact-form">
                <div className="contact-s2-1">
                    <h1 id="contact-form-title">Kontaktivorm</h1>
                    <Form className="row">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Nimi" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="E-post" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="number" placeholder="Telefon" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={7} placeholder="Sõnum" required/>
                        </Form.Group>
                        <Form.Group>
                            <button id="form-submit-btn" type="submit">Saada ära</button>
                        </Form.Group>
                    </Form>
                </div>
            </section>
            <section className="contact-s3" id="contact-information-s">
                <div></div>
                <div id="personal-contact-info">
                    <div>
                        <h1 id="owner-name" className="display-2">Rene Vilo</h1>
                    </div>
                    <div id="role-name">
                        <p>Juhatuse liige / Projektijuht</p>
                    </div>
                    <div id="extra-info">
                        <p>+372 5330 5240</p>
                    </div>
                    <div id="extra-info">
                        <p>rene@reme.ee</p>
                    </div>
                </div>
                <div id="contact-info-barrier"></div>
                <div id="personal-contact-info">
                    <div>
                        <h1 id="owner-name" className="display-2">Mehis Vilo</h1>
                    </div>
                    <div id="role-name">
                        <p>Juhatuse liige / Projektijuht</p>
                    </div>
                    <div id="extra-info">
                        <p>+372 524 5014</p>
                    </div>
                    <div id="extra-info">
                        <p>mehis@reme.ee</p>
                    </div>
                </div>
                <div></div>
            </section>
        </div>
    )
}
export default Contact;