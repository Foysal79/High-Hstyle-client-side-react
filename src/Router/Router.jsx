import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Root from "../Components/Root";
import Home from "../Home/Home";
import Cards from "../Home/cards";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        }
      ]
    },
  ]);

  export default router;