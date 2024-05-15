'use client'
import React from 'react'
import {Card,CardContent,CardFooter} from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/client';
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'

type Props = {}

const Listings = ({productDetails}: any) => {

    
    const pathname = usePathname()
    const {name,price,image,marketvalue,Liquidity,description,availableslots} = productDetails;
    const {isSignedIn,user,isLoaded} = useUser();

    
    const router = useRouter()
    
    const handleLoginClick = () => {
        // Save the current pathname to local storage before redirecting to login
        localStorage.setItem('redirectPath', pathname);
        router.push('/sign-in');
      };
    const config = {
      reference: (new Date()).getTime(),
      username: `${user?.fullName}`,
      email: `${user?.emailAddresses}`,
      amount: `${price * 100}`,
      //publicKey: 'pk_live_7b0117b105694184900ff75ce52987cae7c1b04f',
      publicKey: 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a',
      currency: 'GHS',
      metadata:{
        "custom_fields":[
          
          {
            display_name:'PropertyNameName',
            variable_name:'Name',
            value: `${name}`
          },
        
         
        ]
      }
  };
   
  // you can call this function anything
  const onSuccess = (reference:number) => {
    // Implementation for whatever you want to do with reference and after success call.
    router.push('/explore')
    console.log(reference);
  };
  
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  
  const PaystackHookExample = () => {
    //@ts-ignore
      const initializePayment = usePaystackPayment(config);
      return (
        <div className='btn-container'>
            <button  type = 'button' className='btn' onClick={() => {
                //@ts-ignore
                initializePayment(onSuccess, onClose)
            }}>Invest </button>
        </div>
      );
  };
  
  return (
    <div className=' flex flex-col md:flex-row p-3 gap-x-2  px-1 md:px-20' >
        <div className='ring-2 ring-primary mb-1'>
        <Card className='w-full   mx-auto '>
  
  <CardContent className='w-full'>
  <Carousel className='pt-3' >
    <CarouselContent>
    
    {image.map((img:any)=>(

      <img src={urlFor(img).url()} alt='hotel pic'   key={img._key} />
))}  
       
    </CarouselContent >
    <CarouselPrevious  className='mx-[50px] bg-neutral-500/40 hover:bg-neutral-500/40 '/>
    <CarouselNext   className='mx-[50px]  bg-neutral-500/40 hover:bg-neutral-500/40 '/>
  </Carousel>
  </CardContent>

  
 


  


</Card>
        </div>
        <div>
        <Card className='w-full  md:w-[700px] mx-auto '>
  
              <CardContent className='w-full content-center text-center  mr-3mx-auto items-center mt-3'>
              <div className='flex items-center '>
                <p className='font-bold text-lg mr-3'>Location:</p>
                <p className='text-lg'>{name}</p>
                </div>
              <div className='flex items-center'>
                <p className='font-bold text-lg mr-3'>Price:</p>
                <p className='text-lg'>{price}</p>
                </div>
              <div className='flex items-center'>
                <p className='font-bold text-lg mr-3'>Market Value:</p>
                <p className='text-lg'>{marketvalue}</p>
                </div>
              <div className='flex items-center'>
                <p className='font-bold text-lg mr-3'>Liquidity:</p>
                <p className='text-lg'>{Liquidity}</p>
                </div>
              <div className='flex items-center'>
                <p className='font-bold text-lg mr-3'>Description:</p>
                <p className='text-lg'>{description}</p>
                </div>
              <div className='flex items-center'>
                <p className='font-bold text-lg mr-3'>Available Slots :</p>
                <p className='text-lg'>{availableslots}</p>
                </div>
              </CardContent>
     
              <Button className='w-full mt-1 rounded-none'>
                  <PaystackHookExample />
              </Button> 
              


            </Card>
        </div>

    </div>
   
  )
}

export default Listings