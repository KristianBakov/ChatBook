import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./PhotoCollage.css";

const PhotoCollage = ({ photos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos || photos.length === 0) return null;

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const topRowPhotoCount = 1;
  const bottomRowPhotoCount = 4;

  return (
    <div className="photo-collage">
      <div className="top-photo-container">
        <img
          src={photos[0].source}
          alt={`Collage 0`}
          className="top-photo"
          onClick={() => handleOpenModal(0)}
        />
      </div>
      {photos.length > 1 && (
        <div className="bottom-row">
          {photos
            .slice(topRowPhotoCount, bottomRowPhotoCount)
            .map((photo, index) => (
              <div
                key={index + topRowPhotoCount}
                className="bottom-photo-container"
              >
                <img
                  src={photo.source}
                  alt={`Collage ${index + topRowPhotoCount}`}
                  className="bottom-photo"
                  onClick={() => handleOpenModal(index + topRowPhotoCount)}
                />
                {photos.length > bottomRowPhotoCount &&
                  index === bottomRowPhotoCount - 1 && (
                    <div
                      className="overlay"
                      onClick={() => handleOpenModal(index + topRowPhotoCount)}
                    >
                      +{photos.length - bottomRowPhotoCount}
                    </div>
                  )}
              </div>
            ))}
        </div>
      )}

      <Modal
        isOpen={modalOpen}
        toggle={handleCloseModal}
        className="photo-modal"
      >
        <ModalHeader toggle={handleCloseModal}></ModalHeader>
        <ModalBody>
          <div className="modal-collage">
            <button className="modal-arrow left" onClick={showPrevImage}>
              &#9664;
            </button>
            <div className="modal-photo-container">
              <img
                src={photos[currentIndex].source}
                alt={`Modal Collage ${currentIndex}`}
                className="modal-photo"
              />
            </div>
            <button className="modal-arrow right" onClick={showNextImage}>
              &#9654;
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PhotoCollage;
