import React from 'react'

const Activity = () => {
  return (
    <div className='m-3'>
        <div className='flex flex-col text-gray-100 bg-custom-blue-3 rounded-lg h-[200px] activity'>
            <h3 className='bg-custom-blue-2 text-md pl-5 pt-3 pb-3  rounded-t-lg rounded-b-none'>Recent Activity</h3>
            <div className='flex flex-col pl-5 pr-5 notify'>
                <span className='text-[10px] text-gray-400'>10.40 AM, Fri 10 Sept 2021</span>
                <h3 className='text-md font-semibold text-white '> You Posted a New Job</h3>
                <p className='text-[11px] text-gray-300'>Kindly check the requirements and terms of work and make sure everything is right.</p>
            </div>
            <div className='flex gap-3 pt-5 pb-5 pl-1 items-center justify-around last'>
                <h4 className='text-[14px]'>Today you makes 12 Activity</h4>
                <button className='flex rounded-md p-1 pl-2 pr-2 bg-red-500 text-white'>See All Activity</button>
            </div>
        </div>
    </div>
  )
}

export default Activity