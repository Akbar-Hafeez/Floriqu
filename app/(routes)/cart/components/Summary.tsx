"use client"
import Button from '@/components/ui/Button'
import ProductPrice from '@/components/ui/ProductPrice'
import useCart from '@/hooks/useCart'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Summary:React.FC=() =>{
    
    const items = useCart((state)=>state.items)
    const removeAll = useCart((state)=>state.removeAll)
    const router = useRouter()
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.discountedPrice || item.price)
},0)
    const totalOriginalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
},0)

useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get("success")) {
        toast.success("Payment Completed");
        removeAll();
    }
    if (searchParams.get("cancelled")) {
        toast.error("Something went wrong");
    }
}, [removeAll]);

//     if(searchParams.get("success")){
//         toast.success("Payment Completed")
//         removeAll()
//     }
//     if (searchParams.get("cancelled")) {
//         toast.error("Something went wrong")
//     }
// },[searchParams,removeAll])
const Checkout = async() => {
// Stripe checkout is no longer used.
// const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
//     productIds:items.map((item)=>item.id),
// })
// window.location = response.data.url
router.push('/payment')
}
  return (
    <div className='
    mt-16 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8
    '>
    <h2 className='text-lg font-medium text-stone-100'>Order Summary</h2>
    <div className='mt-6 space-y-4'>
<div className='flex items-center justify-between border-t border-white/10 pt-4'>
<div className='text-base font-medium text-stone-200'>
Order Total

</div>
<ProductPrice price={totalOriginalPrice} discountedPrice={totalPrice}/>
</div>
    </div>
    <Button disabled={items.length === 0} onClick={Checkout} className='w-full mt-6'>
        Checkout
    </Button>
    </div>
  )
}

export default Summary
