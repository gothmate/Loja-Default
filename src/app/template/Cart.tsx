import Link from "next/link"
import style from './page.module.sass'
import { IconShoppingCart } from "@tabler/icons-react"

export default function Cart() {
    return (
        <Link href={'/cart'}>
            <div className={style.cart}>
                <IconShoppingCart size={32} stroke={1} />
                <div className={style.numberBall}>15</div>
            </div >
        </Link>
    )
}