import getCategory from "@/actions/getCategory"
import getColors from "@/actions/getColors"
import getProducts from "@/actions/getProduct"
import getSizes from "@/actions/getSizes"
import BillboardComponent from "@/components/ui/Billboard"
import Container from "@/components/ui/Container"
import Filter from "./components/Filter"
import NoResult from "@/components/ui/NoResult"
import ProductCard from "@/components/ui/ProductCard"
import MobileFilters from "./components/MobileFilters"

interface CategoryPageProps{
    params:{
        categoryId:string
    }
    searchParams:{
        colorId:string
        sizeId:string
    }
}
const CategoryPage:React.FC<CategoryPageProps>=async({
    params,
    searchParams
})=>{
    const products = await getProducts({
        categoryId:params.categoryId,
        colorId:searchParams.colorId,
        sizeId:searchParams.sizeId
    })
    const categoryProducts = products.filter((item) => item.category?.id === params.categoryId)
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
    return(
        <div className="bg-transparent">
            <Container>
                <BillboardComponent data={category.billboard}/>
<div className="px-4 sm:px-6 lg:px-8 pb-24">
<div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
<MobileFilters sizes={sizes} colors={colors}/>
<div className="hidden lg:block">
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
<div className="mt-6 lg:col-span-4 lg:mt-0">
{categoryProducts.length === 0 && <NoResult/>}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{categoryProducts.map((item)=>(
    <ProductCard
    data={item}
    key={item.id}
    />
))}
</div>
</div>
</div>
</div>
                
            </Container>
        </div>
    )
}
export default CategoryPage
