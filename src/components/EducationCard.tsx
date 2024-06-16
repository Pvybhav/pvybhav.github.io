import "./EducationCard.css";
import BranchIcon from "./../assets/Images/svg/BranchIcon.tsx";
import EyeIcon from "../assets/Images/svg/EyeIcon.tsx";
import CalendarIcon from "../assets/Images/svg/CalendarIcon.tsx";
import LocationPinIcon from "../assets/Images/svg/LocationPinIcon.tsx";
import InstitutionIcon from "../assets/Images/svg/InstitutionIcon.tsx";
import PercentageIcon from "../assets/Images/svg/PercentageIcon.tsx";

interface CourseDetails {
  title: string;
  branch?: string;
  institueName: string;
  instituteLocation: string;
  courseDuration: string;
  percentage?: string;
  cgpa?: string;
  certificate: string;
}

const EducationCard = ({
  title,
  branch,
  institueName,
  instituteLocation,
  courseDuration,
  percentage,
  cgpa,
  certificate,
}: CourseDetails) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="title">{title}</div>
      </div>
      <div className="card-body">
        <div className="branch">
          {branch ? (
            <>
              <BranchIcon />
              {branch}
            </>
          ) : null}
        </div>

        <div className="institute">
          <InstitutionIcon />
          {institueName}
        </div>
        <div className="location">
          <LocationPinIcon />
          {instituteLocation}
        </div>
        <div className="duration">
          <CalendarIcon />
          {courseDuration}
        </div>
        <div className="percentage">
          <PercentageIcon />
          {percentage ? percentage : cgpa}
        </div>
        <div className="certificate">
          <EyeIcon />
          <a href={certificate} target="_blank" rel="noopener noreferrer">
            View Marks Sheet
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
