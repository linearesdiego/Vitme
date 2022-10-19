import React from 'react';
import cup from '../../assets/cup.png';
import cupFliped from '../../assets/cupFliped.png';

const Beneficios = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow md:hidden">
        <p className="text-[24px] font-medium ml-4 my-auto">
          Beneficios exclusivos
        </p>
      </div>
      {/*
      <img src={cup} alt="cup" className="-ml-10 hidden md:flex absolute"></img>*/}
      <div className="h-[93.5%] flex flex-col md:flex-row-reverse justify-between m-auto md:mt-[6%] md:w-11/12">
        <div className="w-6/12">
          <img src={cup} alt="cup" className="h-[200px] block md:hidden"></img>
          <img
            src={cupFliped}
            alt="cupFliped"
            className="h-[200px] md:h-[755px] hidden md:block ml-auto -mr-36 -mt-24"
          ></img>
        </div>
        <div className="flex flex-col max-w-[670px] text-center ml-auto">
          <p className="text-12 font-regular text-center m-auto md:font-black md:text-[64px]">
            Viví la experiencia
          </p>

          <div className="flex flex-col h-full justify-evenly">
            <div className="bg-lightGrey rounded-[19px] text-darkGrey p-5 mx-5 shadow">
              <div className="flex w-fit mx-auto">
                <p className="mr-2 font-regular text-[24px] md:text-[32px]">
                  Beneficio I{' '}
                </p>
                <p className="font-medium text-[24px] md:text-[32px]">
                  | White List
                </p>
              </div>
              <p className="text-[12px] md:text-[20px]">
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
              <p className="text-[12px] md:text-[20px]">
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
              <p className="text-[12px] md:text-[20px]">
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
