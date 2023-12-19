import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import styles from './ImageGallery.module.scss'; 

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <Row className={styles.gallery}>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} key={index} className={styles.thumbnail}>
            <Image src={image.thumbnail} onClick={() => openModal(image.full)} thumbnail />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Image src={selectedImage} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
