// country card componet
import React from "react";
import { Card } from "react-bootstrap";
import "./CountryCard.css";

const CountryCard = ({ name, region, flag, index }) => {
  return (
    <Card
      className="country-card border-grey rounded-0"
      data-aos="fade-up"
      data-aos-delay={index * 50} // adds staggered animation
    >
      <div className="d-flex country-card-inner">
        <div className="flag-box">
          <img src={flag} loading="lazy" alt={name} className="flag-img" />
        </div>
        <div>
          <Card.Title className="mb-1 fw-semibold">{name}</Card.Title>
          <Card.Text>{region}</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(
  CountryCard,
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name &&
    prevProps.region === nextProps.region &&
    prevProps.flag === nextProps.flag
);
