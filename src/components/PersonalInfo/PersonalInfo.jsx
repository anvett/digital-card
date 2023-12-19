// PersonalInfo.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './PersonalInfo.module.scss';

const PersonalInfo = ({ name, title, description }) => {
  return (
    <Container className={styles.personalInfo}>
      <Row>
        <Col>
          {name && <h1 className={styles.name}>{name}</h1>}
        </Col>
      </Row>
      <Row>
        <Col>
          {title && <h2 className={styles.title}>{title}</h2>}
        </Col>
      </Row>
      <Row>
        <Col>
          {description && <p className={styles.description}>{description}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
