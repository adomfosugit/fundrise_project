'use client'
import React from 'react'
import { useUser } from "@clerk/nextjs";
const Authname = () => {
    const { isLoaded, isSignedIn, user } = useUser(); 
  return (
    <div className='text-[30px]'>
        {user?.firstName}
    </div>
  )
}

export default Authname