import React from 'react';
import howWorks from '../../assets/howWorks.png';
import unsplash from '../../assets/unsplash.png';

const ComoFunciona = () => {
  return (
    <div
      id="comofunciona"
      className="bg-white h-screen flex flex-col font-poppins overflow-hidden"
    >
      <div className="h-[6.5%] flex w-full shadow py-[2%]">
        <p className="text-[24px] font-medium ml-4 my-auto ">¿Como funciona?</p>
      </div>
      <div className="w-11/12 h-[93.5%] flex flex-col justify-around m-auto md:hidden">
        <p className="text-[16px] p-5 rounded-[20px] font-regular bg-lightGrey text-darkGrey">
          Conectamos Bodegas locales y su producto con el mundo, a través del
          uso de la tecnología blockchain
        </p>
        <p className="text-[16px] p-5 rounded-[20px] font-regular bg-lightGrey text-darkGrey">
          Ofrecémos un producto digital bien conocido como NFT con múltiples
          beneficios que lo respaldan y le brindan gran valor, a los que podrá
          acceder efectuando la compra del mismo por medio los medios que
          pusimos a su disposición.
        </p>
      </div>
      <div className="w-full h-[93.5%] hidden md:flex flex-col justify-around m-auto">
        <img
          src={unsplash}
          alt="unsplash"
          className="absolute w-full h-[93.5%]"
        ></img>
        <img src={howWorks} alt="howWorks" className="z-50 w-8/12 m-auto"></img>
      </div>
    </div>
  );
};

export default ComoFunciona;
