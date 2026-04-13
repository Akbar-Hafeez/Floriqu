"use client"
import IconButton from '@/components/ui/IconButton'
import useCart from '@/hooks/useCart'
import { Product } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ProductPrice from '@/components/ui/ProductPrice'
interface CartItemProps{
    data:Product
}
const CartItem:React.FC<CartItemProps> =({
    data
}) =>{
    const cart = useCart()
    const onRemove = () => {
        cart.removeItem(data.id)
    }
  return (
    <li className='flex rounded-2xl border border-amber-400/35 bg-white/5 px-4 py-6 shadow-[0_20px_60px_rgba(212,175,55,0.08)] backdrop-blur-sm'>
     <div className='relative h-24 w-24 rounded-md overflow-hidden border border-white/10 sm:h-48 sm:w-48'>
<Image
fill
className='object-center object-cover'
src={data.images[0].url}
alt='image'
/>
     </div>
     <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
<IconButton icon={<X size={15}/>} onClick={onRemove}/>
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
<div className='flex justify-between'>
<p className='text-lg font-semibold text-stone-100'>
    {data.name}
</p>
</div>
<div className='mt-1 flex text-sm'>
<p className='text-stone-400'>{data.color.name}</p>
<p className='text-stone-400 ml-4 border-l border-white/10 pl-4'>{data.size.name}</p>
</div>
<ProductPrice price={data.price} discountedPrice={data.discountedPrice}/>
        </div>
     </div>
    </li>
  )
}

export default CartItem
