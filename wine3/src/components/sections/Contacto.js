import React from 'react';

const Contacto = () => {
  return (
    <div className="bg-white h-screen flex flex-col font-poppins">

      <div className="h-[6.5%] flex w-full shadow">
        <p className="text-[24px] font-medium ml-4 my-auto">Contacto</p>
      </div>

      <div>
        <p>Nos gustaría tener contacto con nuestra comunidad asique, en caso de que necesites comunicarte con nosotros, te dejamos este espacio para que nos envíes un mensaje vía email</p>
      </div>

      <form action="#" method="POST">
             
        <div className=" flex flex-row ">
          <label>Tu email:</label>
          <input type="text" className=" border-gray-300 " placeholder="ingresá tu email aquí"/>
        </div>

        <div className=" flex flex-row ">
          <label>Asunto:</label>
          <input type="text" className=" border-gray-300 " placeholder="¿Por qué motivo te comunicas?"/>
        </div>

        <div className="mt-1">
          <textarea rows={3} className="w-full rounded-md border-gray-300" placeholder="¿En que podemos ayudarte? Escribí aquí tu mensaje..."/>
        </div>

        <div className="bg-gray-50 px-4 py-3 ">
          <button type="submit" className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto">Enviar consulta</button>
        </div>

      </form>

    </div>
  );
};

export default Contacto;
