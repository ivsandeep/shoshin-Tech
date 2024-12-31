import React from 'react'
import Trend from '../utils/Trend'

const Card2 = ({ data }) => {
    return (
        <div className='border w-[50%] rounded-md m-3 p-3 font-semibold flex h-[140px]'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-custom-blue-2'>{data.title}</h3>
                <h2 className='text-custom-blue-2 text-3xl '>{data.count}</h2>
                <div className='flex justify-between text-[8px] text-gray-400'>
                    <div className='flex flex-col'>
                        <span>{data.Men}</span>
                        <span>{data.Women}</span>
                    </div>
                    

                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img width={130} src={data.count === '216' ? '/Group 4.png' : '/Group 3.png'} alt=''></img>
            <div className='bg-red-100 text-xs font-semibold text-gray-500 p-1'>{data.growth}</div>
            </div>
        </div>
    )
}

export default Card2