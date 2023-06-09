import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className='head'>
    <Link to="/">Home</Link>
    <Link to="/exchanges">Exchanges</Link>  
    <Link to="/coin">Coins</Link>

      
      
      
    </div>
  )
}

export default Header;
