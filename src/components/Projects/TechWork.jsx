import { useState } from "react";
import { workData } from "./TechWorkData";
import { FaArrowRight } from "react-icons/fa";
import "./Projects.css";
import { Link } from "react-router-dom";

const TechWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const renderMedia = (project) => {
    if (project.type === "image") {
      return <img src={project.img} alt={project.title} />;
    } else if (project.type === "video") {
      return (
        <video autoPlay muted loop>
          <source src={project.img} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };
  return (
    <div className="techwork__container">
      <div className="techwork__image--container">
        {hoveredProject !== null && renderMedia(workData[hoveredProject])}
      </div>
      <div className="techwork__projects">
        <div className="techwork__projects--header">
          <h3>Selected Works</h3>
          <p>{workData.length}</p>
        </div>
        <div className="techwork__projects--main">
          {workData.map((work, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`project-title ${
                hoveredProject === index ? "hovered" : ""
              }`}
            >
              <a href={work.live} target="_blank" rel="noreferrer" >
                <p>{work.title}</p>
                <FaArrowRight className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechWork;
