import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
} from '@iconscout/react-unicons';

import img1 from '../../asset/OIP.jpeg'


export const SidebarData =[
    {
        icon:UilEstate,
        heading:'Dashboard',
    },
    {
        icon:UilClipboardAlt,
        heading: 'Orders',
    },
    {
        icon:UilUsersAlt,
        heading:'Customers',
    },
    {
        icon:UilPackage,
        heading:'Products',
    },
    {
        icon:UilChart,
        heading:'Analytics',
    }
]

export const CardsData =[
    {
        title:'Sales',
        color:{
            backGround: "linear-gradient(180deg, #bb67ff 0% , #c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        barValue:70,
        value:'25,970',
        png:UilUsdSquare,
        series:[
            {
                name: "sales",
                data:[31,40,28,51,42,109,100]
            }
        ]
    },{
        title:'Revenue',
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0% , #FC929D 100%)",
            boxShadow: "0px 10px 20px #FDC0C7",
        },
        barValue:80,
        value:'14,270',
        png:UilMoneyWithdrawal,
        series:[
            {
                name: "Revenue",
                data:[31,40,28,51,42,109,100]
            }
        ]
    },{
        title:'Expenses',
        color:{
            backGround: "linear-gradient(180deg, #bb67ff 0% , #c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        barValue:70,
        value:'25,970',
        png:UilClipboardAlt,
        series:[
            {
                name: "Expenses",
                data:[31,40,28,51,42,109,100]
            }
        ]
    }
]

export const UpdatesData =[
    {
        img:img1,
        name:'no Name',
        noti:'has ordered chowemein 2 plates',
        time:'30 seconds ag0',
    }, 
    {
        img:img1,
        name:'no Name',
        noti:'has ordered chowemein 2 plates',
        time:'30 seconds ag0',
    },  
    {
        img:img1,
        name:'no Name',
        noti:'has ordered chowemein 2 plates',
        time:'30 seconds ag0',
    },   
]