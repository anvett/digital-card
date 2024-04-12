import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Image from "next/image";
import styles from "./Services.module.scss";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Services = ({ services }) => {
  const [show, setShow] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleShow = (exp) => {
    setSelectedExp(exp);
    setShow(true);
  };

  // Función para renderizar la descripción como lista o párrafo
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  };

  return (
    <Container className={styles.container}>
      {services.map((exp, index) => (
        <Row key={index} className={styles.serviceItem} onClick={() => handleShow(exp)}>
          <Col>
            <h3 className={styles.serviceName}>{exp.service}</h3>
          </Col>
        </Row>
      ))}

      {/* Modal para mostrar detalles */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className={styles.captionHeader}>
          <div className={styles.serviceImageContainer}>
            <Image
              src={selectedExp?.imageUrl}
              alt="Service Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Modal.Header>
        <Modal.Body className={styles.captionBody}>
          <Modal.Title className={styles.captionTitle}>{selectedExp?.service}</Modal.Title>
          {renderDescription(selectedExp?.description)}

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
                setShow(false);
                window.history.back();
              }}
            >
              X Cerrar
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Services;
