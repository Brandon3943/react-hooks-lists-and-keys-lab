import React from "react";


function ProjectItem({ name, about, technologies }) {
  //for each element in the tech arr, build a span tag with the key and identifer keyword, and the element were passing through 
  const spanTags = technologies.map(tech => {
    return <span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> 
        {spanTags}
      </div>
    </div>
  );
}

export default ProjectItem;
