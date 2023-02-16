import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { Link, Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className="app">
      <header className="header">
        <HeaderComponent/>
      </header>
      <main className="main">
        <Outlet/>
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2023, Creado por <Link to="https://github.com/jrag-dev" target="_blank" rel="noreferrer">José Alvarado</Link></p>
      </footer>
    </div>
  )
}

export default LayoutPublic