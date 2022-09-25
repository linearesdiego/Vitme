import React, { useState } from 'react';
import discord from '../assets/icons/discord.png';
import twitter from '../assets/icons/twitter.png';
import telegram from '../assets/icons/telegram.png';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLote, setShowLote] = useState(false);
  const [showElefante, setShowElefante] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-screen z-40 h-[55px] bg-white flex">
      <div
        className={
          showMenu
            ? 'rounded-l-[5px] w-[221px] h-screen bg-[#333333] absolute z-50 top-0 right-0 flex flex-col justify-between py-10'
            : 'hidden'
        }
      >
        <div>
          <div className="w-full p-[20px] border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
            <p>¿Cómo funciona?</p>
          </div>
          <div className="w-full border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
            <div className="flex justify-between p-[20px]">
              <p
                className={
                  showLote && 'bg-white text-black rounded-full px-2 -ml-2'
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
              <div className="bg-[#4E4E4E] font-poppins font-light text-[16px] text-white">
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Pinot Noir</p>
                </div>
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Syrah</p>
                </div>
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Blend</p>
                </div>
              </div>
            )}
          </div>
          <div className="w-full border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
            <div className="flex justify-between p-[20px]">
              <p
                className={
                  showElefante && 'bg-white text-black rounded-full px-2 -ml-2'
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
              <div className="bg-[#4E4E4E] font-poppins font-light text-[16px] text-white">
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Historia</p>
                </div>
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Fede y Juli</p>
                </div>
                <div className="w-full pl-[20px] py-[15px]">
                  <p>Triple Impacto</p>
                </div>
              </div>
            )}
          </div>
          <div className="w-full p-[20px] border-b-[0.5px] font-poppins font-medium text-[16px] text-white">
            <p>El equipo</p>
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
              <p className="font-poppins text-white font-light text-[12px]">
                discord
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={twitter}
                alt="twitter"
                className="w-[25px] m-auto mt-5 mb-2"
              ></img>
              <p className="font-poppins text-white font-light text-[12px]">
                twitter
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={telegram}
                alt="telegram"
                className="w-[25px] m-auto mt-5 mb-2"
              ></img>
              <p className="font-poppins text-white font-light text-[12px]">
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
        className="flex flex-col justify-between h-[15px] w-[25.88px] my-auto ml-auto mr-5"
      >
        <div className="h-[3px] bg-black w-full"></div>
        <div className="ml-auto h-[3px] bg-black w-7/12"></div>
        <div className="h-[3px] bg-black w-full"></div>
      </button>
    </div>
  );
};

export default Nav;
