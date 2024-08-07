import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/header.css'

const Header = () => {
    const[btnText,setBtnText]=useState("Login")

    const BtnTxt =()=>{
        setBtnText((prev)=> prev ==="LogOut" ? "Login" :"LogOut")
    }

    return (
        <header>
            <div className="logo">
                <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt='logo' />
            </div>
            <div className="navLinks">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About US</Link></li>
                    <li><Link to={"/contact"}>Contact US</Link></li>
                    <li><Link>Cart</Link></li>
                    <li><button className='loginBtn' onClick={BtnTxt} >{btnText}</button></li>
                    
                </ul>
            </div>
        </header>

    )
}

export default Header
