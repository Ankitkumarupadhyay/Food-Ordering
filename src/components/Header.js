import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
// import UserContext from '../utils/UserContext';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
// import cartStore from '../utils/cartStore';
import "../CSS/header.css"


const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    const[ulDisplay,setUlDisplay]=useState("")
    // const { name } = useContext(UserContext)

    const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus);

    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)

    const BtnTxt = () => {
        setBtnText((prev) => prev === "LogOut" ? "Login" : "LogOut")
    }

    return (
        <header className="flex w-[100%] z-50 justify-between  shadow-xl  " >
            <div className="logo   ">
                <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt='logo' />
            </div>
            {/* <div className="greeting">
            <span>hii {name} </span>
            </div> */}
            <div className="navLinks">
                <ul style={{display:ulDisplay}} className=' p-2 mr-2 gap-2  '>

                    <li className='px-2' ><Link to={"/"}>Home</Link></li>
                    <li className='px-2'><Link to={"/about"}>About US</Link></li>
                    <li className='px-2'><Link to={"/contact"}>Contact US</Link></li>
                    <li className='px-2'><Link to={"/cart"}>Cart({cartItems.length})</Link></li>
                    <li className='px-2'><Link to={"/login"}  ><button className='loginBtn' onClick={BtnTxt}  >{btnText} <span className="online"  >{onlineStatus ? "🟢" : "🔴"} </span></button></Link></li>
                    {/* {name} */}

                </ul>

                <div className="headerBtn" onClick={()=> ulDisplay ==="flex" ? setUlDisplay("") : setUlDisplay("flex")} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>


            </div>
        </header>

    )
}

export default Header
