import CartItem from '@/data/model/CartItem'
import { redirect } from 'next/navigation';
import styles from '@/app/page.module.sass'
import style from './page.module.sass'
import Link from 'next/link';


export interface CartTotalProps {
    items: CartItem[]
}

export default function CartTotal(props: CartTotalProps) {

    const total = props.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

    function handleCheckout() {
        redirect('/checkout')
    }

    return (
        <div className={style.checkout}>
            <p>Total: R${total.toFixed(2)}</p>
            <Link className={styles.btn} href={'/checkout'}>Checkout</Link>
        </div>
    )
}