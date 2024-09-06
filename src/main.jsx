import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import Cart from "./components/Cart.jsx"
import { Provider } from 'react-redux'
import store from './store/index.js'
import ProductDetails from './components/ProductDetails.jsx'
import BillingDetails from './components/BillingDetails.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import ContactUs from './components/ContactUs.jsx'
import About from './components/About.jsx'
import OrderConfirmed from './components/OrderConfirmed.jsx'

const router = createBrowserRouter([{
  path: "/", element: <App />, children: [
    { path: "/", element: <Homepage /> },
    { path: "/cart", element: <Cart /> },
    { path: "/productDetails", element: <ProductDetails /> },
    { path: "/billingDetails", element: <BillingDetails /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/about", element: <About /> },
    {path:"/confirmorder", element:<OrderConfirmed/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
