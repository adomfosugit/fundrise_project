'use client'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'

const MiniMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
        <MenuIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent>

      <DropdownMenuItem>Sign In</DropdownMenuItem>
      <DropdownMenuItem>Get Started</DropdownMenuItem>
  
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default MiniMenu