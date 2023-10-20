import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className='my-16 w-11/12 mx-auto' >
        <div  >
          <img className='w-full' src="https://i.ibb.co/CmLY2mW/fpdl-in-big-sale-special-offer-header-banner-419341-1542-medium.jpg" alt="" />
        </div>
        <div>
        <img className='w-full' src="https://i.ibb.co/2j42NmR/fpdl-in-big-sale-banner-template-design-web-social-media-sale-special-up-50-off-39705-238-medium.jpg" alt="" />
        </div>
        <div>
          <img className='w-full' src="https://i.ibb.co/0YRRkXf/fpdl-in-sale-banner-template-39897-38-medium.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCarousel;