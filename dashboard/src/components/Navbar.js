import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";

import '../../src/App.css'
const Navbar = () => {
  return (
    <div className='relative m-2 '>
      <div className='flex w-full p-2 justify-between items-center border-b-[1px] '>
        <div className='right-[100px] flex justify-center items-center gap-2'>
          <FiMenu className='text-gray-500 menu-icon'/>
          <input className='border p-1  rounded-md w-[300px]' type='text' placeholder='Search'></input>
          <CiSearch className='absolute flex justify-center items-center text-lg font-bold left-[280px] top-3 text-gray-400' />

        </div>

        <div className='flex gap-3 items-center'>
          <IoNotifications className='text-gray-400 text-xl notification' />
          <VscBellDot className='bell' />
          <div className=' absolute h-2 w-2 bg-red-500 rounded-full top-5 right-[230px]'  ></div>
          <RiMessage2Fill className='text-gray-400 text-xl' />
          <img width={38} src='/Mask Group.png' alt=''></img>
          <span className='text-custom-blue-2 font-semibold name'> Admirra John</span>
          <IoIosArrowDown className='text-gray-500 mt-1' />

        </div>
      </div>
    </div>
  )
}

export default Navbar