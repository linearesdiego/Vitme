import React from 'react';
import cup from '../../assets/cup.png';
import cupFliped from '../../assets/cupFliped.png';

const Beneficios = () => {
  return (
    <div className="h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow bg-white z-50">
        <p className="md:text-[32px] md:font-black ml-4 my-auto font-medium text-[24px] ">
          Beneficios
        </p>
      </div>
      <div className="h-[93.5%] flex flex-col md:flex-row-reverse md:justify-between m-auto md:w-11/12">
        <div className="w-full md:w-6/12">
          <div className="md:hidden flex">
            <img src={cup} alt="cup" className="h-[200px] -ml-[5%]"></img>
            <p className="italic text-center w-[45%] m-auto">
              Viví la experiencia, degusta la cosecha exclusiva de esta bodega.{' '}
            </p>
          </div>
          <img
            src={cupFliped}
            alt="cupFliped"
            className="h-[200px] md:h-[755px] hidden md:block ml-auto -mr-36 "
          ></img>
        </div>
        <div className="flex flex-col md:max-w-[670px] text-center h-full">
          <p className="text-12 hidden md:flex text-center m-auto md:font-black md:text-[64px]">
            Viví la experiencia
          </p>

          <div className="flex flex-col justify-evenly h-[90%] md:h-[80%]">
            <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
              <div className="flex w-fit mx-auto">
                <p className="mr-2 font-regular text-[24px] md:text-[32px]">
                  Beneficio I{' '}
                </p>
                <p className="font-medium text-[24px] md:text-[32px]">
                  | White List
                </p>
              </div>
              <p className="text-[12px] md:text-[18px]">
                Formar parte de una lista por la cual tendrás acceso a
                producciones a modo de preventa, además de acceder a cosechas
                exclusivas.
              </p>
            </div>
            <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
              <div className="flex w-fit mx-auto">
                <p className="mr-2 font-regular text-[24px] md:text-[32px]">
                  Beneficio II{' '}
                </p>
                <p className="font-medium text-[24px] md:text-[32px]">
                  {' '}
                  | Visitas
                </p>
              </div>
              <p className="text-[12px] md:text-[18px]">
                Tendrás acceso a realizar una visita a las instalaciones de la
                bodega, y conocer a cerca de la creación del producto de forma
                física.
              </p>
            </div>
            <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
              <div className="flex w-fit mx-auto">
                <p className="mr-2 font-regular text-[24px] md:text-[32px]">
                  Beneficio III{' '}
                </p>
                <p className="font-medium text-[24px] md:text-[32px]">
                  {' '}
                  | Catas
                </p>
              </div>
              <p className="text-[12px] md:text-[18px]">
                Podrás disfrutar y deleitarte con la cata de los más exclusivos
                vinos de Elefante, mientras escuchas datos de valor a cerca de
                su composición.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
