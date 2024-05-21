import { client } from "@/lib/client";

import Listings from "./Listings";
import Geopoint from "./Geopoint";
import ChartExample from "@/components/Chartexample";


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
        <div className="flex-col   justify-between  w-full h-screen ">
        <div>

        <Listings productDetails={ products}/> 
        </div>
<div className="flex flex-col md:flex-row md:px-20">
  <div className="w-full md:w-1/2">

         <Geopoint productDetails={ products}/>
  </div>
  <div className="w-full md:w-1/2">
        <ChartExample />
  </div>

       
</div>
        </div>
        )
  }
  //static rendering 