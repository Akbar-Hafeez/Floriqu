import getBillboard from "@/actions/getBillboard";
import getCategories from "@/actions/getCategories";
import getProducts from "@/actions/getProduct";
import BillboardComponent from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/ProductList";

export const revalidate = 0
export default async function Home() {
const categories = await getCategories()
const billboard =
  categories.find((category) => category.billboard?.id)?.billboard ??
  await getBillboard('69da46fd47e6253fdeedd1c1')
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
