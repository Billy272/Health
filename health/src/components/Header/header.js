import React from 'react';
import './header.css';

function Header() {
 return (
  <header>
   <div className='header'>
    <h1>Student Data Analsis.</h1>
    <nav>
     <ul>
      <li>Analyzed Data</li>
      <li>Problems Encountered</li>
      <li>Conclusions</li>
      <li>Solutions</li>
      <li>Contact</li>
     </ul>
    </nav>
   </div>
  </header>
 );
}

export default Header;