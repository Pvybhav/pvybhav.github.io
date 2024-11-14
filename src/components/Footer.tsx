import "./Footer.css";

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

const Footer = () => {
  const footerDetails = [
    {
      altText: "Gmail",
      iconName: GmailSVG,
      tooltip: "Gmail",
      type: "mail",
      mailTo: GMAIL_EMAIL_ADDRESS,
    },
    {
      altText: "Outlook",
      iconName: MSOutlookSVG,
      tooltip: "Outlook",
      type: "mail",
      mailTo: MICROSOFT_EMAIL_ADDRESS,
    },
    {
      altText: "WhatsApp",
      iconName: WhatsAppSVG,
      tooltip: "WhatsApp",
      type: "external-link",
      url: WHATSAPP_URL,
    },
    {
      altText: "LinkedIn",
      iconName: LinkedInSVG,
      tooltip: "LinkedIn",
      type: "external-link",
      url: LINKEDIN_PROFILE_URL,
    },
    {
      altText: "X",
      iconName: XSVG,
      tooltip: "X",
      type: "external-link",
      url: X_PROFILE_URL,
    },

    {
      altText: "Facebook",
      iconName: FacebookSVG,
      tooltip: "Facebook",
      type: "external-link",
      url: FACEBOOK_PROFILE_URL,
    },
    {
      altText: "Instagram",
      iconName: InstagramSVG,
      tooltip: "Instagram",
      type: "external-link",
      url: INSTAGRAM_PROFILE_URL,
    },
    {
      altText: "Telegram",
      iconName: TelegramSVG,
      tooltip: "Telegram",
      type: "external-link",
      url: TELEGRAM_URL,
    },
    {
      altText: "Youtube",
      iconName: YoutubeSVG,
      tooltip: "Youtube",
      type: "external-link",
      url: YOUTUBE_CHANNEL_URL,
    },
    {
      altText: "GitHub",
      iconName: GitHubSVG,
      tooltip: "GitHub",
      type: "external-link",
      url: GITHUB_PROFILE_URL,
    },
    {
      altText: "Stack Overflow",
      iconName: StackOverflowSVG,
      tooltip: "Stack Overflow",
      type: "external-link",
      url: STACKOVERFLOW_PROFILE_URL,
    },
  ];

  return (
    <footer className="footer">
      {footerDetails?.map(
        ({ altText, iconName, tooltip, type, mailTo, url }, index) => {
          if (type === "mail") {
            return (
              <a href={`mailto:${mailTo}`}>
                <button
                  key={index}
                  className="btn"
                  onClick={() => window.open(url)}
                >
                  <span title={tooltip}>
                    <img src={iconName} alt={altText} className="footer-icon" />
                  </span>
                </button>
              </a>
            );
          }
          return (
            <button className="btn" onClick={() => window.open(url)}>
              <span key={index} title={tooltip}>
                <img src={iconName} alt={altText} className="footer-icon" />
              </span>
            </button>
          );
        }
      )}
    </footer>
  );
};

export default Footer;
