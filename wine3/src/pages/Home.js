import React from 'react';

//Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import ComoFunciona from '../components/sections/ComoFunciona/ComoFunciona';
import Hero from '../components/sections/Hero/Hero';
import Cosecha from '../components/sections/Cosecha';
import Beneficios from '../components/sections/Beneficios/Beneficios';
import Elefante from '../components/sections/Elefante';
import Equipo from '../components/sections/Equipo';
import Contacto from '../components/sections/Contacto/Contacto';
import SwiperCore, { Mousewheel } from 'swiper'; //////asdasd 
// import Nav from '../components/Nav';
import NavCaro from '../components/NavCaro';

// install Swiper modules
SwiperCore.use([Mousewheel]);

const Home = () => {
  return (
    <div>
      {/* <Nav /> */}
      <NavCaro />
      
          <Hero />
          <ComoFunciona />
          <Cosecha />
          <Beneficios />
          <Elefante />
          <Equipo />
          <Contacto />
    </div>
  );
};

export default Home;
