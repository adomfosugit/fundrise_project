import React from 'react'
import {
    Card,
    
  } from "@/components/ui/card"
import Image from 'next/image'
  

const Bento3 = () => {
  return (
    <Card className='h-full shadow-xl'>
  
    <div className='flex w-full h-full bg-red-200'>

      <Image src= '/investme.jpg' alt='picture' width={200} height={200} className='w-full h-full'/> 
    </div>
  
  </Card>
  
  )
}

export default Bento3