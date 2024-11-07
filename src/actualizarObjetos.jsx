import { useState } from "react";
import "./actualizarObjetos.css";

export default function ActObjetos() {
  const [persona, setPersona] = useState({
    nombre: "",
    apellidos: "",
    datosContacto: {
      email: "",
      telefono: 0,
    },
  });

  const handleNombreChange = (e) => {
    setPersona({
      ...persona,
      nombre: e.target.value,
    });
  };

  const handleApellidosChange = (e) => {
    setPersona({
      ...persona,
      apellidos: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setPersona({
      ...persona,
      datosContacto: {
        ...persona.datosContacto,
        email: e.target.value,
      },
    });
  };
  const handleTelefonoChange = (e) => {
    setPersona({
      ...persona,
      datosContacto: {
        ...persona.datosContacto,
        telefono: e.target.value,
      },
    });
  };

  return (
    <>
      <form>
        <label>
          Nombre: <input onChange={handleNombreChange} value={persona.nombre} />
        </label>
        <label>
          Apellidos:
          <input onChange={handleApellidosChange} value={persona.apellidos} />
        </label>
        <label>
          Correo electronico:
          <input
            onChange={handleEmailChange}
            value={persona.datosContacto.email}
          />
        </label>
        <label>
          Telefono:
          <input
            onChange={handleTelefonoChange}
            value={persona.datosContacto.telefono}
          />
        </label>
      </form>

      <p>
        Datos personales: {persona.nombre} {persona.apellidos}{" "}
        {persona.datosContacto.email} {persona.datosContacto.telefono}
      </p>
    </>
  );
}
