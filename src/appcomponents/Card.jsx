import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
const Card = ({card})=>{
  // const Card={img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Grassland",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."}
  return (
  
      <div className='flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-4 gap-y-2 rounded h-auto w-60'>
        <img src={card.img} alt="" className=' ease-in-out duration-200 rounded-md object-cover hover:scale-105' />
        <p className='text-2xl'>{card.title}</p>
        <p className='text-gray-500'>{card.description}</p>
      </div>
  )
}

export default Card