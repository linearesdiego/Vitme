import React from 'react';
import discord from '../assets/icons/discord.png';
import twitter from '../assets/icons/twitter.png';
import telegram from '../assets/icons/telegram.png';
import cripto from '../assets/criptoPlace.png';

const Footer = () => {
  return (
    <div className="w-full h-[35%] max-h-[210px] bg-black text-white flex flex-col justify-evenly mt-auto">
      <div className="w-7/12 flex flex-col mx-auto">
        <p className="mx-auto font-poppins font-medium text-[16px] text-white">
          Únete a nosotros
        </p>
        <div className="w-full flex justify-around">
          <div className="flex flex-col">
            <img
              src={discord}
              alt="discord"
              className="w-[25px] m-auto mt-5 mb-2"
            ></img>
            <p className="font-poppins text-white font-light text-[12px]">
              discord
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={twitter}
              alt="twitter"
              className="w-[25px] m-auto mt-5 mb-2"
            ></img>
            <p className="font-poppins text-white font-light text-[12px]">
              twitter
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={telegram}
              alt="telegram"
              className="w-[25px] m-auto mt-5 mb-2"
            ></img>
            <p className="font-poppins text-white font-light text-[12px]">
              telegram
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col h-fit">
        <p className="mx-auto font-poppins font-medium text-[16px] text-white">
          Powered By
        </p>
        <img src={cripto} alt="criotoPlace"></img>
      </div>
    </div>
  );
};

export default Footer;
