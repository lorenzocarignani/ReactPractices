import React, { useState } from "react";
/*ProductForm:
Es un formulario donde el usuario ingresa el nombre de un producto y posee un botón “Agregar” para agregarlo a la lista.
Retorna:
Un label indicando “Ingrese el nombre del producto”
Un input de texto que permita ingresar el nombre del producto
Un botón que permite agregarlo a la lista.
*/
const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productName);
    setProductName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese el nombre del producto
        <input type="text" value={productName} onChange={handleInputChange} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductForm;
