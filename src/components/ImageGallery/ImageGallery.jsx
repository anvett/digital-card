import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import styles from './ImageGallery.module.scss';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    headerImage: '',
    title: '',
    descriptionItems: [],
    highlightedText: '',
    alt: '',
  });

  const openModal = (image, title, descriptionItems, highlightedText, alt) => {
    setModalContent({
      headerImage: image,
      title,
      descriptionItems,
      highlightedText,
      alt,
    });
    setShowModal(true);
  };

  return (
    <>
      <Row className={styles.gallery}>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} key={index} className={styles.thumbnail}>
            <Image
              src={image.thumbnail}
              onClick={() => openModal(image.full, image.title, image.descriptionItems, image.highlightedText, image.alt)}
              thumbnail
              alt={image.alt}
            />
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>{image.title}</span>
              <span className={styles.imageDescription}>{image.description}</span>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className={styles.captionHeader}>
          <Image src={modalContent.headerImage} fluid alt={modalContent.alt} />
        </Modal.Header>
        <Modal.Body className={styles.captionBody}>
          <h4 className={styles.captionTitle}>{modalContent.title}</h4>
          <ul>
            {modalContent.descriptionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className={styles.highlightedText}>{modalContent.highlightedText}</p>
          <WhatsAppButton
            stylesButton={styles.whatsappButtonContact}
            phone="+593992543979"
            message="Hola, me gustaría saber más sobre tus servicios"
            label="Más información"
          />
          <div className={styles.closeButtonContainer}>
            <button
              className={styles.closeButton}
              onClick={() => {
                setShowModal(false);
                window.history.back();
              }}
            >
              X Cerrar
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
