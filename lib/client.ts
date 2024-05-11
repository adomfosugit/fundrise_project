
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: '8asykd6w',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn:false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})
const builder = imageUrlBuilder(client);
export const urlFor = (source:string) => builder.image(source);