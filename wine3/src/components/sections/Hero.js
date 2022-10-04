import React from 'react';
import wineshero from '../../assets/wineshero.png';
import discord from '../../assets/icons/discord.png';
import twitter from '../../assets/icons/twitter.png';
import telegram from '../../assets/icons/telegram.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex font-poppins md:h-[93.3%]">
      <div className="w-11/12 h-full m-auto pt-24 md:flex">
        <div className=" md:w-6/12 md:flex md:flex-col justify-between">
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
        <div className="w-6/12 bg-red-500">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-full bg-white "
          >
            <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-red-700">Slide 3</SwiperSlide>
          </Swiper>
          {/*
          <img
            src={wineshero}
            alt="wine"
            className="md:h-[800px] mr-auto"
              ></img>*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
