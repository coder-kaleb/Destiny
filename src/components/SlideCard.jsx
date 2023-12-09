import React from "react";
import testimoni from "../assets/testimonial1.jpg";
import { Star } from "react-feather";
import { SwiperSlide } from "swiper/react";
const SlideCard = () => {
  return (
    <SwiperSlide>
      <img src={testimoni} alt="testimoni-image" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quaerat
        architecto modi illum ipsam, maiores omnis dignissimos officiis sint
        eum.
      </p>
      <p>Robert Hamert</p>
      <p>Chairman Hammer Corp</p>
      <Star />
    </SwiperSlide>
  );
};

export default SlideCard;
