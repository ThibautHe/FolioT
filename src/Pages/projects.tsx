import { useLoaderData } from "react-router-dom";
import { ProjectSection } from "../Components/sections/ProjectsSection";

// Définition du type Project
type Project = {
    id: number;
    projectName: string;
  };

export function Projects() {
   const data = useLoaderData() as Project[];
  return (
    <>
      {data.map((project) => (
        <ProjectSection key={project.id} project={project}></ProjectSection>
      ))}
    </>
  );
}
