import { Container, Row, Col, Nav, NavItem, TabContainer, TabContent, Tab } from "react-bootstrap"
import { ProjectCards } from "./ProjectsCards"
import Camarones from "../assets/img/camarones.jpg"
import Port from "../assets/img/Port.png"

export const Projects = () =>{

    const Projects=[
        {
            title: "Camarones App",
            description: "Management app developed in Angular, Java (Spring Boot), MySQL.",
            imgUrl: Camarones
        },
        {
            title: "My portfolio",
            description: "Developed in React",
            imgUrl: Port
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>"These are some of the projects in which I have participated."</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <NavItem>
                                    <Nav.Link eventKey="first">FrontEnd</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="second">BackEnd</Nav.Link>
                                </NavItem>   
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            Projects.map((project, index) =>{
                                                return(
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}