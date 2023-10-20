import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {user, LogOut} = useContext(AuthContext);

    const navLink = <>
       <li><NavLink className="mr-4" to='/' >Home</NavLink></li>
       <li><NavLink className="mr-4" to='/shop' >Shop</NavLink></li>
       
        <li><NavLink className="mr-4" to='/addProduct' >Add Product</NavLink></li>
        
       
       
       <li><NavLink className="mr-4" to='/blog' >Blog </NavLink></li>
       <li><NavLink className="mr-4" to='/contact' >Contact</NavLink></li>
       {
        user && <li><NavLink className="mr-4" to='/cart' >My Cart</NavLink></li>
       }
       

    </>
    return (
        <div className="navbar bg-base-100 px-6 py-3 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLink
        }
      </ul>
    </div>
    <Link to='/' ><a className="btn btn-ghost normal-case  text-3xl font-bold text-sky-600 ">HIGHstyle</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLink
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <div className="flex gap-4 items-center">
        <p>{user?.displayName}</p> <img className="rounded-full w-10" src={user?.photoURL} alt="img" />
        <button onClick={() => LogOut()} className="btn bg-blue-600 hover:bg-blue-700 text-white" >LogOut</button>
      </div> : <Link to='/login' ><a className="btn bg-blue-600 hover:bg-blue-700 text-white">Login</a></Link>
    }
  </div>
</div>
    );
};

export default Navbar;