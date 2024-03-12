import React from "react";
import { NavLink } from "react-router-dom";
import "../../Css/projects.css";

type Projects = { id: number; projectName: string; projectImg: string };
type ProjectSectionProps = {
  project: Projects;
};

export function ProjectBox({ project }: ProjectSectionProps) {
  return (
    <div
      className="projectBox"
      style={{ backgroundImage: `url(${project.projectImg})` }}
    >
      <NavLink to={`/projects/${project.id}`} state={project}></NavLink>
      <h1>{project.projectName}</h1>
    </div>
  );
}
