'use client'

import { useState } from 'react'

export function CustomerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="navbar">
        <div className="logo"><img src="/lily black png 1.png" alt="" /></div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">About Us</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2" fill="none"/></svg>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="icons">
            {/* cart */}
            <a href="#"><img className="shoping_cart" src="/shoppingcart.png" alt="" /></a>
            {/* user */}
            <a href="#"><img src="/human.png" alt="" /></a>
            {/* location */}
            <a href="#"><img src="/map.png" alt="" /></a>
          </div>
          <button className="burger" id="burger" aria-label="menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">New Arrivals</a>
        <a href="#">Best Sellers</a>
        <a href="#">About Us</a>
      </div>
    </>
  )
}
