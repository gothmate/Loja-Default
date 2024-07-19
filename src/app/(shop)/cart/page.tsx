'use client'
import Page from "../../template/Page"
import styles from '@/app/page.module.sass'
import CartItemWidget from "@/components/cart/CartItemWidget"
import useCart from "@/data/hooks/usecart"

export default function CartPage() {
    
    const { items, itemQuantity, add } = useCart()

    return (
        <Page>
            <div className={styles.principal}>
                {items.map((item) => (
                    <CartItemWidget key={item.product.id} item={item} />
                ))}
            </div>
        </Page>
    )
}