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
    <div className="h-screen font-poppins pt-[0%] flex flex-col md:flex-row">
      <div className="h-[6.5%] flex w-full shadow md:hidden">
        <p className="text-[24px] font-medium ml-4 my-auto">Cosecha</p>
      </div>
      <Swiper
        className="mySwiper2 w-screen md:h-[85%] md:mt-auto bottom-0"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
        centeredSlides={true}
      >
        <SwiperSlide className="h-screen w-screen md:h-full md:w-full flex">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v h-screen w-screen md:h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-center gap-5'
                  }
                >
                  <p className="text-[12px] italic font-light text-center md:hidden">
                    Conocé y accedé a los productos más exclusivos de Elefante
                    Wine.
                  </p>
                  <p className="text-[48px] font-black md:hidden">Syrah</p>
                  <p className="text-[16px] font-extralight -mt-5 md:hidden">
                    De la tierra del sol y del buen vino
                  </p>
                  <a
                    href="#"
                    className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] text-white mr-auto md:hidden"
                  >
                    Mint
                  </a>
                  <div className={isActive ? 'h-[70%]' : 'h-[40%]'}>
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
                      <p className={isActive ? 'text-[20px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <a href="#">
                      <div
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        Mint
                      </div>
                    </a>
                  </div>
                  <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                    “Este vino es la prueba de que el amor lo puede todo”
                  </p>
                  <p className="text-[12px] ml-auto w-6/12 md:hidden">
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
                      Uva despalillada, macero en frío y luego fermento de
                      racimo en tanque de acero inoxidable con trabajos de
                      pigeage, hizo una corta maceración post fermentativa. Se
                      conservó durante 1 año en tanque de acero inoxidable
                      (2020). Se crió durante 12 meses en barrica de roble
                      francés de 5 usos (2021), fueron 2 barricas, 600 botellas.
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
                      “dulce”. Los taninos son suaves con una gran largo de
                      boca. Un vino con un interesante potencial de guarda.
                    </p>
                  </div>
                  <div className="bg-lightGrey p-[12px] text-darkGrey rounded-[7px]">
                    <p className="text-[16px] font-medium">Rareza:</p>
                    <p className="text-[12px]"></p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperSlide>
        <SwiperSlide className="h-screen w-screen md:h-full md:w-full flex font-poppins">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v h-screen w-screen md:h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-center gap-5'
                  }
                >
                  <p className="text-[12px] italic font-light text-center md:hidden">
                    Conocé y accedé a los productos más exclusivos de Elefante
                    Wine.
                  </p>
                  <p className="text-[48px] font-black md:hidden">Pinot Noir</p>
                  <p className="text-[16px] font-extralight -mt-5 md:hidden">
                    De la tierra del sol y del buen vino
                  </p>
                  <a
                    href="#"
                    className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] text-white mr-auto md:hidden"
                  >
                    Mint
                  </a>
                  <div className={isActive ? 'h-[70%]' : 'h-[40%]'}>
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
                      <p className={isActive ? 'text-[20px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <a href="#">
                      <div
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        Mint
                      </div>
                    </a>
                  </div>
                  <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                    “Este vino es la prueba de que el amor lo puede todo”
                  </p>
                  <p className="text-[12px] ml-auto w-6/12 md:hidden">
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
                      crió durante 12 meses en barrica de roble francés de 5
                      usos, 3 barricas, 900 botellas.
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
          )}
        </SwiperSlide>
        <SwiperSlide className="h-screen w-screen md:h-full md:w-full flex font-poppins">
          {({ isActive }) => (
            <Swiper
              className="mySwiper swiper-v h-screen w-screen md:h-full md:w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full">
                <div
                  className={
                    isActive
                      ? 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-around'
                      : 'w-11/12 h-full mx-auto flex flex-col justify-evenly md:justify-center gap-5'
                  }
                >
                  <p className="text-[12px] italic font-light text-center md:hidden">
                    Conocé y accedé a los productos más exclusivos de Elefante
                    Wine.
                  </p>
                  <p className="text-[48px] font-black md:hidden">Blend</p>
                  <p className="text-[16px] font-extralight -mt-5 md:hidden">
                    De la tierra del sol y del buen vino
                  </p>
                  <a
                    href="#"
                    className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] text-white mr-auto md:hidden"
                  >
                    Mint
                  </a>
                  <div className={isActive ? 'h-[70%]' : 'h-[40%]'}>
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
                      <p className={isActive ? 'text-[20px] italic' : 'hidden'}>
                        De la tierra del sol y del buen vino
                      </p>
                    </div>
                    <a href="#">
                      <div
                        className={
                          isActive
                            ? 'rounded-[14px] mx-auto font-semibold text-[20px] py-[10px] w-[192px] bg-black text-white'
                            : 'hidden'
                        }
                      >
                        Mint
                      </div>
                    </a>
                  </div>
                  <p className="text-[12px] w-6/12 mx-auto text-center md:hidden">
                    “Este vino es la prueba de que el amor lo puede todo”
                  </p>
                  <p className="text-[12px] ml-auto w-6/12 md:hidden">
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
                      Uvas provenientes de viñedo de mas de 20 años,
                      fermentación en tanque de acero inoxidable. Se crió, por
                      separado, durante 12 meses en barrica de roble francés de
                      4 usos, 3 barricas, 900 botellas.
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
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cosecha;

/*<Swiper
      <div className="h-screen w-11/12 mx-auto hidden md:block ">
        <div className="max-w-[485px] absolute mt-5">
          <p className="font-medium text-[40px]">Cosecha</p>
          <p className="font-light text-[24px]">
            Conocé y accedé a los productos más exclusivos de
            <span className="italic"> Elefante Wine</span>
          </p>
        </div>
        <Swiper
          className="mySwiper2 bg-slate-600 w-full"
          spaceBetween={0}
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
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="bg-red-500 w-full">
            <Swiper
              className="mySwiper swiper-v h-screen w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full"></SwiperSlide>
              <SwiperSlide className="bg-green-500 w-screen h-screen"></SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="bg-red-600 w-full">
            <Swiper
              className="mySwiper swiper-v h-screen w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full"></SwiperSlide>
              <SwiperSlide className="pt-14"></SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="bg-red-700 w-full">
            <Swiper
              className="mySwiper swiper-v h-screen w-full"
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="h-full"></SwiperSlide>
              <SwiperSlide className="pt-14"></SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
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
          className="mySwiper h-full w-12/12 lg:w-9/12"
        >
          <SwiperSlide className="flex w-full bg-red-800">
            <Swiper
              spaceBetween={0}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
            >
              {({ isActive }) => (
                <SwiperSlide
                  className={
                    isActive
                      ? 'h-5/6 my-auto w-full bg-slate-400'
                      : 'w-fit h-2/6 m-auto bg-slate-400'
                  }
                >
                  <div className="h-[88%] flex flex-col">
                    <img
                      src={pinotnoir}
                      alt="syrah"
                      className="h-4/6 m-auto"
                    ></img>
                    <p
                      className={
                        isActive
                          ? 'font-black text-[48px] mb-auto text-center'
                          : 'font-black text-[40px] mb-auto text-center'
                      }
                    >
                      Pinot Noir
                    </p>
                  </div>
                  <div
                    className={
                      isActive
                        ? 'flex flex-col justify-around h-[12%]'
                        : 'hidden'
                    }
                  >
                    <p className="text-center">
                      De la tierra del sol y del buen vino
                    </p>
                    <button className="bg-black py-2 px-10 w-fit text-[24px] mt-5 m-auto font-semibold text-white rounded-[14px]">
                      Mint
                    </button>
                  </div>
                </SwiperSlide>
              )}
              <SwiperSlide className="h-screen w-screen bg-black">
                <div></div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="flex w-full">
            {({ isActive }) => (
              <div
                className={
                  isActive ? 'h-5/6 my-auto w-full' : 'w-fit h-2/6 m-auto'
                }
              >
                <div className="h-[88%] flex flex-col">
                  <img src={blend} alt="syrah" className="h-4/6 m-auto"></img>
                  <p
                    className={
                      isActive
                        ? 'font-black text-[48px] mb-auto text-center'
                        : 'font-black text-[40px] mb-auto text-center'
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
                  <p className="text-center">
                    De la tierra del sol y del buen vino
                  </p>
                  <button className="bg-black py-2 px-10 w-fit text-[24px] mt-5 m-auto font-semibold text-white rounded-[14px]">
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
                  isActive ? 'h-5/6 my-auto w-full' : 'w-fit h-2/6 m-auto'
                }
              >
                <div className="h-[88%] flex flex-col">
                  <img src={syrah} alt="syrah" className="h-4/6 m-auto"></img>
                  <p
                    className={
                      isActive
                        ? 'font-black text-[48px] mb-auto text-center'
                        : 'font-black text-[40px] mb-auto text-center'
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
                  <p className="text-center">
                    De la tierra del sol y del buen vino
                  </p>
                  <button className="bg-black py-2 px-10 w-fit text-[24px] mt-5 m-auto font-semibold text-white rounded-[14px]">
                    Mint
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
        */
