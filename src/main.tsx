import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Projects } from "./Pages/projects.tsx";
import { SingleProject } from "./Pages/SingleProject.tsx";
import { Home } from "./Pages/Home.tsx";

type ProjectsList = { id: number; projectName: string; projectImg: string };

const projects: ProjectsList[] = [
  {
    id: 1,
    projectName: "folioB",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 2,
    projectName: "unity",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 3,
    projectName: "tutorials",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 4,
    projectName: "4444",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 5,
    projectName: "5555",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 6,
    projectName: "6666",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
  {
    id: 7,
    projectName: "7777",
    projectImg: "https://picsum.photos/id/237/1920/1080",
  },
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
