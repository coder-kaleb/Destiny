import testimoni from "../assets/testimonial1.jpg";
import testimoni2 from "../assets/testimonial2.jpg";
import testimoni3 from "../assets/testimonial3.jpg";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
register();
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/reviews.css";
import Counter from "./Counter";
import { Award, DownloadCloud, Gift, Users } from "react-feather";

const Review = () => {
  return (
    <section className="reviews">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={testimoni} alt="testimoni-image" />
          <p className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            quaerat architecto modi illum ipsam, maiores omnis dignissimos
            officiis sint eum.
          </p>
          <div>
            <p className="name">Robert Hamert</p>
            <p className="type">Chairman Hammer Corp</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={testimoni2} alt="testimoni-image" />
          <p className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            quaerat architecto modi illum ipsam, maiores omnis dignissimos
            officiis sint eum.
          </p>
          <div>
            <p className="name">Robert Hamert</p>
            <p className="type">Chairman Hammer Corp</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={testimoni3} alt="testimoni-image" />
          <p className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            quaerat architecto modi illum ipsam, maiores omnis dignissimos
            officiis sint eum.
          </p>
          <div>
            <p className="name">Robert Hamert</p>
            <p className="type">Chairman Hammer Corp</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="desc">
        <div>
          <h2>Customized dashboard for mobile access.</h2>
          <h3>Makes your everyday better.</h3>
        </div>
        <div className="deatail">
          <p>
            Just get the code and sit tight, you'll witness its power and
            performance in lead conversion. Powerful and productive technology.
          </p>
          <p>
            Experience, then believe. Just get the code and sit tight, you'll
            witness its power and performance in lead conversion.
          </p>
          <p>
            Just get the code and sit tight, you'll witness its power and
            performance in lead conversion.
          </p>
        </div>
      </div>

      {/* scroll activated numbers */}
      <div className="container">
        <div className="counter-wrapper">
          <Counter sign={"0 K+"} dataVal="46" title={"Downloads"}>
            <DownloadCloud />
          </Counter>
          <Counter sign={"0 %"} dataVal="97" title={"Awards"}>
            <Award />
          </Counter>
          <Counter sign={"0 K+"} dataVal="143" title={"Satisfied Users"}>
            <Users />
          </Counter>
          <Counter sign={"0 #"} dataVal="71" title={"In Press"}>
            <Gift />
          </Counter>
        </div>
      </div>
    </section>
  );
};

export default Review;
