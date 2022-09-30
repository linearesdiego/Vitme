import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import federico from '../../assets/equipo/federico.png';
import rodrigo from '../../assets/equipo/rodrigo.png';
import kevin from '../../assets/equipo/kevin.png';
import linkedin from '../../assets/equipo/linkedin.png';
import twitter from '../../assets/equipo/twitter.png';



const Equipo = () => {
  return (
    <Swiper
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className="bg-white h-screen flex font-poppins pt-24 ">
        <Swiper
          className="mySwiper h-screen w-full"
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="h-full">
                  <div className="h-14 flex w-full shadow ">
                    <p className="text-[24px] font-medium ml-4 my-auto">El equipo</p>
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div>
                      <p className="text-[16px]">
                      Buscamos conectar a las bodegas locales con el mundo entero, a través del uso de la tecnología blockchain. Para lograr este cometido hemos reunido el siguiente equipo de profesionales
                      </p>
                    </div>
                    <div className='h-full'>

                    <div className='bg-gray-200 m-5 rounded-lg flex items-center'>
                        <div>
                          <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        </div>
                        <div>
                          <h2>Federico Marino</h2>
                          <p>Co Founder</p>
                          <div className='flex flex-row'>
                            <div className='bg-gray-400'>
                              <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className='bg-gray-400'>
                              <img src={twitter} alt="twitter" />
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 m-5 rounded-lg flex items-center'>
                        <div>
                          <img src={rodrigo} alt="rodrigo" className='rounded-xlinline-block rounded-full' />
                        </div>
                        <div>
                          <h2>Rodrigo Dománico</h2>
                          <p>Co Founder</p>
                          <div className='flex flex-row'>
                            <div className='bg-gray-400'>
                              <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className='bg-gray-400'>
                              <img src={twitter} alt="twitter" />
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className='bg-gray-200 m-5 rounded-lg flex items-center'>
                        <div>
                          <img src={kevin} alt="kevin" className='rounded-xlinline-block rounded-full' />
                        </div>
                        <div>
                          <h2>Kevin Willenberg</h2>
                          <p>Co Founder</p>
                          <div className='flex flex-row'>
                            <div className='bg-gray-400'>
                              <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className='bg-gray-400'>
                              <img src={twitter} alt="twitter" />
                            </div>
                          </div>
                        </div>
                    </div>

                    </div>

                  </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
                  <div className="h-14 flex w-full shadow ">
                    <p className="text-[24px] font-medium ml-4 my-auto">El equipo</p>
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div>
                      <p className="text-[16px]">
                      Buscamos conectar a las bodegas locales con el mundo entero, a través del uso de la tecnología blockchain. Para lograr este cometido hemos reunido el siguiente equipo de profesionales
                      </p>
                    </div>
                    <div className='h-full'>

                    <div className='flex flex-row'>
                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>

                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>

                    </div>


                    <div className='flex flex-row'>
                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>

                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>


                    </div>
                    <div className='flex flex-row'>
                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>

                      <div className='bg-gray-200 m-5 flex-col'>
                        <img src={federico} alt="federico" className='rounded-xlinline-block rounded-full' />
                        <h2>Federico Marino</h2>
                        <p>Co Founder</p>
                        <img src={linkedin} alt="linkedin" />
                      </div>

                    </div>



                    </div>

                  </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Equipo;
