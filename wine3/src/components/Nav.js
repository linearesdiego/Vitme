import React, { useState } from 'react';
import discord from '../assets/icons/discord.png';
import twitter from '../assets/icons/twitter.png';
import telegram from '../assets/icons/telegram.png';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLote, setShowLote] = useState(false);
  const [showElefante, setShowElefante] = useState(false);
  return (
    <div className="fixed w-full nav">
      <div className="h-[65px] hidden md:flex shadow-md z-50 w-full ml-auto bg-white">
        <div className="font-poppins text-[20px] my-auto ml-auto mr-10 flex w-full justify-evenly items-center">
          <a href="#home"><h1 className="font-poppins font-black text-3xl">Vintme</h1></a>
          <a href="#comofunciona" className="border-r-2 border-r-#979696; px-5">
            <p className="hover:border-b-2 hover:border-black border-b-2 border-white transition duration-150 ">
              ¿Cómo funciona?
            </p>
          </a>

          <a href="#cosecha" className="border-r-2 border-r-#979696; px-5">
            <p className="hover:border-b-2 hover:border-black border-b-2 border-white transition duration-150">
              Cosecha
            </p>
          </a>

          <a href="#beneficios" className="border-r-2 border-r-#979696; px-5">
            <p className="hover:border-b-2 hover:border-black border-b-2 border-white transition duration-150">
              Beneficios
            </p>
          </a>

          <a href="#elefante" className="border-r-2 border-r-#979696; px-5">
            <p className="hover:border-b-2 hover:border-black border-b-2 border-white transition duration-150">
              Elefante Wine
            </p>
          </a>

          <a
            href="#equipo"
            className="border-r-2 border-r-#979696; px-5"
          >
            <p className="hover:border-b-2 hover:border-black border-b-2 border-white transition duration-150">
              El equipo
            </p>
          </a>
          <div className="flex gap-3">
            <button className="btnVint">VINT</button>
            <button className="btnClaim">Claim</button>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute top-0 left-0 w-screen z-40 h-[55px] flex">
        {showMenu && (
          <button
            className="w-screen h-screen "
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          ></button>
        )}
        <div
          className={
            showMenu
              ? 'rounded-l-[5px] w-[221px] h-screen bg-[#333333] absolute z-50 top-0 right-0 flex flex-col justify-between py-10'
              : 'hidden'
          }
        >
          <div>
            <div className="w-full p-[20px] border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
              <a href="#comofunciona">¿Cómo funciona?</a>
            </div>
            <div className="w-full border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
              <div className="flex justify-between p-[20px]">
                <p
                  className={
                    showLote && 'bg-white text-darkGrey rounded-full px-2 -ml-2'
                  }
                >
                  Lote Exclusivo
                </p>
                <button
                  onClick={() => {
                    setShowLote(!showLote);
                  }}
                >
                  {showLote ? (
                    <IoIosArrowDropup className="text-[21px]" />
                  ) : (
                    <IoIosArrowDropdown className="text-[21px]" />
                  )}
                </button>
              </div>
              {showLote && (
                <div className="bg-[#4E4E4E] font-poppins font-regular text-[16px] text-white">
                  <div className="w-full pl-[20px] py-[15px]">
                    <a href="#pinotnoir">Pinot Noir</a>
                  </div>
                  <div className="w-full pl-[20px] py-[15px]">
                    <a href="#syrah">Syrah</a>
                  </div>
                  <div className="w-full pl-[20px] py-[15px]">
                    <a href="#blend">Blend</a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
              <div className="flex justify-between p-[20px]">
                <p
                  className={
                    showElefante &&
                    'bg-white text-black rounded-full px-2 -ml-2'
                  }
                >
                  Elefante Wine
                </p>
                <button
                  onClick={() => {
                    setShowElefante(!showElefante);
                  }}
                >
                  {showElefante ? (
                    <IoIosArrowDropup className="text-[21px]" />
                  ) : (
                    <IoIosArrowDropdown className="text-[21px]" />
                  )}
                </button>
              </div>
              {showElefante && (
                <div className="bg-[#4E4E4E] font-poppins font-regular text-[16px] text-white">
                  <div className="w-full pl-[20px] py-[15px]">
                    <Link to={'/elefante'}>Historia</Link>
                  </div>
                  <div className="w-full pl-[20px] py-[15px]">
                    <Link to={'/elefante'}>Fede y Juli</Link>
                  </div>
                  <div className="w-full pl-[20px] py-[15px]">
                    <Link to={'/elefante'}>Triple Impacto</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full p-[20px] border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
              <a href="#equipo">El equipo</a>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <p className="mx-auto font-poppins font-medium text-[16px] text-white">
              Únete a nosotros
            </p>
            <div className="w-full flex justify-around">
              <div className="flex flex-col">
                <img
                  src={discord}
                  alt="discord"
                  className="w-[25px] m-auto mt-5 mb-2"
                ></img>
                <p className="font-poppins text-white font-regular text-[12px]">
                  discord
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[25px] m-auto mt-5 mb-2"
                ></img>
                <p className="font-poppins text-white font-regular text-[12px]">
                  twitter
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[25px] m-auto mt-5 mb-2"
                ></img>
                <p className="font-poppins text-white font-regular text-[12px]">
                  telegram
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="flex flex-col justify-between h-[15px] w-[25.88px] my-auto ml-auto mr-5 bg-white"
        >
          <div className="h-[3px] bg-black w-full"></div>
          <div className="ml-auto h-[3px] bg-black w-7/12"></div>
          <div className="h-[3px] bg-black w-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
