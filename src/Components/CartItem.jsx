import React from 'react'


const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    return (
        <li className='bg-base-100 border-b-2'>
            <div className='flex'>
                <div className='avatar flex-[30%]'>
                    <div className='w-20 rounded outline outline-gray-600'>
                        <img src={imageUrl} alt={name} />
                    </div>
                </div>
                <div className='flex-[70%] space-y-4'>
                    <h2 className='text-[1.4rem] text-center leading-snug font-bold text-gray-600'>{name}</h2>
                    <div className='flex items-center'>
                        <div>
                            <label className='text-lg font-bold text-gray-600'>Quantity: </label>
                            <span>{quantity}</span>
                        </div>
                        <div className="text-lg font-bold text-right ml-auto text-gray-600">${price}</div>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default CartItem