import { createBrowserRouter } from "react-router";
import axios from "axios";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import BookDetails from "../Pages/BooksDetails/BookDetails";
import Spinner from "../Pages/Spinner";
import DisplayStoredBooks from "../Pages/DisplayStoredBooks";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Spinner />,

    children: [
      {
        index: true,
        loader: () => axios("./booksData.json"),
        Component: Home,
      },
      {
        path: "books/:booksId",
        // loader: () => axios("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "listedBooks",
        loader: () => axios("./booksData.json"),
        Component: DisplayStoredBooks,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className=" h-dvh w-full flex justify-center items-center">
        <p className=" text-6xl text-gray-400 font-bold">
          Status 404, Page not found!
        </p>
      </div>
    ),
  },
]);
