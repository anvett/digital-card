import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styles from './WorkExperience.module.scss'; 

const WorkExperience = ({ experiences }) => {
  const [show, setShow] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const handleShow = (exp) => {
    setSelectedExp(exp);
    setShow(true);
  };

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h2 className={styles.title}>Experiencia Laboral</h2>
        </Col>
      </Row>
      {experiences.map((exp, index) => (
        <Row key={index} className={styles.experienceItem} onClick={() => handleShow(exp)}>
          <Col>
            <h3 className={styles.companyName}>{exp.company} - {exp.role}</h3>
          </Col>
        </Row>
      ))}

      {/* Modal para mostrar detalles */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedExp?.company} - {selectedExp?.role}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedExp?.description}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default WorkExperience;
