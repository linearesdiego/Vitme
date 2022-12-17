import React, { useState } from 'react';
import './Contacto.css';
import Footer from '../../Footer';
import axios from 'axios';
import swal from 'sweetalert';

const Contacto = () => {
  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
      //id: new Date().getTime(),
      email: "",
      asunto: "",
      mensaje: "",
  });

  const handleChange = (e) => {
      //console.log(e.target.value)
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })

      // setErrors(validate({
      //     ...input,
      //     [e.target.name]: e.target.value
      // }));
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(input);
      // setErrors(validate({
      //     ...input,
      //     [e.target.name]: e.target.value
      // }));

      axios({
          method: 'POST',
          url: 'http://192.168.68.139:81/api/contacto', //cambiar a donde hay que pegarle
          data: input
      }).then(res => res.data)
          .then(datos => { console.log(datos) })

          .catch(err => alert(err));

      // setInput({
      //     nombre: "",
      //     apellido: "",
      //     email: "",
      //     telefono: "",
      //     mensaje: "",
      // });
      e.target.reset(); //---> esto me limpia todos los campos del formulario

      swal("Perfecto!", "Tus datos fueron cargados correctamente!", "success");
  }
  return (


    <>
      <section className="formulario">
        <div className="izquierda">
          <h2>¿En qué podemos ayudarte?</h2>
          <p>
            Nos gustaría tener contacto con nuestra comunidad asi que, en caso de
            que necesites comunicarte con nosotros, te dejamos este espacio para
            que nos envíes un mensaje vía email
          </p>
        </div>
        <div className="derecha">
          <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="emaildiv">
              <label for="email">Email  </label>
              <input
                className="input-email"
                type="email"
                id="email"
                name="email"
                placeholder="Ingresá tu email aquí"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="asuntodiv">
              <label for="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="¿Por qué motivo te comunicás?"
                className="asunto"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="mensajediv">
              <input
                className="mensaje"
                type="text"
                name="mensaje"
                id='msg'
                placeholder="¿En qué podemos ayudarte?"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>

            <div className="submit-form">
              <input type="submit" value="Enviar" id="submit"/>
            </div>
          </form>
        </div>
      </section>

      <Footer />

    </>

  );
};

export default Contacto;
