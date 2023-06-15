import * as React from 'react';
import './navbar.css';
import Navbar1 from './Navbar-1/navbar-1';
import Navbar2 from './Navbar-2/navbar-2';
import Navbar3 from './Navbar-3/navbar-3';
import 'animate.css';


export default function Navbar() {
  return (
    <div>
   <Navbar1 />
   <Navbar2 />
   <Navbar3 />
  </div>
  )
}