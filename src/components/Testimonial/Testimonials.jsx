import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonal">
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Testimonals</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Man of PERFECTION
                      </h6>
                      <p>
                      "Working with Mr.S.Akash was a fantastic experience. Their programming skills are top-notch, and they consistently delivered high-quality work on time. I would highly recommend him to anyone looking for a talented and reliable programmer."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ram</h6>
                        <p>Banglore, Karnataka</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Well Experienced
                      </h6>
                      <p>
                      "I had the pleasure of working with Mr.S.Akash, and I was impressed with their dedication, professionalism, and attention to detail. Akash is a reliable and talented individual who always goes above and beyond to ensure client satisfaction. I would highly recommend him for any project or collaboration."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhaan</h6>
                        <p>Kochi, Kerala</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Person with Extraordinary skills
                      </h6>
                      <p>
                      "I have had the pleasure of working with Mr. S. Akash, and I must say he is one of the most talented individuals I have ever met. His extraordinary skills in Programming are unmatched, and he consistently delivers work of the highest quality. It was an honor to work with him, and I would highly recommend him for any project or opportunity."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ann</h6>
                        <p>Seattle, United States</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
