import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//Styles
import 'swiper/css';
import 'swiper/css/pagination';
import ComoFunciona from '../components/sections/ComoFunciona';
import Hero from '../components/sections/Hero';
import Cosecha from '../components/sections/Cosecha';
import Beneficios from '../components/sections/Beneficios';
import Elefante from '../components/sections/Elefante';
import Equipo from '../components/sections/Equipo';
import Contacto from '../components/sections/Contacto';

const Home = () => {
  return (
    <div>
      <Swiper
        className="mySwiper swiper-v h-screen"
        spaceBetween={0}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <ComoFunciona />
        </SwiperSlide>
        <SwiperSlide>
          <Cosecha />
        </SwiperSlide>
        <SwiperSlide>
          <Beneficios />
        </SwiperSlide>
        <SwiperSlide>
          <Elefante />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Contacto />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
