import React, { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './card.css'
import { UilTimes } from "@iconscout/react-unicons"
import Chart from 'react-apexcharts';


const Card = (props) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <AnimateSharedLayout>
        {
          expanded ? (
            <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
          ) :
            <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        }
      </AnimateSharedLayout>
    </div>
  )
}

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div className='Compactcard flex flex-1 !h-22 rounded-xl text-white relative cursor-pointer p-4' style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}
      onClick={setExpanded}
      layoutId='expandableCard'
    >
      <div className='radialBar flex flex-1 flex-col justify-end  gap-4'>
        <CircularProgressbar className='!w-16'
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className='detail  flex flex-1 flex-col justify-between items-end'>
        <span> <Png /> </span>
        <span className='text-xl font-bold'>${param.value}</span>
        <span className='text-xs'>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

//ExpandedCard
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: 'auto',
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },

      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },

      stoke: {
        curve: 'smooth',
        colors: ['white'],
      },

      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },

      grid: {
        show: true,
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2022-07-19T00:00:00.000Z",
          "2022-07-19T01:30:00.000Z",
          "2022-07-19T02:30:00.000Z",
          "2022-07-19T03:30:00.000Z",
          "2022-07-19T04:30:00.000Z",
          "2022-07-19T05:30:00.000Z",
          "2022-07-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div className="ExpandedCard absolute w-3/5 h-[70vh] z-10 left-[13rem] rounded-2xl flex flex-col justify-between items-center p-4 "
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
      layoutId="expandableCard"
    >
      <div className="self-end cursor-pointer text-white font-bold ">
        <UilTimes onClick={setExpanded}  />
        </div>
        <span className='text-white text-[26px] '> {param.title}</span>
        <div className="ChartContainer w-[70%] ">
          <Chart series={param.series} type='area' options={data.options} />    
        </div>
        <span className=" text-white text-[16px]" > Last 24 hours</span>
    </motion.div>
  )
}



export default Card