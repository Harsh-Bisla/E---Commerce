import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import "./ProductDetails.css"
import { useDispatch, useSelector } from 'react-redux'
import { productDetailActions } from '../store/ProductDetails'
import { cartSliceActions } from '../store/CartSlice'

function ProductDetails() {
    const dispatch = useDispatch()

    const { alert } = useOutletContext()


    const Products = useSelector(store => store.ProductDetails)
    let relatedProducts;
    let defaultproducts;
    if (Products.length > 0) {
        const category = Products[0].category
        defaultproducts = useSelector(store => store.Products)
        relatedProducts = defaultproducts.filter((product) => product.category === category)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        if (Products.length > 0) {
            setMainImage(Products[0].thumbnail)
        }
    }, [Products]);

    const sendItem = (items) => {
        dispatch(productDetailActions.addDetails(items))
    }

    const handleAddToCart = (id) => {
        let finalPr = defaultproducts.find((product => product.id === id))
        dispatch(cartSliceActions.addProductsInCart(finalPr))
        alert("Item Added to the Cart")

    }

    const buyNow = (id) => {
        let finalPr = defaultproducts.find((product => product.id === id))
        dispatch(cartSliceActions.addProductsInCart(finalPr))
        alert("Item Added to the Cart")

    }

    const [mainImage, setMainImage] = useState("")
    const changeMainImage = (smlImage) => {
        setMainImage(smlImage)
    }

    return (
        <>
            <div className='heading'>
                <p><Link to="/"><span>Home / {Products.length > 0 ? Products[0].category : "Category"} / </span></Link>  {Products.length > 0 ? Products[0].title : "title"}</p>
            </div>
            {Products.map((product) =>
                <section key={product.id} className='product-details'>
                    <div className='details-left'>
                        <div className='sml-img'>
                            {product.images.map((smlImages) =>
                                <img onClick={() => changeMainImage(smlImages)} key={smlImages} width={100} src={smlImages} alt='small-image' />
                            )}
                        </div>
                        <div className='main-img'>
                            <img width={400} src={mainImage} alt='main-image' />
                        </div>
                    </div>
                    <div className='details-right'>
                        <h4>{product.title}</h4>
                        <p id='review'><i className="fa-solid fa-star"></i><span>(150 Reviews) | </span> In Stock ({product.stock})<span></span></p>
                        <h3>${product.price}</h3>
                        <p id='description'>{product.description}</p>
                        <div className='size'>
                            <p>Size : </p>
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                        </div>
                        <div className='quantity-selection'>
                            <div className='select-btns'>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <button onClick={() => buyNow(product.id)} id='buy-now'>Buy Now</button>
                        </div>

                        <div className='delivery'>
                            <div className='delivery-text-wrapper'>
                                <i className="fa-solid fa-truck"></i>
                                <div className='delivery-text'>
                                    <h3>Free Delivery</h3>
                                    <p>Enter your Postal code for delivery availability</p>
                                </div>
                            </div>

                            <div className='retutn-delivery'>
                                <div className='return-wrapper'>
                                    <i className="fa-solid fa-arrows-rotate"></i>
                                    <div className='return-delivery'>
                                        <h3>Return Delivery</h3>
                                        <p>{product.returnPolicy}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className='related'>
                <div className='today'>
                    <div className='box'></div>
                    <h3>Related Item</h3>
                </div>

                <div className='related-products-container'>
                    {relatedProducts &&
                        relatedProducts.slice(0, 5).map((items) =>
                            <div key={items.title} className='wrapper'>
                                <Link to="/productDetails"><div onClick={() => sendItem(items)} className='product'>
                                    <img width={200} src={items.thumbnail} />
                                    <div className='details'>
                                        <h4>{items.title}</h4>
                                        <p id='price'>${items.price} <span>{items.discountPercentage}off</span></p>
                                        <p id='rating'><i className="fa-solid fa-star"></i><span >({items.rating})</span></p>
                                    </div>
                                </div></Link>
                                <div onClick={() => handleAddToCart(items.id)} className='add-to-cart'>Add to Cart</div>
                            </div>
                        )}

                </div>
            </section>
        </>
    )
}

export default ProductDetails







