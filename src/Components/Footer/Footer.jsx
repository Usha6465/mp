import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css";

const styleImg = {
  height: "42px",
  cursor: "pointer"
};

// Random sentences for Terms of Service and Privacy Policy
const termsOfServiceContent = [
  "By using this website, you agree to our Terms of Service.",
  "Your use of this website constitutes acceptance of our Terms of Service.",
  "Please review our Terms of Service carefully before using this website."
];

const privacyPolicyContent = [
  "Your privacy is important to us. Read our Privacy Policy for more information.",
  "We are committed to protecting your privacy. View our Privacy Policy for details.",
  "Learn more about how we handle your personal information by reading our Privacy Policy."
];

function Footer() {
  const [showTermsPopup, setShowTermsPopup] = React.useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = React.useState(false);

  const toggleTermsPopup = () => setShowTermsPopup(!showTermsPopup);
  const togglePrivacyPopup = () => setShowPrivacyPopup(!showPrivacyPopup);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Hear Me Out</h3>
          <p>FAQ's: <a href="mailto:hearmeout@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>hearmeout@gmail.com</a></p>
        </div>
        
      </div>
      <div className={styles.container1}>
      <div className={styles.section}>
          <p>Follow Us</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://twitter.com" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.youtube.com" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
              <YouTubeIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com" style={{ textDecoration: 'none', color: 'white' }}>
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </div>
        <div className={styles.division2}>
          <a href="https://play.google.com/store/apps/details?id=com.meetup">
            <img
              style={styleImg}
              src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=128"
              alt="Google Play Store"
            />
          </a>
          <a href="https://apps.apple.com/us/app/meetup/id375990038">
            <img
              className={styles.appleStore}
              src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=128"
              alt="Apple App Store"
            />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>@2023 Hear Me Out</p>
        <p><a href="#" onClick={toggleTermsPopup} style={{ textDecoration: 'none', color: 'white' }}>Terms of Service</a></p>
        {showTermsPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              {termsOfServiceContent[Math.floor(Math.random() * termsOfServiceContent.length)]}
            </div>
            <button onClick={toggleTermsPopup}>Close</button>
          </div>
        )}
        <p><a href="#" onClick={togglePrivacyPopup} style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</a></p>
        {showPrivacyPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              {privacyPolicyContent[Math.floor(Math.random() * privacyPolicyContent.length)]}
            </div>
            <button onClick={togglePrivacyPopup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
