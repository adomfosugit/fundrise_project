'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { sidebarLinks } from '@/constants'
import { UserButton } from '@clerk/nextjs'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  


const LeftSidebar = () => {

    
  return (
    
    <nav className='hidden shadow-2xl md:flex px-6 py-10 flex-col justify-between min-w-[270px] min-h-screen  top-0  '>
        <div className='flex flex-col gap-11 '>
            <Link href = '/' className='flex gap-3 items-center m-3 content-center mx-auto'>

                <Logo />
            </Link>
<div className='text-center'>

                <UserButton />
                

</div>
            <ul className='flex flex-col gap-6'>
                {sidebarLinks.map((link : { imgURL: string, route: string, label: string}) => {
                        return(
                            <li key={link.label} className='text-center'>
                                <Link href={link.route}>
                                    
                                    <p>{link.label}</p>
                                    </Link>
 
                            </li>
                        )
                })}
            </ul>
        </div> 

    </nav>
  )
}

export default LeftSidebar 