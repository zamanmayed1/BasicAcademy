import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";
import SingleCourse from "./pages/single-course";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
// import Courses from "./pages/courses";
import Archive from "./pages/archive";

const LazyCourses = React.lazy(()=>import('./pages/courses'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "course/details/:id",
        element: <SingleCourse/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/courses",
        element: <React.Suspense fallback="Loading"><LazyCourses/></React.Suspense> ,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/archive/:id/:slug",
        element: <Archive/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);