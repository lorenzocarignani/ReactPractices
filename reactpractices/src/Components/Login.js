import React, { useState, useRef } from "react";

const Login = () => {
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [admitido, setAdmitido] = useState(false);
  const apellidoInputRef = useRef();
  const edadInputRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "apellido") {
      setApellido(value);
    } else if (name === "edad") {
      setEdad(value);
    }
  };

  const handleSolicitarEntrada = () => {
    if (apellido === "") {
      apellidoInputRef.current.focus();
      return;
    }

    if (edad === "") {
      edadInputRef.current.focus();
      return;
    }

    if (edad < 18 || apellido === "Golzman") {
      setAdmitido(false);
    } else {
      setAdmitido(true);
    }
  };

  return (
    <div>
      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={apellido}
          onChange={handleInputChange}
          ref={apellidoInputRef}
        />
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={edad}
          onChange={handleInputChange}
          ref={edadInputRef}
        />
      </label>
      <br />
      <button onClick={handleSolicitarEntrada}>Solicitar entrada</button>
      {admitido && <ValidationText message="¡Admitido al local bailable!" />}
      {!admitido && admitido !== null && (
        <ValidationText message="No admitido al local bailable." />
      )}
    </div>
  );
};

const ValidationText = ({ message }) => {
  return <p>{message}</p>;
};

export default Login;
