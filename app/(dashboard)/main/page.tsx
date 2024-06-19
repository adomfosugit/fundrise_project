import Bento1 from '@/components/Bento1'
import { client } from '@/lib/client'
import React from 'react'

import Authname from '@/components/Authname';

import { currentUser } from '@clerk/nextjs/server';
import CardLister from '@/components/ui/CardLister';
import ChartExample from '@/components/Chartexample';
import { Button } from '@/components/ui/button';
import Link from 'next/link';





async function getData1() {
  const user = await currentUser();
  //@ts-ignore
  const emailAddresses = user.emailAddresses.map(address => address.emailAddress);

  if (emailAddresses.length === 0) {
    throw new Error('No email addresses found for the user');
  }

  const email = emailAddresses[0];
  
  const data = await client.fetch(
    `(*[_type == "usersData" && email == "${email}"])`,
    {},
    {
      
      
      next: {tags: ['usersData']},
    },
  )


  return data
}
// Dashboard stuff  transactions investments 
const Page = async () => {
  const data = await getData1();

  if (!data || !Array.isArray(data) || !data[0]) {
    return (
      <div className="w-3/4 md:w-[500px] h-[200px]  z-0 ring-2 ring-primary items-center mx-auto content-center mt-5 md:mt-[350px] rounded-xl shadow-primary shadow-2xl">
        <div className="flex-col  m-5">
          <h1 className='text-2xl text-center'>You do not have any investments yet</h1>
          <div>
            
          </div>
          <Link href={'/explore'}>
            <Button className='w-full mt-4' >Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  const investments = data[0].investments;

  return (
    <div className="w-full max-w-4xl mx-auto h-screen z-0 ">
      <div className="flex-col h-screen m-5">
        <div className="mb-4 h-16">
          <div className="flex items-center gap-x-3">
            <h1 className="font-bold text-[30px] tracking-[3px] text-primary">Welcome</h1>
            <Authname />
          </div>
        </div>

        <div className="h-screen flex flex-col md:flex-row  space-x-2 gap-y-3">
         
          <div>
            <h1 className="font-bold text-[30px] text-primary">Investments</h1>
            <div className="flex text-lg bg-green-50 p-7 ring-2 ring-primary mt-4 items-center w-full md:w-[400px]">
              {data.map((list) => (
                <div key={list._id} className="mr-5">
                  <p className="text-primary font-bold">Investment Holder</p>
                  <p className="font-semibold tracking-wide">{list.name}</p>
                </div>
              ))}
              {/* @ts-ignore */}
              {investments.map((inv) => (
                <CardLister key={inv._key} name={inv.current} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Page