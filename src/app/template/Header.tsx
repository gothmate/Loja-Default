import Logo from "./Logo"
import style from './page.module.sass'
import Cart from "./Cart"

export default function Header() {
    return (
        <header className={style.header}>
            <Logo />
            <Cart />
        </header>
    )
}