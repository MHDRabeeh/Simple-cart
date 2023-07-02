import { useEffect, useState } from "react"


function Cart({ isCartData, setIsCartData }) {

    const [totalPrice, setTotalPrice] = useState(0)
 
    const handlePrice = () => {
        let ans = 0
        isCartData.map((item) => {
            return (
                ans = ans + (item.quantity * item.price)
            )
        }
        )
        setTotalPrice(ans)
    }

    const handleRemove = (id) => {

        const removedCart = isCartData.filter((item) => {
            return (
                item.id !== id
            )
        })
        setIsCartData(removedCart);
    }
    useEffect(() => {
        handlePrice()
    })

    const handleQuantity = (event, id) => {
        let inputValue
        if (event.target.value) {
            inputValue = event.target.value
        } else {
            inputValue = 0
        }

        isCartData.forEach(element => {

            if (element.id == id) {
                element.quantity = parseInt(inputValue)
            }
        });

        const newArray = isCartData
        setIsCartData([...newArray])
    }

    return (


        <div className="cart">
            <div className="cartHeader">
                <h2>Shopping Cart</h2>
            </div>
            <div className="cartList">
                {
                    isCartData.map((cartItems) => {
                        return (
                            <div key={cartItems.id} className="cartItem">
                                <span onClick={() => { handleRemove(cartItems.id) }} className="remove">X</span>
                                <p>{cartItems.name}</p>
                                <input min="0" onChange={event => handleQuantity(event, cartItems.id)} className="quantity" type="number" name="quantity" value={cartItems.quantity} />
                                <p className="price"> <b>{cartItems.price} </b>Rs</p>
                            </div>
                        )
                    })
                }


            </div>
            <div className="cartFooter">
                <h4>Total: </h4><div className="cartTotal"><b>{totalPrice} </b> Rs</div>
            </div>
        </div>

    )
}
export default Cart;