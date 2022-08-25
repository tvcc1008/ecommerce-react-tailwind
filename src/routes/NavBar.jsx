import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../assets/083 crown.svg'
import CartIcon from '../Components/CartIcon'
import { UserContext } from '../context/user.context'
import { signOutUser } from '../utils/firebase/firebase.utils'

const NavBar = () => {

    const { currentUser } = useContext(UserContext)
    return (
        < >
            <div className='navbar bg-base-100 max-w-[1640px] mx-auto rounded-xl sticky top-0'>
                <div className='flex-1'>
                    <Link to='/' className='btn btn-ghost normal-case'>
                        <CrwnLogo />
                    </Link>
                </div>
                {/* NavBar isn't Login */}
                {
                    !currentUser ? (
                        <div className='flex-none space-x-3'>
                            <ul className='menu menu-horizontal p-0 space-x-3'>
                                <li className='uppercase text-xl text-gray-800'>
                                    <Link to='/shop'>Shop</Link>
                                </li>
                                <li className='uppercase text-xl text-gray-800'>
                                    <Link to=''>Contact</Link>
                                </li>
                                <li className='uppercase text-xl text-gray-800'>
                                    <Link to='/auth'>Sign up</Link>
                                </li>
                            </ul>

                        </div>
                    ) : (

                        <div className='flex-none space-x-5'>
                            <ul className='menu menu-horizontal p-0'>
                                <li className='uppercase text-xl text-gray-800'>
                                    <Link to='/shop'>Shop</Link>
                                </li>
                                <li className='uppercase text-xl text-gray-800'>
                                    <Link to=''>Contact</Link>
                                </li>

                            </ul>
                            {/* Cart Items */}
                            {/* <div className='dropdown dropdown-end'>
                                <label tabIndex="0" className='btn btn-ghost btn-circle'>
                                    <div className='indicator'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </label>
                                <div tabIndex='0' className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
                                    <div className='card-body'>
                                        <span className='font-bold text-lg'>8 Itmes</span>
                                        <span className='text-info'>Subtotal: $999</span>
                                        <div className='card-actions'>
                                            <button className='btn btn-primary btn-block'>View Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <CartIcon />

                            {/* Avatart */}
                            <div className='dropdown dropdown-end'>
                                <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
                                    <div className='w-10 rounded-full'>
                                        <img src="https://placeimg.com/80/80/people" alt='avatar' />
                                    </div>
                                </label>
                                <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                                    <li>
                                        <Link to='' className='justify-between'>
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to=''>Settings</Link></li>
                                    <li><Link to='/auth' onClick={signOutUser}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                }

            </div>
            <Outlet />
        </>
    )
}

export default NavBar