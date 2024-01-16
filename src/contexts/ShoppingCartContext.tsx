import { ReactNode, createContext, useEffect, useState } from "react";

export interface CartItemData {
    itemId: number
    amount: number
}

export interface ShoppingCartData {
    cart: CartItemData[]
    addItemsToCart: (itemId: number, amount: number) => void
    addAmountOfItemsInCart: (itemId: number) => void
    subtractAmountOfItemsInCart: (itemId: number) => void
    removeItemFromCart: (itemId: number) => void
    cleanCart: () => void
}

interface ShoppingCartContextArguments {
    children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartData)

export function ShoppingCartProvider({ children }: ShoppingCartContextArguments) {
    const [cart, setCart] = useState<CartItemData[]>(() => {
        const storedCart = localStorage.getItem('@coffee-delivery:cart-1.0.0')
        if (storedCart) {
            return JSON.parse(storedCart)
        }
        return []
    })

    function addItemsToCart(itemId: number, amount: number) {
        setCart(state => [...state, {
            itemId: itemId,
            amount
        }])
    }

    function addAmountOfItemsInCart(itemId: number) {
        setCart(state => state.map(e => e.itemId == itemId ? { ...e, amount: e.amount + 1 } : e))
    }

    function subtractAmountOfItemsInCart(itemId: number) {
        setCart(state => state.map(e => e.itemId == itemId && e.amount > 1 ? { ...e, amount: e.amount - 1 } : e))
    }

    function removeItemFromCart(itemId: number) {
        setCart(state => state.filter(e => e.itemId != itemId))
    }

    function cleanCart() {
        setCart(() => [])
    }

    useEffect(() => {
        localStorage.setItem('@coffee-delivery:cart-1.0.0', JSON.stringify(cart))
    }, [cart]);

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            addItemsToCart,
            addAmountOfItemsInCart,
            subtractAmountOfItemsInCart,
            removeItemFromCart,
            cleanCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}