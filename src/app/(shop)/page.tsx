'use client'
import products from "@/data/constants/products"
import styles from "../page.module.sass"
import Page from "../template/Page"
import ProductCard from "@/components/product/ProductCard"

export default function Home() {  
  return (
    <Page className={styles.main}>
      <div className={styles.principal}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  )
}
