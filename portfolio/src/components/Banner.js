import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import {ArrowRightCircle} from "react-bootstrap-icons"
import drake from "../assets/img/drake.png"


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["BackEnd", "FrontEnd","UX/Designer"]
    const [text,setText]  = useState('');
    const [delta, SetDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
        return () => { clearInterval(ticker) };
      }, [text,delta,tick])


    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting){
            SetDelta(PrevDelta => PrevDelta /2)
        }

        if (!isDeleting && updateText === fullText){
            setIsDeleting(true)
            SetDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            SetDelta(500);
        }

    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-cemnter">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Ciro Bernal Porflidtt</span>
                        <h1>{"Hi i'm fullstack Dev      "}<span className="wrap"><br/>{text}</span></h1>
                        <p>Student in the IT field seeking opportunities to gain experience and put my technical skills and knowledge to the test in a challenging work environment. My passion for quality and efficiency in successful deliveries drives me to contribute significantly to teams and companies.
                        </p>
                        <button onClick={() => console.log('connect')}> Connect with me<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={drake} alt="Headder img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}