import React from 'react'

const SchoolCard = ({imageUrl, name, address, city}) => {
  return (
     <div className='w-full shadow-sm rounded-2xl p-3 pb-6 flex flex-col gap-6 shadow-[0px_0px_1.5px_0px_#0C1A4B3D;] cursor-pointer'>
            <div className='h-[200px] rounded-xl overflow-hidden'><img className='h-full w-full object-cover' src={imageUrl ? `/schoolImages/${imageUrl}` : 'https://placehold.net/default.png'} alt="School Image" /></div>
            <div className='flex gap-3 flex-col'>
                <h2 className='font-semibold text-[#16192C] leading-[130%] text-[16px]'>{name}</h2>
                <div>
                    <p className='font-normal text-[14px] leading-[150%] text-[#425466]'>{address}</p>
                    <p className='font-normal text-[14px] leading-[150%] text-[#425466]'>{city}</p>
                </div>
            </div>
    </div>
  )
}

export default SchoolCard