import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./PhotoCollage.css";

const PhotoCollage = ({ photos }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (!photos || photos.length === 0) return null;

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const topRowPhotoCount = 1;
  const bottomRowPhotoCount = 4;

  return (
    <div className="photo-collage">
      <div className="top-photo-container">
        <img src={photos[0].source} alt={`Collage 0`} className="top-photo" />
      </div>
      {photos.length > 1 && (
        <div className="bottom-row">
          {photos.slice(topRowPhotoCount, 4).map((photo, index) => (
            <div
              key={index + topRowPhotoCount}
              className="bottom-photo-container"
            >
              <img
                src={photo.source}
                alt={`Collage ${index + topRowPhotoCount}`}
                className="bottom-photo"
                onClick={
                  photos.length > bottomRowPhotoCount &&
                  index === topRowPhotoCount + 1
                    ? handleOpenModal
                    : undefined
                }
              />
              {photos.length > bottomRowPhotoCount &&
                index === topRowPhotoCount + 1 && (
                  <div className="overlay" onClick={handleOpenModal}>
                    +{photos.length - bottomRowPhotoCount}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={modalOpen} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>Photo Gallery</ModalHeader>
        <ModalBody>
          <div className="modal-collage">
            {photos.map((photo, index) => (
              <div key={index} className="modal-photo-container">
                <img
                  src={photo.source}
                  alt={`Modal Collage ${index}`}
                  className="modal-photo"
                />
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PhotoCollage;
