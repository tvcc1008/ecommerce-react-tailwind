import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { CartContext } from '../context/cart.context';

const TableItem = ({ product }) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
    const { name, imageUrl, quantity, price } = product

    const addHandler = () => addItemToCart(product)
    const subHandler = () => removeItemFromCart(product)
    const clearHandler = () => clearItemFromCart(product)

    return (
        <tr>
            <td>
                <div className='w-20 rounded outline outline-gray-600'>
                    <img src={imageUrl} alt={name} />
                </div>
            </td>
            <td>
                <h2 className='text-[1.4rem] leading-snug font-bold text-gray-600'>{name}</h2>
            </td>
            <td>
                <div className='btn-group'>
                    <button className='btn btn-outline btn-ghost' onClick={subHandler} >
                        <IoChevronBackOutline />
                    </button>

                    <div className='w-12 h-12 flex justify-center items-center'>
                        <p className='text-lg  font-bold text-gray-600'>{quantity}</p>
                    </div>

                    <button className='btn btn-outline btn-ghost' onClick={addHandler}>
                        <IoChevronForwardOutline />
                    </button>
                </div>
            </td>
            <td><p className="text-lg font-bold text-gray-600">${price * quantity}</p></td>
            <td>
                <AiOutlineClose size={30} onClick={clearHandler} />
            </td>
        </tr>
    )
}

export default TableItem