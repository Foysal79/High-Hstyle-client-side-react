import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";

const OurBrands = ({brand}) => {
    const {id, name, img} = brand;

    useEffect(() => {
      Aos.init({
        duration: 1000, // Set the animation duration in milliseconds
      });
    }, []);

  return (
    <Link data-aos="flip-left" to={`/items/${name}`} >
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-gray-200">
        <h2 className="card-title text-xl font-bold uppercase">{name}</h2>
        
      </div>
    </div>
    </Link>
  );
};

export default OurBrands;
