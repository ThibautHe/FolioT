import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { Projects } from "./Pages/projects.tsx";
import { SingleProject } from "./Pages/SingleProject.tsx";
import { Home } from "./Pages/Home.tsx";

type ProjectsList = { id: number; projectName: string };

const projects: ProjectsList[] = [
  { id: 1, projectName: "folioB" },
  { id: 2, projectName: "unity" },
  { id: 3, projectName: "tutorials" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 not found </div>,
  },
  {
    path: "/projects",
    element: <Projects />,
    loader: () => projects,
  },
  {
    path: "/projects/:projectId",
    element: <SingleProject />,
    loader: ({ params }) => {
      if (params.projectId === undefined) {
        console.log("blocked");

        return new Error(`No project with id ${params.projectId} found`); // Return empty object if projectId is undefined
      }

      const projectId = parseInt(params.projectId);

      const CurrentProject = projects.find((item) => item.id === projectId);

      if (!CurrentProject) {
        return null;
      }

      const indexOfCurrentProject = projects.indexOf(CurrentProject);
      const PrevProject =
        projects[indexOfCurrentProject - 1] ?? projects[projects.length - 1];
      const NextProject = projects[indexOfCurrentProject + 1] ?? projects[0];

      const response = { PrevProject, CurrentProject, NextProject };
      console.log(response);

      return response;
    },
    errorElement: <div>404 not found </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
