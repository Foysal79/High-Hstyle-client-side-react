import { Outlet } from "react-router-dom";

import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;