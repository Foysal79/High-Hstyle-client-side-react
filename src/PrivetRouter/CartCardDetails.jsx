import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const CartCardDetails = ({item}) => {
    const {_id,name,image,brandName,type,price,description, rating} = item || {}



    const handelDelate = _id => {
        fetch(`https://highstyle-4qobnujhn-foysals-projects-cce7b400.vercel.app/cart/${_id}`, {
            method:'DELETE',
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                toast.success('deleted successfully');
            }
        })
        
    }

    return (
        <div className="card card-compact  bg-sky-100 shadow-xl">
        <figure><img className="h-72 w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold ">{name}</h2>
          <h3 className="text-xl font-bold"> Brand : <span className="text-gray-600" >{brandName}</span></h3>
          <h5 className="text-lg font-semibold " > Type : <span className="text-gray-600">{type}</span></h5>
          <div className="flex justify-between">
          <p className="text-xl font-medium" > price :  <span className="font-extrabold" >{price}</span> $</p>
          <p className="text-xl font-medium" > Rating : <span  className="font-bold" >{rating}</span></p>
         
          
          
          
          </div>
          <p className="text-gray-500 my-4" >{description}</p>
          <div className="flex justify-center">
              <button onClick={ () => handelDelate(_id)} className="btn btn-primary" >Delate</button>
              
              
          </div>
        </div>
      </div>
    );
};

export default CartCardDetails;