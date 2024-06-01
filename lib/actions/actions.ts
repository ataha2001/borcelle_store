import { Collection } from 'mongoose'
import React from 'react'

export const getCollections = async () => {
    const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`).then((response)=>{
      response.json()
    })
    console.log("collections", collections);
    
    return collections
    // await collections.json()
  }
  
  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
    return await collection.json()
  }


  export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`).then((response)=>{
      response.json()
    })
    return products
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
  
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`).then((response)=>{
    response.json()
  })
  
  return orders
} 

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}