
import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import shoppingCartData from './ShoppingCartData'

function App() {

  const [isCartData,setIsCartData]=useState(shoppingCartData)
   
  return (
    <div className="App">
      <Cart isCartData={isCartData} setIsCartData={setIsCartData}/>
    </div>
  )
}

export default App
