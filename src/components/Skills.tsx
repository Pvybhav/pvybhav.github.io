import "./Skills.css";

const Skills = () => {
  return (
    <section>
      <h2 className="skills-section-header">Skills</h2>

      <div className="skills-details-card-container">
        <div className="icon-container">
          {/* Front end */}
          <div className="icon">HTML5</div>
          <div className="icon">CSS3</div>
          <div className="icon">Java Script (ES6)</div>

          {/* Frontend Frameworks */}
          <div className="icon">React JS</div>
          <div className="icon">Jquery</div>

          {/* State management libraries */}
          <div className="icon">Redux / redux toolkit</div>

          {/* CSS frameworks */}
          <div className="icon">Sass</div>
          <div className="icon">Bootstrap</div>
          <div className="icon">Reactstrap</div>
          <div className="icon">Semantic UI</div>
          <div className="icon">Tailwind UI</div>

          {/* Source Control */}
          <div className="icon">GitHub</div>
          <div className="icon">GitLab</div>
          <div className="icon">BitBucket</div>

          {/* OS */}
          <div className="icon">Windows</div>
          <div className="icon">Linux</div>
          <div className="icon">MacOS</div>

          {/* Database */}
          <div className="icon">Mongo DB</div>

          {/* Middleware */}
          <div className="icon">Expres JS</div>

          {/* Backend */}
          {/* <div className="icon">Python</div> */}
          <div className="icon">Node JS</div>

          {/* Testing frameworks */}
          <div className="icon">Jest</div>
          <div className="icon">Enzyme</div>
          {/* <div className="icon">React testing library</div> */}

          {/* Others */}
          {/* <div className="icon">Devops</div> */}

          <div className="icon">Jasonelle (formerly Jasonelle)</div>

          {/* IT Service Management */}
          {/* <div className="icon">Jira</div> */}

          {/* Mobile development */}
          <div className="icon">React Native</div>
        </div>
        <div className="where-ive-worked">
          <div className="company current">LTIMindtree (formerly LTI)</div>
          <div className="company">Wipro</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
