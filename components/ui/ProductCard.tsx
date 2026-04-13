"use client"
import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./IconButton"
import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/usePreviewModal"
import useCart from "@/hooks/useCart"
import ProductPrice from "./ProductPrice"



interface ProductCardProps {
    data:Product
}
const ProductCard:React.FC<ProductCardProps> = ({
    data
}) =>{
    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }
    const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
event.stopPropagation()
previewModal.onOpen(data)
    }
    const addToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
event.stopPropagation()
cart.addItem(data)
    }
    return(
        <div onClick={handleClick} className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-3 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition hover:border-amber-400/40 hover:bg-white/[0.07]">
            <div className="aspect-square rounded-xl bg-stone-900 relative overflow-hidden">
                <Image
                src={data?.images?.[0]?.url}
                fill
                alt="Image"
                className="aspect-square rounded-md object-cover "
                />
                <div className="opacity-0 group-hover:opacity-100 transition w-full absolute px-6 bottom-5">
<div className="flex justify-center gap-x-6">
<IconButton onClick={onPreview} icon={<Expand className="text-stone-50" size={20}/>}/>
<IconButton onClick={addToCart} icon={<ShoppingCart className="text-stone-50" size={20}/>}/>
</div>
                </div>
            </div>
            <div >
<p className="font-semibold text-lg text-stone-100">{data.name}</p>
<p className="text-stone-400 text-sm">{data.category?.name}</p>
            </div>
            <div className="flex items-center justify-between">
<ProductPrice price={data?.price} discountedPrice={data?.discountedPrice}/>
            </div>
        </div>
    )
}
export default ProductCard
