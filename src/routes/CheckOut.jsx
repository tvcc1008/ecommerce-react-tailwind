import React, { useContext } from 'react'
import TableItem from '../Components/TableItem'
import { CartContext } from '../context/cart.context'

const CheckOut = () => {
    const { cartItems,cartTotal } = useContext(CartContext)
    return (
        <div className='max-w-[1640px] mx-auto gap-y-5 mt-5 bg-base-100 py-4 px-40 rounded-xl'>
            <div className='w-full h-auto max-h-[840px] flex flex-col space-y-5'>
                <h1 className='text-3xl font-bold text-black block capitalize'>Shopping Cart.</h1>
                <div className='overflow-auto mx-8 block'>
                    <table className='table w-full '>
                        <thead className='sticky top-0'>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(product => (
                                    <TableItem key={product.id} product={product}  />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end items-center'>
                    <h2 className='text-2xl font-semibold text-right ml-auto text-gray-600'>TOTAL: <span>{cartTotal}$</span></h2>
                </div>
            </div>
        </div>
    )
}

export default CheckOut