import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProductNav() {
  return (
    <>
    <div className='productpn ptn' style={{marginBottom : "50px"}}>
      <Link to={"list"} className='buttom'>list</Link>
      <Link to={"add"} className='buttom'>add</Link>
      <Link to={"search"} className='buttom'>search</Link>
      
    </div>
    <Outlet/>
    </>
  )
}

export default ProductNav
