import getBillboard from "@/actions/getBillboard";
import BillboardComponent from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0
export default async function Home() {
const billboard = await getBillboard('66901d8c8caf75eada4a15d8')
  return (
    <Container>
      <div className="space-y-10 pb-10">
<BillboardComponent data={billboard}/>
      </div>
    </Container>

  );
}
