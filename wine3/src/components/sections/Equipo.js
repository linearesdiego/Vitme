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
import avatar1 from '../../assets/equipo/avatar1.jpg';
import avatar2 from '../../assets/equipo/avatar2.jpg';
import gerardobarboni from '../../assets/equipo/gerardobarboni.jpeg';
import ezequielmorales from '../../assets/equipo/ezequielmorales.jpeg';

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
            <div id="equipo" className="h-[6.5%] flex w-full shadow bg-white z-50">
              <p className="md:text-[32px] md:font-black ml-4 my-auto font-medium text-[24px] ">El equipo</p>
            </div>
            <div className="flex flex-col justify-evenly">
              <div>
                <h2 className="hidden md:block text-[64px] leading-[96px] font-black	mx-10">¿Quienes somos?</h2>
                <p className="hidden md:block text-[16px] p-5	 pb-14 md:ml-10 md:mr-[45%]">Para lograr nuestro objetivo y cumplir la misión de conectar a las bodegas locales con el mundo entero a través del uso de la tecnología blockchain, hemos reunido este equipo de profesionales:
                </p>
                <p className=" md:hidden text-[16px] p-5	 pb-14 md:ml-10 md:mr-[45%]">Buscamos conectar a las bodegas locales con el mundo entero, a través del uso de la tecnología blockchain. Para lograr este cometido hemos reunido el siguiente equipo de profesionales</p>
              </div>
              <div className="h-full">
                <div className="md:w-[90%] md:justify-between md:flex md:mx-auto">
                  <div className=" equipo ">
                    <div>
                      <img src={federico} alt="federico" className=" rounded-xlinline-block rounded-full"/>
                    </div>
                    <div className="equipo-texto">
                      <h2>Federico <strong>Marino</strong></h2>
                      <p>Co Founder</p>
                      <div className=" equipo-iconos">
                        <a href="https://www.linkedin.com/in/federico-victorio-marino-861918199/" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={linkedin} alt="linkedin" /></div></a>
                        <a href="https://twitter.com/fedevictorio?s=21&t=kUQR3iniVSex37eFS7na6A" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={twitter} alt="twitter" /></div></a>
                      </div>
                    </div>
                  </div>

                  <div className=" equipo ">
                    <div>
                      <img src={kevin} alt="kevin" className="rounded-xlinline-block rounded-full"/>
                    </div>
                    <div className="equipo-texto">
                      <h2>Kevin <strong>Willenberg</strong></h2>
                      <p>Co Founder</p>
                      <div className=" equipo-iconos">
                        <a href="https://www.linkedin.com/in/kevin-willenberg-auger-626289100/" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={linkedin} alt="linkedin" /></div></a>
                        <a href="https://twitter.com/0xWilkynson" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={twitter} alt="twitter" /></div></a>
                      </div>
                    </div>
                  </div>

                  <div className=" equipo ">
                    <div>
                      <img src={rodrigo} alt="rodrigo" className="rounded-xlinline-block rounded-full"/>
                    </div>
                    <div className="equipo-texto">
                      <h2>Rodrigo <strong>Dománico</strong></h2>
                      <p>Co Founder</p>
                      <div className=" equipo-iconos">
                        <a href="https://www.linkedin.com/in/rodrigo-perez-dom%C3%A1nico-477994134" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={linkedin} alt="linkedin" /></div></a>
                        <a href="https://twitter.com/El_perez_33?t=BiSVnPen7wA8eIsSMJVaRw&s=08" target="_blank"  without rel="noreferrer"><div className="equipo-iconos-icon"><img src={twitter} alt="twitter" /></div></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="equipo2 md:flex md:mx-auto ">
                    <div className="equipo2-tarjeta">
                      <img src={avatar1} alt="avatar1" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Enuman</h2>
                      <h2><strong>Suárez</strong></h2>
                      <p>UX UI Designer</p>
                      <a href="https://www.linkedin.com/in/enumansuarez/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                    </div>

                    <div className="equipo2-tarjeta">
                      <img src={avatar2} alt="avatar2" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Belén</h2>
                      <h2><strong>Funes</strong></h2>
                      <p>UX UI Designer</p>
                      <a href="https://www.linkedin.com/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                    </div>

                    <div className="equipo2-tarjeta">
                      <img src={gerardobarboni} alt="gerardo barboni" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Gerardo</h2>
                      <h2><strong>Barboni</strong></h2>
                      <p>Front-End Developer</p>
                      <a href="https://www.linkedin.com/in/gerardobarboni/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                    </div>

                    <div className="equipo2-tarjeta">
                      <img src={avatar1} alt="avatar1" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Ignacio</h2>
                      <h2><strong>Rosa</strong></h2>
                      <p>Front-End Developer</p>
                      <a href="https://www.linkedin.com/in/ignacio-lucas-r-003853250/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                    </div>

                    <div className="equipo2-tarjeta">
                      <img src={ezequielmorales} alt="ezequiel morales" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Ezequiel</h2>
                      <h2><strong>Morales</strong></h2>
                      <p>Product Manager</p>
                      <a href="https://www.linkedin.com/in/ezequiel-morales" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                    </div>

                    <div className="equipo2-tarjeta">
                      <img src={avatar2} alt="avatar2" className="rounded-xlinline-block rounded-full equipo2-img"/>
                      <h2>Jimena</h2>
                      <h2><strong>García</strong></h2>
                      <p>Community Manager</p>
                      <a href="https://www.linkedin.com/in/garciajimena" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
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
                <p className="text-[16px] p-5	 pb-14">Buscamos conectar a las bodegas locales con el mundo entero, a través del uso de la tecnología blockchain. Para lograr este cometido hemos reunido el siguiente equipo de profesionales</p>
              </div>
              <div className="h-full">
                <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={avatar1} alt="avatar1" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Enuman</h2>
                    <h2><strong>Suárez</strong></h2>
                    <p>UX UI Designer</p>
                    <a href="https://www.linkedin.com/in/enumansuarez/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={avatar2} alt="avatar2" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Belén</h2>
                    <h2><strong>Funes</strong></h2>
                    <p>UX UI Designer</p>
                    <a href="https://www.linkedin.com/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                  </div>
                </div>

                <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={gerardobarboni} alt="gerardo barboni" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Gerardo</h2>
                    <h2><strong>Barboni</strong></h2>
                    <p>Front-End Developer</p>
                    <a href="https://www.linkedin.com/in/gerardobarboni/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={avatar1} alt="avatar1" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Ignacio</h2>
                    <h2><strong>Rosa</strong></h2>
                    <p>Front-End Developer</p>
                    <a href="https://www.linkedin.com/in/ignacio-lucas-r-003853250/" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                  </div>
                </div>

                <div className="equipo2">
                  <div className="equipo2-tarjeta">
                    <img src={ezequielmorales} alt="ezequiel morales" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Ezequiel</h2>
                    <h2><strong>Morales</strong></h2>
                    <p>Product Manager</p>
                    <a href="https://www.linkedin.com/in/ezequiel-morales" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
                  </div>

                  <div className="equipo2-tarjeta">
                    <img src={avatar2} alt="avatar2" className="rounded-xlinline-block rounded-full equipo2-img"/>
                    <h2>Jimena</h2>
                    <h2><strong>García</strong></h2>
                    <p>Community Manager</p>
                    <a href="https://www.linkedin.com/in/garciajimena" target="_blank"  without rel="noreferrer"><div className="equipo2-icon"><img src={linkedin} alt="linkedin" /></div></a>
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