import EducationCard from "../components/EducationCard";
import { EDUCATION_DETAILS } from "../utils/constants";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section>
        <h2 className="education-section-header">Education</h2>

        <div className="education-details-card-container">
          {EDUCATION_DETAILS.map(
            (
              {
                title,
                branch,
                institueName,
                instituteLocation,
                courseDuration,
                percentage,
                cgpa,
                certificate,
              },
              index
            ) => (
              <EducationCard
                key={index}
                title={title}
                branch={branch}
                institueName={institueName}
                instituteLocation={instituteLocation}
                courseDuration={courseDuration}
                percentage={percentage}
                cgpa={cgpa}
                certificate={certificate}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
