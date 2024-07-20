import { Product } from "@/data/model/Product"
import styles from '@/app/page.module.sass'
import Image from "next/image"
import useCart from "@/data/hooks/usecart"

export interface ProductCardProps {
    product: Product
}

export default function ProductCard(props: ProductCardProps) {
    const { id, name, description, price, img } = props.product
    const {add, itemQuantity, items} = useCart()
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <Image 
                    src={img}
                    alt={name}
                    width={310}
                    height={200}
                    priority
                    className={styles.cover}
                />
            </div>
            <div className={styles.textCard}>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                    <span>Valor: {price.toFixed(2)}</span> 
                    <button className={styles.btn} onClick={() => add(props.product)}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}