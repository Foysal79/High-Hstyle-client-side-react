import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Root from "../Components/Root";
import Home from "../Home/Home";
import Cards from "../Home/cards";
import AddProduct from "../BackEnd/AddProduct";

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
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>
        }
      ]
    },
  ]);

  export default router;