import { createBrowserRouter } from "react-router";

import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import About from "../../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/contact-us",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);
