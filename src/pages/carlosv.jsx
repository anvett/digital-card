import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/carlosv.module.scss";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";

export default function testpage() {
  return (
    <Layout>
      <Container fluid className={styles.mainContainer}>
        <Row className={styles.mainRow}>

          {/* Columna con imagen de perfil, informacón general, redes sociales e imagen informativa */}
          <Col xs={9} className={styles.infoCol}>
            <section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ProfileImage
                  src="/images/profileCarlosVeintimilla.jpg"
                  alt="Dr. Carlos Veintimilla Tinoco"
                  size={200}
                />
              </motion.div>
            </section>
            <section>
              <PersonalInfo
                name="Dr. Carlos Veintimilla T"
                title="Médico Oncólogo Magister en Gerencia de Instituciones de Salud"
                description="Médico Oncólogo con más de 10 años de experiencia en el 
                tratamiento de pacientes con cáncer."
              />
            </section>
            <section className={styles.socialMediaSection}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <SocialMediaIcons
                  facebook="https://facebook.com/usuario"
                  instagram="https://instagram.com/usuario"
                  linkedin="https://linkedin.com/in/usuario"
                  tiktok="https://tiktok.com/@usuario"
                  twitter="https://twitter.com/usuario"
                />
              </motion.div>
            </section>
            <section className={styles.imageSection}>
              <Image
                src="/images/cirugia.jpg"
                alt="Technology background"
                width={500}
                height={300}
                layout="responsive"
                className={styles.backgroundImage}
              />
            </section>
          </Col>
          

          {/* Columna con información de contacto */}

          <Col xs={3} className={styles.infoCol2}>
            <section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ContactIcons
                  phone="+1234567890"
                  email="usuario@example.com"
                  whatsapp="+1234567890"
                  telegram="username"
                />
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de información de pago */}
        <Row>
          <Col className={styles.personalInfo}>
            <section className={styles.paymentInfo}>
              <div className={styles.paymentTitle}>
                <h2>Información de Pago</h2>
                <span>
                  Haz clic en el logo para acceder a los datos de la cuenta
                </span>
              </div>
              <div className={styles.bankInfo}>
                <PaymentInfo
                  bankName="Banco Pichincha"
                  accountNumber="123456789"
                  identification="123456"
                  email="contacto@bancoxyz.com"
                  bankLogo="/images/banco_pichincha.png"
                />
                <PaymentInfo
                  bankName="Banco Pacífico"
                  accountNumber="123456789"
                  identification="ID 123456"
                  email="contacto@bancoxyz.com"
                  bankLogo="/images/banco_pacifico.png"
                />
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Layout>
  );
}
