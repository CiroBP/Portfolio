import { useState,useEffect } from "react";
import{Navbar, Container,Nav} from "react-bootstrap";

import logo from '../assets/img/logo.png';
import social1 from '../assets/img/social1.svg';
import social2 from '../assets/img/social2.svg';
import social3 from '../assets/img/social3.svg';

export const NavBar= () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false)

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                seScrolled(true)
            } else{
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return() => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }


    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="Basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={activeLink === 'home'? 'active-navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/" className={activeLink === 'skill'? 'active-navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="/" className={activeLink === 'projects'? 'active-navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="/"><img src={social1} alt=""/></a>
                            <a href="/"><img src={social2} alt=""/></a>
                            <a href="/"><img src={social3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={()=> console.log('connect')}><span>Connect with me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>




    )
}