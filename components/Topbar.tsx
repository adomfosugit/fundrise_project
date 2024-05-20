import React from 'react'
import { Button } from './ui/button'
import Logo from './Logo'
import Link from 'next/link'

const Topbar = () => {
  return (
    <nav className=' p-3 px-8 flex bg-white justify-between items-center shadow-xl sticky top-0 z-10'>
        <div>
            <Logo />
        </div>
        <div className='space-x-2 hidden md:block'>
            <Link href='/sign-in'>
            <Button>Sign In</Button>
            </Link>
            <Link href= '/sign-up'>
            <Button variant={'outline'} className='ring-2  ring-[#E94908] text-[#E94908]'>Get Started</Button>
            </Link>
        </div>
    </nav>
  )
}

export default Topbar