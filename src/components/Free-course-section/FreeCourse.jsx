import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";

import courseImg02 from "../../assests/images/diab.jpg"
import courseImg03 from "../../assests/images/hearclear.jpg";

import courseImg04 from "../../assests/images/protons.jpg";
import courseImg05 from "../../assests/images/wec.jpg";

import courseImg06 from "../../assests/images/ui-ux.png";
import courseImg07 from "../../assests/images/web-design.png";

import courseImg08 from "../../assests/images/web-development.png";

import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Computer on Office Automation",
    imgUrl: courseImg01,
   
  },
  {
    id: "02",
    title: "Dia'B",
    imgUrl: courseImg02,
    
  },

  {
    id: "03",
    title: "HearClear",
    imgUrl: courseImg03,
  
  },
  {
    id: "04",
    title: "Protons",
    imgUrl: courseImg04,
  
  },
  {
    id: "05",
    title: "Web Enabled Controller",
    imgUrl: courseImg05,
   
  },
  {
    id: "06",
    title: "Bandobast monitoring",
    imgUrl: courseImg06,
  
  },
  {
    id: "07",
    title: "UI/UX",
    imgUrl: courseImg07,
   
  },

  {
    id: "08",
    title: "Foundley",
    imgUrl: courseImg08,
   
  },

];

const FreeCourse = () => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Project works</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
