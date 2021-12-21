import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import logo from './zahiddp.jpeg';

const Header = () => {
    const [close, setClose] = useState(false);

    const menuToggle = () => {
        setClose(!close)
    }
    return (
        <>
            <header className='d-flex-1'>
                <div className='logo'>
                    <Link to="/" ><img src={logo} alt='profile' width="100px" /></Link>
                </div>

                <ul className={close ? 'navigation active' : 'navigation'} onClick={menuToggle}>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/skill">Skills</NavLink></li>
                    <li><NavLink to="/project">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/git">Github</NavLink></li>
                    <li>
                        <FontAwesomeIcon icon={faTimes} className='close' />
                    </li>
                </ul>
                <FontAwesomeIcon icon={faBars} className='menu-bar' onClick={menuToggle} />
            </header>
        </>
    )
}

export default Header
