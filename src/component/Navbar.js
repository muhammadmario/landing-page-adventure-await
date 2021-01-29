import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton()
    }, [])

    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div class="menu__icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                    <li className="nav__items">
                        <Link to="/" className='nav__links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav__items">
                        <Link to="/services" className='nav__links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className="nav__items">
                        <Link to="/products" className='nav__links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>

                    <li className="nav__items">
                        <Link to="/sign-up" className='nav__links__mobile' onClick={closeMobileMenu}>
                            Sign up men
                        </Link>
                    </li>
                </ul>
                {
                    button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
                }
            </div>
        </div>
    )
}

export default Navbar
