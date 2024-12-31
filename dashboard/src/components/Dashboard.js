import '../App.css';
import React from 'react'
import { data, data2, data3, data4 } from '../utils/data'
import Card from './Card'
import Card2 from './Card2'
import Activity from './Activity'
import Announcement from './Announcement'
import Schedule from './Schedule'
const Dashboard = () => {
    return (
        <div className='w-full h-full m-4 flex gap-2 dashboard'>
            <div className='w-[60%]  h-1/2'>
                <div>
                    <span className='font-semibold text-lg text-custom-blue-2 pl-4'>Dashboard</span>
                    <div className='flex justify-center'>
                        <Card data={data[0]} bgColor='bg-red-100' textColor='text-red-400' />
                        <Card data={data[1]} bgColor='bg-blue-100' textColor='text-blue-400' />
                        <Card data={data[2]} bgColor='bg-pink-100' textColor='text-pink-400' />
                    </div>
                    <div className='flex justify-center '>
                        <Card2 data={data2[0]} />
                        <Card2 data={data2[1]} />
                    </div>

                </div>
                <Announcement data={data3} />
            </div>
            <div className='w-[37%] flex flex-col right-side-bar'>
                <Activity />
                <Schedule data={data4} />
            </div>


        </div>
    )
}

export default Dashboard