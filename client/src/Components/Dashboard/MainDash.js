import React from 'react'
import Cards from './Cards'
import Table from './Table/Table'
const MainDash = () => {
  return (
    <div className='h-full flex flex-col justify-evenly '>
        <h2 className="font-bold text-4xl">Dashboard</h2>
        <Cards/>
        <Table/>   
    </div>
  )
}

export default MainDash