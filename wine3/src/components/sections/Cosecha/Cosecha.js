import React from 'react'
import './Cosecha.css'


const Cosecha = () => {
  return (
    <div>

<section class="Cosecha">
    <h2>Conocé y disfrutá</h2>
    <h3>Conocé y accedé a los productos más exclusivos de Elefante Wine</h3>

    <button>+ info</button>

    <div class="container">
      <div class="Pinot Noir">
        <img src={require('../../../assets/Pinot Noir.jpeg')} alt="Pinot Noir"/>
      </div>
      <div class="Syrah">
        <img src={require('../../../assets/Syrah.jpeg')} alt="Syrah"/>
      </div>
      <div class="Blend">
        <img src={require('../../../assets/Blend.jpeg')} alt="Blend"/>
      </div>
    </div>
  </section>

  <button>Ver más</button>

    </div>
  )
} 
export default Cosecha;
