import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg" alt='logo' />
            </div>
            <div className="navLinks">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About US</a></li>
                    <li><a href="#">Contact US</a></li>
                    <li><a href="#">Cart</a></li>
                    
                </ul>
            </div>
        </header>

    )
}

export default Header
