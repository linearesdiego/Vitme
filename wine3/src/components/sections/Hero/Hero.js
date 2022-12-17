import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home">
      <section className="hero">
        <div className="hero-sup">
          <div className="titulos-hero">
            <h1 tabIndex={0}>Vintme</h1>
            <h2 tabIndex={0}>El vino, el sol y el futuro</h2>
          </div>

          <div className="botones-hero">
            <a href="" className="btn-1">
              Vint (Próximamente)
            </a>
            <a href="" className="btn-2">
              Reservá tu lugar
            </a>
          </div>

          <div className="sumate-al-club">
            <div>
              <h3 tabIndex={0}>Sumate al club!</h3>
            </div>
            <div className="redes">
              <a href="">
                <img src={require("../../../assets/dsc.png")} alt="Discord" />
              </a>
              <a href="">
                <img src={require("../../../assets/tw.png")} alt="Twitter" />
              </a>
              <a href="">
                <img src={require("../../../assets/ig.png")} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-infe">
          <img src={require("../../../assets/Group 42.png")} alt="vinos" />
        </div>
      </section>
    </div>
  );
};
export default Hero;