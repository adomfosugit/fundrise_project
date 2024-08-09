import CardList from '@/components/CardList'
import Filter from '@/components/Filter'
import { client } from '@/lib/client'
import React from 'react'


async function getData() {
  const data = await client.fetch(
    `(*[_type == "propertyData"])`,
    {},

    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      
      next: {revalidate:0},
    },
  )

  return data
}

const page = async() => {
  const data =  await getData()
  console.log(data)
  return (

    <div className='flex flex-col pt-20 md:pt-0'>
      
    <div className= 'h-5 mb-6'>
      <h1 className='text-center p-2 font-bold font-sans text-xl md:text-3xl'>Explore all projects in our portfolio</h1>
      <div className='max-w-4xl mx-auto'>
        <Filter />
      </div>
    </div>
    <div className='flex justify-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      <div className='pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  space-x-5'>
        {/* @ts-ignore */}
      {data.map((list)=> (
      <CardList key={list._id} productDetails={list} />
      
      ))}
      </div>
      
  
    </div>
    </div>
  )
}

export default page