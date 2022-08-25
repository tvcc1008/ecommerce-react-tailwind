import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartContext } from '../context/cart.context';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const addProductToCard = () => addItemToCart(product)
    return (
        <div className=' w-72 bg-base-100 shadow-md hover:scale-105 hover:shadow-xl duration-300 rounded-xl'>
            <Link to=''>
                <img src={product.imageUrl} alt={product.name} className='h-80 w-72 object-cover rounded-t-xl' />
            </Link>
            <div className='px-4 py-3 w-72'>
                <p className='text-lg font-bold text-black truncate block capitalize'>{product.name}</p>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>${product.price}</p>
                    <div className='ml-auto'>
                        <button onClick={addProductToCard}>
                            <MdOutlineAddShoppingCart size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard