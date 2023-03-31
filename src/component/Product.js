import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    let {title}= useParams()
  return (
    <div className='thamer' style={{ margin:"auto"}}>
      <h2>{title}</h2>
      <button className='buttom' style={{width : 200}}>Add to cart </button>
    </div>
  )
}

export default Product
