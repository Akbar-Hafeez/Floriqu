import Image from 'next/image' 
import { Tab } from '@headlessui/react'
import { Image as ImageType} from '@/types'
import React from 'react'
import { cn } from '@/lib/utils'

interface GalleryProps{
    image:ImageType
}
const GalleryTab:React.FC<GalleryProps>=({
    image
})=>{
    return(
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md border border-white/10 bg-white/5">
{({selected}) =>(
    <div>
        <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            <Image
            className='object-cover object-center'
            src={image.url}
            fill
            alt='Image'
            />
        </span>
        <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2 ring-offset-stone-950",selected ? "ring-amber-300" : "ring-transparent")}/>
    </div>
    )}
        </Tab>
    )
}
export default GalleryTab
