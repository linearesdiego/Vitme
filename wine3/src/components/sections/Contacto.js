import React from 'react';
import Footer from '../Footer';

const Contacto = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">
      <div className="h-[6.5%] flex w-full shadow">
        <p className="text-[24px] font-medium ml-4 my-auto">Contacto</p>
      </div>

      <div className='mx-5	my-10'>
        <p>Nos gustaría tener contacto con nuestra comunidad asique, en caso de que necesites comunicarte con nosotros, te dejamos este espacio para que nos envíes un mensaje vía email</p>
      </div>

      <form action="#" method="POST">
        <div className=" flex flex-row mx-5">
          <label className='w-[20%]'>Tu email:</label>
          <input type="text" className=" border-2 border-gray-300  border-solid rounded-2xl h-14 w-[80%] px-5" placeholder="ingresá tu email aquí" />
        </div>

        <div className=" flex flex-row mx-5 my-5">
          <label className='w-[20%]'>Asunto:</label>
          <input type="text" className=" border-2 border-gray-300  border-solid rounded-2xl h-14 w-[80%] px-5" placeholder="¿Por qué motivo te comunicas?"/>
        </div>

        <div className="mt-1 px-5">
          <textarea rows={3} className="w-full border-2 border-gray-300  border-solid rounded-2xl h-48 p-5" placeholder="¿En que podemos ayudarte? Escribí aquí tu mensaje..." />
        </div>

        <div className="bg-gray-50 px-4 py-3 ">
          <button type="submit" className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto">Enviar consulta</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contacto;
