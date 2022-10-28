import React from 'react'

function Navbar() {
  return (
    <>
     <header className="header">
        <nav className="navigation-bar">
                <img src="./images/Logo.png" alt="Logo" className="logo"/>
                <ul className="nav-buttons">
                    <li className="nav-button">Home</li>
                    <li className="nav-button">Domain</li>
                    <li className="nav-button">Hosting</li>
                    <li className="nav-button">Features</li>
                    <li className="nav-button">Pricing</li>
                    <li className="nav-button">About Us</li>
                    <li className="nav-button">
                        <button className="register">Register Now</button>
                    </li>
                </ul>
                <div className="hambergermenu">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            
        </nav>
    </header>
    </>
  )
}

export default Navbar