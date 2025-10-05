import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import React from 'react'

function Privacidad() {
  return (
    <div className='politica-privacidad' /* style={{ margin: "89px", padding: "2rem", color:"black"}} */>
      <h1>Política de Privacidad</h1>
      <h2>1. Responsable del Tratamiento de Datos</h2>
      <p>
        Los datos personales recopilados a través de este sitio web serán tratados por los propietarios de Chili Camper, con correo electrónico de contacto: info@chilicamper.com.
      </p>

      <h2>2. Datos personales recopilados</h2>
      <p>
        A través del formulario de contacto del sitio web se podrán recopilar los siguientes datos personales de los usuarios:
      </p>
      <p>
        Nombre,
        Apellido,
        Número de teléfono,
        Correo electrónico,
        Mensaje o consulta enviada por el usuario.
      </p>
      <p>No se recopilan otros datos personales a través de este sitio web.</p>

      <h2>3. Finalidad del tratamiento</h2>
      <p>
        Los datos personales proporcionados serán utilizados exclusivamente para:
     Gestionar y responder consultas o solicitudes de información enviadas por el usuario a través del formulario de contacto. Mantener la comunicación necesaria en relación a los servicios ofrecidos (alquiler de camper para viajar en Chile).
      </p>
      <p>
        No se utilizarán los datos para fines distintos a los indicados ni se enviarán comunicaciones comerciales sin el consentimiento del usuario.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Los datos personales serán conservados únicamente durante el tiempo necesario para gestionar la consulta o solicitud realizada por el usuario y, en su caso, para cumplir con obligaciones legales aplicables.
      </p>

      <h2>5. Comunicación y transferencia de datos a terceros</h2>
      <p>
        Los datos personales no serán compartidos ni cedidos a terceros, salvo requerimiento legal de autoridad competente.
      </p>

      <h2>6. Derechos de los titulares</h2>
      <p>
        De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, los usuarios podrán ejercer los derechos de acceso, rectificación, cancelación y oposición respecto de sus datos personales, enviando una solicitud a info@chilicamper.com.
      </p>

      <h2>7. Seguridad de los datos</h2>
      <p>
        El sitio web cuenta con las medidas técnicas y organizativas razonables para proteger los datos personales de los usuarios contra pérdida, acceso no autorizado o tratamiento indebido.
      </p>

      <h2>8. Actualización de la política</h2>
      <p>
        Esta política de privacidad podrá actualizarse en cualquier momento para adaptarse a posibles cambios legales o de funcionamiento del sitio web. Se recomienda revisarla periódicamente.
      </p>

      <p className='mb-10'>
        Si tienes alguna consulta adicional sobre la protección de tus datos personales, puedes escribir a<a style={{color: "black"}} href='mailto:info@chilicamper.com'> info@chilicamper.com</a>.
      </p>

     <NavLink to={`/home`} className="nav-link-privacidad">  <FaArrowLeft size={14}  />  VOLVER</NavLink>
    </div>
  );
}


export default Privacidad