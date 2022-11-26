import React from 'react'
import { UpdatesData } from './Data'

const Updates = () => {
    return (
        <div className='Updates w-[85%] bg-white rounded-lg p-[1rem] gap-[1-rem] flex flex-col text-[13px]'>
            {UpdatesData.map((update) => {
                return (
                    <div className='update flex gap-[0.5rem] '>
                        <img src={update.img} alt='' className='w-[3.2rem] h-[3rem]' />
                        <div className='noti'>
                            <div>
                                <span className=' mb-[0.5rem] font-bold'> {update.name}</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates