import "./Contact.css";

import FacebookSVG from "./../assets/Images/svg/facebook.svg";
import InstagramSVG from "./../assets/Images/svg/instagram.svg";
import XSVG from "./../assets/Images/svg/X.svg";
import WhatsAppSVG from "./../assets/Images/svg/whatsapp.svg";
import LinkedInSVG from "./../assets/Images/svg/linkedin.svg";
import GmailSVG from "./../assets/Images/svg/gmail.svg";
import MSOutlookSVG from "./../assets/Images/svg/ms-outlook.svg";
import TelegramSVG from "./../assets/Images/svg/telegram.svg";
import YoutubeSVG from "./../assets/Images/svg/youtube.svg";
import GitHubSVG from "./../assets/Images/svg/github.svg";
import StackOverflowSVG from "./../assets/Images/svg/stackoverflow.svg";

import {
  FACEBOOK_PROFILE_URL,
  GITHUB_PROFILE_URL,
  GMAIL_EMAIL_ADDRESS,
  INSTAGRAM_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  MICROSOFT_EMAIL_ADDRESS,
  STACKOVERFLOW_PROFILE_URL,
  TELEGRAM_URL,
  X_PROFILE_URL,
  WHATSAPP_URL,
  YOUTUBE_CHANNEL_URL,
} from "../utils/constants.ts";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Vybhav</h1>
      <div>
        <h2 className="links-header">Email</h2>
        <div className="email-links">
          <a href={`mailto:${GMAIL_EMAIL_ADDRESS}`}>
            <button>
              <img src={GmailSVG} /> Gmail
            </button>
          </a>

          <a href={`mailto:${MICROSOFT_EMAIL_ADDRESS}`}>
            <button>
              <img src={MSOutlookSVG} /> Outlook
            </button>
          </a>
        </div>
        <h2 className="links-header">Social media</h2>
        <div className="social-media-links">
          <button onClick={() => window.open(WHATSAPP_URL)}>
            <img src={WhatsAppSVG} />
            WhatsApp
          </button>
          <button onClick={() => window.open(LINKEDIN_PROFILE_URL)}>
            <img src={LinkedInSVG} /> LinkedIn
          </button>
          <button onClick={() => window.open(X_PROFILE_URL)}>
            <img src={XSVG} /> X
          </button>
          <button onClick={() => window.open(FACEBOOK_PROFILE_URL)}>
            <img src={FacebookSVG} /> Facebook
          </button>
          <button onClick={() => window.open(INSTAGRAM_PROFILE_URL)}>
            <img src={InstagramSVG} /> Instagram
          </button>
          <button onClick={() => window.open(TELEGRAM_URL)}>
            <img src={TelegramSVG} /> Telegram
          </button>
          <button onClick={() => window.open(YOUTUBE_CHANNEL_URL)}>
            <img src={YoutubeSVG} /> Youtube
          </button>
        </div>

        <h2 className="links-header">Official</h2>
        <div className="code-links">
          <button onClick={() => window.open(GITHUB_PROFILE_URL)}>
            <img src={GitHubSVG} /> GitHub
          </button>
          <button onClick={() => window.open(STACKOVERFLOW_PROFILE_URL)}>
            <img src={StackOverflowSVG} /> Stack Overflow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
