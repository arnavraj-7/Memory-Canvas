import { useActiveUser } from '@/contexts/ActiveUser'
import React from 'react'
import { useState } from 'react'

const Carousel = () => {
   const {uploads} =useActiveUser()
   const {bgimage,setbgimage}=useState()

  return (
    <div className={`h-screen [background-image:url(${bgimage})]`}>
       {
      uploads.map((upload)=>{

         return  (<img src={upload.url} alt="" />)
      })     
    } 
        <div className='center-img'>
        
            <div>

            </div>

        </div>




    </div>
  )
}

export default Carousel