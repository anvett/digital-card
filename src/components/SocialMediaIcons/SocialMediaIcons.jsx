import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "./SocialMediaIcons.module.scss";

const SocialMediaIcon = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
      <Image src={src} alt={alt} width={50} height={50} className={styles.socialIconImage} />
    </a>
  );
};

const SocialMediaIcons = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
  pinterest,
  snapchat,
  reddit,
  tumblr,
  tiktok,
}) => {
  return (
    <Container className={styles.socialIconsContainer}>
      {facebook && (
        <SocialMediaIcon
          href={facebook}
          src="/icons/facebook_y.png"
          alt="Facebook"
        />
      )}
      {twitter && (
        <SocialMediaIcon
          href={twitter}
          src="/icons/twitterx_y.png"
          alt="X-Twitter"
        />
      )}
      {instagram && (
        <SocialMediaIcon
          href={instagram}
          src="/icons/instagram_y.png"
          alt="Instagram"
        />
      )}
      {linkedin && (
        <SocialMediaIcon
          href={linkedin}
          src="/icons/linkedin_y.png"
          alt="LinkedIn"
        />
      )}
      {youtube && (
        <SocialMediaIcon
          href={youtube}
          src="/icons/youtube_y.png"
          alt="YouTube"
        />
      )}
      {pinterest && (
        <SocialMediaIcon
          href={pinterest}
          src="/icons/pinterest_y.png"
          alt="Pinterest"
        />
      )}
      {snapchat && (
        <SocialMediaIcon
          href={snapchat}
          src="/icons/snapchat_y.png"
          alt="Snapchat"
        />
      )}
      {reddit && (
        <SocialMediaIcon href={reddit} src="/icons/reddit_y.png" alt="Reddit" />
      )}
      {tumblr && (
        <SocialMediaIcon href={tumblr} src="/icons/tumblr_y.png" alt="Tumblr" />
      )}

      {tiktok && (
        <SocialMediaIcon href={tiktok} src="/icons/tiktok_y.png" alt="TikTok" />
      )}
    </Container>
  );
};

export default SocialMediaIcons;
