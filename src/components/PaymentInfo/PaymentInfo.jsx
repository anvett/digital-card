
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './PaymentInfo.module.scss';

const PaymentInfo = ({ bankName, accountNumber, accountType, identification, email, bankLogo }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Información copiada: ${text}`);
    } catch (error) {
      console.error('Error al copiar al portapapeles: ', error);
      alert('Error al copiar la información');
    }
  };

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer' }}>
        <Image className={styles.bankLogo} src={bankLogo} alt={bankName} width={80} height={80} />
      </div>

      {/* Modal para mostrar detalles de pago */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className={styles.captionHeader} closeButton>
          <Modal.Title className={styles.captionTitle}>Detalles de Pago {bankName}</Modal.Title>
          <span>Haga clic en el botón copiar para pegar en su app bancaria</span>
        </Modal.Header>
        <Modal.Body className={styles.captionBody}>
          <div className={styles.paymentDetail}>
            <span>Cuenta: {accountNumber}</span>
            <Button variant="outline-primary" size="sm" onClick={() => copyToClipboard(accountNumber)}>Copiar</Button>
          </div>
          <div className={styles.paymentDetail}>
            <span>Tipo de cuenta: {accountType}</span>
            {/* <Button variant="outline-primary" size="sm" onClick={() => copyToClipboard(accountType)}>Copiar</Button> */}
          </div>
          <div className={styles.paymentDetail}>
            <span>Identificación: {identification}</span>
            <Button variant="outline-primary" size="sm" onClick={() => copyToClipboard(identification)}>Copiar</Button>
          </div>
          <div className={styles.paymentDetail}>
            <span>Email: {email}</span>
            <Button variant="outline-primary" size="sm" onClick={() => copyToClipboard(email)}>Copiar</Button>
          </div>
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
    </>
  );
};

export default PaymentInfo;
