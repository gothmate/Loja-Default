'use client'
import products from "@/data/constants/products"
import styles from "../page.module.sass"
import Page from "../template/Page"
import ProductCard from "@/components/product/ProductCard"
import { useContext } from "react"
import SessionContext from "@/data/context/SessionContext"

export default function Home() {  
  
  const session = useContext(SessionContext)

  return (
    <SessionContext.Provider value={session}>
      {!session.isLoggedIn ?
        <Page className={styles.main}>
          <div className={styles.principal}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Page> :
        ''
      }
    </SessionContext.Provider>
  )
}
