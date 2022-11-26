import React from 'react'
import Card from './Card/Card'
import { CardsData } from './Data'


const Cards = () => {
  return (
    <div  className='flex gap-10'>
        {CardsData.map(( card, id)=>{
            return(
                <div className=' w-full'>
                    < Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}s
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards