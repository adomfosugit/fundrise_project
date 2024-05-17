import React from 'react'
import Bento1 from './Bento1'
import Bento2 from './Bento2'
import Bento3 from './Bento3'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className=' rounded-sm shadow-xl h-[600px] p-4 ring-2 ring-primary flex gap-x-2'>
        <div className='w-1/2 space-y-2 flex-1'>
            <div className='h-1/4 rounded-2xl'>
                <Bento1/>
            </div>
            <div className='h-1/2 rounded-2xl'>
                <Bento2 />
            </div>
            <div className='text-center'>
                <Link href='/sign-up'>
                
                <Button className='mt-5'>Get Started</Button>
                </Link>
            </div>
        
        
        </div>
        <div  className='hidden md:block w-1/2  rounded-2xl'>
            <Bento3 />
        </div>
    </div>
  )
}

export default HeroSection