import GitHubSVG from "./../assets/Images/svg/github.svg";
import StackOverflowSVG from "./../assets/Images/svg/stackoverflow.svg";
import {
  GITHUB_PROFILE_URL,
  STACKOVERFLOW_PROFILE_URL,
} from "../utils/constants";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Vybhav</h1>
      <h2 className="links-header">Code</h2>
      <div className="code-links">
        <button onClick={() => window.open(GITHUB_PROFILE_URL)}>
          <img src={GitHubSVG} /> GitHub
        </button>
        <button onClick={() => window.open(STACKOVERFLOW_PROFILE_URL)}>
          <img src={StackOverflowSVG} /> Stack Overflow
        </button>
      </div>
    </div>
  );
};

export default About;
