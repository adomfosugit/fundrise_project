'use client'
import React from 'react'
import {Card,CardContent, CardFooter,} from "@/components/ui/card"
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
    const {name,price,Spaceavailable,roomtype,image} = productDetails;
    const { isSignedIn, user, isLoaded } = useUser();

    
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
          {
            display_name:'Hostel Name',
            variable_name:'Name',
            value: `${roomtype}`
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
    <div className='flex flex-col md:flex-row p-3 gap-x-2 bg-red-300' >
        <div>
        <Card className='w-full md:w-1/2 relative mx-auto '>
  
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
  
              <CardContent className='w-full'>
              Property Description 
              </CardContent>
     
              <Button className='w-full mt-9'>
                  <PaystackHookExample />
              </Button> 
              


            </Card>
        </div>

    </div>
   
  )
}

export default Listings