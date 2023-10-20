import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Set the animation duration in milliseconds
        });
      }, []);
    return (
        <div data-aos="fade-up"  className="mt-8 mb-20">
            
            <img className=' h-[80vh] w-11/12 mx-auto  mt-1 ' src="https://i.ibb.co/zbwtxzK/fpdl-in-realistic-christmas-sale-banner-with-red-page-1361-3133-large.jpg" alt="" />
        </div>
    );
};

export default Banner;