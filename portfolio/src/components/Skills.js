import { Container, Row,Col } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Angular from "../assets/img/Angular.svg"
import React from "../assets/img/React.svg"
import Spring from "../assets/img/spring.svg"
import Sql from "../assets/img/SQL.svg"
import Java from "../assets/img/Java.svg"
import sharp from "../assets/img/sharp.avif"

export const Skills = () => {
    /*Super importantes esto medias*/
    const responsive= {
        superLargeDesktop:{
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop:{
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile:{
            breakpoint: { max:454, min: 0},
            items: 1
        }
    };
    return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>These are some of the technologies in which I have developed my projects.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Java} alt="Image"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={Angular} alt="Image"/>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={React} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={Sql} alt="Image"/>
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={Spring} alt="Image"/>
                                    <h5>Spring</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={sharp}></img>
        </section>
    )
}