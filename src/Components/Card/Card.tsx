import React from "react";
import { StyledCard } from "./Card.style";

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string; 
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <StyledCard>

      <a href={link}>
      <img src={image} alt={title} />
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </StyledCard>
  );
};

export default Card;
