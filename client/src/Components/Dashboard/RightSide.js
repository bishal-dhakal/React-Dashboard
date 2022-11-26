import React from 'react'
import CustomerReview from './CustomerReview'
import Updates from './Updates'

const RightSide = () => {
  return (
    <div className='RightSide flex flex-col w-[95%] justify-evenly h-full'> 
         <div  className='flex flex-col gap-5'>
            <h3 className='font-bold'>Updates</h3>
            <Updates/>
         </div>
         <div className='flex flex-col gap-5'>
            <h3 className='font-bold'> Customer Review</h3>
            <CustomerReview/>
         </div>
    </div>
  )
}

export default RightSide