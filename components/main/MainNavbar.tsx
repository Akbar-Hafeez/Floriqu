"use client"

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"
import React from "react";
interface MainNavbarProps {
    data: Category[];
}
const MainNavbar:React.FC<MainNavbarProps>=({
    data
}) => {
    
    const pathName = usePathname();
    const routes = data.map((route) => ({
        href : `/category/${route.id}`,
        label : route.name,
        active : pathName === `/category/${route.id}`
    }))
    
  return (
    <nav
    className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6"
    >
{routes.map((route) => (
<Link href={route.href} key={route.href} className={cn("text-sm font-medium transition-colors hover:text-amber-200",route.active ? "text-amber-300" : "text-amber-300")} >
{route.label}
</Link>
))}
    </nav>
  )
}
export default MainNavbar
