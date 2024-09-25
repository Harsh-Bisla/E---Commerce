import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PiHandbagLight } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";

function Header({ handleMenuOpen, closeMenu, menu, searchVal, handleSearchChange, handleNavClick , handleVoiceSearch}) {


  const cartCount = useSelector(store => store.Cart)
  const [hideBar, setHideBar] = useState("close")

  const openSearchBar = () => {
    if (hideBar === "close") {
      setHideBar("open")
    }
    else {
      setHideBar("close")
    }
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img width={50} src={logo} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul style={{ left: menu === "open" ? "0px" : "" }}>
          <i onClick={closeMenu} className="fa-solid fa-xmark close-btn"></i>
          <li><NavLink onClick={handleNavClick} to='/'>Home</NavLink></li>
          <li><NavLink onClick={handleNavClick} to='/contact'>Contact</NavLink></li>
          <li><NavLink onClick={handleNavClick} to='/about'>About</NavLink></li>
          <li><NavLink onClick={handleNavClick} to='/signup'>Sign Up</NavLink></li>
        </ul>
      </div>
      <div className='search-cart'>
        <div className='input' style={{ display: hideBar === "close" ? "none" : "flex" }}>
          <input type='text' value={searchVal} onChange={handleSearchChange} placeholder='search products' />
        </div>
        <IoMicOutline onClick={handleVoiceSearch} fontSize={22} style={{cursor:"pointer"}} />
        <IoSearchOutline onClick={openSearchBar} className='search-box' fontSize="22px" />
        <div className='cart-icon'>
          <Link to="/cart"><PiHandbagLight fontSize="25px" /></Link>
          <div className='badge'>{cartCount.length}</div>
        </div>
        <CiMenuFries onClick={handleMenuOpen} className='menu' fontSize="25px" fontWeight="800" />
      </div>
    </header>
  )
}

export default Header