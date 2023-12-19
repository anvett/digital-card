Documentación de Componentes
1. ProfileImage
Descripción:
Componente para mostrar una imagen de perfil.

Props:

src (string): URL de la imagen de perfil.
alt (string): Texto alternativo para la imagen.
size (number): Tamaño de la imagen en píxeles.
Ejemplo de Uso:

jsx
Copy code
<ProfileImage
  src="/images/profileFoto.jpeg"
  alt="Andrés Veintimilla"
  size={150}
/>
2. PersonalInfo
Descripción:
Componente para mostrar información personal o profesional.

Props:

name (string): Nombre de la persona.
title (string): Título profesional o cargo.
description (string): Descripción o biografía breve.
Ejemplo de Uso:

jsx
Copy code
<PersonalInfo
  name="Andrés Veintimilla"
  title="Informatic Engineer, Master in TI"
  description="CEO of Anvetcorp. User support specialist with over 15 years of experience. Web Full Stack Developer."
/>
3. SocialMediaIcons
Descripción:
Componente para mostrar íconos de redes sociales con enlaces.

Props:

facebook, instagram, linkedin, tiktok, twitter (string): URLs de los perfiles en redes sociales.
Ejemplo de Uso:

jsx
Copy code
<SocialMediaIcons
  facebook="https://facebook.com/usuario"
  instagram="https://instagram.com/usuario"
  linkedin="https://linkedin.com/in/usuario"
  tiktok="https://tiktok.com/@usuario"
  twitter="https://twitter.com/usuario"
/>
4. ContactIcons
Descripción:
Componente para mostrar íconos de contacto con información relevante.

Props:

phone (string): Número de teléfono.
email (string): Dirección de correo electrónico.
whatsapp (string): Número de WhatsApp.
telegram (string): Nombre de usuario de Telegram.
Ejemplo de Uso:

jsx
Copy code
<ContactIcons
  phone="+1234567890"
  email="usuario@example.com"
  whatsapp="+1234567890"
  telegram="username"
/>
5. PaymentInfo
Descripción:
Componente para mostrar información de pago, incluyendo detalles de cuentas bancarias.

Props:

bankName (string): Nombre del banco.
accountNumber (string): Número de cuenta bancaria.
identification (string): Identificación asociada con la cuenta.
email (string): Correo electrónico para contactos de pago.
bankLogo (string): URL del logotipo del banco.
Ejemplo de Uso:

jsx
Copy code
<PaymentInfo
  bankName="Banco Pichincha"
  accountNumber="123456789"
  identification="123456"
  email="contacto@bancoxyz.com"
  bankLogo="/images/banco_pichincha.png"
/>
Notas Generales
Estilos y Responsividad: Cada componente debe ser estilizado y probado para responsividad.
Optimización: Asegúrate de que las imágenes y otros recursos estén optimizados para la web.
Pruebas: Realiza pruebas exhaustivas para garantizar la funcionalidad y el rendimiento.