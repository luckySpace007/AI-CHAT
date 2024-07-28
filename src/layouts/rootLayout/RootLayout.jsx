import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./rootLayout.css"
const rootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to = "/" className='logo'>
                <img src="/logo.png" alt="" />
                <span>Lucky AI</span>
            </Link>
            <div className="user">User</div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default rootLayout