import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import styles from "../styles/Home.module.scss";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import Services from "@/components/ServicesSection/Services";
import ProductsSection from "@/components/ProductsSection/ProductsSection";

export default function testpage() {
  const productsData = [
    {
      id: 1,
      name: "Repotenciación de Computadores",
      image: "/images/soporteTecnico_1.jpg",
      description:"Transforma tu experiencia informática con nuestra repotenciación de computadores. Mejoramos significativamente el rendimiento de tus equipos actualizando componentes críticos y optimizando el software. Ideal para quienes buscan extender la vida útil de sus dispositivos sin comprometer velocidad o eficiencia. Desde actualizaciones de memoria RAM y almacenamiento SSD hasta la mejora de sistemas de enfriamiento, nuestro servicio asegura que tu PC o laptop se mantenga al día con las demandas tecnológicas actuales.",
      phone: "+593992542248",
    },
    {
      id: 2,
      name: "Venta de Computadoras",
      image: "/images/computers.jpeg",
      description: "Ofrecemos una selección de computadoras de alta calidad, perfectas para profesionales y empresas que buscan rendimiento y fiabilidad.",
      phone: "+593992542248",
    },
    {
      id: 3,
      name: "Impresoras y Accesorios",
      image: "/images/impresoras.jpeg",
      description: "Desde impresoras multifuncionales hasta accesorios esenciales, tenemos todo lo que tu negocio necesita para operar de manera eficiente.",
      phone: "+593992542248",
    },
    {
      id: 4,
      name: "Repuestos y Partes",
      image: "/images/partes.jpg",
      description: "Mantén tu tecnología funcionando en su máximo potencial con nuestra amplia selección de repuestos y partes de alta calidad. Desde memorias RAM, discos duros (HDDs y SSDs), hasta tarjetas gráficas y placas base, cada pieza ha sido seleccionada para ofrecer compatibilidad universal y rendimiento excepcional. Ya sea que estés buscando mejorar tu equipo actual o necesites reemplazar un componente defectuoso, tenemos todo lo necesario para ayudarte.",
      phone: "+593992542248",
    },
    {
      id: 5,
      name: "Tarjetas de Presentación Digitales",
      image: "/images/anvetcard.png",
      description: "Diferénciate en el mundo digital con nuestras tarjetas de presentación digitales personalizables. Desarrolladas con tecnología de punta, estas tarjetas no solo capturan la esencia de tu marca personal o empresarial, sino que también facilitan la interacción directa con tus contactos a través de enlaces integrados a redes sociales, portafolios en línea, y mucho más. Ecológicas y siempre accesibles, nuestras tarjetas digitales son la herramienta perfecta para hacer una impresión duradera en la era digital.",
      phone: "+593992542248",
    },
  ];

  const service = [
    {
      service: "Soluciones en Help Desk",
      description:
        "Nuestro equipo ofrece soporte técnico integral, desde el diagnóstico de los problemas de sus equipos hasta soluciones help desk avanzadas. Resolvemos problemas de hardware, software, y redes, asegurando la continuidad del negocio.",
      imageUrl: "/images/userSupport_1.jpg",
    },
    {
      service: "Outsourcing de TI",
      description:
        "Como CEO de Anvetcorp SAS, ofrezco soluciones de outsourcing de TI, permitiendo a las empresas enfocarse en su core business mientras nosotros nos ocupamos de la tecnología con un servicio eficiente y confiable.",
      imageUrl: "/images/outsourcing_1.jpg",
    },

    {
      service: "Instalación y Gestión de Redes",
      description:
        "Proporcionamos soluciones completas en redes, desde la instalación de cableado estructurado hasta la configuración de redes WiFi, asegurando una conectividad rápida y segura para tu empresa.",
      imageUrl: "/images/network_1.jpg",
    },

    {
      service: "Consultoría en TI",
      description:
        "Con 15 años de experiencia, brindamos consultoría en TI para optimizar el uso de recursos informáticos, mejorar la seguridad digital y aumentar la eficiencia operativa. Nos especializamos en soluciones personalizadas para cada cliente.",
      imageUrl: "/images/consultoriaTi.png",
    },

    {
      service: "Desarrollo Web Full Stack",
      description:
        "Ofrecemos soluciones de desarrollo web full stack, creando aplicaciones y sitios web responsivos, intuitivos y de alto rendimiento. Desde el concepto inicial hasta el lanzamiento, garantizamos una experiencia de usuario impecable y una arquitectura robusta.",
      imageUrl: "/images/webDesign.jpg",
    },
  ];

  const images = [
    
    {
      thumbnail: "/images/Ofertas/MSI_Katana.jpeg",
      full: "/images/Ofertas/MSI_Katana.jpeg",
      title: "Laptop MSI Katana 15 B13VFK",
      description: "Laptop MSI Katana 15 B13VFK, 15.6 pulgadas, Intel Core i7, 16GB RAM, 1 TB SSD, NVIDIA GeForce RTX 4060",
      descriptionItems: ["Intel Core i7 13620H", "16 GB Ram expandible a 64 GB", "1 TB SSD", "15.6 pulgadas FHD 144 Hz", "NVIDIA GeForce RTX 4060 8GB GDDR6", "Teclado retroiluminado RGB","Windows 11 Home","Un año de garantía"],
      highlightedText: "1629,00 USD",
      alt: "Oferta 1",
    },
    {
      thumbnail: "/images/webDesign.jpg",
      full: "/images/webDesign.jpg",
      title: "Macbook Pro 2012",
      description: "Seminueva, 8GB RAM, 128GB SSD, 13 pulgadas, Core i5",
      descriptionItems: ["Intel Core i5 4 núcleos", "8 GB ram DDR3", "128 GB SSD", "13 pulgadas"],
      highlightedText: "¡325,00 USD!",
      alt: "Oferta 2",
    },
    {
      thumbnail: "/images/Ofertas/Epson_M2170.jpg",
      full: "/images/Ofertas/Epson_M2170.jpg",
      title: "Impresora Epson M2170",
      description: "Ecotank, Impresora Multifuncional, Impresión monocromática",
      descriptionItems: ["Multifuncional", "Impresión Monocromática", "Impresora, Copiadora y Escáner", "Conexión WiFi", "Impresión Dúplex", "EcoTank", "Garantía de 1 año"],
      highlightedText: "390,00 USD",
      alt: "Oferta 3",
    },
  ];

  return (
    <>
      <Head>
        <title>Andrés Veintimilla</title>
        <meta name="description" content="Andrés Veintimilla Digital Card" />
        <link rel="icon" href="/icons/sharedimage.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://aveintimillacard.anvetcorp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Andrés Veintimilla" />
        <meta property="og:description" content="Tarjeta de negocios digital" />
        <meta
          property="og:image"
          content="https://aveintimillacard.anvetcorp.com/images/sharedimage.jpeg"
        />
      </Head>
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
                  <ProfileImage
                    src="/images/profileFoto.jpeg"
                    alt="Andrés Veintimilla"
                    size={200}
                  />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="Andrés Veintimilla"
                  title="Ingeniero Informático, Master in TI"
                  description="CEO Anvetcorp SAS. Especialista en Ingeniería de soporte con más de 15 años de experiencia. 
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
                  <div className={styles.callToActionSection}>
                    <WhatsAppButton
                      phone="+593992543979"
                      message="Hola, Necesito información sobre tus servicios."
                      label="Contactar"
                      stylesButton={styles.whatsappButton}
                    />
                  </div>
                </motion.div>
              </section>
              <section className={styles.imageSection}>
                <Image
                  src="/images/hero.jpg"
                  alt="Technology background"
                  width={300}
                  height={300}
                  //layout="responsive"
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
          {/* 
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
          </Row> */}

          {/* Componente de experiencia laboral */}
          {/* 
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
          </Row> */}

          {/* Componente de Servicios */}

          <Row>
            <Col className={styles.servicesSection}>
              <section id="servicios">
                <div className={styles.servicesText}>
                  <h2 className={styles.servicesTitle}>Servicios</h2>
                  <span className={styles.servicesInstructions}>
                    Haz clic en el item para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de Productos destacados */}

          <section className={styles.productsSection} id="productos">
            <Row>
              <Col className={styles.productsText}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className={styles.productsTitle}>Productos Destacados</h1>
                  <p className={styles.productsDescription}>
                    Haz clic en el producto para ver los detalles
                  </p>
                  <ProductsSection productsData={productsData} />
                </motion.div>
              </Col>
            </Row>
          </section>

          {/* Componente de galería de imágenes */}
          <section className={styles.imageGallerySection} id="gallery">
            <Row>
              <Col className={styles.imageGalleryCol}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className={styles.galleryTitle}>Ofertas Destacadas</h1>
                  <p className={styles.galleryDescription}>
                    Equipos nuevos y seminuevos disponibles
                  </p>
                  <ImageGallery images={images} />
                </motion.div>
              </Col>
            </Row>
          </section>

          {/* Componente de información de pago */}
          <section id="payment" className={styles.paymentSection}>
            <Row>
              <Col className={styles.paymentInfo}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <p className={styles.paymentDescription}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </p>

                  <div className={styles.bankInfo}>
                    {/* <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="5261117000"
                      identification="1103826614"
                      email="aveintimilla@anvetcorp.com"
                      bankLogo="/images/banco_pichincha.png"
                    /> */}
                    <PaymentInfo
                      bankName="Banco Pacífico"
                      accountNumber="7371748"
                      accountType="Corriente"
                      identification="1103826614"
                      email="aveintimilla@anvetcorp.com"
                      bankLogo="/images/banco_pacifico.png"
                    />
                  </div>
                </motion.div>
              </Col>
            </Row>
          </section>

          {/* Componente de video player */}
          <section id="video" className={styles.videoSection}>
            <Row>
              <Col className={styles.videoPlayer}>
                <VideoPlayer videoUrl="/video/videocard1.mp4" />
              </Col>
            </Row>
          </section>
          {/* Componente de QR Code */}
          <section className={styles.qrCode} id="qrCode">
            <Row>
              <Col className={styles.qrCode}>
                <QRCodeComponent qrCodeImageUrl="/images/qr_code.png" altText="QR Code" />
              </Col>
            </Row>
          </section>
        </Container>
      </Layout>
    </>
  );
}
