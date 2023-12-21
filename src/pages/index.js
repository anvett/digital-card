import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import styles from "../styles/Home.module.scss";
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
            <section id="profile">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ProfileImage src="/images/profileFoto.jpeg" alt="Andrés Veintimilla" size={150} />
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
                  facebook="https://www.facebook.com/andres.veintimilla1"
                  instagram="https://www.instagram.com/aveintimillat"
                  linkedin="https://www.linkedin.com/in/andr%C3%A9s-veintimilla-764a1565/"
                  tiktok="https://www.tiktok.com/@anvett?lang=es"
                  twitter="https://twitter.com/aveintimillat"
                />
              </motion.div>
            </section>
            <section className={styles.imageSection}>
              <Image
                src="/images/technology_1.jpg"
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
                  phone="+593992543979"
                  email="aveintimilla@anvetcorp.com"
                  whatsapp="+593992543979"
                  telegram="+593992543979"
                  location={["ANVETCORP", "Quito", "Ecuador"]}
                />
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de educación y certificaciones */}

        <Row>
          <Col className={styles.educationSection}>
            <section id="education">
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
                        institution: "Universidad Técnica Particular de Loja",
                        year: "2013",
                        description:
                          "Ingeniería en Informática con mención en Sistemas de Información. ",
                        logo: "/images/utpl_logo.jpeg",
                      },
                      {
                        title: "Master TI",
                        institution: "IexeTEC",
                        year: "2022",
                        description:
                          "Maestría en Tecnologías de la Información con mención en Desarrollo Web full stack. La Maestría se desarrolló en Puebla - México.",
                        logo: "/images/iexe_logo.png",
                      },
                      {
                        title: "Web full stack",
                        institution: "EMundos Escuela de negocios y tecnología",
                        year: "2022",
                        description:
                          "Diplomado en desarrollo web full stack. Se abarcó las siguientes tecnologías: HTML, CSS, JS, REACT, DJANGO. El diplomado se desarrolló en Córdoba - Argentina.",
                        logo: "/images/mundose.jpg",
                      },
                    ]}
                  />
                </div>
              </motion.div>
            </section>
          </Col>
        </Row>

        {/* Componente de experiencia laboral */}

        <Row>
          <Col className={styles.workExperience}>
            <section id="experience">
              <WorkExperience
                experiences={[
                  {
                    company: "Anvetcorp S.A.S",
                    role: "CEO Presidente",
                    description:
                      "User support specialist with  over 15 years of experience. Outstanding customer service skills. Outsourcing services. Network installation and administration. Cybersecurity management",
                  },
                ]}
              />
            </section>
          </Col>
        </Row>

        <Row>
          <Col className={styles.imageGallery}>
            <ImageGallery
              images={[
                {
                  thumbnail: "/images/cybersecurity_1.jpg",
                  full: "/images/cybersecurity_1.jpg",
                  description: "Cybersecurity",
                },
                {
                  thumbnail: "/images/network_1.jpg",
                  full: "/images/network_1.jpg",
                  description: "Network",
                },
                {
                  thumbnail: "/images/outsourcing_1.jpg",
                  full: "/images/outsourcing_1.jpg",
                  description: "Outsourcing",
                },
                {
                  thumbnail: "/images/userSupport_1.jpg",
                  full: "/images/userSupport_1.jpg",
                  description: "Help Desk",
                },
                {
                  thumbnail: "/images/webDesign.jpg",
                  full: "/images/webDesign.jpg",
                  description: "Web Design",
                },
                {
                  thumbnail: "/images/soporteTecnico_1.jpg",
                  full: "/images/soporteTecnico_1.jpg",
                  description: "Soporte Técnico",
                },
              ]}

            />
          </Col>
        </Row>

        {/* Componente de información de pago */}
        <Row>
          <Col className={styles.paymentSection}>
            <section id="payment" className={styles.paymentInfo}>
              <div className={styles.paymentTitle}>
                <h2>Información de Pago</h2>
                <span>Haz clic en el logo para acceder a los datos de la cuenta</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
              <div className={styles.bankInfo}>
                <PaymentInfo
                  bankName="Banco Pichincha"
                  accountNumber="5261117000"
                  identification="1103826614"
                  email="aveintimilla@anvetcorp.com"
                  bankLogo="/images/banco_pichincha.png"
                />
                <PaymentInfo
                  bankName="Banco Pacífico"
                  accountNumber="7371748"
                  identification="1103826614"
                  email="aveintimilla@anvetcorp.com"
                  bankLogo="/images/banco_pacifico.png"
                />
              </div>
              </motion.div>
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
            <section id="qrCode">
              <QRCodeComponent qrCodeImageUrl="/images/qr_code.png" altText="QR Code" />
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
