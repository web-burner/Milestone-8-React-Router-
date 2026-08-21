import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import InstallationApp from "../Pages/InstallationApp";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: AllApps,
      },
      {
        path: "appDetails/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: InstallationApp,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export { router };
