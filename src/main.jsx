import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Layout/Main.jsx";
import Home from "./component/Home/Home.jsx";
import Statistic from "./component/Statistic/Statistic.jsx";
import AppliedJobs from "./component/AppliedJobs/AppliedJobs.jsx";
import Blog from "./component/Blog/Blog.jsx";
import JobDetail from "./component/JobDetail/JobDetail.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import appliedJobLoader from "./loaders/appliedJobLoader.js";
import cartProductsLoader from "./loaders/appliedJobLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/apply",
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobLoader,
        // appliedJobLoader
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/detail/:jobId",
        element: <JobDetail></JobDetail>,
        loader: ({ params }) =>
          fetch(`/featured.json`)
            .then((res) => res.json())
            .then((data) => data.find((item) => item.id == params.jobId)),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
