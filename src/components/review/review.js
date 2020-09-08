import React from "react";
import { ReactComponent as Avatar } from "../../assets/avatar1.svg";
import { ReactComponent as Avatar2 } from "../../assets/avatar2.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";

const Review = () => {

  const settings = {
      dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return ( <div>
    <h2 className="heading">Our Reviews</h2>
        <Slider {...settings}>
          <div className="slider">
           <div className="slider_image">
               <Avatar />
               <h3>Olive Yew.</h3>
           </div>
           <div className="slide_content">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
          </div>
          <div className="slider">
           <div className="slider_image">
               <Avatar2 />
               <h3>Hugo First.</h3>
           </div>
           <div className="slide_content">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
          </div>
        </Slider>
    </div>);
}
 
export default Review;