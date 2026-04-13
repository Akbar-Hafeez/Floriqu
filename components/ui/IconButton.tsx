import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'
interface IconButtonProps {
  onClick?:MouseEventHandler<HTMLButtonElement> | undefined;
  icon:React.ReactElement;
  className?:string
}
const IconButton:React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className
}) => {
  return (
    <button
    onClick={onClick}
    className={cn("rounded-full flex items-center justify-center border border-white/10 bg-black/70 text-stone-100 shadow-md p-2 transition hover:scale-110 hover:border-amber-400/40 hover:text-amber-200",className)}
    >
{icon}
    </button>
  )
}
export default IconButton
