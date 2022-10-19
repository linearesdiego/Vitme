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
      id="equipo"
      className="mySwiper2 h-screen"
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className=" h-screen flex font-poppins">
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
                <h2 className="hidden md:block text-[64px] leading-[96px] font-black	mx-10">¿Quienes somos?</h2>
                <p className="hidden md:block text-[16px] p-5	 pb-14 md:ml-10 md:mr-[45%]">
                Para lograr nuestro objetivo y cumplir la misión de conectar a las bodegas locales con el mundo entero a través del uso de la tecnología blockchain, hemos reunido este equipo de profesionales:
                </p>
                <p className=" md:hidden text-[16px] p-5	 pb-14 md:ml-10 md:mr-[45%]">
                  Buscamos conectar a las bodegas locales con el mundo entero, a
                  través del uso de la tecnología blockchain. Para lograr este
                  cometido hemos reunido el siguiente equipo de profesionales
                </p>
              </div>
              <div className="h-full ">
                <div className=" equipo ">
                  <div>
                    <img src={federico} alt="federico" className=" rounded-xlinline-block rounded-full"/>
                  </div>
                  <div className='equipo-texto'>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <div className=" equipo-iconos">
                      <div className="equipo-iconos-icon">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                      <div className="equipo-iconos-icon">
                        <img src={twitter} alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" equipo ">
                  <div>
                    <img
                      src={rodrigo}
                      alt="rodrigo"
                      className="rounded-xlinline-block rounded-full"
                    />
                  </div>
                  <div className='equipo-texto'>
                    <h2>Rodrigo <strong>Dománico</strong></h2>
                    <p>Co Founder</p>
                    <div className=" equipo-iconos">
                      <div className="equipo-iconos-icon">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                      <div className="equipo-iconos-icon">
                        <img src={twitter} alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" equipo ">
                  <div>
                    <img
                      src={rodrigo}
                      alt="rodrigo"
                      className="rounded-xlinline-block rounded-full"
                    />
                  </div>
                  <div className='equipo-texto'>
                    <h2>Rodrigo <strong>Dománico</strong></h2>
                    <p>Co Founder</p>
                    <div className=" equipo-iconos">
                      <div className="equipo-iconos-icon">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                      <div className="equipo-iconos-icon">
                        <img src={twitter} alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>

      
              <div className='hidden md:block'>

                <div className="equipo2 ">
                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>
 
                </div>
              </div>


              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full block md:hidden">
            <div className="h-14 flex w-full shadow ">
              <p className="text-[24px] font-medium ml-4 my-auto">El equipo</p>
            </div>
            <div className="flex flex-col justify-evenly">
              <div>
              <p className="text-[16px] p-5	 pb-14">
                  Buscamos conectar a las bodegas locales con el mundo entero, a
                  través del uso de la tecnología blockchain. Para lograr este
                  cometido hemos reunido el siguiente equipo de profesionales
                </p>
                
              </div>
              <div className="h-full">
              <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>
 
                </div>

                <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>
 
                </div>

                <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={federico} alt="federico" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Federico <strong>Marino</strong></h2>
                    <p>Co Founder</p>
                    <img src={linkedin} alt="linkedin" className='equipo2-icon'/>
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
