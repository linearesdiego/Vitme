import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import syrah from '../../assets/wines/syrah.png';
import pinotnoir from '../../assets/wines/pinotnoir.png';
import blend from '../../assets/wines/blend.png';

import '../../App.css';

const Cosecha = () => {
  const swiper = useSwiper();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);

  return (
    <div id="cosecha" className="h-screen font-poppins pt-[0%] flex flex-col">
      <div className="h-[6.5%] flex w-full shadow">
        <p className="md:text-[32px] md:font-black ml-4 my-auto font-medium text-[24px] ">
          Cosecha
        </p>
      </div>

      <div className="w-[55%] h-fit ml-[3%] absolute hidden md:block mt-[2.5%]">
        <p className="font-black text-[64px]">Conocé y disfrutá</p>
        <p className="font-regular text-[22px] w-[70%]">
          Conocé y accedé a los productos más exclusivos de{' '}
          <span className="italic"> Elefante Wine</span>{' '}
        </p>
      </div>

      <Swiper
        className="mySwiper2 h-screen w-screen md:w-9/12 md:h-[85%] md:mt-auto bottom-0"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        slidesPerView={windowSize >= 640 ? 3 : 1}
        centeredSlides={true}
      >
        <SwiperSlide className="w-screen h-full md:w-full flex" id="pinotnoir">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v mt-auto w-screen h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full w-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-center'
                  }
                >
                  <div className="md:hidden">
                    <p className="text-[48px] font-black">Pinot Noir</p>
                    <p className="text-[16px] font-extralight">
                      De la tierra del sol y del buen vino
                    </p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => swiper.slideNext()}
                      className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white md:hidden"
                    >
                      ver más
                    </button>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'h-[50%] md:h-[70%]'
                        : 'h-[50%] md:h-[40%] md:hover:h-[60%]  transition duration-200'
                    }
                  >
                    <img
                      src={pinotnoir}
                      alt="pinotnoir"
                      className="h-full mx-auto"
                    ></img>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'text-center hidden h-[25%] justify-between md:flex flex-col'
                        : 'text-center hidden justify-between md:flex flex-col'
                    }
                  >
                    <div>
                      <p className="text-[48px] font-black">Pinot Noir</p>
                      <p className={isActive ? 'text-[16px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <button>
                      <div
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        ver más
                      </div>
                    </button>
                  </div>
                  <div className="">
                    <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                      “El que buen vino bebe, a beberlo vuelve”
                    </p>
                  </div>
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
                      crió durante 12 meses en barrica de roble francés de 5
                      usos, 3 barricas, 900 botellas.
                    </p>
                  </div>
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-me h-[93.5%]dium">
                      Notas de cata:
                    </p>
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
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperSlide>
        <SwiperSlide className="w-screen h-full md:w-full flex" id="syrah">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v mt-auto w-screen h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full w-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-center'
                  }
                >
                  <div className="md:hidden">
                    <p className="text-[48px] font-black">Syrah</p>
                    <p className="text-[16px] font-extralight">
                      De la tierra del sol y del buen vino
                    </p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => swiper.slideNext()}
                      className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white md:hidden"
                    >
                      ver más
                    </button>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'h-[50%] md:h-[70%]'
                        : 'h-[50%] md:h-[40%] md:hover:h-[60%]  transition duration-200'
                    }
                  >
                    <img
                      src={syrah}
                      alt="syrah"
                      className="h-full mx-auto"
                    ></img>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'text-center hidden h-[25%] justify-between md:flex flex-col'
                        : 'text-center hidden justify-between md:flex flex-col'
                    }
                  >
                    <div>
                      <p className="text-[48px] font-black">Syrah</p>
                      <p className={isActive ? 'text-[16px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <button onClick={() => swiper.slideNext()}>
                      <div
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        ver más
                      </div>
                    </button>
                  </div>
                  <div className="">
                    <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                      “El que buen vino bebe, a beberlo vuelve”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pt-14">
                <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-medium">
                      Vinificación y crianza:
                    </p>
                    <p className="text-[12px]">
                      Uva despalillada, macero en frío y luego fermento de
                      racimo en tanque de acero inoxidable con trabajos de
                      pigeage, hizo una corta maceración post fermentativa. Se
                      conservó durante 1 año en tanque de acero inoxidable
                      (2020). Se crió durante 12 meses en barrica de roble
                      francés de 5 usos (2021), fueron 2 barricas, 600 botellas.
                    </p>
                  </div>
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-me h-[93.5%]dium">
                      Notas de cata:
                    </p>
                    <p className="text-[12px]">
                      En nariz se presenta compacto con una primera impresión de
                      cuero, tabaco y pimienta. Luego aparecen aromas a
                      sotobosque, hongos de pino, higos y ciruela tiernizada. En
                      boca ingresa con volumen e intensida, su alto alcohol se
                      percibe en la densidad, pero estta integrado y amable,
                      “dulce”. Los taninos son suaves con una gran largo de
                      boca. Un vino con un interesante potencial de guarda.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperSlide>
        <SwiperSlide className="w-screen h-full md:w-full flex" id="blend">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v mt-auto w-screen h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full w-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-[93.5%] md:h-full mx-auto flex flex-col justify-evenly md:justify-center'
                  }
                >
                  <div className="md:hidden">
                    <p className="text-[48px] font-black">Blend</p>
                    <p className="text-[16px] font-extralight">
                      De la tierra del sol y del buen vino
                    </p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => swiper.slideNext()}
                      className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white md:hidden"
                    >
                      ver más
                    </button>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'h-[50%] md:h-[70%]'
                        : 'h-[50%] md:h-[40%] md:hover:h-[60%]  transition duration-200'
                    }
                  >
                    <img
                      src={blend}
                      alt="blend"
                      className="h-full mx-auto"
                    ></img>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'text-center hidden h-[25%] justify-between md:flex flex-col'
                        : 'text-center hidden justify-between md:flex flex-col'
                    }
                  >
                    <div>
                      <p className="text-[48px] font-black">Blend</p>
                      <p className={isActive ? 'text-[16px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => swiper.slideNext()}
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        ver más
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                      “El que buen vino bebe, a beberlo vuelve”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pt-14">
                <div className="w-11/12 h-[90%] mx-auto flex flex-col justify-evenly">
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-medium">
                      Vinificación y crianza:
                    </p>
                    <p className="text-[12px]">
                      Uvas provenientes de viñedo de mas de 20 años,
                      fermentación en tanque de acero inoxidable. Se crió, por
                      separado, durante 12 meses en barrica de roble francés de
                      4 usos, 3 barricas, 900 botellas.
                    </p>
                  </div>
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-me h-[93.5%]dium">
                      Notas de cata:
                    </p>
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
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cosecha;
