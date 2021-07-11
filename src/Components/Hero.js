import React from "react";
import {
  Row,
} from "reactstrap";

function Hero() {
  return (
    <>
      <Row>
        <div className="my-5">
            <img src="assets/hero.png" alt="logo" className="hero-img" />
        </div>
      </Row>
    </>
  );
}

export default Hero;
