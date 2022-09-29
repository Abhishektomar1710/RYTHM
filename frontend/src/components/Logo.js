import React from 'react';
import logo from '../images/logo.jpeg'; // Tell webpack this JS file uses this image
import '../index.css'

console.log(logo); // /logo.84287d09.png


function Header() {
  // Import result is the URL of your image
  return <img src={logo} width={"8%"} alt="Logo" class ="center" />;
}

export default Header;