import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Image from 'next/image';
import styles from './PaymentInfo.module.scss';


const PaymentInfo = ({ bankName, accountNumber, identification, email, bankLogo }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

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
        <Modal.Header closeButton>
          <Modal.Title>Detalles de Pago  {bankName}</Modal.Title>
          <span>Haga clic en la info y pegue en su app bancaria</span>
        </Modal.Header>
        <Modal.Body>
          <p onClick={() => copyToClipboard(accountNumber)}>Cuenta: {accountNumber}</p>
          <p onClick={() => copyToClipboard(identification)}>Identificación: {identification}</p>
          <p onClick={() => copyToClipboard(email)}>Email: {email}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentInfo;
