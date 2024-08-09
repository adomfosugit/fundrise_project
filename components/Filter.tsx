import React from 'react'
import { Button } from './ui/button'

type Props = {}

const Filter = (props: Props) => {
  return (
    <div className='flex justify-between px-3 mb-4'>
        <div>
            <h3 className='text-2xl'> Assets</h3>
        </div>
        <div className='flex gap-x-2'>
           <Button>Active</Button> 
           <Button variant='outline' className='ring-2 ring-primary text-primary'>Closed</Button> 
        </div>
    </div>
  )
}

export default Filter