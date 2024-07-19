import Page from "../template/Page"
import styles from '@/app/page.module.sass'

export default function CartPage() {
    return (
        <Page>
            <div className={styles.principal}>
                Carrinho
            </div>
        </Page>
    )
}