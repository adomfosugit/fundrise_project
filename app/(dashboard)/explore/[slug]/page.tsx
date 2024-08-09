import { client } from "@/lib/client";

import Listings from "./Listings";
import Geopoint from "./Geopoint";
import ChartExample from "@/components/Chartexample";
import { Card, CardContent, CardTitle } from "@/components/ui/card";


interface GetDataParams {
    params: {
      path: string;
    };
  }
async function getData({ params: { path } }: GetDataParams){
    const query = `*[_type== "propertyData" && slug.current == '${path}'][0]`;
   // @ts-ignore
    const products = await client.fetch(query, {},{
      next: {revalidate:0},
    });
    return products; 
  }
export default async function Page({ params }: { params: { slug: string } }) {
    const products = (await getData({params: {path:params.slug}})) 
  console.log(products)
    return(

      <div className="flex-col pt-20 md:pt-0 max-w-6xl mx-auto ">
        <div className="m-2">
          <h1 className="text-center font-bold text-2xl md:text-4xl">{products.name}</h1>
        </div>
        <div className="flex-col  justify-between  w-full h-screen pt-20 md:pt-0 ">
        <div>
        <Listings productDetails={ products}/> 
        </div>
        <div className="p-4">
        <p className="font-bold">Investment Update</p>
          <p>
          Real estate investment is often seen as
           a cornerstone of wealth building. From residential
            properties to commercial spaces, the opportunities 
            for growth are vast. Location remains a key factor,
             with properties in high-demand areas often appreciating
              in value more quickly. However, real estate markets can 
              be unpredictable, influenced by economic shifts, interest rates, 
              and local development projects. Investors must stay informed and 
              adaptable, balancing risk with potential returns. Whether flipping
               homes or renting out properties, a strategic approach can yield significant
                rewards. In the long term, real estate often provides a stable and tangible asset in an investor's portfolio. 
          </p>
        </div>
        <div className="p-4">
          <p className="font-bold">Progress Update</p>
          <p>
          Real estate investment is often seen as
           a cornerstone of wealth building. From residential
            properties to commercial spaces, the opportunities 
            for growth are vast. Location remains a key factor,
             with properties in high-demand areas often appreciating
              in value more quickly. However, real estate markets can 
              be unpredictable, influenced by economic shifts, interest rates, 
              and local development projects. Investors must stay informed and 
              adaptable, balancing risk with potential returns. Whether flipping
               homes or renting out properties, a strategic approach can yield significant
                rewards. In the long term, real estate often provides a stable and tangible asset in an investor's portfolio. 
          </p>
        </div>
<div className="flex flex-col ">
  <div className="w-full mb-5">
          <p className="font-bold text-2xl">Location</p>
         <Geopoint productDetails={products}/>
  </div>
  <div className="w-full flex flex-col space-x-5 bg-slate-200 ">
    
        <ChartExample productDetails = {products} />
        
  </div>

       
</div>
        </div>
      </div>
        )
  }
  