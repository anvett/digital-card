import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './VideoPlayer.module.scss'; 

const VideoPlayer = ({ videoUrl }) => {
  return (
    <Container className={styles.videoContainer}>
      <Row>
        <Col>
          <iframe
            src={videoUrl}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="Video"
            className={styles.videoIframe}
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPlayer;
