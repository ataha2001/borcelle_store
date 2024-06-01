'use client'

import { useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react'
import HeartFavorite from './HeartFavorite'

interface ProductCardProps {
  product: ProductType,
  updateSignedInUser?: (updateUser: UserType )=> void
}

const ProductCard = ({product, updateSignedInUser} : ProductCardProps) => {
  
  return (
    <Link href={`/products/${product._id}`} className='w-[220px] flex- flex-col gap-2' >
              <Image
                src={product?.media[0]}
                alt={product.title}
                width={250}
                height={300}
                className="rounded-lg cursor-pointer h-[250px] object-cover"
              />
              <div>
                <p className="text-base-bold">{product.title}</p>
                <p className="text-small-medium text-grey-2">{product.category}</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-body-bold'>$ {product.price}</p>
                <HeartFavorite product={product} updateSignedInUser={updateSignedInUser}/>
              </div>
            </Link>
  )
}

export default ProductCard