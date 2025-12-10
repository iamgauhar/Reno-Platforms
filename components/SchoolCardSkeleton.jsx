import React from 'react'

const SchoolCardSkeleton = () => {
  return (
    <div className='w-full shadow-sm rounded-2xl p-3 pb-6 flex flex-col gap-6 bg-[#fcfcfc] animate-pulse'>
            <div className='h-[200px] rounded-xl overflow-hidden'><img className='h-full w-full object-cover' src={'https://placehold.net/default.png'} alt="School Image" /></div>
            <div className='flex gap-3 flex-col'>
                <h2 className='h-5 w-1/2 bg-gray-100'></h2>
                <div>
                    <p className='h-4 w-10/12 bg-gray-100'></p>
                    <p className='h-4 w-2/3 bg-gray-100 mt-1'></p>
                </div>
            </div>
    </div>
  )
}

export default SchoolCardSkeleton