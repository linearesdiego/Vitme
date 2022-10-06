import React from 'react';
import wineshero from '../../assets/wineshero.png';
import discord from '../../assets/icons/discord.png';
import twitter from '../../assets/icons/twitter.png';
import telegram from '../../assets/icons/telegram.png';
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
      <div className="w-11/12 h-full m-auto pt-24 md:flex justify-between">
        <div className="md:w-5/12 md:flex md:flex-col justify-between">
          <div>
            <p className="text-[48px] font-black md:text-[64px]">Wine3</p>
            <p className="text-[16px] font-extralight -mt-3 md:text-[24px]">
              El vino, el sol y el futuro
            </p>
            <button className="bg-black mt-[35px] py-[10px] px-[15px] rounded-[14px] text-white text-[16px] font-semibold md:text-[24px]">
              Compra en Open Sea
            </button>
          </div>
          <div className="w-4/12 mb-14 hidden md:flex">
            <div className="w-full flex flex-col">
              <p className="mx-auto font-poppins font-light text-[24px] text-black">
                Únete a nosotros
              </p>
              <div className="w-full flex justify-around">
                <div className="flex flex-col">
                  <img
                    src={discord}
                    alt="discord"
                    className="w-[25px] m-auto mt-5 mb-2"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    discord
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-[25px] m-auto mt-5 mb-2"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    twitter
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src={telegram}
                    alt="telegram"
                    className="w-[25px] m-auto mt-5 mb-2"
                  ></img>
                  <p className="font-poppins text-black font-light text-[16px]">
                    telegram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-auto h-5/6 md:w-6/12 overflow-visible">
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
                    isActive ? 'w-full h-full m-auto' : 'w-full h-4/6 m-auto'
                  }
                >
                  <img src={blend} alt="blend" className="h-5/6"></img>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive ? 'w-full h-full m-auto' : 'w-full h-4/6 m-auto'
                  }
                >
                  <img src={syrah} alt="syrah" className="h-5/6"></img>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide className="flex overflow-visible">
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'w-full h-full m-auto overflow-visible'
                      : 'w-full h-4/6 m-auto'
                  }
                >
                  <img src={pinotnoir} alt="pinotnoir" className="h-5/6"></img>
                  <div
                    className={
                      isActive
                        ? 'bg-black h-3 w-4/6 rounded-full blur-xl'
                        : 'bg-black h-3 w-3/6 ml-2 rounded-full blur-xl'
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
