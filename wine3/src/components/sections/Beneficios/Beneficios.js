import React from 'react';
import './Beneficios.css';

const Beneficios = () => {
  return (
    <div id='beneficios'>
    
    <h2>¡Sé parte de la comunidad Vinter!</h2>

    <h4>Queremos que te sientas parte de de una veradero club de amigos, fanáticos del buen vino, <br/>
        es por eso que trabajaremos duro en traer beneficios para nuestra comunidad.
    </h4>

    <div className="container-pablo">

        <div className="box">
            <div className="box1">
                <h5>Accede a futuras whitelists</h5>
                <img src={require('../../../assets/Group 57.png')} alt="lista" width={100} />
            </div>
            <div>
                <h6 className="disp">Disponible ahora</h6>
            </div>
        </div>

        <div className="box">
            <div className="box1">
                <h5>Degustaciones en catas de vinos</h5>
                <img src={require('../../../assets/cheers.png')} alt="copa" width={130} />
            </div>

            <div>
                <h6 className="disp">PRÓXIMAMENTE</h6>
            </div>
        </div>

        <div className="box">
            <div className="box1">
                <h5>Visita las bodegas del club</h5>
                <img src={require('../../../assets/camera.png')} alt="camera" width={130} />
            </div>
            <div>
                <h6 className="disp">PRÓXIMAMENTE</h6>
            </div>
        </div>

        <div className="box">
            <div className="box1">
                <h5>Recibe el merch de la comunidad</h5>
                <img src={require('../../../assets/merch.png')} alt="lista" width={200} />
            </div>
            <div className="disp"></div>
            <h6>PRÓXIMAMENTE</h6>
        </div>
    </div>

    


    <div className="futer">
        <div className="discord">
            <h2>Súmate a nuestro Discord!</h2>
        </div>
        <div className="logo">
            <a target="blank" rel="noreferrer" className="" href="https://discord.com/invite/uFjGbyg3"><img src={require('../../../assets/Frame60.png')} alt="lista" width={100}/></a>
        </div>
    </div>

  </div>
  );
};

export default Beneficios;
