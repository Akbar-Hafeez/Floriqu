"use client"
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Size,Color } from '@/types';
import { useRouter,  useSearchParams } from 'next/navigation';
import qs from 'query-string'
import React from 'react'
interface FilterProps{
    data:( Size | Color)[];
    name:string;
    valueKey:string;
}
const Filter:React.FC<FilterProps> =({
    data,
    name,
    valueKey
}) =>{
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valueKey)
    const onClick = (id:string) => {
    const current = qs.parse(searchParams.toString())
    const query = {
      ...current,
      [valueKey]:id
    }
    if(current[valueKey]===id){
      query[valueKey] = null
    }
    const url = qs.stringifyUrl({
      url:window.location.href,
      query
    },{skipNull:true})
    router.push(url)
    }
  return (
    <div className='mb-8 '>
      <h3 className='text-lg font-semibold text-stone-100'>{name}</h3>
      <hr className='my-4 border-white/10'/>
      <div className='flex flex-wrap gap-2'>
{data.map((filter)=>(
  <div key={filter.id} className='flex items-center'>
<Button onClick={() => onClick(filter.id)} className={cn("rounded-md border border-white/10 bg-white/5 p-2 text-sm text-stone-50 shadow-none",selectedValue === filter.id && "border-amber-400/50 bg-amber-300 text-black")}>
  {filter.name}
</Button>
  </div>
))}
      </div>
    
    </div>
  )
}

export default Filter
