import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
  //palabra reservada const [nombreVariable, metodo para actualizar el valor] = metodo useState(valor inicial de la variable)
  const [index, setIndex] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function handleClick() {
    if (index+1< sculptureList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMostrar() {
    setMostrar(!mostrar);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Siguiente</button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />
      <button onClick={handleMostrar}>{mostrar ? "Ocultar" : "Mostrar"}</button>
      {mostrar && <p>{sculpture.description}</p>}
    </>
  );
}
