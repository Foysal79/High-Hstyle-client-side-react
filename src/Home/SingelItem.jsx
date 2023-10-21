
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const SingleItem = () => {
    const item = useLoaderData();
    console.log(item);
    const {name, image, brandName,type, price, description, rating  } = item[0]

   const items = {
    name: name,
    image: image,
    brandName: brandName,
    type: type,
    price: price,
    description: description,
    rating: rating
   }
   console.log(items);
     const handelCart = e => {
        e.preventDefault();
        fetch('https://highstyle-4qobnujhn-foysals-projects-cce7b400.vercel.app/cart', {
      method:'POST',
      headers:{
        'content-type' : 'application/json',
    },
    body: JSON.stringify(items)
     }
    )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId)
      {
        toast.success('Successfully Cart');
      }
    })
     }
    



    return (
    <div className='w-11/12 mx-auto mt-10 mb-24 min-h-screen' >

<div className="card w-8/12 mx-auto  card-side bg-base-100 shadow-xl grid grid-cols-5 gap-4 ">
  <figure className='col-span-2' ><img className=' w-full' src={image} alt="Movie"/></figure>
  <div className="w-full col-span-3 p-6 space-y-2">
    <h2 className="card-title"> <span className='text-3xl font-bold' >Name :</span> <span className='text-xl font-bold text-gray-600' >{name}</span>  </h2>
    <p> <span className='text-3xl font-bold ' >Brand Name : </span> <span className='text-xl font-bold text-gray-500' >{brandName}</span></p>
    <p> <span className='text-xl font-bold ' >Type :</span> <span className='text-xl font-bold text-gray-500' >{type}</span></p>

    <div className='flex space-x-9'>
    <p> <span className='text-xl font-bold ' >Rating :</span>  <span className='text-xl font-bold text-gray-500' >{rating}</span></p>
    <p> <span className='text-xl font-bold ' >Price :</span>  <span className='text-xl font-bold text-gray-500' >{price}</span></p>
    </div>
    <p> <span className='text-2xl font-bold' >Details : </span> <span className='text-sm font-semibold text-gray-500'>{description}</span></p>
    <button onClick={handelCart} className='btn btn-primary mt-6' >Add to Cart</button>
  </div>
</div>




    </div>
    );
};

export default SingleItem;