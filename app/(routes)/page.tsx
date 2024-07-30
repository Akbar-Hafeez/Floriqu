import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProduct";
import BillboardComponent from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/ProductList";

export const revalidate = 0
export default async function Home() {
const billboard = await getBillboard('66901d8c8caf75eada4a15d8')
const products = await getProducts({isFeatured:true})
  return (
    <Container>
      <div className="space-y-10 pb-10">
<BillboardComponent data={billboard}/>
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
<ProductList title="Featured Products" items={products}/>
      </div>
      </div>
    </Container>

  );
}
