import { bottombarLinks } from '@/constants';
import Link from 'next/link';
import React from 'react'

const Bottombar = () => {
  return (
    <section className=" z-50 flex-between flex w-full sticky bottom-0 rounded-t-[20px] bg-dark-2 px-5 py-4 md:hidden">
    {bottombarLinks.map((link) => {
      
      return (
        <Link
          key={`bottombar-${link.label}`}
          href={link.route}
          className={` 
           flex-center flex-col gap-1 p-2 `}>
          

          <p className="tiny-medium text-light-2">{link.label}</p>
        </Link>
      );
    })}
  </section>
  )
}

export default Bottombar