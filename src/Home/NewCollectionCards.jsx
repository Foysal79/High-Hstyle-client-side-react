

const NewCollectionCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4 mt-10 " >
         <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/L8vVYrh/single-product-img-18.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="font-bold text-center">MODERN BAG</h2>
                       <p className="text-sm text-gray-500" > The modern bag is a sleek and versatile accessory that combines form and function. With clean lines, contemporary materials, and a minimalist design, it's a perfect companion for the urban lifestyle. </p>
                       
               </div>
           </div>
         <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/CmjQWZ8/Single-product-img-8.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="font-bold text-center">SILVER BAG</h2>
                       <p className="text-sm text-gray-500" >Amidst the bustling crowd at the gala, she stood out with her exquisite attire and an elegant silver bag that glistened under the soft, ambient lights. The silver bag, a perfect complement to her shimmering gown</p>
                       
               </div>
           </div>
         <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/ZMs1S68/Single-product-img-9.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="font-bold text-center">URBAN STYLE</h2>
                       <p className="text-sm text-gray-500 " >Urban style is a fashion trend that captures the essence of city life. Its all about a contemporary, edgy, and often eclectic look that reflects the fast-paced, cosmopolitan lifestyle. With a focus on comfort and functionality, urban style .</p>
                      
               </div>
           </div>
        </div>
    );
};

export default NewCollectionCards;