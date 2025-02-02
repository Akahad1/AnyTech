import { createBrowserRouter } from "react-router";

import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/contact-us",
    element: <ContactUs></ContactUs>,
  },
]);
