import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

//Styles
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <div>
      <Swiper
        className="mySwiper swiper-h h-screen bg-lime-400"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Swiper
            className="mySwiper swiper-v bg-white h-screen"
            direction={'vertical'}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className="h-screen bg-red-500 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
            <SwiperSlide className="h-screen bg-red-400 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper swiper-v bg-white h-screen flex"
            direction={'vertical'}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className="h-screen bg-lime-500 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
            <SwiperSlide className="h-screen bg-lime-400 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper swiper-v bg-white h-screen flex"
            direction={'vertical'}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className="h-screen bg-blue-500 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
            <SwiperSlide className="h-screen bg-blue-400 flex">
              <p className="m-auto">Vertical Slide 1</p>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
