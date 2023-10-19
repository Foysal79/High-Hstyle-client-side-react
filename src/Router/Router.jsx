import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Root from "../Components/Root";
import Home from "../Home/Home";
import Cards from "../Home/cards";
import AddProduct from "../BackEnd/AddProduct";
import SignUp from "../LoginLogOut/SignUp";
import Login from "../LoginLogOut/Login";
import PrivetRouter from "./PrivetRouter";
import Cart from "../PrivetRouter/Cart";
import Shop from "../Home/Shop";

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
            element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
        },
        {
            path: '/cart',
            element: <PrivetRouter><Cart></Cart></PrivetRouter>

        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        }
      ]
    },
  ]);

  export default router;