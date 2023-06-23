/**Crea un componente de React llamado Calculadora que tenga dos campos
 * (inputs) de entrada numéricos y muestre la suma de los dos números.
 * Asegúrate de que los campos de entrada solo acepten números. */

import React from "react";

const Calculadora = () => {
  return (
    <div>
      <input placeholder="Ingrese un numero" type="number" />
      +
      <input placeholder="Ingrese otro numero" type="number" />
    </div>
  );
};

export default Calculadora;
