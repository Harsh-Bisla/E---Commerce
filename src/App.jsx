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

// menu function
  const handleMenuOpen = () => {
    setMenu(menu === 'close' ? 'open' : 'close');
  };

  const closeMenu = () => {
    setMenu('close')
  }
  const handleNavClick=()=>{
    setMenu("close")
  }

  // for voice search
  const startVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      let result = event.results[0][0].transcript;
      result=result.replace("."," ")
      alert(`Showing Results for ${result}`,"dark")
      setSearchVal(result);
    };
    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };
    recognition.start();
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value)
  }


  // search function
  const handleVoiceSearch=()=>{
    startVoiceSearch();
    alert("Start Speaking...",)
  }

  // Alert Funnction
  const alert = (message, theme) => {
    toast.success(message, {
      theme:theme,
      position: "top-right"
    });
  }


  return (
    <>
      <Header handleMenuOpen={handleMenuOpen} closeMenu={closeMenu} menu={menu} searchVal={searchVal} handleSearchChange={handleSearchChange} handleNavClick={handleNavClick} handleVoiceSearch={handleVoiceSearch} />
      <ToastContainer className="custom-alert" autoClose={2000}/>
      <Outlet context={{searchVal, alert}}/>
      <Footer />
    </>
  )
}

export default App