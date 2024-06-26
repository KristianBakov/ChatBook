import React from "react";
import { Container } from "reactstrap";
import "./PhotoGrid.css";

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return null;

  return (
    <Container className="image-gallery">
      {photos &&
        photos.map((photo, index) => (
          <div className="image-gallery-container" key={index}>
            <img src={photo.source} alt="user selected showcase" />
          </div>
        ))}
    </Container>
  );
};

export default PhotoGrid;
