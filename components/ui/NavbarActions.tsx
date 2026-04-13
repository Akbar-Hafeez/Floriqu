"use client"
import React, { useEffect, useState } from 'react'
import Button from "./Button"
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
interface NavbarActionsProps {
  className?: string
}
export default function NavbarActions({ className }: NavbarActionsProps) {
  const cart = useCart()
  const router = useRouter()
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    
  return (
    <div className={cn('ml-auto flex items-center gap-x-4', className)}>
     <Button onClick={()=> router.push("/cart")} className='flex items-center rounded-full bg-black px-4 py-2'>
       <ShoppingCart
       size={20}
       color='white'
       />
       <span className='ml-2 text-sm font-medium text-white'>
        {cart.items.length}
       </span>
     </Button>
    </div>
  )
}
