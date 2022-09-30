import React from 'react';
import wineshero from '../../assets/wineshero.png';
const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="w-11/12 h-full m-auto pt-24">
        <p className="text-[48px] font-black">Wine3</p>
        <p className="text-[16px] font-extralight -mt-3">
          El vino, el sol y el futuro
        </p>
        <button className="bg-black mt-[35px] py-[10px] px-[15px] rounded-[14px] text-white text-[16px] font-semibold">
          Compra en Open Sea
        </button>
        <img src={wineshero} alt="wine" className=" m-auto"></img>
      </div>
    </div>
  );
};

export default Hero;
