import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-center">
                <img className="w-8/12 h-8/12  " src="https://i.ibb.co/Y2dpFzG/3747371.jpg " alt="" />
            </div>
           
           <div className="text-center">
            <Link to='/' ><button className="btn btn-primary" >Home</button></Link>
           </div>

        </div>
    );
};

export default Error;