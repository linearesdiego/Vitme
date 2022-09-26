import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Cosecha = () => {
  return (
    <Swiper
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="bg-white h-screen flex font-poppins pt-24 ">
        <Swiper
          className="mySwiper swiper-v h-screen w-full"
          spaceBetween={0}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="pt-24">Vino 1</SwiperSlide>
          <SwiperSlide className="pt-24">Desc 1</SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide className="bg-white h-screen flex font-poppins pt-24 ">
        <Swiper
          className="mySwiper swiper-v h-screen w-full"
          spaceBetween={0}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="pt-24">Vino 2</SwiperSlide>
          <SwiperSlide className="pt-24">Desc 2</SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide className="bg-white h-screen flex font-poppins pt-24 ">
        <Swiper
          className="mySwiper swiper-v h-screen w-full"
          spaceBetween={0}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="pt-24">Vino 3</SwiperSlide>
          <SwiperSlide className="pt-24">Desc 3</SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Cosecha;
