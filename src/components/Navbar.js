import React, { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle)
    }   

  return (
    <div className='navbar'>
      <nav className="nav">
        <div className="logo-contain">
            <h2>
                Inde Exploration
            </h2>
        </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <button>
                    <i className='bx bxs-moon' ></i>
                    <span>Screen</span>
                    </button>
                </li>
                <li className="nav-item">
                <i className='bx bx-world' ></i>
                </li>
                <li className="nav-item">
                    supports
                </li>
            </ul>
            <div onClick={toggleSidebar} className="toggle-btn-nav">
                <i className='bx bx-menu'></i>
            </div>
      </nav>
      <aside className={`sidebar ${toggle ? 'active' : ''}`}>
        <div className="logo-contain-sidebar">
            <h2>
                Inde Exploration
            </h2>
            <div onClick={toggleSidebar} className="toggle-sidebar">
                <i className='bx bx-x'></i>
            </div>
        </div>
        <ul className="sidebar-list">
            <li className="sidebar-items">Destinations</li>
            <li className="sidebar-items">Flights</li>
            <li className="sidebar-items">Hotels</li>
            <li className="sidebar-items">Attractions</li>
            <li className="sidebar-items">About</li>
        </ul>
        <ul className="sidebar-list-bottom">
            <li className="sidebar-item">
                supports
            </li>
            <li className="sidebar-item">
                <i className='bx bx-world' ></i>
            </li>
            <li className="sidebar-item">
                <button>
                    <i className='bx bxs-moon' ></i>
                    <span>Screen</span>
                </button>
            </li>
        </ul>
      </aside>
    </div>
  )
}

export default Navbar;

