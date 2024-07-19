'use client'

import Link from "next/link"
import style from './page.module.sass'
import { IconShoppingCart } from "@tabler/icons-react"
import useCart from "@/data/hooks/usecart"

export default function Cart() {
    const {itemQuantity, items, add} = useCart()
    return (
        <Link href={'/cart'}>
            <div className={style.cart}>
                <IconShoppingCart size={32} stroke={1} />
                <div className={style.numberBall}>{itemQuantity}</div>
            </div >
        </Link>
    )
}