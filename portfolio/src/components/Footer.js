import { Container, Row, Col } from "react-bootstrap";

import logo from '../assets/img/logo.png';
import social1 from '../assets/img/social1.svg';
import social2 from '../assets/img/social2.svg';
import social3 from '../assets/img/social3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={8} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/CiroBP"><img src={social1} alt=""/></a>
            <a href="https://www.instagram.com/bernalciro/"><img src={social2} alt=""/></a>
            <a href="https://www.linkedin.com/in/ciro-bernal-porflidtt-965279248/"><img src={social3} alt=""/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}