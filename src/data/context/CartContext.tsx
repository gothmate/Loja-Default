'use client'
import { createContext, useEffect, useState } from "react"
import CartItem from "../model/CartItem"
import { Product } from "../model/Product"
import useLocalStorage from "../hooks/useLocalStorage"
import { CartContextProps } from "../model/CartContextProps"

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {
    const [items, setItems] = useState<CartItem[]>([])
    const { get, set, remove } = useLocalStorage()

    function add(product: Product) {
        const index = items.findIndex((i) => i.product.id === product.id)

        if(index === -1) {
            changeItems([...items, {product, quantity: 1}])
        } else {
            const newItems = [...items]
            newItems[index].quantity++
            changeItems(newItems)
        }
    }

    function sub(product: Product) {
        const index = items.findIndex((i) => i.product.id === product.id)

        if(index !== -1) {
            const newItems = [...items]
            newItems[index].quantity--

            if(newItems[index].quantity === 0) {
                newItems.splice(index, 1)
            }

            changeItems(newItems)
        }
    }

    function changeItems(newItems: CartItem[]) {
        setItems(newItems)
        set('cart', newItems)
    }

    useEffect(() => {
        const cart = get('cart')
        if(cart !== null) {
            setItems(cart)
        }
    }, [get])

    return (
        <CartContext.Provider value={{
                items,
                add,
                sub,
                get itemQuantity() {
                    return items.reduce((total, item) => total + item.quantity, 0)
                }
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext