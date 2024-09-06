import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartSliceActions } from '../store/CartSlice'
import CartImg from "../assets/Cart.png"

function Cart() {

    const cart = useSelector(store => store.Cart)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { alert } = useOutletContext()

    const handleRemoveFromCart = (id) => {
        dispatch(cartSliceActions.removeProductsFromCart(id))
        alert("Item removed from Cart", "dark")
    }

    const handleRemoveAll = () => {
        dispatch(cartSliceActions.removeAllItems([]))
        alert("Cart is empty", "dark")
    }
    let shippingfee = 5
    let totalPrice = 0
    let amountPayable = 0
    cart.forEach((cartItem) => {
        totalPrice += cartItem.price * (cartItem.quantity || 1)
    })
    amountPayable = shippingfee + totalPrice

    const handleChange = (id, quantity) => {
        const updatedQuantity = parseInt(quantity) || 1;
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === id) {
                return { ...cartItem, quantity: updatedQuantity };
            }
            return cartItem;
        });
        dispatch(cartSliceActions.updateQuantity({ id, quantity: updatedQuantity }));
    }

    const ProcessToCheckout = () => {
        if (cart.length !== 0) {
            navigate("/billingDetails")
        }
        else {
            alert("Please add an item in Cart to Proceed", "dark")
        }
    }

    const applyCoupon = () => {
        alert("No Coupon is available yet!", "dark")
    }
    return (
        <>

            <div className='heading'>
                <p><Link to="/"><span>Home /</span></Link> Cart</p>
            </div>
            {cart.length === 0 && <div className='empty-cart-msg'>
                <img src={CartImg} alt='cart-msg-img' />
                <Link to="/"><button className='shop-btn'>Shop now</button></Link>
            </div>}
            <section className='cart-container'>
                <div className='cart-title'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>

                {cart.map((cartItem) =>
                    <div key={cartItem.id} className='item-container'>
                        <div className='img-title'>
                            <img width={60} src={cartItem.thumbnail} alt='cart-image' />
                            <p>{cartItem.title}</p>
                        </div>
                        <p> Price: {cartItem.price}</p>
                        <input type='number' value={cartItem.quantity || 1} onChange={(e) => handleChange(cartItem.id, e.target.value)} />
                        <p>Subtotal: {cartItem.price}</p>
                        <div onClick={() => handleRemoveFromCart(cartItem.id)} className='del-btn'><i className="fa-solid fa-trash-can"></i></div>
                    </div>
                )}

                <div className='cart-btns'>
                    <Link to="/"><button className='red-btn'>Return to Shop</button></Link>
                    <button onClick={handleRemoveAll} className='red-btn'>Remove All Products</button>
                </div>
            </section>

            <section className='cart-total'>
                <div className='coupon'>
                    <input type='text' placeholder='Coupon Code' />
                    <button onClick={applyCoupon} className='red-btn coupon-btn'>Apply Coupon</button>
                </div>
                <div className='Cart-total'>
                    <h4>Cart Total</h4>
                    <div className='cart-flex'>
                        <p>Subtotal</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='cart-flex'>
                        <p>Shipping</p>
                        <p>${shippingfee}</p>
                    </div>
                    <div className='cart-flex'>
                        <p>Total</p>
                        <p>${amountPayable.toFixed(2)}</p>
                    </div>
                    <button onClick={ProcessToCheckout} className='red-btn checkout'>Process to checkout</button>
                </div>
            </section>
        </>
    )
}

export default Cart