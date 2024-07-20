import { IconShoppingCartOff } from "@tabler/icons-react"
import Link from "next/link"
import styles from '@/app/page.module.sass'

export default function EmptyCart() {
    return (
        <div className={styles.principal}>
            <div className={styles.centerCart}> 
                <IconShoppingCartOff size={150} stroke={1} />
                <div>
                    <h2>Seu carrinho está vazio</h2>
                    <p>Adicione itens clicando no botão abaixo.</p>
                </div>
                <Link href="/" className={styles.btn}>Ver Produtos</Link>
            </div>
        </div>
    )
}