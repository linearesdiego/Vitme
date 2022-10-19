import React from 'react';
import Footer from '../Footer';

const Contacto = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow">
        <p className="text-[24px] font-medium ml-4 my-auto">Contacto</p>
      </div>

      <div className='md:flex'>

      <div className='mx-5	my-10 md:w-6/12 ' >
              <h2 className='hidden md:block text-[64px] leading-[96px] font-black	m-2'>¿En qué podemos ayudarte?</h2>
              <p className='md:m-2'>Nos gustaría tener contacto con nuestra comunidad asique, en caso de que necesites comunicarte con nosotros, te dejamos este espacio para que nos envíes un mensaje vía email</p>
            </div>

            <form action="#" method="" className=' md:w-6/12 md:bg-black md:rounded-[30px]	 md:m-10'>
              <div className='md:py-[66px] md:px-[56px] '>
                <div className=" flex flex-row mx-5">
                  <label className='w-[20%] my-auto mr-2 md:text-white'>Tu email:</label>
                  <input type="text" className=" border-2 border-gray-300  border-solid rounded-2xl h-14 w-[80%] px-5 md:bg-black md:text-white" placeholder="ingresá tu email aquí" />
                </div>

                <div className=" flex flex-row mx-5 my-5">
                  <label className='w-[20%] my-auto mr-2 md:text-white'>Asunto:</label>
                  <input type="text" className=" border-2 border-gray-300  border-solid rounded-2xl h-14 w-[80%] px-5 md:bg-black md:text-white" placeholder="¿Por qué motivo te comunicas?"/>
                </div>

                <div className="mt-1 px-5">
                  <textarea rows={3} className="w-full border-2 border-gray-300  border-solid rounded-2xl h-48 p-5 md:bg-black md:text-white" placeholder="¿En que podemos ayudarte? Escribí aquí tu mensaje..." />
                </div>

                <div className="bg-gray-50 px-5 py-3 flex md:bg-black	">
                  <button type="submit" className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white ml-auto md:bg-white md:text-black">Enviar consulta</button>
                </div>
              </div>
            </form>
        
      </div>
    <Footer />
    </div>
  );
};

export default Contacto;
