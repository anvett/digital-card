import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/testPage.module.scss";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";

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
                  src="/images/profileFoto.jpeg"
                  alt="Andrés Veintimilla"
                  size={150}
                />
              </motion.div>
            </section>
            <section>
              <PersonalInfo
                name="Andrés Veintimilla"
                title="Informatic Engineer, Master in TI"
                description="CEO of Anvetcorp. User support specialist with  over 15 years of experience. 
                Web Full Stack Developer."
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
                src="/images/binary.jpg"
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
                  location={["ANVETCORP", "Quito", "Ecuador"]}
                />
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de educación y certificaciones */}

        <Row>
          <Col className={styles.educationSection}>
            <div className={styles.educationTitle}>
              <h2>Educación y Certificaciones</h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.educationInfo}>
                <EducationAndCertifications
                  items={[
                    {
                      title: "Informatic Engineer",
                      institution: "UTPL",
                      year: "2013",
                      description: "Ingeniería en Informática",
                      logo: "/images/utpl_logo.jpeg",
                    },
                    {
                      title: "Master in TI",
                      institution: "IexeTEC",
                      year: "2022",
                      description: "Maestría en Tecnologías de la Información",
                      logo: "/images/iexe_logo.png",
                    },
                  ]}
                />
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Componente de experiencia laboral */}

        <Row>
          <Col className={styles.workExperience}>
            <WorkExperience
              experiences={[
                {
                  company: "Empresa XYZ",
                  role: "Desarrollador Senior",
                  description:
                    "Descripción detallada del rol y responsabilidades.",
                },
                {
                  company: "Empresa XYZ",
                  role: "Desarrollador Senior",
                  description:
                    "Descripción detallada del rol y responsabilidades.",
                },
              ]}
            />
          </Col>
        </Row>

        <Row>
          <Col className={styles.imageGallery}>
            <ImageGallery
              images={[
                {
                  thumbnail: "/images/cirugia.jpg",
                  full: "/images/cirugia.jpg",
                },
                {
                  thumbnail: "/images/binary.webp",
                  full: "/images/binary.webp",
                },
                {
                  thumbnail: "/images/cirugia.jpg",
                  full: "/images/cirugia.jpg",
                },
                {
                  thumbnail: "/images/binary.webp",
                  full: "/images/binary.webp",
                },
              ]}
            />
          </Col>
        </Row>

        {/* Componente de información de pago */}
        <Row>
          <Col className={styles.paymentSection}>
            <section className={styles.paymentInfo}>
              <div className={styles.paymentTitle}>
                <h2>Información de Pago</h2>
                <span>
                  Haz clic en el logo para acceder a los datos de la cuenta
                </span>
              </div>
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              > */}
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
              {/* </motion.div> */}
            </section>
          </Col>
        </Row>

        {/* Componente de video player */}

        <Row>
          <Col className={styles.videoPlayer}>
            <VideoPlayer videoUrl="/video/videocard1.mp4" />
          </Col>
        </Row>

        {/* Componente de QR Code */}
        <Row>
          <Col className={styles.qrCode}>
            <QRCodeComponent
              qrCodeImageUrl="/images/qr_code.png"
              altText="QR Code"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
