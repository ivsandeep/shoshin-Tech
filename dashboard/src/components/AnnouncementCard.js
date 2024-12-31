import React from 'react'
import { RxDrawingPinFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";

const AnnouncementCard = ({data}) => {
  return (
    <div className={`border rounded-md flex justify-between bg-gray-50 ${data.time==='Today - 09.15 AM'?'hide':''} `}>
        <div className='flex flex-col gap-1 p-2'>
        <h3 className='text-sm'>{data.title}</h3>
        <span className='text-[10px] text-gray-500'>{data.time}</span>

        </div>
        <div className='flex text-gray-400 gap-2 items-center justify-center p-2'>
        <RxDrawingPinFilled size={20}/>
        <BsThreeDots  size={20} />

        </div>
    </div>
  )
}

export default AnnouncementCard