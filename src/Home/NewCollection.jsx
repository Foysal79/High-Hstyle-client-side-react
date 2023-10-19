import NewCollectionCards from "./NewCollectionCards";
import NewCollectionSlider from "./NewCollectionCards";


const NewCollection = () => {
    return (
        <div className="text-center py-10" >
            <small className="text-sm font-semibold text-gray-400" >Our Products</small>
            <h1 className=" text-3xl lg:text-5xl font-bold my-2" >FROM THE NEW COLLECTION</h1>
            <p className="text-lg text-gray-500 font-semibold" >Check out some of the stand outs from our collection</p>
            <NewCollectionCards></NewCollectionCards>
            
        </div>
    );
};

export default NewCollection;