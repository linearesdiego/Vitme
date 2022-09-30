import React from 'react';
import cup from '../../assets/cup.png';

const Beneficios = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow">
        <p className="text-[24px] font-medium ml-4 my-auto">
          Beneficios exclusivos
        </p>
      </div>
      <div className="h-[93.5%] flex flex-col justify-between m-auto">
        <div className="flex justify-between">
          <img src={cup} alt="cup" className="h-[200px]"></img>
          <p className="text-12 font-light italic text-center m-auto">
            Viví la experiencia, degusta la cosecha exclusiva de esta bodega.{' '}
          </p>
        </div>
        <div className="flex flex-col h-full justify-evenly">
          <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
            <div className="flex">
              <p className="mr-2 font-light text-[24px]">Beneficio I </p>
              <p className="font-medium text-[24px]">| White List</p>
            </div>
            <p className="text-[12px]">
              Formar parte de una lista por la cual tendrás acceso a
              producciones a modo de preventa, además de acceder a cosechas
              exclusivas.
            </p>
          </div>
          <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
            <div className="flex">
              <p className="mr-2 font-light text-[24px]">Beneficio II </p>
              <p className="font-medium text-[24px]"> | Visitas</p>
            </div>
            <p className="text-[12px]">
              Tendrás acceso a realizar una visita a las instalaciones de la
              bodega, y conocer a cerca de la creación del producto de forma
              física.
            </p>
          </div>
          <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
            <div className="flex">
              <p className="mr-2 font-light text-[24px]">Beneficio III </p>
              <p className="font-medium text-[24px]"> | Catas</p>
            </div>
            <p className="text-[12px]">
              Podrás disfrutar y deleitarte con la cata de los más exclusivos
              vinos de Elefante, mientras escuchas datos de valor a cerca de su
              composición.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
