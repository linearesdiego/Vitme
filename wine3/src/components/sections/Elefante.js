import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Elefante = () => {
  return (
    <Swiper
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="pt-24">Elefante 1</SwiperSlide>
      <SwiperSlide className="pt-24">Elefante 2</SwiperSlide>
      <SwiperSlide className="pt-24">Elefante 3</SwiperSlide>
    </Swiper>
  );
};

export default Elefante;
