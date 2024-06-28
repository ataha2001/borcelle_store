'use client'
import Collections from "@/components/Collections";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  console.log("ApiUrl=", apiUrl);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async()=>{
    
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

    const collectionsfetch= await fetch(`${apiUrl}/collections`,{  
      method:'GET',
      mode:'cors',
      headers: corsHeaders, 
    })
    .then(res=>{ res.json()
      console.log('res',res.type);
      
    })
    .then(data=> console.log('data', data))
    .catch(error=> console.error('Error fetching data', error))
    
  }
  return (
   <div>
    <Image src='/banner.png' alt="banner" width={2000} height={1000} className="w-screen"  />
    
    {/* <Collections /> */}
    {/* <ProductsList /> */}
   </div>
  );
}

export const dynamic = 'force-dynamic'