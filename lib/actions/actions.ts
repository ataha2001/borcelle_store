import { log } from "console"

export const runtime = "edge"

export const getCollections = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  console.log("ApiUrl=", apiUrl);
  const collections= await fetch(`${apiUrl}/collections`)
  .then(res=> res.json())
  .then(data=> console.log(data))
  .catch(error=> console.error('Error fetching data', error);
  
  
  // const collectionsfetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  // const collectionsfetch = await fetch('https://borcelle-admin-prr6eby9l-ashrafs-projects-17880677.vercel.app/api/collections')
  // const collections = await collectionsfetch.json()
  return collections
}


// export const getCollections = async () => {
//     // const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
//     (`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    
//     const collections = await fetch(`https://borcelle-admin-prr6eby9l-ashrafs-projects-17880677.vercel.app/api/collections`)
    
//     return await collections.json()
//   }
  
  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
    return await collection.json()
  }


  export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await products.json()
  }
  
// export const getProductDetails = async(productId: string)=>{
//     const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
//     return await product.json()
// }

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}

export const getSearchProducts = async (query : string) =>{
  const searchProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchProducts.json()
} 

export const getOrders = async (customerId: string) =>{
  
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  
  return await orders.json()
} 

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}