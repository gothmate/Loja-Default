'use client'
import CartItem from "@/data/model/CartItem"
import Image from "next/image"
import styles from '@/app/page.module.sass'
import style from './page.module.sass'
import useCart from "@/data/hooks/usecart"
import { IconMinus, IconPlus } from "@tabler/icons-react"

export interface CartItemWidgetProps {
    item: CartItem
}

export default function CartItemWidget(props: CartItemWidgetProps) {
    const {add, sub, itemQuantity, items} = useCart()

    return (
        <div className={style.cardWidget}>
            <div className={style.imgWidget}>
                <Image 
                    alt={props.item.product.name}
                    src={props.item.product.img}
                    fill
                    className={styles.cover}
                />
            </div>
            <div className={style.infoWidget}>
                <div className={style.textWidget}>
                    <h4>{props.item.product.name}</h4>
                    <p>{props.item.product.description}</p>
                    <p>Preço unitário: R${props.item.product.price.toFixed(2)}</p>
                    <p>Total nesse item: R${(props.item.product.price * props.item.quantity).toFixed(2)}</p>
                </div>
                <div className={style.choose}>
                    <button className={style.minus}  onClick={() => sub(props.item.product)}><IconMinus /></button>
                    <div className={style.counter}>
                        {props.item.quantity}
                    </div>
                    <button className={style.plus} onClick={() => add(props.item.product)}><IconPlus /></button>
                </div>
            </div>
        </div>
    )
}