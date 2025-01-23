import introduction from "@/data/introduction";
import image from "@/images/resources/introduction-img-1.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Introduction = () => {
  return (
    <section className="introduction">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="introduction__left">
              <div className="introduction__img">
                <Image src={image.src} alt="" />
              </div>
              <div className="introduction__content">
                <p className="introduction__text">
                ലഭ്യമായ സൗജന്യ സഹായങ്ങളിലൂടെ നിങ്ങൾക്ക് ആവശ്യമുള്ളിടത്തോളം നിങ്ങളുടെ സ്വപ്നങ്ങൾ സാക്ഷാത്കരിക്കാൻ സഹായം ലഭ്യമാക്കുന്നു.
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="introduction__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Inroductions</span>
                <h2 className="section-title__title">
                സമൂഹത്തിനും പ്രകൃതിക്കും മുന്നേറ്റത്തിന്റെ ദീപശിഖ
                </h2>
              </div>
              <p className="introduction__right-text">
              മഹാത്മ NGO's ഒരു നോൺ പ്രോഫിറ്റ് ഓർഗനൈസേഷനാണ്. വിദ്യാഭ്യാസം, സാമൂഹ്യ ക്ഷേമം, പരിസ്ഥിതി സംരക്ഷണം, ഗുണനിലവാരമുള്ള തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കൽ എന്നിവയെ പ്രോത്സാഹിപ്പിക്കുന്നതിനായി പ്രവർത്തിക്കുന്ന കൂട്ടായ്മയാണ്.
              </p>
              <ul className="introduction__icon-wrap list-unstyled">
                {introduction.map(({ id, title, description, icon }) => (
                  <li className="introduction__icon-wrap-single" key={id}>
                    <div className="introduction__icon-box">
                      <span className={icon}></span>
                    </div>
                    <div className="introduction__content-box">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
