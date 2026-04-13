import getCategories from '@/actions/getCategories'
import Container from '../ui/Container'
import Link from 'next/link'
import MainNavbar from './MainNavbar'
import NavbarActions from '../ui/NavbarActions';
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
export const revalidate = 0;
export default async function Navbar() {
  const categories = await getCategories()
  return (
    <div className="border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/55">
    <Container>
      <div className='relative flex h-20 items-center pr-2 sm:px-2 md:h-24 lg:px-8'>
   <Link href='/' className='my-4 flex shrink-0 md:mx-0 lg:ml-0'>
   <Image src="/logo.png" alt='logo' className='mt-2 md:mt-4' width={180} height={20}/>
   </Link>
   <MainNavbar data={categories}/>
   <div className='ml-auto md:hidden'>
   <MobileNavbar data={categories}/>
   </div>
   <NavbarActions className='hidden md:ml-auto md:flex'/>
   </div>
</Container>
  </div>
  )
}
