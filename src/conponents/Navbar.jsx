import React from 'react'
import header from '../assets/header.svg'
import { Button, Drawer } from 'antd';
import { useState } from 'react';

import {FiMenu} from 'react-icons/fi'
import './navbar.css'

import { Link } from 'react-router-dom';
import ModalO from './Modal';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  



  return (
    <div className='flex justify-between py-[43px] lg:px-[90px] px-[20px]'>
      <img src={header} alt='header' className='w-[180px] sm:w-[233px]' />
      <div className=' w-[65%] justify-between font-[400] hidden lg:flex'>
        <ul className='flex items-center text-[14px] text-[#434343] m-0'>
          <Link to={'/'}>
          <li className='px-[20px] text-[#434343]'>Home</li>
          </Link>
          <Link to={'/place'}>
          <li className='px-[20px] text-[#434343]'>Place to stay</li>
          </Link>
          
          <li className='px-[20px]'>NFTs</li>
          <li className='px-[20px]'>Community</li>
        </ul>
        <ModalO />
      </div>
      <div className='lg:hidden'>
        <Button type="text" onClick={showDrawer}>
          <FiMenu  size={30} color='#A02279' />
        </Button>
      </div>
        
        <Drawer placement="right" onClose={onClose} open={open} width={300}>
          <div className='flex flex-col justify-between font-[700]'>
            <ul className='flex flex-col text-[18px] text-[#434343]'>
            <Link to={'/'} onClick={onClose}>
            <li className='p-[20px] text-[#434343]'>Home</li>
            </Link>
            <Link to={'/place'} onClick={onClose}>
            <li className='p-[20px] text-[#434343]'>Place to stay</li>
            </Link>
              <li className='p-[20px]'>NFTs</li>
              <li className='p-[20px]'>Community</li>
            </ul>
            <ModalO />
          </div>
        </Drawer>
    </div>
  )
}

export default Navbar


// 
// Choose your preferred wallet:
// Metamask
// 