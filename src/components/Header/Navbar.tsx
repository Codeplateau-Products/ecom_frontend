import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
        <header className='headerr'>
            <div className="containerr d-flexx">
                
                <div className="logo widthh">
                    <img src={logo} alt="" />
                </div>

                <div className="navlinkk">
                    <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'linkk f-flexx uppercase'} >
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">home</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">pages</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">blog</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">shop</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">collections</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">marketplace</a>
                            <ul className="dropdown-menu">
                                <li className='dropdown-item'>
                                    some lists here
                                </li>
                            </ul>
                        </li>
                        
                    </ul>

                    <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open'></i>}
                    </button>
                </div>
                <div className="navlinkk logg">
                    <ul className='f-flexx'>
                        <li className='contactt'>
                            <a href="/login">Login</a> or <a href="/register">Register</a>
                        </li>
                        <li className='contactt'>
                            <a href="/">Hotline (+123)4 567 890</a>
                        </li>
                       
                    </ul>

                    
                </div>
                
            </div>
        </header>
    </>
  )
}

export default Navbar;