import React from 'react';
import { Row } from 'react-bootstrap';
// Import your custom icon components or SVGs here
import GoogleIcon from '../../assets/images/login/social-media/GoogleIcon.svg';
import FacebookIcon from '../../assets/images/login/social-media/FacebookIcon.svg';
import LinkedInIcon from '../../assets/images/login/social-media/LinkedInIcon.svg';
import TwitterIcon from '../../assets/images/login/social-media/TwitterIcon.svg';
import "./SocialLoginButtons.css"

function SocialLoginButtons() {
  return (
    // Use a row and justify-content-center for the layout from your mockup
    <Row className="justify-content-center align-items-center m-0 gap-3 p-0">
      {/* Example structure for one button */}
      <button
        className="social-icon-btn rounded-circle border-grey"
        aria-label="Sign in with Google"
      >
        <img src={GoogleIcon} alt="" />
      </button>

      <button
        className="social-icon-btn rounded-circle border-grey"
        aria-label="Sign in with Facebook"
      >
        <img src={FacebookIcon} alt="" />
      </button>

      <button
        className="social-icon-btn rounded-circle border-grey"
        aria-label="Sign in with Facebook"
      >
        <img src={LinkedInIcon} alt="" />
      </button>

      <button
        className="social-icon-btn rounded-circle border-grey"
        aria-label="Sign in with Facebook"
      >
        <img src={TwitterIcon} alt="" />
      </button>
    </Row>
  );
}

export default SocialLoginButtons;
