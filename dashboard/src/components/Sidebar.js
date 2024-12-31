import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import '../App.css'
const Sidebar = () => {
  return (
    <div className='w-[15%] bg-gray-50 side-bar'>
      <div className='flex flex-col p-1 option'>
        <div className='p-5 flex gap-2 justify-center items-center'>
          <img width={30} src={'/Group 2770.png'} alt=''></img>
          <span className='text-custom-blue text-xl font-semibold icon'>Vasitum</span>
        </div>
        <div className='flex p-4 flex-col gap-4 text-gray-400 option'>
          <span className='font-semibold text-xs menu'>MAIN MENU</span>
          <div className='flex flex-col gap-[15px]'>
            <div className='flex text-red-400 gap-[16px] items-center cursor-pointer'>
              <MdDashboard  size={18}/>
              <span className='font-semibold icon'>Dashboard</span>
            </div>
            <div className='flex gap-[16px] items-center cursor-pointer'>
              <MdPersonAddAlt1 />

              <span className='icon'>Recruitment</span>
            </div>
            <div className='flex gap-[16px] items-center cursor-pointer'>
              <BiSolidCalendarEvent />

              <span className='icon'>Schedule</span>
            </div>
            <div className='flex gap-[16px] items-center cursor-pointer'>
              <TiGroup />

              <span className='icon'>Employee</span>
            </div>
            <div className='flex gap-[16px]  items-center'>
              <img className='text-gray-400' width={17} src={'ic_department.png'} alt=''></img>
              <span className='icon'>Department</span>
            </div>
          </div>
          <span className=' mt-4 font-semibold text-xs menu'>OTHER</span>
          <div className=' flex flex-col gap-[15px]'>
          <div className='flex gap-[16px]  items-center cursor-pointer'>
          <BiSupport />

              <span className='icon'>Support</span>
            </div>
            <div className='flex gap-[16px]  items-center cursor-pointer'>
            <IoMdSettings />


              <span className='icon'>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar