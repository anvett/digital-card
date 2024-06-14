PAYMENT COMPONENT

Componente que muestra la información de cuentas bancarias para pago con transferencias

Cuenta con un título, instrucciones e imágenes de logos de cada institución financiera

Cuenta con un modal que se despliega al hacer clic en la imagen del banco.

El modal tiene el nombre del banco y la información de la cuenta.

Este es el código jsx del uso del componente:

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


//---------------------------------
// Payment section
//---------------------------------

.paymentSection {
  padding-top: $spacing-8;
  padding-bottom: $spacing-8;
  width: 100%;
  height: auto;
  //background-color: $light-color;
  background-image: url("/images/background_4.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.paymentInfo {
  margin-bottom: $spacing-4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .paymentTitle {
    font-family: $font-primary;
    font-size: 2.5rem;
    color: $primary-color;
    text-align: center;
    margin-bottom: $spacing-4;
  }
  .paymentDescription {
    color: $primary-color;
    text-align: center;
    font-size: 1.2rem;
  }

  .bankInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $spacing-7;
    width: 100%;
    height: auto;
    padding-top: $spacing-6;
    border-radius: 50%;
  }
}