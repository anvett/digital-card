import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import styles from "./contactIconsOnly.module.scss";

const ContactIconsOnly = ({
  contacts,
  iconClassName = "",
  colClassName = "",
  containerContactButton = "",
}) => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const openPhoneModal = (contact) => {
    setActiveContact(contact);
    setShowPhoneModal(true);
  };

  const closePhoneModal = () => {
    setShowPhoneModal(false);
  };

  const openLocationModal = (contact) => {
    setActiveContact(contact);
    setShowLocationModal(true);
  };

  const closeLocationModal = () => {
    setShowLocationModal(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Número copiado al portapapeles!");
        closePhoneModal();
      })
      .catch((err) => {
        alert("Error al copiar el número.");
        console.error("Error al copiar texto: ", err);
      });
  };

  const downloadVCard = (contact) => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name || ""}
TEL:${contact.href.replace("tel:", "")}
END:VCARD
    `;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name || "contact"}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    closePhoneModal();
  };

  const handleContactClick = (contact) => {
    switch (contact.alt) {
      case "Phone":
        openPhoneModal(contact);
        break;
      case "Location":
        openLocationModal(contact);
        break;
      case "Email":
        window.location.href = contact.href;
        break;
      case "WhatsApp":
        window.open(contact.href);
        break;
      case "Telegram":
        window.open(contact.href);
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid className={`${styles.contactIconsContainer} ${containerContactButton}`}>
      <Row className={styles.contactIconsRow}>
        <Col className={`${styles.contactIconsCol} ${colClassName}`}>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`${styles.contactIcon} ${iconClassName}`}
              onClick={() => handleContactClick(contact)}
            >
              <Image
                className={`${styles.icon} ${iconClassName}`}
                src={contact.icon}
                alt={contact.alt}
                width={40}
                height={40}
              />
            </div>
          ))}
        </Col>
      </Row>

      {/* Modal para el Contacto de Teléfono */}
      <Modal show={showPhoneModal} onHide={closePhoneModal}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className={styles.modalTitle}>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Button
            onClick={() => {
              window.open(activeContact?.href);
            }}
          >
            Llamar
          </Button>
          <Button onClick={() => downloadVCard(activeContact)}>Guardar Contacto</Button>
          <Button onClick={() => copyToClipboard(activeContact?.href.replace("tel:", ""))}>
            Copiar Número
          </Button>
        </Modal.Body>
        <Modal.Footer className={styles.contactFooter}>
          <div>
            <p>Para guardar el contacto hay 2 opciones:</p>
            <p>Guardar el contacto descargando un archivo VCard</p>
            <ol>
              <li>Haz clic en Guardar contacto</li>
              <li>Se va a descargar un archivo VCard</li>
              <li>Abre la aplicación de contactos de tu dispositivo</li>
              <li>Importa el archivo VCD</li>
            </ol>
            <p>Guardar el contacto manualmente</p>
            <ol>
              <li>Copia el número</li>
              <li>Abre la aplicación de contactos de tu dispositivo</li>
              <li>Agrega un nuevo contacto</li>
              <li>Pega el número en el campo de teléfono</li>
            </ol>
          </div>
          <Button onClick={closePhoneModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para la Ubicación */}
      <Modal show={showLocationModal} onHide={closeLocationModal}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className={styles.modalTitle}>Ubicación</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalLocation}>
          <Button
            variant="primary"
            onClick={() => {
              window.open(activeContact?.href);
            }}
          >
            Ver en Google Maps
          </Button>
          {activeContact && activeContact.hours && (
            <div className={styles.address}>
              <p>
                <strong>Dirección:</strong> {activeContact.address}
              </p>
              <p>
                <strong>Horarios de Atención:</strong>
              </p>
              <ul>
                <li>
                  <strong>Lunes a Viernes:</strong> {activeContact.hours.mondayToFriday}
                </li>
                <li>
                  <strong>Sábado:</strong> {activeContact.hours.saturday}
                </li>
                <li>
                  <strong>Domingo:</strong> {activeContact.hours.sunday}
                </li>
                <li>
                  <strong>Feriados:</strong> {activeContact.hours.holidays}
                </li>
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className={styles.contactFooter}>
          <Button onClick={closeLocationModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactIconsOnly;
