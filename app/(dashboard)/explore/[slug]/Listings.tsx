'use client'
import React from 'react'
import {Card,CardContent} from "@/components/ui/card"
import { Carousel,CarouselContent,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { urlFor } from '@/lib/client';
import emailjs from '@emailjs/browser';
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from '@/components/ui/toast';
import { useUser } from '@clerk/nextjs';

const Id = () => {
  return Date.now().toString();
};


const pay = (slots:number,price:number) => {
  return (price/slots).toFixed(2)
};
 


const PaystackHookExample = ({slots,price}: {
  slots:number;
  price:number;
}) => {
  const { user} = useUser(); 
  const handleSubmit =  () => {
    try {
   
  
     emailjs.send(
        'service_ajgijg9',
        'template_3c00wb7',
        {
          from_name: "Kamsol Trustee",
          to_name: `${user?.firstName}`,
          email: `${user?.primaryEmailAddress}`,
          message: `Pay GHC ${pay(slots,price)} to our Bank account xxxxxxxxx with reference ${Id()}`,
        },
        'JRIwRiuqHOrgTy_Mg'
      );
  
      // Render a toast notification on successful email send
      toast({
        variant: "default",
        title: "Successful",
        description: "Please check your email for payment proceedings.",
        className: 'bg-primary text-white'
      });
    } catch (error) {
      // Handle errors (e.g., log the error, show an error toast, etc.)
      console.log('Error sending email:', error);
      toast({
        variant: "destructive",
        title: " Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  return (
    <div className='btn-container'>
    <button className='w-full mt-1 rounded-none bg-primary p-4 text-white text-lg font-semibold tracking-wide' onClick={handleSubmit}>
        Invest
      </button>
    </div>
  );
};
const Listings = ({productDetails}: any) => {
     
const {name,price,image,marketvalue,Liquidity,description,availableslots} = productDetails;

  return (
    <div className='max-w-6xl mx-auto'>
    <div className=' flex flex-col md:flex-row p-3 gap-x-2  px-1 md:px-2 ' >
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
     
              
                  <PaystackHookExample  slots = {availableslots} price = {price}/>
                     


            </Card>
        </div>

    </div>
   </div>
  )
}

export default Listings