import React from 'react'
const Card = ({data, bgColor, textColor}) => {
  return (
    <div className={`flex m-2 flex-col w-[30%] ${bgColor} } rounded-lg p-3  gap-2`}>
        <h3 className='text-custom-blue-2 font-semibold text-md'>{data.title}</h3>
        <h3 className='text-custom-blue-2 font-semibold text-2xl'>{data.count}</h3>
        <h3 className={`${textColor} text-sm`}>{data.desc}</h3>
    </div>
  )
}

export default Card