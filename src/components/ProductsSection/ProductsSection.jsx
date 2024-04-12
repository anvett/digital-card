import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./ProductsSection.module.scss";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

const ProductsSection = ({ productsData }) => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

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
    <section id="productos">
      <Row>
        {productsData.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} className={styles.productCol}>
            <div className={styles.productCard} onClick={() => handleShowModal(product)}>
              <div className={styles.imageContainer}>
                <Image src={product.image} alt={product.name} width={200} height={200} />
              </div>
              <h3>{product.name}</h3>
              <WhatsAppButton
                phone="+593992543979"
                message="Hola, me gustaría saber más sobre tus servicios"
                label="Contactar"
                stylesButton={styles.whatsappButton}
              />
            </div>
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header className={styles.captionHeader} closeButton>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={400}
              height={400}
              layout="responsive"
              className={styles.productImage}
            />
          </Modal.Header>
          <Modal.Body className={styles.captionBody}>
            <Modal.Title className={styles.captionTitle}>{selectedProduct.name}</Modal.Title>
            {renderDescription(selectedProduct.description)}
            <WhatsAppButton
              stylesButton={styles.whatsappButtonContact} // Asegúrate de que esta clase esté definida en tu SCSS
              phone={selectedProduct.phone}
              message="Hola, estoy interesado en este producto."
              label="Quiero consultar"
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
      )}
    </section>
  );
};

export default ProductsSection;
