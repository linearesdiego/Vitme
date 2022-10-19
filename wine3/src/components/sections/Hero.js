import React from 'react';
import wineshero from '../../assets/wineshero.png';
import discordB from '../../assets/icons/discordB.png';
import twitterB from '../../assets/icons/twitterB.png';
import telegramB from '../../assets/icons/telegramB.png';
import syrah from '../../assets/wines/syrah.png';
import pinotnoir from '../../assets/wines/pinotnoir.png';
import blend from '../../assets/wines/blend.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex font-poppins">
      <div className="w-11/12 h-[93.5%] mx-auto mt-auto md:flex justify-between">
        <div className="md:w-5/12 md:flex md:flex-col justify-between h-[20%] md:h-full">
          <div className="flex flex-col h-full md:h-fit">
            <p className="text-[48px] font-black md:text-[64px]">Vintme</p>
            <p className="text-[16px] font-extralight -mt-3 md:text-[24px]">
              El vino, el sol y el futuro
            </p>
            <button className="bg-black hover:bg-darkGrey py-[10px] px-[15px] rounded-[14px] w-fit mt-auto md:mt-[35px] text-white text-[16px] font-semibold md:text-[24px] transition duration-150">
              Compra en Open Sea
            </button>
          </div>
          <div className="w-4/12 mb-14 hidden md:flex">
            <div className="w-full flex flex-col">
              <p className="mx-auto font-poppins font-light text-[24px] text-black">
                Únete a nosotros
              </p>
              <div className="w-full flex justify-around gap-2">
                <div className="flex flex-col">
                  <img
                    src={discordB}
                    alt="discord"
                    className="m-auto mt-5 mb-2 max-h-[25px]"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    discord
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src={twitterB}
                    alt="twitter"
                    className="m-auto mt-5 mb-2 max-h-[25px]"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    twitter
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src={telegramB}
                    alt="telegram"
                    className="m-auto mt-5 mb-2 max-h-[25px]"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    telegram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-auto h-[80%] md:w-6/12 overflow-visible">
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
            className="mySwiper h-full overflow-visible"
          >
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img src={blend} alt="blend" className="md:h-full"></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img src={syrah} alt="syrah" className="md:h-full"></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'z-50 md:h-[80%] m-auto'
                      : 'z-30 w-[60%] md:h-[55%]  m-auto'
                  }
                >
                  <img
                    src={pinotnoir}
                    alt="pinotnoir"
                    className="md:h-full"
                  ></img>
                  <div
                    className={
                      isActive && 'bg-black h-3 w-4/6 rounded-full blur-xl'
                    }
                  ></div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
          {/*
          <img
            src={wineshero}
            alt="wine"
            className="md:h-[800px] mr-auto"
          ></img>
        */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
