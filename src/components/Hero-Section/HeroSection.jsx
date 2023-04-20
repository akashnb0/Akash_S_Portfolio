import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/gifffffff222.gif";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Hey!<br/>I'm Akash S
              </h2>
              
              <p className="mb-5">
              A diligent and enthusiastic professional with extraordinary skills in the field of programming.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Type here" />
              <button className="btn">Search</button>
            </div>
          </Col>
         
          <Col  lg="6" md="6" >
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
