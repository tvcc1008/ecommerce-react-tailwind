import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    //if found, incremment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    //return new array with modified cartItems/new cart item

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== product.id)
    }

    return cartItems.map(item => item.id === product.id ? {
        ...item, quantity: item.quantity - 1
    } : item
    )
}

const clearCart = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id)
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTOcartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
        setCartTOcartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(decCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCart(cartItems, cartItemToClear))
    }

    const value = { addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


