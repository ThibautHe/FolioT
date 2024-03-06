import React from "react";
import { NavLink } from "react-router-dom";

type Projects = { id: number; projectName: string };
type ProjectSectionProps = {
  project: Projects;
};
export function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <div>
      <NavLink to={`/projects/${project.id}`} state={project}></NavLink>
      <h1>{project.projectName}</h1>
    </div>
  );
}
