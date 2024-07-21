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
    className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
{routes.map((route) => (
<Link href={route.href} key={route.href} className={cn("text-sm font-medium hover:text-black transition-colors",route.active ? "text-black dark:text-white" : "text-neutral-500")} >
{route.label}
</Link>
))}
    </nav>
  )
}
export default MainNavbar