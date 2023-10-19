import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import OurBrands from "./OurBrands";
import NewCollection from "./NewCollection";
import BestSelling from "./BestSelling";







const Home = () => {
    
    const cards = useLoaderData();

    return (
        <div>
            
            <Banner></Banner>
              <h1 className="text-6xl font-bold text-center mb-8" >Our Brand</h1>
              <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6 space-y-4 mb-10" >
                {
                    cards.map(brand => <OurBrands key={brand.id} brand={brand}  ></OurBrands>)
                }
              </div>
              </div>
              <div>
                <NewCollection></NewCollection>
              </div>
              <div className="text-center" >
              <small className="text-sm font-semibold text-gray-400" >Shopping</small>
            <h1 className=" text-3xl lg:text-5xl font-bold my-2" >BEST SELLING PRODUCTS</h1>
            <p className="text-lg text-gray-500 font-semibold" >Check out some of the stand outs from our collection</p>
              <BestSelling></BestSelling>
              </div>
               
              





        </div>
    );
};

export default Home;