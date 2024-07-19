import Footer from "./Footer"
import Header from "./Header"
import styles from '@/app/page.module.sass'


export interface IPageProps {
    children: React.ReactNode
    className?: string
}

export default function Page(props: IPageProps) {
    return (
        <div>
            <main className={`${styles.main}`}>
                <Header />
                {props.children}
                <Footer />
            </main>
        </div>
    )
}