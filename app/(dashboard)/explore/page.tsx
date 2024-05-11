import CardList from '@/components/CardList'
import { client } from '@/lib/client'
import React from 'react'


async function getData() {
  const data = await client.fetch(
    `(*[_type == "propertyData"])`,
    {},
    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      
      next: {tags: ['propertyData']},
    },
  )

  return data
}

const page = async() => {
  const data =  await getData()
  console.log(data)
  return (
    <div className='flex justify-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
    <div className='pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {/* @ts-ignore */}
    {data.map((list)=> (
    <CardList key={list._id} productDetails={list} />
    
    ))}
    </div>
    

  </div>
  )
}

export default page