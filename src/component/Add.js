import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function Add() {
    let [price,setPrice] = useState(0)
  return (
    <div style={{maxWidth :"300px", margin:"auto"}}>
      <h3>add new product </h3>
      <div class="input-group mt-2">
        <span class="input-group-text">title </span>
        <input type="text" aria-label="title" class="form-control" />
       
      </div>
      <div class="input-group mt-2">
        <input
          type="text"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          onChange={ (e)=> setPrice(+e.target.value) }
         />
        <span class="input-group-text">$</span>
        <span class="input-group-text">{price.toFixed(2)}</span>
      </div>
      <div class="input-group mt-2">
        <span class="input-group-text">Description </span>
        <input type="text" aria-label="title" class="form-control" />
       
      </div>
      <button  type="button" class="btn btn-success mt-4">Add to cart</button>
    </div>
  );
}

export default Add;
