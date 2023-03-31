import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   
    <div className='nav'>
      <h3>LOGO</h3>
      <ul className='list'>
        <li> <Link   className="navlist" to={"/"}>Home</Link> </li>
        <li><Link className="navlist" to={"about"}>About</Link></li>
        <li><Link  className="navlist" to={"Items"}>Products</Link></li>
      </ul>
    </div>
   
  );
}

export default Navbar;
