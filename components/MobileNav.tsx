import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Logo from './Logo'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { sidebarLinks } from '@/constants'
import { IoMdMenu } from 'react-icons/io'


const MobileNav = () => {
  
  return (
    <div className='md:hidden top-0   p-2 shadow-lg flex items-center justify-between z-50'>
      <div><Logo /></div>
      <div>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <IoMdMenu size={30} />
    </MenubarTrigger>
    <MenubarContent>
    <ul className='flex flex-col gap-6'>
                {sidebarLinks.map((link : { imgURL: string, route: string, label: string}) => {
                        return(
                            <MenubarItem key={link.label} className='text-center'>
                                <Link href={link.route}>
                                    
                                    <p>{link.label}</p>
                                    </Link>
 
                            </MenubarItem>
                        )
                })}
            </ul>
            <MenubarSeparator />

            <MenubarItem className='flex'>

            <UserButton /> 
            </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

      </div>
        
    </div>
  )
}

export default MobileNav