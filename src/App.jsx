import React from 'react'
import "./App.css"
import Header from "./components/Header"
import Footer from './components/Footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [menu, setMenu] = useState('close');
  const [searchVal, setSearchVal] = useState("");



  const handleMenuOpen = () => {
    setMenu(menu === 'close' ? 'open' : 'close');
  };

  const closeMenu = () => {
    setMenu('close')
  }
  const handleNavClick=()=>{
    setMenu("close")
  }

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value)
  }

  const alert = (message, theme) => {
    toast.success(message, {
      theme:theme,
      position: "top-right"
    });
  }


  return (
    <>
      <Header handleMenuOpen={handleMenuOpen} closeMenu={closeMenu} menu={menu} searchVal={searchVal} handleSearchChange={handleSearchChange} handleNavClick={handleNavClick} />
      <ToastContainer className="custom-alert" autoClose={2000}/>
      <Outlet context={{searchVal, alert}}/>
      <Footer />
    </>
  )
}

export default App