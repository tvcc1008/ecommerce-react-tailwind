import React, { useContext } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart.context'
import CartItem from './CartItem'

const CartIcon = () => {
    const { cartItems, cartCount } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckOutHandler =() =>{
        navigate('/checkout')
    }

    return (
        <div className='dropdown dropdown-end '>
            <label tabIndex='0' className='btn btn-ghost btn-circle'>
                <div className='indicator'>
                    <BsCartFill size={30} />
                    <span className="badge badge-sm indicator-item">{cartCount}</span>
                </div>
            </label>
            <div tabIndex='0' className='dropdown-content flex flex-col bg-base-100 p-2 shadow-xl rounded-xl w-80 outline outline-gray-300'>
                <div className='flex-1 h-auto max-h-80 overflow-auto'>
                    <ul className=' menu rounded bg-base-200'>
                        {
                            cartItems.map((item) => (
                                <CartItem key={item.id} cartItem={item} />
                            ))
                        }
                    </ul>
                </div>
                <div className='card card-compact mt-3 '>
                    <div className='card-actions justify-center '>
                        <button className='btn btn-outline btn-ghost' onClick={goToCheckOutHandler}>
                            {/* <Link to='/checkout'>go to check out</Link> */}
                            go to check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartIcon