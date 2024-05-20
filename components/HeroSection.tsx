import React from 'react'
import Bento1 from './Bento1'
import Bento2 from './Bento2'
import Bento3 from './Bento3'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className=' flex h-full p-4  flex-col  md:flex-row  '>
        <div className='w-full'>
            <div className='mt-6 md:mt-3 content-center'>
                <Bento1/>
            </div>
           
            <div className='text-center w-full'>
                <Link href='/sign-up'>
                
                <Button className='mt-5 mb-2 w-full p-8 font-bold text-[20px] md:w-[200px]'>Sign Up</Button>
                </Link>
            </div>
        
        
        </div>
        <div  className=' w-full'>
            <Bento3 />
        </div>
    </div>
  )
}

export default HeroSection