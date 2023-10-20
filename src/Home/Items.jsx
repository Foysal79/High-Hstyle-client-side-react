import { useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";
import { useState } from "react";




const Items = () => {
    const items = useLoaderData();
    console.log(items);
    const [data, setData] = useState(items)
    console.log(data);
    
    return (
        <div className="mt-10 mb-20 min-h-screen space-y-6 " >
            <h1 className="text-center" >number of items : {items.length}</h1>
             
             {
                data.length ? '' : <div className="flex justify-center" >
                    <img src="https://i.ibb.co/3MWZ0Y6/fpdl-in-red-grunge-style-coming-soon-design-1017-26691-large.jpg" alt="" />
                </div>
             }
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-4" >
                {
                    items.map(item => <ItemCard key={item._id} item={item} ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default Items;