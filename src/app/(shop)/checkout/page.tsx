'use client'

import Page from "@/app/template/Page"
import useCart from "@/data/hooks/usecart"
import style from './page.module.sass'
import { useEffect, useState } from "react";

export default function Checkout() {

  const { items, itemQuantity } = useCart();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let totalTemp = 0.0
    items.forEach(item => {
      totalTemp += item.quantity * item.product.price
    })
    setTotal(totalTemp)
  }, [])

  return (
		<Page>
			<div className={style.checkout}>
				<h2>Checkout</h2>
				{items.map((item) => {
					return (
						<div key={item.product.id} className={style.groupCheckout}>
							<div className={style.produto}>
								<span>{item.product.name}</span>
								<div className={style.price}>
									<span>Preço: R$ {item.product.price.toFixed(2)}</span>
									<span>{item.quantity}</span>
									<span>
										R$ {(item.product.price * item.quantity).toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					)
				})}
				<div className={style.total}>
					<span>Valor Total: R$ {total.toFixed(2)}</span>
				</div>
			</div>
		</Page>
	);
}