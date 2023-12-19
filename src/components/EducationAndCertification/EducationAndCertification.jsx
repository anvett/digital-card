import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import styles from './EducationAndCertification.module.scss';


const EducationAndCertifications = ({ items }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item} onClick={() => handleShow(item)}>
          <Image className={styles.logoEducation} src={item.logo} alt={item.title} width={80} height={80} />
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      ))}

      {/* Modal para mostrar detalles */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedItem?.institution}</p>
          <p>{selectedItem?.year}</p>
          <p>{selectedItem?.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EducationAndCertifications;
