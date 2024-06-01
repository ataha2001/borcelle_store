import ProductCard from '@/components/ProductCard'
import { getSearchProducts } from '@/lib/actions/actions'

const SearchPage = async ({params}: {params: {query: string}}) => {
    const searchedProducts = await getSearchProducts(params.query)

    const descodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
        <p className='text-heading3-bold my-10'>Search result for {descodedQuery}</p>
        {!searchedProducts || searchedProducts.length === 0 && (
            <p className='text-body-bold my-5'>No result found</p>
        ) }
        <div className='flex gap-16 flex-wrap justify-center'>
            {searchedProducts?.map((product: any)=>(
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default SearchPage