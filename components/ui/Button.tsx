import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
className,
children,
disabled,
type = "button",
...props
}, ref) => {
return(
    <button
    className={cn(`w-auto rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200 px-5 py-3 text-black disabled:cursor-not-allowed disabled:opacity-50 font-semibold shadow-[0_10px_30px_rgba(212,175,55,0.18)] transition hover:brightness-105`,className)}
    ref={ref}
    {...props}
    disabled={disabled}
    >
        {children}
    </button>
)
})

Button.displayName = "Button"
export default Button;
