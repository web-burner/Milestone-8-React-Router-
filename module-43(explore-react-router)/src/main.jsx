
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root";
import Users from "./components/users/Users";
import { Suspense } from "react";
import Users2 from "./components/users2/Users2";
import UserDetails from "./components/users2/UserDetails";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <h1>Welcome Home</h1>,
      },
      {
        path: "mobile",
        element: <h1>All Mobiles are here</h1>,
      },
      {
        path: "laptop",
        element: <h1>All Laptops are here</h1>,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },{
        path: '*',
        element: <p>Not found 404</p>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
