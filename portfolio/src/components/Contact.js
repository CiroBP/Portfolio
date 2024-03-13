import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import lantern from "../assets/img/lantern.png";
import { Col, Container, Row } from "react-bootstrap";

export const Contact= () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            'service_bzgnyhe', 
            'template_cpuiu17', 
            form.current, 
            {
          publicKey: '59ZIiQGvuRu7zs1Gh',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <section className='contact'>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={lantern} alt="Contact Us"/>
                    </Col>
                    <Col size={12} md={6}>
                        <div >
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
   );
    
  };
    
