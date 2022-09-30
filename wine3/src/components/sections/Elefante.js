import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
// import fondo from '../../assets/elefante/background';
import historia from '../../assets/elefante/historia.png';
import sobrefeliyjuli from '../../assets/elefante/sobrefeliyjuli.png';
import tripleimpacto from '../../assets/elefante/tripleimpacto.png';



const Elefante = () => {
  return (


 
    <Swiper
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >

      <SwiperSlide className="h-full">
              <div className="h-14 flex w-full shadow ">
                <p className="text-[24px] font-medium ml-4 my-auto">Elefante Wine</p>
              </div>
              <div className="flex flex-col justify-evenly h-full bg-orange-600">
                <div>
                  <p className="text-[16px]">
                  Nace de la unión de una pareja de enamorados y su pasión por los vinos, Felipe y Juliana, son autores de Elefante Wine, una bodega en la que la familia produce sus vinos de forma cien por ciento casera, en el garaje de su hogar.
                  Elefante pone a nuestro alcance productos que han logrado gran prestigio y renombre por la calidad del producto.
                  </p>
                </div>
                <div>
                  <a href="#" className="rounded-[14px] font-semibold text-[20px] py-[10px] px-[60px] bg-black text-white mr-auto" >
                    Conocer más
                  </a>
                </div>
              </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
              <div className="h-14 flex w-full shadow ">
                <p className="text-[24px] font-medium ml-4 my-auto">Historia del nombre</p>
              </div>
              <div className="flex flex-col justify-evenly h-full bg-orange-600">
                <div>
                  <p className="text-[16px]">
                  Los Elefantes tienen una prodigiosa memoria asociada al olfato. Los humanos tenemos una memoria olfativa asociada a nuestras emociones. Un vino que no pretende ser memorable, sino que intenta tocar una fibra, algo que nos haga recordar.
                  </p>
                </div>
                <div>
                <img src={historia} alt="historia" className='rounded-xl' ></img>
                </div>
              </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
              <div className="h-14 flex w-full shadow ">
                <p className="text-[24px] font-medium ml-4 my-auto">Sobre Feli y Juli</p>
              </div>
              <div className="flex flex-col justify-evenly h-full bg-orange-600">
                <div>
                  <p className="text-[16px]">
                  Su historia comenzó en la Facultad de Ciencias Agrarias de UNCuyo, donde además del amor, nació el proyecto enológico. El matrimonio comparte la misma pasión por la vitivinicultura, por lo que a la hora emprender se complementaron y formaron un buen equipo de trabajo.
                  </p>
                </div>
                <div>
                <img src={sobrefeliyjuli} alt="sobrefeliyjuli" className='rounded-xl' ></img>
                </div>
              </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
              <div className="h-14 flex w-full shadow ">
                <p className="text-[24px] font-medium ml-4 my-auto">Triple Impacto</p>
              </div>
              <div className="flex flex-col justify-evenly h-full bg-orange-600">
                <div>
                  <p className="text-[16px]">
                    Está ampliamente comprometido con el 
                  </p>
                </div>
                <div>
                  <p className="text-[16px]">
                    Lörem ipsum pokul sena av krovöse sas. Plasamma ubel i kvasin. Von täns.
                  </p>
                </div>
                <div>
                <img src={tripleimpacto} alt="tripleimpacto" className='rounded-xl' ></img>
                </div>
              </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Elefante;
