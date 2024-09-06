import React, { useEffect, useState } from 'react'
import "./OrderConfirmed.css"
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OrderPlaced from '../components/OrderPlaced';


function OrderConfirmed() {
    const items = useSelector(store => store.Cart)
    const [showMessage, setShowMessage] = useState(true)

    let date = Date();

    const { state } = useLocation();
    const { subtotal, total, orderNumber, paymentMethod, addressDetails } = state;

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false)
        }, 3000);
    }, [])


    return (
        showMessage == true ? <OrderPlaced /> :
            <section className='top-section'>
                <h1>Checkout</h1>
                <p>Thank You. Your Order has been recived.</p>
                <table className='order-table'>
                    <thead>
                        <tr>
                            <th>ORDER NUMBER:</th>
                            <th>DATE:</th>
                            <th>TOTAL:</th>
                            <th>PAYMENT METHOD:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{orderNumber}</td>
                            <td>{date.slice(0, 24)}</td>
                            <td>${Math.round(total)}</td>
                            <td>{paymentMethod}</td>
                        </tr>
                    </tbody>
                </table>

                <table className='order-table'>
                    <caption>Order Details</caption>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((product) =>
                            <tr>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                            </tr>
                        )}

                        <tr>
                            <td>Subtotal</td>
                            <td>${Math.round(subtotal)}</td>
                        </tr>
                        <tr>
                            <td>Payment Method</td>
                            <td>{paymentMethod}</td>
                        </tr>
                        <tr>
                            <td>shipping Fee</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${Math.round(total)}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='billing-address'>
                    <h2>Billing Address</h2>
                </div>
                <div className='address-details'>
                    <p>{addressDetails.name}</p>
                    <p>{addressDetails.streetAddress}</p>
                    <p>{addressDetails.apartment}</p>
                    <p>{addressDetails.town}</p>
                    <p>{addressDetails.Phone}</p>
                    <p>{addressDetails.EmailAddress}</p>
                </div>
            </section>
    )
}

export default OrderConfirmed