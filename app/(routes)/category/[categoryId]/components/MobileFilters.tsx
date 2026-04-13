"use client"
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import { Color, Size } from '@/types'
import { Dialog } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import Filter from './Filter'

interface MobileFiltersProps{
    sizes : Size[],
    colors : Color[]
}
const MobileFilters:React.FC<MobileFiltersProps> = ({
sizes,
colors
})=> {
    const [open,setOpen] = useState(false)
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
  return (
    <>
    <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={20}/>
    </Button>
    <Dialog open={open} as='div' onClose={onClose} className='relative z-40 lg:hidden'>
        {/* background */}
        <div className='fixed inset-0 bg-black bg-opacity-25'/>
{/* Dialog Position */}
<div className='fixed inset-0 z-40 flex'>
<Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto border-l border-white/10 bg-stone-950 py-4 pb-6 text-stone-100 shadow-xl'>
{/* Close Button */}
<div className='flex items-center justify-end px-4'>
<IconButton onClick={onClose} icon={<X size={15}/>}/>
</div>
{/* render the filter */}
<div className='p-4'>
    {/* <Filter/> */}
<Filter
    valueKey="sizeId"
    name="Sizes"
    data={sizes}
    />
    <Filter
    valueKey="colorId"
    name="Color"
    data={colors}
    />
</div>
</Dialog.Panel>
</div>
    </Dialog>
    </>
  )
}

export default MobileFilters
