import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';


function Root() {
  return (
    <>
    <div className='app'>
        <nav className='m-1'>
          <div className="navbar-idiomes">
            <ul className="navbar-nav">
              <NavLink to={`/home`} className={({ isActive}) => isActive ? "nav-item active" : "nav-item"
            } 
            >  
                ES 
              </NavLink>
              / 
              <NavLink to={`/english`} className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } >
              EN
              </NavLink>
            </ul>
            
          </div>
        </nav>
        <Outlet />
    </div>    
    </>
  )
}

export default Root