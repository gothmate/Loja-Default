import styles from "./page.module.sass"
import Page from "./template/Page"

export default function Home() {
  return (
    <Page className={styles.main}>
      <div className={styles.principal}>Inicio</div>
    </Page>
  )
}
