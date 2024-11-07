import { useState } from "react";

export default function EstadoInstantanea() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMesage] = useState("Hola");

  if (isSent) {
    return (
      <>
        <h1>Mensaje Enviado</h1>
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          alert(message);
        }}
      >
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMesage(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>

      <Contador></Contador>
    </>
  );
}

function Contador() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
