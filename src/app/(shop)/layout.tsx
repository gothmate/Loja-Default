'use client'
import { CartProvider } from "@/data/context/CartContext"

export default function Layout(props:any) {
    return (
        <CartProvider>
            {props.children}
        </CartProvider>
    )
}