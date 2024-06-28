import Collections from "@/components/Collections";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  console.log("ApiUrl=", apiUrl);
  const collectionsfetch= await fetch(`${apiUrl}/collections`)
    .then(res=> res.json())
    .then(data=> console.log(data))
    .catch(error=> console.error('Error fetching data', error))
  
  return (
   <div>
    <Image src='/banner.png' alt="banner" width={2000} height={1000} className="w-screen"  />
    
    <Collections />
    {/* <ProductsList /> */}
   </div>
  );
}

export const dynamic = 'force-dynamic'