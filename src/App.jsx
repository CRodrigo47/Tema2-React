/* eslint-disable react/prop-types */
import ActArrays from "./actualizarArrays";
import ActObjetos from "./actualizarObjetos";
import "./App.css";
import Gallery from "./estado";
import EstadoInstantanea from "./estadoComoInstantanea";

function App() {
  return (
    <>
      {/* <AlertButton mensaje={"Reproduciendo pelicula"}>
        Reproducir pelicula
      </AlertButton>
      <AlertButton mensaje={"Subiendo imagen"}>Subir imagen</AlertButton>
      <Alert2Btn nombre={"Deadpool"}></Alert2Btn>
      <ComprobarPropagacion></ComprobarPropagacion>
      <Formulario></Formulario>
      <Gallery></Gallery>
      <Gallery></Gallery>
      <EstadoInstantanea></EstadoInstantanea>
      <ActObjetos></ActObjetos>
      */}

      <ActArrays></ActArrays>
      
    </>
  );
}

function AlertButton({ mensaje, children }) {
  return <button onClick={() => alert(mensaje)}>{children}</button>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Alert2Btn({ nombre }) {
  function handleClick() {
    alert("Reproduciendo la película" + nombre);
  }

  return <Button onClick={handleClick}>Reproduciendo {nombre}</Button>;
}

function ComprobarPropagacion() {
  return (
    <div
      onClick={() => {
        alert("Has pulsado el contenedor");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation;
          alert("Has pulsado el boton 1");
        }}
      >
        Boton 1
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation;
          alert("Has pulsado el boton 2");
        }}
      >
        Boton 2
      </button>
    </div>
  );
}

function Formulario() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviado");
      }}
    >
      <input></input>
      <button>Guardar</button>
    </form>
  );
}

export default App;
