import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import AnnouncementCard from './AnnouncementCard';
const Schedule = ({ data }) => {
    return (
        <div className='flex flex-col p-3 mt-3 gap-2 border rounded-md schedule'>
            <div className='flex justify-between pt-2 pb-2'>
                <h3 className='font-semibold text-custom-blue-2'>Upcoming Schedule</h3>
                <div className='flex gap-2 items-center border rounded-md p-1 text-xs text-gray-500'>Today, 13 Sep 2021
                    <IoIosArrowDown /></div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-sm text-gray-500'>Priority</span>
                <AnnouncementCard data={data[0]} />
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-sm text-gray-500'>Other</span>
                <AnnouncementCard data={data[1]} />
                <AnnouncementCard data={data[2]} />
            </div>
            <div className='text-red-500 flex justify-center items-center rounded-e-md font-semibold'>Create A New Schedule</div>
        </div>
    )
}

export default Schedule