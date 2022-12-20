import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
//1- map through projects. for each obj in our project, we want to return one item
//key={project.id} project={project}

let projectComponents = projects.map(project => {
  return <ProjectItem key={project.id} {...project} />
})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectComponents}</div>
    </div>
  );
}

export default ProjectList;
