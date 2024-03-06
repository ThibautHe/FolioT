import { useLoaderData } from "react-router-dom";
type Project = {
  id: number;
  projectName: string;
};

type ProjectsData = {
  PreviousProject?: Project;
  CurrentProject: Project;
  NextProjects?: Project;
};

export function SingleProject() {
  const { CurrentProject } = useLoaderData() as ProjectsData;
  console.log(CurrentProject);

  return (
    <div>
      <h1>{CurrentProject.projectName}</h1> <p>{CurrentProject.id}</p>
    </div>
  );
}
