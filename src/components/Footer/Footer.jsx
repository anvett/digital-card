import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.containerFooter}>
        <p className={styles.textFooter}>
          &copy; {new Date().getFullYear()} Anvetcorp S.A.S.. All rights reserved.
        </p>
        <a className={styles.linkFooter} href="https://www.anvetcorp.com">
          www.anvetcorp.com
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
