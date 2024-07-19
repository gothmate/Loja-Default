import CartItem from "@/data/model/CartItem"
import Image from "next/image"
import styles from '@/app/page.module.sass'

export interface CartItemWidgetProps {
    item: CartItem
}

export default function CartItemWidget(props: CartItemWidgetProps) {

    return (
        <div className={styles.cartWidget}>
            <div className={styles.imgWrapper}>
                <Image 
                    alt={props.item.product.name}
                    src={props.item.product.img}
                    fill
                    className={styles.cover}
                />
            </div>
            <div>
                {props.item.product.name}
                {props.item.product.description}
                {props.item.product.price}
                {props.item.quantity}
            </div>
        </div>
    )
}