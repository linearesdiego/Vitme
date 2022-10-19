import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import ComoFunciona from '../components/sections/ComoFunciona';
import Hero from '../components/sections/Hero';
import Cosecha from '../components/sections/Cosecha';
import Beneficios from '../components/sections/Beneficios';
import Elefante from '../components/sections/Elefante';
import Equipo from '../components/sections/Equipo';
import Contacto from '../components/sections/Contacto';
import SwiperCore, { Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel]);

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
        modules={[Mousewheel]}
        mousewheel={true}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide id="comofunciona">
          <ComoFunciona />
        </SwiperSlide>
        <SwiperSlide id="cosecha">
          <Cosecha />
        </SwiperSlide>
        <SwiperSlide id="beneficios">
          <Beneficios />
        </SwiperSlide>
        <SwiperSlide id="elefante">
          <Elefante />
        </SwiperSlide>
        <SwiperSlide id="equipo">
          <Equipo />
        </SwiperSlide>
        <SwiperSlide id="contacto">
          <Contacto />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
