import React from 'react';
import cup from '../../assets/cup.png';

const Beneficios = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow">
        <img></img>
        <p className="text-[24px] font-medium ml-4 my-auto">
          Beneficios exclusivos
        </p>
      </div>
      <div className="w-11/12 h-[93.5%] flex flex-col justify-around m-auto">
        <div className="flex">
          <p>
            Viví la experiencia, degusta la cosecha exclusiva de esta bodega.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
