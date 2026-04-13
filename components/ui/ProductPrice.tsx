"use client"

import Currency from "./Currency"

interface ProductPriceProps {
    price?: string | number | null
    discountedPrice?: string | number | null
    className?: string
}

const ProductPrice: React.FC<ProductPriceProps> = ({
    price,
    discountedPrice,
    className
}) => {
    const hasDiscount = discountedPrice !== undefined && discountedPrice !== null && discountedPrice !== ""

    return (
        <div className={className}>
            <div className="flex items-center gap-2">
                <Currency value={hasDiscount ? discountedPrice : price} />
                {hasDiscount ? (
                    <div className="text-sm text-stone-400 line-through">
                        <Currency value={price} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ProductPrice
