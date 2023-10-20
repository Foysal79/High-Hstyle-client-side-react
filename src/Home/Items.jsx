import { useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";


const Items = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div className="mt-10 mb-20 min-h-screen space-y-6 " >
            <h1 className="text-center" >number of items : {items.length}</h1>
            <div className="grid grid-cols-4 w-11/12 mx-auto gap-4" >
                {
                    items.map(item => <ItemCard key={item._id} item={item} ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default Items;