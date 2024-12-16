import React from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function CartButton() {
  return (
    <Link to="/cart">
        <TbShoppingBag className="text-2xl" />
    </Link> 
  )
}

export default CartButton