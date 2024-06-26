import { getOrders } from "@/lib/actions/actions"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"

const Orders = async () => {
    const { userId } = auth()

    const orders = await getOrders(userId as string)
    
  return (
    <div className="px-10 py-5 max-sm:px-3">
        <p className="text-heading3-bold my-10">Your Orders</p>
        {!orders || orders?.length === 0 && (
            <p className="text-body-bold text-gray-600 my-5">your have no Orders yet.</p>
        )}
        <div className="flex flex-col gap-10">
            {orders?.map((order: OrderType)=>(
                <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
                    <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                        <p className="text-base-bold">Order ID: {order._id}</p>
                        <p className="text-base-bold">Total Amount: ${order.totalAmount}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {order.products.map((orderdItem: OrderItemType)=>(
                            <div className="flex gap-4">
                                <Image src={orderdItem.product.media[0]} alt={orderdItem.product.title} 
                                width={100} height={100} className="w-32 h-32 object-cover rounded-lg" />
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">Title: {" "} <span className="text-small-bold">{orderdItem.product.title}</span></p>
                                    {orderdItem.color && (
                                        <p className="text-small-medium">Color: {" "} <span className="text-small-bold">{orderdItem.color}</span></p>
                                    )}
                                    {orderdItem.size && (
                                        <p className="text-small-medium">Size: {" "} <span className="text-small-bold">{orderdItem.size}</span></p>
                                    )}
                                    <p className="text-small-medium">Unite Price: {" "} <span className="text-small-bold">{orderdItem.product.price}</span></p>
                                    <p className="text-small-medium">Quantity: {" "} <span className="text-small-bold">{orderdItem.quantity}</span></p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Orders;
export const dynamic = 'force-dynamic'
