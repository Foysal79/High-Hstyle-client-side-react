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
import Items from "../Home/Items";
import SingleItem from "../Home/SingelItem";
import UpdateItems from "../Home/UpdateItems";
import Blog from "../Home/Blog";

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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
            path: '/addProduct',
            element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
        },
        {
            path: '/cart',
            element: <PrivetRouter><Cart></Cart></PrivetRouter>,
            loader: () => fetch('http://localhost:5000/cart'),

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
        },
        {
            path: '/items/:name',
            element: <Items></Items>,
            loader: ({params}) => fetch(`http://localhost:5000/items/${params.name}`),
        },
        {
            path: '/item/:id',
            element: <PrivetRouter><SingleItem></SingleItem></PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
            
        },
        {
            path: '/update/:id',
            element : <PrivetRouter> <UpdateItems></UpdateItems> </PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
        }
      ]
    },
  ]);

  export default router;