import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img className="w-8/12 h-8/12  " src="https://i.ibb.co/Y2dpFzG/3747371.jpg " alt="" />
            </div>
           
           <div>
            <Link to='/' ><button className="btn btn-primary" >Home</button></Link>
           </div>

        </div>
    );
};

export default Error;