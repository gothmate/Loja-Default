'use client'
import Page from "../../template/Page"
import styles from '@/app/page.module.sass'
import CartItemWidget from "@/components/cart/CartItemWidget"
import useCart from "@/data/hooks/usecart"
import { useEffect } from "react"

export default function CartPage() {
    
    const { items, itemQuantity } = useCart()

    return (
        <Page>
            <div className={styles.principal}>
                {items.map((item) => (
                    <CartItemWidget key={item.product.id} item={item} />
                ))}
                <button className={styles.btn}>Checkout</button>
            </div>
        </Page>
    )
}