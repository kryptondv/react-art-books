import React, { useContext } from 'react'
import Navbar from './Navbar'
import { ProductContext } from '../context/Context'

const Topbar = () => {

  const { handleNavbar, handleCart, openCart, closeCart } = useContext(ProductContext)
  return (
    <div>
      <button onClick={closeCart}>test</button>
      <Navbar />
    </div>
  )
}

export default Topbar
