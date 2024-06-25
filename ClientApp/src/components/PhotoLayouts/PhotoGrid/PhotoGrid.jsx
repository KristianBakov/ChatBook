import React from "react";

const PhotoGrid = ({ photos }) => {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-container">
          <img src={photo.source} alt={`Photo ${index}`} className="photo" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
