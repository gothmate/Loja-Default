'use client'
import { createContext, useState } from "react"
import CartItem from "../model/CartItem"
import { Product } from "../model/Product"

interface CartContextProps {
    items: CartItem[]
    itemQuantity: number
    add?: (item: Product) => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {
    const [items, setItems] = useState<CartItem[]>([])

    function add(product: Product) {
        const index = items.findIndex((i) => i.product.id === product.id)

        if(index === -1) {
            setItems([...items, {product, quantity: 1}])
        } else {
            const newItems = [...items]
            newItems[index].quantity++
            setItems(newItems)
        }
    }

    return (
        <CartContext.Provider value={{
                items,
                add,
                get itemQuantity() {
                    return items.reduce((total, item) => total + item.quantity, 0)
                }
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext