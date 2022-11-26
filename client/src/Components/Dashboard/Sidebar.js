import React from 'react'
import Logo from '../../asset/OIP.jpeg';
import { SidebarData } from './Data';
import {UilSignOutAlt} from  '@iconscout/react-unicons'

const Sidebar = () => {
  return (
    <div>

        <div className=" flex justify-between  mt-10 ml-5 mr-[60px]  items-center ">
              <img src={Logo} alt='' className=' h-20 w-20 rounded-lg'/>
              <div className="text-base font-medium ">Shop</div>
        </div>
        <div className=' flex flex-col mt-12 ml-5  gap-10'>
              {SidebarData.map((item, index ) => {
                return(
                    <div className='flex flex-row gap-5 '>
                    <item.icon/>
                    <span>
                     {item.heading}
                    </span>
                    </div>
                )
             })}

             {/* Signout icon */}
            <div className='absolute bottom-16 w-full'  >
            <UilSignOutAlt/>
         </div>
          
        </div>
    </div>
  )
}

export default Sidebar

export const CardsData = [
  {
    title:"Sales",
    color:{
       backGroung :'Linear-gradient(180deg, #bb67ff 0% , #c484f3 100)',
       boxShadow: '0px 10px 20px 0px #e0c6f5'
    }
  }
]
