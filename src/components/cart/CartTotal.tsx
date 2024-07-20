import CartItem from '@/data/model/CartItem'
import styles from '@/app/page.module.sass'
import style from './page.module.sass'

export interface CartTotalProps {
    items: CartItem[]
}

export default function CartTotal(props: CartTotalProps) {

    const total = props.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

    return (
        <div className={style.checkout}>
            <p>Total: R${total.toFixed(2)}</p>
            <button className={styles.btn}>Checkout</button>
        </div>
    )
}