import Collections from "@/components/Collections";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Image src='/banner.png' alt="banner" width={2000} height={1000} className="w-screen"  />
    
    <Collections />
    {/* <ProductsList /> */}
   </div>
  );
}

export const dynamic = 'force-dynamic'