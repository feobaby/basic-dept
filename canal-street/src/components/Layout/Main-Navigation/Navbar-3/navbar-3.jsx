import * as React from 'react';
import './navbar-3.css';
import '../navbar.css';
import {
    Box,
  } from '@chakra-ui/react';

export default function Navbar3() {
  return (
    <>
   <div className='transform-box slide-in-top-3'>
    <Box bg='#5ea3ec' color='black' h='100vh'  p='4'>
    <p className='nav-symbol'>餐饮</p>
     <p className='nav-text'>Food</p>
  </Box>
  </div>
  </>
  )
}