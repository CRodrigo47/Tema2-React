import { useState } from "react";
import "./actualizarArrays.css";

export default function ActArrays() {
  const [listaAlumnos, setListaAlumnos] = useState([
    {
      id: "id1",
      nombre: "Carlos",
      numFaltas: 0,
    },
  ]);

  const [nombre, setNombre] = useState("");

  const handleNombreChange = (e) => setNombre(e.target.value);

  const handleAgregarClick = () => {
    setListaAlumnos([
      ...listaAlumnos,
      { id: crypto.randomUUID(), nombre: nombre, numFaltas: 0 },
    ]);
  };

  const handleEliminarClick = (alumno) => {
    setListaAlumnos(listaAlumnos.filter((a) => a.id !== alumno.id));
  };

  const handleAgregarFaltaClick = (id) => {
    setListaAlumnos(
      listaAlumnos.map((a) => {
        if (a.id === id) {
          return {
            ...a,
            numFaltas: a.numFaltas + 1,
          };
        }
        return a;
      })
    );
  };

  return (
    <>
      <h1>Alumnos Progresa</h1>
      <input onChange={handleNombreChange} />
      <button onClick={handleAgregarClick}>Añadir</button>

      <ul>
        {listaAlumnos.map((a) => {
          return (
            <li key={a.id}>
              <div>
                {a.nombre}{" "}
                {/*Si necesitamos mandar un parametro a una funcion tenemos que ejecutar la funcion dentro de una funcion, no nos permite ejecutarlo directamente
              solucion facil -> fat arrow function que solo ejecute la funcion */}
                <button onClick={() => handleEliminarClick(a)}>Eliminar</button>
              </div>
              <div>
                Faltas: {a.numFaltas}
                <button onClick={() => handleAgregarFaltaClick(a.id)}>
                  Agregar falta
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
