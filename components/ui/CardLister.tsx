import React from 'react'
import { Button } from './button'
import Link from 'next/link'
//@ts-ignore
const CardLister = ({name}) => {
    console.log(name)
  return (
    <div>
        <Link href={`/explore/${name}`}>
        
        <Button>{name}</Button>
        </Link>
        
    </div>
  )
}

export default CardLister