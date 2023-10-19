

const AddProduct = () => {

    


    return (
        <div className="bg-[#F8F4EE] p-6 rounded-lg " >
            <h1 className="text-5xl font-bold mt-20 mb-10 text-center">Add Product</h1>
            <form className="space-y-8" >
        {/* form name and Image */}
        <div className="md:flex">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
           
            <input
            name="name"
              type="text"
              placeholder="Name"
            //   defaultValue={name}
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
            //   defaultValue={quantity}
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
            //   defaultValue={supplier}
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
            name="type "
              type="text"
              placeholder="Type"
            //   defaultValue={test}
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
            //   defaultValue={category}
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
            //   defaultValue={details}
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
            //   defaultValue={Photo}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        

        </div>


        

       <input type="submit" value="Add Product" className="btn btn-block 
        bg-black hover:bg-black text-white" />

      </form>
            
        </div>
    );
};

export default AddProduct;