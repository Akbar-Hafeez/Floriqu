import Image from "next/image";
import { Billboard as BillboardType } from "@/types";
interface BillboardProps{
    data:BillboardType
}
const BillboardComponent: React.FC<BillboardProps>=({
    data
})=>{
    return(
<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div className="rounded-2xl relative aspect-square md:aspect-[2.4/1] overflow-hidden border border-white/10 bg-gradient-to-br from-stone-950 via-black to-stone-900 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
<Image
    src={data?.imageUrl}
    alt={data.label}
    fill
    className="object-contain"
    sizes="(min-width: 768px) 100vw, 100vw"
/>
<div className="absolute inset-0 bg-gradient-to-r from-black/8 via-transparent to-transparent"/>
<div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center gap-y-8 px-6">
<div className="font-semibold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">{data.label}</div>
</div>
    </div>
</div>
    )
}
export default BillboardComponent
