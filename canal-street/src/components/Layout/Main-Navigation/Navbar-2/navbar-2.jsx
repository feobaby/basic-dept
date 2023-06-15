import * as React from 'react';
import './navbar-2.css';
import '../navbar.css';
import {
    Box,
  } from '@chakra-ui/react';

export default function Navbar2() {
  return (
    <>
    <div className='transform-box slide-in-top-2'>
    <Box bg='#f64444' color='black' h='100vh'  p='4'>
     <p className='nav-symbol'>購物</p>
     <p className='nav-text'>Retail</p>
  </Box>
  </div>
  </>
  )
}