import React, { useEffect, useRef, useState } from 'react'
import Mastercard from "../assets/Mastercard.png"
import Visa from "../assets/Visa.png"
import Nagad from "../assets/Nagad.png"
import { useSelector } from 'react-redux'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'


function BillingDetails() {
    const orderId = Math.round(Math.random() * 100)

    const [orderPlaced, setOrderPlaced] = useState(false)

    const { alert } = useOutletContext()

    const name = useRef()
    const companyName = useRef()
    const streetAddress = useRef()
    const apartment = useRef()
    const Town = useRef()
    const Phone = useRef()
    const EmailAddress = useRef()
    const [paymentMode, setpaymentMode] = useState("Cash on Delivery")
    const navigate = useNavigate();


    const items = useSelector(store => store.Cart)
    let subtotal = 0;
    let shippingfee = 5;

    items.map((item) => {
        subtotal += item.price * (item.quantity)
    })
    let total = shippingfee + subtotal

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const validateForm = () => {
        if (!name.current.value || !companyName.current.value || !streetAddress.current.value || !apartment.current.value || !Town.current.value || !Phone.current.value || !EmailAddress.current.value) {
            return false;
        }
        return true;
    };

    const confirmOrder = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const AddressDetails = {
                name: name.current.value,
                companyName: companyName.current.value,
                streetAddress: streetAddress.current.value,
                apartment: apartment.current.value,
                town: Town.current.value,
                Phone: Phone.current.value,
                EmailAddress: EmailAddress.current.value
            }
            setOrderPlaced(true)
            setTimeout(() => {
                setOrderPlaced(false)
                navigate("/confirmorder", {
                    state: {
                        subtotal: subtotal,
                        total: total,
                        orderNumber: orderId,
                        paymentMethod: paymentMode,
                        addressDetails: AddressDetails
                    }
                })
            }, 2000);
        }
        else {
            alert("Please fill all the required fields", "dark")
        }
    }

    const handlePaymentChange = (e) => {
        setpaymentMode(e.target.value)
    }

    return (<>
        <div className='heading'>
            <p> <span><Link to="/">Product</Link>  / <Link to="/cart">View Cart</Link> </span> / Checkout  </p>
        </div>

        <section className='checkout-section'>
            <div className='billing-details-lft'>
                <h1>Billing Details</h1>
                <p>First Name</p>
                <input type='text' ref={name} />
                <p>Company Name</p>
                <input type='text' ref={companyName} />
                <p>Street Address</p>
                <input type='text' ref={streetAddress} />
                <p>Apartment, floor, etc (optional)</p>
                <input type='text' ref={apartment} />
                <p>Town / City</p>
                <input type='text' ref={Town} />
                <p>Phone Number</p>
                <input type='text' ref={Phone} />
                <p>Email Address</p>
                <input type='email' ref={EmailAddress} />
                <br></br>
                <input id='checkbox' type='checkbox' />
                <label id='checkbox-label'>Save this information for faster checkout next time</label>
            </div>
            <div className='placeorder-right'>
                {items.map((product) =>
                    <div className='checkout-product'>
                        <div className='img-p'>
                            <img width={60} src={product.thumbnail} alt='product-img' />
                            <p>{product.title}</p>
                        </div>
                        <p>${product.price}</p>
                    </div>
                )}

                <div className='sub-total'>
                    <p>Subtotal:</p>
                    <p>${Math.round(subtotal)}</p>
                </div>

                <div className='sub-total'>
                    <p>Shipping:</p>
                    <p>${shippingfee}</p>
                </div>

                <div className='-total'>
                    <p>Total</p>
                    <p>${Math.round(total)}</p>
                </div>
                <div className='payment-methods'>
                    <div className='payment-categ'>
                        <label className="payment-option">
                            <input onChange={handlePaymentChange} type="radio" name="payment" value="upi" />
                            UPI
                        </label>
                        <br></br>
                        <label className="payment-option">
                            <input onChange={handlePaymentChange} type="radio" name="payment" value="Cash On Delivery" />
                            Cash on Delivery
                        </label>
                    </div>
                    <div className='payment-img'>
                        <img src={Mastercard} alt='payment' />
                        <img src={Visa} alt='payment' />
                        <img src={Nagad} alt='payment' />
                    </div>
                </div>
                <div className='coupon billing-coupon'>
                    <input type='text' placeholder='Coupon Code' />
                    <button className='red-btn coupon-btn'>Apply Coupon</button>
                </div>
                <button onClick={confirmOrder} className='red-btn coupon-btn place-order-btn'>{orderPlaced == true ? <div className='btn-loader'></div> : "Place Order"}</button>
            </div>

        </section>
    </>
    )
}

export default BillingDetails