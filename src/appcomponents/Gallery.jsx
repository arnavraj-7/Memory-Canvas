import React from 'react'
import Card from './Card'
import { useState } from 'react'
import {motion} from 'motion/react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Gallery = () => {
  const [Cards, setCards] = useState([{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 1",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."},{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 2",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."},{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 3",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."}]);
    
 
  
  return (
    <>
         <motion.div
       initial={{ transform: "translateY(-80px)" }}
       animate={{ transform: "translateY(5px)" 
       }}
       transition={
        { type: "spring", 
          delay:0.1,
          duration:1,
          ease:"anticipate",
          stiffness:200,
          
        }
       
      }
    
      >
        <Alert className={""}>
          <AlertTitle>Successfully Logged in</AlertTitle>
          <AlertDescription>Welcome to Memory Canvas</AlertDescription>
        </Alert>

      </motion.div>
      
    <div className='flex gap-y-2 gap-x-2'>{Cards.map((c)=>{
      return (
        <div key={c.title} className='flex flex-col justify-center items-center'>
          <Card card={c} />
        </div>
       

      )
    })}</div>
    </>

  )
}

export default Gallery