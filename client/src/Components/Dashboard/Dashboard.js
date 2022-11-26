import React from 'react';
import MainDash from './MainDash';
import RightSide from './RightSide';
import Sidebar from './Sidebar';


function Dashboard() {
    return (
       <div className="h-screen flex flex-col justify-center items-center ">
            <div className=' h-[92%] w-[95%] rounded-2xl  grid grid-cols-12 gap-[10px] bg-slate-200'>
                <div className=' col-span-2 '><Sidebar/></div>
                <div className='col-span-7'><MainDash/></div>
                <div className='col-span-3'> <RightSide/></div>
            </div>
     </div>
    );
}

export default Dashboard;
