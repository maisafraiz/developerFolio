import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import SittingFloorBackpackMap from "../../assets/images/SittingFloorBackpackMap.svg"; // Import the image
import {Fade} from "react-reveal";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-main-div">
      <div className="education-section" id="education">
        <h1 className="education-heading">Education
        </h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
      <div className="education-image-div"> {/* Container for the image */}
      <Fade left duration={1000}>
          <img
            alt="education_img"
            src={SittingFloorBackpackMap}
          />
      </Fade>
        </div>
      </div>
    );
  }
  return null;
}
