import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Component/Router/Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
