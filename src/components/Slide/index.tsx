import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './swiper.module.scss';

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export function Slide() {
  return (
    <Box className={styles.slideContainer} mx="6.25rem" mb="2.5rem">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
  
      >
        <SwiperSlide><Image src="europe.jpg" boxSize="100%" alt="Europe"/></SwiperSlide>
        <SwiperSlide><Image src="asia.jpg" boxSize="100%" alt="Asia"/></SwiperSlide>
        <SwiperSlide><Image src="africa.jpg" boxSize="100%" alt="Africa"/></SwiperSlide>
        <SwiperSlide><Image src="latin.jpg" boxSize="100%" alt="Latin America"/></SwiperSlide>
        <SwiperSlide><Image src="oceania.jpg" boxSize="100%" alt="Oceania"/></SwiperSlide>
      </Swiper>
    </Box>
  );
}