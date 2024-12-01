import "./Skills.css";
import HTML5Svg from "../assets/Images/svg/skills/html-5.svg";
import CssSvg from "../assets/Images/svg/skills/css.svg";
import JavascriptSvg from "../assets/Images/svg/skills/javascript.svg";
import ReactSvg from "../assets/Images/svg/skills/react.svg";
import JquerySvg from "../assets/Images/svg/skills/jquery.svg";
import ReduxSvg from "../assets/Images/svg/skills/redux.svg";
import SassSvg from "../assets/Images/svg/skills/sass.svg";
import Bootstrap4Svg from "../assets/Images/svg/skills/bootstrap-4.svg";
import SemanticUISvg from "../assets/Images/svg/skills/semantic-ui.svg";
import TailwindSvg from "../assets/Images/svg/skills/tailwind.svg";
import GithubSvg from "../assets/Images/svg/skills/github.svg";
import GitlabSvg from "../assets/Images/svg/skills/gitlab.svg";
import BitbucketSvg from "../assets/Images/svg/skills/bitbucket.svg";
import WindowsSvg from "../assets/Images/svg/skills/windows.svg";
import LinuxSvg from "../assets/Images/svg/skills/linux.svg";
import MacOSSvg from "../assets/Images/svg/skills/macos.svg";
import MongodbSvg from "../assets/Images/svg/skills/mongo.svg";
import ExpressSvg from "../assets/Images/svg/skills/express.svg";
import NodeSvg from "../assets/Images/svg/skills/node-js.svg";
import JestSvg from "../assets/Images/svg/skills/jest.svg";
import ReactNativeSvg from "../assets/Images/svg/skills/react.svg";

import LTIMSvg from "../assets/Images/svg/companies/LTIM.svg";
import WiproSvg from "../assets/Images/svg/companies/Wipro.svg";

const Skills = () => {
  return (
    <section>
      <h2 className="skills-section-header">Skills</h2>

      <div className="skills-details-card-container">
        <div className="icon-container">
          {/* Front end */}
          <div className="icon">
            <img src={HTML5Svg} alt="HTML5" />
          </div>
          <div className="icon">
            <img src={CssSvg} alt="CSS" />
          </div>
          <div className="icon">
            <img src={JavascriptSvg} alt="Java Script (ES6)" />
          </div>

          {/* Frontend Frameworks */}
          <div className="icon">
            <img src={ReactSvg} alt="React JS" />
          </div>
          <div className="icon">
            <img src={JquerySvg} alt="Jquery" />
          </div>

          {/* State management libraries */}
          <div className="icon">
            <img src={ReduxSvg} alt="Redux / redux toolkit" />
          </div>

          {/* CSS frameworks */}
          <div className="icon">
            <img src={SassSvg} alt="Sass" />
          </div>
          <div className="icon">
            <img src={Bootstrap4Svg} alt="Bootstrap" />
          </div>
          <div className="icon">Reactstrap</div>
          <div className="icon">
            <img src={SemanticUISvg} alt="Semantic UI" />{" "}
          </div>
          <div className="icon">
            <img src={TailwindSvg} alt="Tailwind UI" />
          </div>

          {/* Source Control */}
          <div className="icon">
            <img src={GithubSvg} alt="Github" />
          </div>
          <div className="icon">
            <img src={GitlabSvg} alt="Gitlab" />
          </div>
          <div className="icon">
            <img src={BitbucketSvg} alt="Bitbucket" />
          </div>

          {/* OS */}
          <div className="icon">
            <img src={WindowsSvg} alt="Windows" />
          </div>
          <div className="icon">
            <img src={LinuxSvg} alt="Linux" />
          </div>
          <div className="icon">
            <img src={MacOSSvg} alt="Mac OS" />
          </div>

          {/* Database */}
          <div className="icon">
            <img src={MongodbSvg} alt="Mongodb" />
          </div>

          {/* Middleware */}
          <div className="icon">Expres JS</div>

          {/* Backend */}
          {/* <div className="icon">Python</div> */}
          <div className="icon">
            <img src={NodeSvg} alt="Node JS" />
          </div>

          {/* Testing frameworks */}
          <div className="icon">
            <img src={JestSvg} alt="Jest" />
          </div>
          <div className="icon">Enzyme</div>
          {/* <div className="icon">React testing library</div> */}

          {/* Others */}
          {/* <div className="icon">Devops</div> */}

          <div className="icon">Jasonelle (formerly Jasonelle)</div>

          {/* IT Service Management */}
          {/* <div className="icon">Jira</div> */}

          {/* Mobile development */}
          <div className="icon">
            <img src={ReactNativeSvg} alt="React Native" />
          </div>
        </div>
        <div className="where-ive-worked">
          <div className="company current">
            <img src={LTIMSvg} alt="LTIMindtree (formerly LTI)" />
            <span className="tag">Current</span>
          </div>
          <div className="company">
            <img src={WiproSvg} alt="Wipro" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
