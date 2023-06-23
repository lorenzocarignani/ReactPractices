import React from "react";
/*Cart:
Lista de los productos agregados al carrito.
Retorna:
La lista de productos, los mismos encerrados en un <h3> por cada producto, de manera que resulte un maquetado similar a:
<h3>Mesa</h3>
<h3>Silla</h3>
<h3>Diván</h3> 
*/
const Cart = ({ products, removeProduct }) => {
  const handleRemoveProduct = (productName) => {
    removeProduct(productName);
  };
  return (
    <div>
      <h2>Carrito de compras</h2>
      {products.map((product, index) => (
        <h3 key={index} onClick={() => handleRemoveProduct(product)}>
          {product}
        </h3>
      ))}
    </div>
  );
};

export default Cart;
