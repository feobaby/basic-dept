import * as React from 'react';
import './navbar-1.css';
import '../navbar.css';
import {
    Box,
  } from '@chakra-ui/react';

export default function Navbar1() {
  return (
    <>
    <div className='transform-box slide-in-top-1'>
    <Box bg='#ffb400' color='black' h='100vh'  p='4'>
    <p className='nav-symbol'>文化</p>
     <p className='nav-text'>Community</p>
  </Box>
  </div>
  </>
  )
}