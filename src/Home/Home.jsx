import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import OurBrands from "./OurBrands";
import NewCollection from "./NewCollection";
import BestSelling from "./BestSelling";
import ExtraService from "./ExtraService";
import Faqs from "./Faqs";









const Home = () => {
    
    const cards = useLoaderData();

    return (
        <div>
            
            <Banner></Banner>
            <ExtraService></ExtraService>
            <div className="text-center mb-14" >
            <small className="text-sm font-semibold text-gray-400" >Shopping</small>
              <h1 className="text-6xl font-bold text-center" >Our Brand</h1>
              <p className="text-lg text-gray-500 font-semibold" >Check out some of Brand from our collection</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6 space-y-4 mb-10" >
                {
                    cards.map(brand => <OurBrands key={brand.id} brand={brand}  ></OurBrands>)
                }
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

             <div>
             <h1 className="text-center mt-4 mb-4 text-6xl font-bold" >FAQs</h1>
              <Faqs></Faqs>
             </div>

              
               
             




        </div>
    );
};

export default Home;