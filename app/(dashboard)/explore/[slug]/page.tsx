import { client } from "@/lib/client";

import Listings from "./Listings";
import Geopoint from "./Geopoint";


interface GetDataParams {
    params: {
      path: string;
    };
  }
async function getData({ params: { path } }: GetDataParams){
    const query = `*[_type== "propertyData" && slug.current == '${path}'][0]`;
   // @ts-ignore
    const products = await client.fetch(query,  {cache:'force-cache'});
    return products; 
  }
export default async function Page({ params }: { params: { slug: string } }) {
    const products = (await getData({params: {path:params.slug}})) 
  console.log(products)
    return(
        <div className="flex-col pt-24  justify-between  w-full h-screen ">
        <div>

        <Listings productDetails={ products}/> 
        </div>
<div>

         <Geopoint productDetails={ products}/>
</div>
        </div>
        )
  }
  //static rendering 