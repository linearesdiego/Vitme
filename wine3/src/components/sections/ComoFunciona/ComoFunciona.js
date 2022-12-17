import React from "react";
import "./comofunciona.css";

const ComoFunciona = () => {
  return (
    <div id="comofunciona">
      <section className="seccion2">
        <h2 tabindex="0">¿Cómo funciona Vintme?</h2>

        <div className="card">
          <div className="izquierda">
            <div className="numero" tabindex="0">
              1
            </div>
            <div>
              <img src={require("../../../assets/card1.png")} alt="NFT-image" />
            </div>
          </div>
          <div className="derecha">
            <h3 tabindex="0">Vint!</h3>
            <p tabindex="0">
              Sean todos bienvenidos a nuestro club de vinos. Los invitamos a
              obtener su VINTERPASS y el acceso a una de las 100 botellas
              exclusivas que tendrá esta colección. Sumate al club comprando un
              NFT, se parte de esta comunidad y sus beneficios y disfrutá el
              delicioso sabor de nuestros vinos!
            </p>
          </div>
        </div>

        <div className="card">
          <div className="izquierda">
            <div className="numero" tabindex="0">
              2
            </div>
            <div>
              <img src={require("../../../assets/card2.png")} />
            </div>
          </div>
          <div className="derecha">
            <h3 tabindex="0">Hold, Trade & Upgrade</h3>
            <p tabindex="0">
              Puedes guardar o intercambiar tu VINTERPASS en el marcado
              secundario. Mientras más pasa el tiempo, tu vino aumentará su
              valor; nosotros lo guardaremos en las mejores condiciones. Además,
              la bodega dictará la fecha de Aging potential de tu vino, lo que
              hará que tu VINTERPASS tenga un upgrade indicando su punto máximo
              de sabor y por supuesto también un aumento de su valor.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="izquierda">
            <div className="numero" tabindex="0">
              3
            </div>
            <div>
              <img src={require("../../../assets/card3.png")} alt="" />
            </div>
          </div>
          <div className="derecha">
            <h3 tabindex="0">Claim & Drink</h3>
            <p tabindex="0">
              Finalmente, cuando decidas disfrutar de un momento único con un
              vino de primera calidad, podrás canjear tu VINTERPASS por la
              botella de vino que hayas elegido. Al hacerlo te la enviaremos
              directamente al lugar que quieras. (*)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComoFunciona;