import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

import { signout, useStore } from '../store';

import "./HeaderComponent.css";


const HeaderComponent = () => {

  const { user } = useStore( state => state )

  const [open, setOpen] = useState(false)


  const handlerOpen = () => {
    console.log(open)
    setOpen(!open)
  }

  const handlerCloseMenu = () => {
    setOpen(false)
  }

  const logoutHandler = () => {
    signout()
    window.location.href = '/login';
  }

  return (

    <nav className="container flex">
      <NavLink to="/heroes" className="title">Heroes</NavLink>


      {
        user
        ? (
          <div className="navmenu-container">
            <ul className="navmenu">
              <li><NavLink to="/heroes">All Heroes</NavLink></li>
              <li><NavLink to="/marvel">Marvel</NavLink></li>
              <li><NavLink to="/dc">DC</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
            </ul>
          </div>
        ) : (
          <ul className="navmenu">
            <li><NavLink to="/login">SignIn</NavLink></li>
            <li><NavLink to="/register">SignUp</NavLink></li>
          </ul>
        )
      }

      {
        user && <li className="navmenu-logout"><NavLink to="/" onClick={() => logoutHandler()}>Logout</NavLink></li>
      }


      <div className="bx bx-menu" id="menu-icon" onClick={() => handlerOpen()}><HiMenu className="hamburger"/></div>

      {
        user
        ? (
          <div className={`navmenu-lateral ${open && 'activo'}`} id="menu-mobile" onClick={() => handlerCloseMenu()}>
          <li><NavLink to="/heroes">All Heroes</NavLink></li>
            <li><NavLink to="/marvel">Marvel</NavLink></li>
            <li><NavLink to="/dc">DC</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/" onClick={() => logoutHandler()}>Logout</NavLink></li>
          </div>
        ): (
          <div className={`navmenu-lateral ${open && 'activo'}`} id="menu-mobile" onClick={() => handlerCloseMenu()}>
            <li><NavLink to="/login">SignIn</NavLink></li>
            <li><NavLink to="/register">SignUp</NavLink></li>
          </div>
        )
      }

    </nav>
  )
}

export default HeaderComponent
