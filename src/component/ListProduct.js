import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const array= [
    {id:1, title: 'oppo', price: '120'},
    {id:2, title: 'sumsung', price: '100'},
    {id:3, title: 'nokia', price: '20'}
  ]
function ListProduct() {
  return (
    <>
    <div className='list-product'>    
    {array.map( prod => {
        return (
            <>
            <div key={prod.id}>
            <h3>{prod.title}</h3>
            <p>{prod.price}$</p>
            <Link to={prod.title} className='buttom'>details</Link>
            </div>
           
            </> 
        )
    })}
    
    </div>
    <Outlet/>
    </>
  )
}

export default ListProduct