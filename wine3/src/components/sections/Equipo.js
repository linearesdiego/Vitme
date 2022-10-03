import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Equipo = () => {
  return (
    <Swiper
      id="equipo"
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="bg-white h-screen flex font-poppins pt-24 ">
        <Swiper
          className="mySwiper h-screen w-full"
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="pt-24">Equipo 1</SwiperSlide>
          <SwiperSlide className="pt-24">Equipo 2</SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Equipo;
