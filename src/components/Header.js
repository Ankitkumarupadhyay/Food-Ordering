import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import cartStore from '../utils/cartStore';


const Header = () => {
    const [btnText, setBtnText] = useState("Login")
    const { name } = useContext(UserContext)
    //    console.log(name)

    const cartItems= useSelector((store)=> store.cart.items)
    console.log(cartItems)

    const BtnTxt = () => {
        setBtnText((prev) => prev === "LogOut" ? "Login" : "LogOut")
    }



    return (
        <header className="flex w-[100%] z-50 justify-between  shadow-lg items-center  " >
            <div className="logo w-44 ml-8  ">
                <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt='logo' />
            </div>
            <div className="navLinks">
                <ul className='flex p-8 mr-4 gap-4 font-semibold text-2xl '>

                    <li className='px-2' ><Link to={"/"}>Home</Link></li>
                    <li className='px-2'><Link to={"/about"}>About US</Link></li>
                    <li className='px-2'><Link to={"/contact"}>Contact US</Link></li>
                    <li className='px-2'><Link to={"/cart"}>Cart({cartItems.length})</Link></li>
                    <li className='px-2'><Link to={"/login"}  ><button className='loginBtn' onClick={BtnTxt} >{btnText}</button></Link></li>
                    <li>{name}</li>

                </ul>
                <div className="online"  ></div>
            </div>
        </header>

    )
}

export default Header
