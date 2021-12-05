import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import img1 from "../../images/slider1.jpg";
import img2 from "../../images/slider2.jpg";
import img3 from "../../images/slider3.jpg";
import img4 from "../../images/slider4.jpg";
import img5 from "../../images/slider5.jpg";

SwiperCore.use([Navigation, EffectFade, Pagination, Scrollbar, A11y, Autoplay]);

const CarouselContainer = () => {
  const data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
  ];
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      loop={true}
      effect={"fade"}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={item.imgSrc} className="h-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselContainer;
