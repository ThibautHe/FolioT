import { useLoaderData } from "react-router-dom";
import { ProjectBox } from "../Components/sections/ProjectBox";
import "../Css/projects.css";

// Définition du type Project
type Project = {
  id: number;
  projectName: string;
  projectImg: string;
};

export function Projects() {
  const data = useLoaderData() as Project[];
  return (
    <div className="projects-container">
      {data.map((project, index) => (
        <div>
          <ProjectBox key={project.id} project={project}></ProjectBox>
          <h1>{index}</h1>
        </div>
      ))}
    </div>
  );
}
