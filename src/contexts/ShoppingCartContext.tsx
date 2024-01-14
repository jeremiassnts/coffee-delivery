import { ReactNode, createContext, useState } from "react";

export interface CartItemData {
    itemId: number
    amount: number
}

export interface ShoppingCartData {
    cart: CartItemData[]
    addItemsToCart: (itemId: number, amount: number) => void
}

interface ShoppingCartContextArguments {
    children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartData)

export function ShoppingCartProvider({ children }: ShoppingCartContextArguments) {
    const [cart, setCart] = useState<CartItemData[]>([])

    function addItemsToCart(itemId: number, amount: number) {
        setCart(state => [...state, {
            itemId: itemId,
            amount
        }])

        console.log(cart)
    }

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            addItemsToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}