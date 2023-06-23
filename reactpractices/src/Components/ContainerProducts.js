import React, { useState } from "react";
import ProductForm from "./ProductForm";
import Cart from "./Cart";
/**ContainerProducts
Es el padre de ambos componentes, maneja la lógica de la aplicación.
A su vez, se nos solicitó que cada vez que el usuario haga click en uno de los productos renderizados, este se elimine de la lista.
*/
const ContainerProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (productName) => {
    setProducts([...products, productName]);
  };

  const removeProduct = (productName) => {
    setProducts(products.filter((product) => product !== productName));
  };
  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <Cart products={products} removeProduct={removeProduct} />
    </div>
  );
};

export default ContainerProducts;
