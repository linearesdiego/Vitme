import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import historia from '../../assets/elefante/historia.png';
import sobrefeliyjuli from '../../assets/elefante/sobrefeliyjuli.png';
import tripleimpacto from '../../assets/elefante/tripleimpacto.png';

const Elefante = () => {
  return (
    <Swiper
      className="mySwiper2 h-screen font-poppins"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 10500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="h-full">
        <div id='elefante' className="h-[6.5%] flex w-full shadow bg-white z-50">
          <p className="md:text-[32px] md:font-black ml-4 my-auto font-medium text-[24px] ">
            Elefante Wine
          </p>
        </div>
        <div className="flex flex-col h-full fondo">
          <div>
            <h2 className="hidden md:block text-[64px] font-black	m-10">
              Detrás de un recuerdo
            </h2>
            <div className="text-[16px] mx-10 mt-12 leading-6 h-[400px] md:h-[200px] md:mr-[45%]">
              <p>
                Nace de la unión de una pareja de enamorados y su pasión por los
                vinos, Felipe y Juliana, son autores de Elefante Wine, una
                bodega en la que la familia produce sus vinos de forma cien por
                ciento casera, en el garaje de su hogar.
              </p>
              <p className="md:py-5">
                Elefante pone a nuestro alcance productos que han logrado gran
                prestigio y renombre por la calidad del producto.
              </p>
            </div>
          </div>
          <div className="mx-10">
            <button className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto">
              Conocer más
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[6.5%] w-full shadow bg-white z-50 hidden md:flex">
          <p className="text-[32px] font-black ml-4 my-auto">Elefante Wine</p>
        </div>
        <div className="md:hidden h-[55px] flex w-full shadow ">
          <p className="text-[24px] font-medium ml-4 my-auto">
            Historia del nombre
          </p>
        </div>
        <div className="flex flex-col h-full fondo ">
          <div className="flex flex-row">
            <h2 className="hidden md:block text-[64px] font-black	m-10 md:w-4/12">
              Historia del nombre
            </h2>

            <div className="flex flex-col text-[16px] mx-10 mt-12 h-[400px] md:w-4/12 md:text-[20px] md:mx-0 md:h-[230px] md:w-[35%]">
              <p>
                Los Elefantes tienen una prodigiosa memoria asociada al olfato.
                Los humanos tenemos una memoria olfativa asociada a nuestras
                emociones. Un vino que no pretende ser memorable, sino que
                intenta tocar una fibra, “algo que nos haga recordar”.
              </p>
            </div>
          </div>
          <div>
            <img
              src={historia}
              alt="historia"
              className="rounded-3xl m-auto w-64 h-72 "
            ></img>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[6.5%] w-full shadow bg-white z-50 hidden md:flex">
          <p className="text-[32px] font-black ml-4 my-auto">Elefante Wine</p>
        </div>
        <div className="md:hidden h-[55px] flex w-full shadow ">
          <p className="text-[24px] font-medium ml-4 my-auto">
            Sobre Feli y Juli
          </p>
        </div>
        <div className="flex flex-col h-full fondo1 ">
          <div className="flex flex-row">
            <h2 className="hidden md:block text-[64px] font-black	m-10 md:w-4/12">
              Feli y Juli
            </h2>
            <div className="flex flex-col text-[16px] mx-10 mt-12 h-[400px] md:w-4/12 md:text-[20px] md:mx-0 md:h-[230px] md:w-[35%]">
              <p>
                Su historia comenzó en la Facultad de Ciencias Agrarias de UN
                Cuyo, donde además del amor, nació el proyecto enológico. El
                matrimonio comparte la misma pasión por la vitivinicultura, por
                lo que a la hora emprender se complementaron y formaron un buen
                equipo de trabajo.
              </p>
            </div>
          </div>
          <div>
            <img
              src={sobrefeliyjuli}
              alt="sobrefeliyjuli"
              className="rounded-3xl m-auto w-64 h-72 "
            ></img>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-full">
        <div className="h-[6.5%] w-full shadow bg-white z-50 hidden md:flex">
          <p className="text-[32px] font-black ml-4 my-auto">Elefante Wine</p>
        </div>
        <div className="md:hidden h-[55px] flex w-full shadow ">
          <p className="text-[24px] font-medium ml-4 my-auto">Eco Friendly</p>
        </div>
        <div className="flex flex-col h-full fondo2 ">
          <div className="flex flex-row">
            <h2 className="hidden md:block text-[64px] font-black	m-10 md:w-4/12">
              Eco Friendly
            </h2>
            <div className="flex flex-col text-[16px] mx-10 mt-12 h-[400px] md:w-4/12 md:text-[20px] md:mx-0 md:h-[230px] md:w-[35%]">
              <p>
                Es un emprendimiento ampliamente comprometido con el medio
                ambiente, con intención de no dejar huella de carbono.
              </p>
              <p>Se comprometen a usar la tecnología de paneles solares.</p>
            </div>
          </div>
          <div>
            <img
              src={tripleimpacto}
              alt="tripleimpacto"
              className="rounded-3xl m-auto w-64 h-72 "
            ></img>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Elefante;
