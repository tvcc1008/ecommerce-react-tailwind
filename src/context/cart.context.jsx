import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils.js'

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
    cartCount: 0,
    cartTotal: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { }
})

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }

        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {

    const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

        // dispatch({ type: 'SET_CART_ITEMS', payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount } })
        dispatch(createAction('SET_CART_ITEMS', { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount }))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = decCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCart(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const value = { addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



// import { createContext, useReducer } from "react";
// import { createAction } from '../utils/reducer/reducer.utils'

// const addCartItem = (cartItems, productToAdd) => {
//     //find if cartItems contains productToAdd
//     const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

//     //if found, incremment quantity
//     if (existingCartItem) {
//         return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
//             { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//     }

//     //return new array with modified cartItems/new cart item

//     return [...cartItems, { ...productToAdd, quantity: 1 }]
// }

// const decCartItem = (cartItems, product) => {
//     const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id)
//     if (existingCartItem.quantity === 1) {
//         return cartItems.filter(item => item.id !== product.id)
//     }

//     return cartItems.map(item => item.id === product.id ? {
//         ...item, quantity: item.quantity - 1
//     } : item
//     )
// }

// const clearCart = (cartItems, product) => {
//     return cartItems.filter(item => item.id !== product.id)
// }

// // REDUCER
// const CART_ACTION_TYPES = {
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
//     SET_CART_COUNT: 'SET_CART_COUNT',
//     SET_CART_TOTAL: 'SET_CART_TOTAL'
// }

// const INITIAL_STATE = {
//     cartItem: [],
//     cartCount: 0,
//     cartTotal: 0
// }

// const cartReducer = (state, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:

//             return {
//                 ...state,
//                 ...payload
//             }

//         default:
//             throw new Error(`Unhandled type ${type} in cartReducer`);
//     }
// }


// export const CartContext = createContext({
//     cartItems: [],
//     addItemToCart: () => { },
//     cartCount: 0,
//     removeItemFromCart: () => { },
//     clearItemFromCart: () => { },
//     cartTotal: 0
// })

// export const CartProvider = ({ children }) => {
//     const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
//         cartReducer,
//         INITIAL_STATE)

//     const updateCartItemsReducer = (cartItems) => {
//         const newCartCount = cartItems.reduce(
//             (total, cartItem) => total + cartItem.quantity,
//             0
//         );

//         const newCartTotal = cartItems.reduce(
//             (total, cartItem) => total + cartItem.quantity * cartItem.price,
//             0
//         );

//         const payload = {
//             cartItems,
//             cartCount: newCartCount,
//             cartTotal: newCartTotal,
//         };

//         dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
//     }
//     const addItemToCart = (productToAdd) => {
//         const newCartItems = addCartItem(cartItems, productToAdd);
//         updateCartItemsReducer(newCartItems);
//     };

//     const removeItemToCart = (cartItemToRemove) => {
//         const newCartItems = decCartItem(cartItems, cartItemToRemove);
//         updateCartItemsReducer(newCartItems);
//     };

//     const clearItemFromCart = (cartItemToClear) => {
//         const newCartItems = clearCart(cartItems, cartItemToClear);
//         updateCartItemsReducer(newCartItems);
//     };

//     const value = { addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal }
//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }


