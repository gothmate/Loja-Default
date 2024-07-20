'use client'
import Page from "../../template/Page"
import styles from '@/app/page.module.sass'
import CartItemWidget from "@/components/cart/CartItemWidget"
import useCart from "@/data/hooks/usecart"
import EmptyCart from "@/components/cart/EmptyCart"
import CartTotal from "@/components/cart/CartTotal"

export default function CartPage() {
    
    const { items, itemQuantity } = useCart()
    
    return (
        <Page>
            {items.length === 0 ?
                <EmptyCart /> :
                <div className={styles.principal}>
                    {items.map((item) => (
                        <CartItemWidget key={item.product.id} item={item} />
                    ))}
                    <CartTotal items={items} />
                </div>
            }
        </Page>
    )
}