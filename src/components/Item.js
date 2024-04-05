import React, { useState, useTransition } from "react";

function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(false);

  function updateInCart(){
    setInCart(inCart => !inCart);
  }
  const liClass = (inCart) ? "in-cart" : "";
  const btnText = (inCart) ? "Remove from Cart" : "Add to Cart"
  const color = (inCart) ? "rgb(210, 51, 210)" : "rgb(237, 237, 32)";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{background: color}} onClick={updateInCart}>{btnText}</button>
    </li>
  );
}

export default Item;
