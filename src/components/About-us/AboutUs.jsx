import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/gifff.gif";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Know About Me</h2>
              <p>
              "An initiative taker with exceptional knowledge of circuits and their methodologies pursuing Bachelors of Engineering degree in Electronics and Communication Engineering. 
              Skilled in Circuit implementation and the electronic components. A self-motivated UPSC CSE Aspirant.Insightful Engineering student who excels at C++ & RDBMS.
               Enthusiastic in learning GeoSciences such as GeoInformatics, Geomatics, Geology and Geophysics."
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={350} duration={1} suffix="+" />
                    </span>

                    <p className="counter__title">Achievements</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={1} />
                    </span>

                    <p className="counter__title">Projects</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={6} duration={1} />
                    </span>

                    <p className="counter__title">Research works</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={1}/>
                    </span>

                    <p className="counter__title">Paper works</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
