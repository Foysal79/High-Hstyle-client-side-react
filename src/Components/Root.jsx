import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;