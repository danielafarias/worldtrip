import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./swiper.module.scss";

import { Pagination, Navigation } from "swiper";
import { Box } from "@chakra-ui/react";
import { SlideContent } from "./SlideContent";

export function Slide() {
  return (
    <Box className={styles.slideContainer} mx={["0", "6.25rem"]} mb={["0", "2.5rem"]}>
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
        <SwiperSlide>
          <SlideContent
            countryName="Europa"
            description="O continente mais antigo."
            imageName="Europe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            countryName="Ásia"
            description="O continente mais grandioso."
            imageName="Asia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            countryName="África"
            description="O continente mais multicultural."
            imageName="Africa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            countryName="América Latina"
            description="A região da América mais multiétnica."
            imageName="Latin America"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            countryName="Oceania"
            description="O continente com ilhas extraordinárias."
            imageName="Oceania"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
