import './NavCaro.css'
import discord from '../assets/icons/discord.png';
import twitter from '../assets/icons/twitter.png';
import telegram from '../assets/icons/telegram.png';
import iconoMenu from '../assets/imagenes_nuevo_header/menu.png'

function NavCaro() {
    const handleMenu = () => {
        let menu = document.querySelector('#nav');
        menu.classList.toggle('active');

        // Alternamos su atributo 'src' para el ícono del menú
        // const rutaActual = e.target.getAttribute('src');

        // if(rutaActual == 'imagenes/menu.png'){
        //     e.target.setAttribute('src','./imagenes/cruz.png');
        // }else if (rutaActual == 'imagenes/cruz.png') {
        //     e.target.setAttribute('src','./imagenes/menu.png');
        // } else if(rutaActual == '../imagenes/menu.png') {
        //     e.target.setAttribute('src','./imagenes/cruz.png');
        // } else {
        //     e.target.setAttribute('src','./imagenes/menu.png');
        // }
    }
    

  return (
    <header id="header">
      <div className="icono-menu">
        <img src={iconoMenu} id="icono-menu" onClick={handleMenu} />
        <div className="logo-header1">Vintme</div>
      </div>

      <nav className="active" id="nav">
        <div className="logo-header">Vintme</div>
        <ul>
          <li><a href="">¿Como funciona?</a></li>
          <hr />
          <li><a href="">Vinos</a></li>
          <hr />
          <li><a href="">Bodega</a></li>
          <hr />
          <li><a href="">Winepaper</a></li>
          <hr />
          <li><a href="">Roadmap</a></li>
          <hr />
          <li className="li-contacto"><a href="">Contacto</a></li>
          <hr />
        </ul>
        <div className="botones-header">
          <a href="" className="btn-vint">VINT</a>
          <a href="" className="btn-claim">Claim</a>
        </div>
        <div className="sumate">
          <div>Sumate al club</div>
          <div className="iconos-nav">
            <a href=""><img src={discord} alt="" /></a>

            <a href=""><img src={twitter} alt="" /></a>

            <a href=""><img src={telegram} alt="" /></a>
          </div>
        </div>
      </nav>

      <div></div>
    </header>
  )
}

export default NavCaro