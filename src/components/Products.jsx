import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productLimitActions } from '../store'
import { productActions } from '../store/ProductSlice'
import { cartSliceActions } from '../store/CartSlice'
import { Link, useOutletContext } from 'react-router-dom'
import { productDetailActions } from '../store/ProductDetails'
import SearchImg from "../assets/SearchImage.png"

function Products({ loading, setLoading }) {

    const dispatch = useDispatch()
    const Products = useSelector(store => store.Products)
    const limit = useSelector(store => store.productlimit)

    const categ = useSelector(store => store.category)

    const { searchVal, alert } = useOutletContext()


    let url;
    let url1 = `https://dummyjson.com/products/category/${categ}?limit=${limit}`
    let url2 = `https://dummyjson.com/products?limit=${limit}`
    let url3 = `https://dummyjson.com/products/search?q=${searchVal}`

    if (categ !== "") {
        url = url1
    }
    else if (searchVal !== "") {
        url = url3
    }
    else {
        url = url2
    }


    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => {
                res.json().then((data) => {
                    // console.log(data.products)
                    setLoading(false)
                    dispatch(productActions.addInitialProducts(data.products))
                })
            })
    }, [limit, categ, searchVal])

    const loadMoreProducts = () => {
        let newLimit = limit + 20
        dispatch(productLimitActions.updateLimit(newLimit))
    }

    const handleAddToCart = (id) => {
        let finalPr = Products.find((product => product.id === id))
        dispatch(cartSliceActions.addProductsInCart(finalPr))
        alert("Item Added to the cart",)
    }

    const sendItem = (items) => {
        dispatch(productDetailActions.addDetails(items))
    }

    return (
        <>
            <section className='products-section'>
                <div className='today'>
                    <div className='box'></div>
                    <h3>Today's</h3>
                </div>
                <h1>Flash Sales</h1>
                <div className='products-container'>
                    {Products.length === 0 && <div className='search-img'> <img width={400} src={SearchImg} alt='Logo' />
                        <h2>No Products found as {searchVal}</h2></div>}
                    {Products.map((items) =>
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
                <div>
                    <div className='view-all-btn-wrapper'>
                        <button onClick={loadMoreProducts} className='view-all-btn'>{loading == false ? "Load More Products" : <div className='btn-loader'></div>}</button>
                    </div>
                </div>
            </section>
            <div className='seperator'></div>
        </>
    )
}

export default Products