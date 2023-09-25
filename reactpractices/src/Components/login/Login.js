import React, { useState } from "react";

const Login = ({ setLogged }) => {
  const [user, setUser] = useState("");
  const [hideLogin, setHideLogin] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUser(inputValue);
  };

  const handleSubmit = () => {
    const loginEmpty = user.trim() === "";
    const banO = user.includes("O") || user.includes("o");

    if (loginEmpty || banO) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("Usuario registrado correctamente");
      setLogged(true);
    }
  };

  return (
    <div>
      <button onClick={() => setHideLogin(!hideLogin)}>
        {hideLogin ? "<-" : "Iniciar sesión"}
      </button>
      {hideLogin && (
        <input
          type="text"
          placeholder="Usuario"
          onChange={handleInputChange}
          value={user}
        />
      )}
      <button onClick={handleSubmit}>Registrarse</button>
    </div>
  );
};

export default Login;
