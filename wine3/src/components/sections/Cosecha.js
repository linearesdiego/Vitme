import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import syrah from '../../assets/wines/syrah.png';
import pinotnoir from '../../assets/wines/pinotnoir.png';
import blend from '../../assets/wines/blend.png';

import '../../App.css';

const Cosecha = () => {
  return (
    <div className="h-screen font-poppins">
      <div className="h-[6.5%] flex w-full shadow md:hidden">
        <p className="text-[24px] font-medium ml-4 my-auto">Cosecha</p>
      </div>
      <div className="h-screen w-11/12 mx-auto">
        <Swiper
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper h-full w-9/12"
        >
          <SwiperSlide className="flex w-full">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? 'w-fit h-4/6 mt-32 m-auto'
                    : 'w-fit h-2/6 mt-60 m-auto'
                }
              >
                <div className="h-[88%]">
                  <img
                    src={pinotnoir}
                    alt="syrah"
                    className="h-5/6 mx-auto"
                  ></img>
                  <p
                    className={
                      isActive
                        ? 'font-black text-[48px] mt-5 text-center'
                        : 'font-black text-[40px] mt-5 text-center'
                    }
                  >
                    Pinot Noir
                  </p>
                </div>
                <div
                  className={
                    isActive ? 'flex flex-col justify-around h-[12%]' : 'hidden'
                  }
                >
                  <p>De la tierra del sol y del buen vino</p>
                  <button className="bg-black py-2 px-10 w-fit text-[24px] m-auto font-semibold text-white rounded-[14px]">
                    Mint
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="flex w-full">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? 'w-fit h-4/6 mt-32 m-auto'
                    : 'w-fit h-2/6 mt-60 m-auto'
                }
              >
                <div className="h-[88%]">
                  <img src={blend} alt="syrah" className="h-5/6 mx-auto"></img>
                  <p
                    className={
                      isActive
                        ? 'font-black text-[48px] mt-5 text-center'
                        : 'font-black text-[40px] mt-5 text-center'
                    }
                  >
                    Blend
                  </p>
                </div>
                <div
                  className={
                    isActive ? 'flex flex-col justify-around h-[12%]' : 'hidden'
                  }
                >
                  <p>De la tierra del sol y del buen vino</p>
                  <button className="bg-black py-2 px-10 w-fit text-[24px] m-auto font-semibold text-white rounded-[14px]">
                    Mint
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="flex w-full">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? 'w-fit h-4/6 my-auto bg-red-500 w-full'
                    : 'w-fit h-2/6 m-auto'
                }
              >
                <div className="h-[88%]">
                  <img src={syrah} alt="syrah" className="h-5/6 mx-auto"></img>
                  <p
                    className={
                      isActive
                        ? 'font-black text-[48px] mt-5 text-center'
                        : 'font-black text-[40px] mt-5 text-center'
                    }
                  >
                    Syrah
                  </p>
                </div>
                <div
                  className={
                    isActive ? 'flex flex-col justify-around h-[12%]' : 'hidden'
                  }
                >
                  <p>De la tierra del sol y del buen vino</p>
                  <button className="bg-black py-2 px-10 w-fit text-[24px] m-auto font-semibold text-white rounded-[14px]">
                    Mint
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        className="mySwiper2 md:hidden"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className=" h-screen flex">
          <Swiper
            className="mySwiper swiper-v h-screen w-full"
            spaceBetween={0}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide className="h-full">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <p className="text-[12px] italic font-light text-center">
                  Conocé y accedé a los productos más exclusivos de Elefante
                  Wine.
                </p>
                <p className="text-[48px] font-black">Syrah</p>
                <p className="text-[16px] font-extralight -mt-5">
                  De la tierra del sol y del buen vino
                </p>
                <a
                  href="#"
                  className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto"
                >
                  Mint
                </a>
                <img src={syrah} alt="syrah"></img>
                <p className="text-[12px] w-6/12 mx-auto text-center">
                  “Este vino es la prueba de que el amor lo puede todo”
                </p>
                <p className="text-[12px] ml-auto w-6/12">
                  fasfkjsdhflasdfhlkds
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pt-14">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">
                    Vinificación y crianza:
                  </p>
                  <p className="text-[12px]">
                    Uva despalillada, macero en frío y luego fermento de racimo
                    en tanque de acero inoxidable con trabajos de pigeage, hizo
                    una corta maceración post fermentativa. Se conservó durante
                    1 año en tanque de acero inoxidable (2020). Se crió durante
                    12 meses en barrica de roble francés de 5 usos (2021),
                    fueron 2 barricas, 600 botellas.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Notas de cata:</p>
                  <p className="text-[12px]">
                    En nariz se presenta compacto con una primera impresión de
                    cuero, tabaco y pimienta. Luego aparecen aromas a
                    sotobosque, hongos de pino, higos y ciruela tiernizada. En
                    boca ingresa con volumen e intensida, su alto alcohol se
                    percibe en la densidad, pero estta integrado y amable,
                    “dulce”. Los taninos son suaves con una gran largo de boca.
                    Un vino con un interesante potencial de guarda.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Rareza:</p>
                  <p className="text-[12px]"></p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide className="bg-white h-screen flex font-poppins">
          <Swiper
            className="mySwiper swiper-v h-screen w-full"
            spaceBetween={0}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide className="h-full">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <p className="text-[12px] italic font-light text-center">
                  Conocé y accedé a los productos más exclusivos de Elefante
                  Wine.
                </p>
                <p className="text-[48px] font-black">Pinot Noir</p>
                <p className="text-[16px] font-extralight -mt-5">
                  De la tierra del sol y del buen vino
                </p>
                <a
                  href="#"
                  className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto"
                >
                  Mint
                </a>
                <img src={pinotnoir} alt="syrah"></img>
                <p className="text-[12px] w-6/12 mx-auto text-center">
                  “Este vino es la prueba de que el amor lo puede todo”
                </p>
                <p className="text-[12px] ml-auto w-6/12">
                  fasfkjsdhflasdfhlkds
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pt-14">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">
                    Vinificación y crianza:
                  </p>
                  <p className="text-[12px]">
                    Fermento con 15% de racimo entero en tanque de acero
                    inoxidable “oper top” con mucho pigage, se prensó apenas
                    terminó la fermentación. Se embarricó con borras finas. Se
                    crió durante 12 meses en barrica de roble francés de 5 usos,
                    3 barricas, 900 botellas.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Notas de cata:</p>
                  <p className="text-[12px]">
                    En nariz se presenta complejo con una nota inicial de
                    crianza a vainilla, resina y tabaco fresco. Luego con un
                    poco de aire aparecen notas a canela, clavo de olor y
                    cerezas. En boca ingresa con volumen con una acidez
                    creciente, taninos suaves que invitan a dejar el vino en
                    boca. Final agradable con interesante persistencia
                    aromática. Presenta sedimentos.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Rareza:</p>
                  <p className="text-[12px]"></p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide className="bg-white h-screen flex font-poppins">
          <Swiper
            className="mySwiper swiper-v h-screen w-full"
            spaceBetween={0}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide className="h-full">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <p className="text-[12px] italic font-light text-center">
                  Conocé y accedé a los productos más exclusivos de Elefante
                  Wine.
                </p>
                <p className="text-[48px] font-black">Blend</p>
                <p className="text-[16px] font-extralight -mt-5">
                  De la tierra del sol y del buen vino
                </p>
                <a
                  href="#"
                  className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto"
                >
                  Mint
                </a>
                <img src={blend} alt="syrah"></img>
                <p className="text-[12px] w-6/12 mx-auto text-center">
                  “Este vino es la prueba de que el amor lo puede todo”
                </p>
                <p className="text-[12px] ml-auto w-6/12">
                  fasfkjsdhflasdfhlkds
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pt-14">
              <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">
                    Vinificación y crianza:
                  </p>
                  <p className="text-[12px]">
                    Uvas provenientes de viñedo de mas de 20 años, fermentación
                    en tanque de acero inoxidable. Se crió, por separado,
                    durante 12 meses en barrica de roble francés de 4 usos, 3
                    barricas, 900 botellas.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Notas de cata:</p>
                  <p className="text-[12px]">
                    En nariz se presenta complejo con una primera impresión de
                    fruta negray pimiento. Luego aparece frutilla y ciruela,
                    también hay notas de crianza a tabaco y café. En boca
                    ingresa con una acidez punzante y taninos con agarre, es
                    intenso y vivaz, en los retrogustos aparecen las frutas
                    negras y frambuesas. Un vino con un largo potencial de
                    guarda.
                  </p>
                </div>
                <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                  <p className="text-[16px] font-medium">Rareza:</p>
                  <p className="text-[12px]"></p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cosecha;
