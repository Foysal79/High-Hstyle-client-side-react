import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateItems = () => {
    const item = useLoaderData();
    const {_id, name, image, brandName,type, price, description, rating} = item;
    console.log(item);
    const handelUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value ;
        const price = form.price.value;
        const description = form.description.value;
        const rating =form.rating.value;
    
        const UpdateItem = {name, image, brandName, type, price, description, rating};
        console.log(UpdateItem);
        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PUT",
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(UpdateItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                toast.success('this product will be successfully update')
            }
        })
    
    
    
      }
    return (
        <div className="bg-[#F8F4EE] p-6 rounded-lg " >
            <h1 className="text-5xl font-bold mt-20 mb-10 text-center">Update Product</h1>
            <form onSubmit={handelUpdate} className="space-y-8" >
        {/* form name and Image */}
        <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
           
            <input
            name="name"
            defaultValue={name}
              type="text"
              placeholder="Name"
             
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <label className="input-group">
           
            <input
            name="image"
              type="text"
              placeholder="Image"
            defaultValue={image}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        </div>
        {/* form Brand Name , Type */}
        <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
           
            <input
            name="brandName"
              type="text"
              placeholder="Brand Name"
            defaultValue={brandName}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Type </span>
          </label>
          <label className="input-group">
           
            <input
            name="type"
              type="text"
              placeholder="Type"
            defaultValue={type}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        </div>
        {/* form Price and Short description */}
        <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
           
            <input
            name="price"
              type="text"
              placeholder="Price"
             defaultValue={price}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <label className="input-group">
           
            <input
            name="description"
              type="text"
              placeholder="Short description"
           defaultValue={description}
              className="input input-bordered w-full "
            />
          </label>
        </div>

        </div>
        {/* form row */}
        <div className="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <label className="input-group">
           
            <input
            name="rating"
              type="text"
              placeholder="Rating"
           defaultValue={rating}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        

        </div>


        

       <input type="submit" value="Update" className="btn btn-block 
        bg-black hover:bg-black text-white" />

      </form>
            
        </div>
    );
};

export default UpdateItems;