import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import '../CSS/header.css'
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const[btnText,setBtnText]=useState("Login")
   

    const BtnTxt =()=>{
        setBtnText((prev)=> prev ==="LogOut" ? "Login" :"LogOut")
    }

    
   
    return (
        <header className="flex justify-between bg-pink-300 shadow-2xl items-center  " >
            <div className="logo w-44 ml-8  ">
                <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt='logo' />
            </div>
            <div className="navLinks">
                <ul className='flex p-8 mr-4 gap-4 font-semibold text-2xl '>
                    
                    <li className='px-2' ><Link to={"/"}>Home</Link></li>
                    <li className='px-2'><Link to={"/about"}>About US</Link></li>
                    <li className='px-2'><Link to={"/contact"}>Contact US</Link></li>
                    <li className='px-2'><Link>Cart</Link></li>
                    <li className='px-2'><Link to={"/login"}  ><button className='loginBtn' onClick={BtnTxt} >{btnText}</button></Link></li>
                    
                </ul>
                <div className="online"  ></div>
            </div>
        </header>

    )
}

export default Header
