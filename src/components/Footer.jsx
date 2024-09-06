import React from 'react'

function Footer() {
    return (
        <footer className='footer-container'>
            <section className='footer'>
                <div className="col-1">
                    <h3>Exclusive</h3>
                    <h5>Subscribe</h5>
                    <p>Get 10% off on your firts order</p>
                    <input type='text' placeholder='Enter your Email' />
                    <button className='mail-btn'><i className="fa-regular fa-paper-plane"></i></button>
                </div>
                <div className="col-1">
                    <h3>Support</h3>
                    <p>111 Delhi , India</p>
                    <p>onlineshop@gmail.com</p>
                    <p>+999888-666-77</p>
                </div>
                <div className="col-1">
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login/ Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="col-1">
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="col-1">
                    <h3>Download App</h3>
                    <p><span>Save $3 with App new Users only</span></p>
                    <div className='icons'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </section>
            <div className='copyright'>
                <p id='copyright'>&#169; Copyright Harsh 2024  All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer