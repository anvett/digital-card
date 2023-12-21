import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import styles from './ImageGallery.module.scss'; 

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

  const openModal = (image, description) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setShowModal(true);
  };

  return (
    <>
      <Row className={styles.gallery}>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} key={index} className={styles.thumbnail}>
            <Image src={image.thumbnail} onClick={() => openModal(image.full)} thumbnail />
            <span className={styles.imageDescription}>{image.description}</span>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Image src={selectedImage} fluid />
          <p className={styles.modalDescription}>{selectedDescription}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
