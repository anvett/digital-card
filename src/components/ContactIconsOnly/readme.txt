# ContactIconsOnly Component

El componente `ContactIconsOnly` es una herramienta versátil para mostrar una serie de botones de contacto con íconos y texto, diseñada para facilitar la conexión con servicios externos como llamadas telefónicas, correos electrónicos y mapas.

Incluye un modal para phone con opciones de llamar y guardar contacto.

Incluye un modal para ubicación con opciones de acceder a maps y también mostrar dirección y horarios de atención.


ARRAY ContactIconsButton

//-----------------------------------------------
  // Contact Data Array
  //-----------------------------------------------

  const contactData = [
    {
      href: "tel:+593994805678",
      icon: "/icons/call_g.png",
      alt: "Phone",
      title: "Contáctame",
      name: "Anvetcorp SAS",
    },
    {
      href: "mailto:veritocanor@gmail.com",
      icon: "/icons/email_g.png",
      alt: "Email",
      title: "Email",
    },
    {
      href: "https://wa.me/+593994805678",
      icon: "/icons/whatsapp_g.png",
      alt: "WhatsApp",
      title: "WhatsApp",
    },
    // {
    //   href: "https://t.me/username",
    //   icon: "/icons/telegram_c.png",
    //   alt: "Telegram",
    //   title: "Telegram",
    // },
    {
      href: "https://www.google.com/maps/search/?api=1&query=ANVETCORP",
      icon: "/icons/ubicacion_g.png",
      alt: "Location",
      title: "Ubicación",
      address: "Av. Principal 123, Ciudad, País",
      hours: {
        mondayToFriday: "09:00 - 18:00",
        saturday: "10:00 - 14:00",
        sunday: "Cerrado",
        holidays: "10:00 - 14:00",
      },
    },
  ];

  ## USO EN INDEX

  {/* Contact Info Section */}
              <Row>
                <Col className={styles.contactButtonSection}>
                  <ContactIconsOnly
                    contacts={contactData}
                    iconClassName="customIconClass"
                    colClassName="customColClass"
                    containerContactButton="customContainerClass"
                  />
                </Col>
              </Row>


## SCSS

 //---------------------------------------------
  // Contact Buttons Section
  //---------------------------------------------
  .contactButtonsSection {
    padding-top: 30px;
    padding-bottom: 30px;
  }