import { createBrowserRouter } from "react-router";

import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import About from "../../Pages/About/About";
import AnyCaaS from "../../Pages/AnyCaaS/AnyCaaS";
import AnyBaaS from "../../Pages/AnyBaaS/AnyBaaS";
import AnyPaaS from "../../Pages/AnyPaaS/AnyPaaS";

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
  { path: "/AnyCaas", element: <AnyCaaS></AnyCaaS> },
  { path: "/AnyBaaS", element: <AnyBaaS></AnyBaaS> },
  { path: "/AnyPaaS", element: <AnyPaaS></AnyPaaS> },
]);
