import React from 'react'
import AnnouncementCard from './AnnouncementCard'
import { IoIosArrowDown } from "react-icons/io";

const Announcement = ({data}) => {
  return (
    <div className='border rounded-md border-gray-200 p-3 m-2 gap-1'>
        <div className='flex justify-between pt-2 pb-2'>
            <h3 className='font-semibold text-custom-blue-2'>Announcement</h3>
            <div className='flex gap-2 items-center border rounded-md p-1 text-xs text-gray-500'>Today, 13 Sep 2021
            <IoIosArrowDown/></div>
        </div>
        <div className='flex flex-col gap-2'>
            <AnnouncementCard data={data[0]}/>
            <AnnouncementCard data={data[1]}/>
            <AnnouncementCard data={data[2]}/>
        </div>
        <div className='text-red-500 flex justify-center items-center rounded-md font-semibold pt-2'>See All Announcement</div>
    </div>
  )
}

export default Announcement