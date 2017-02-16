import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component{
  render(){
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
        <div className='slide-carousel'>
            <Slider {...settings}>
                <div><img src='/img/banner/banner1.jpg' /></div>
                <div><img src='/img/banner/banner2.jpg' /></div>
                <div><img src='/img/banner/banner3.jpg' /></div>
            </Slider>
        </div>
    );
  }
}

export default SimpleSlider;