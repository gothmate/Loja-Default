import Logo from "./Logo";
import style from './page.module.sass'
import Cart from "./Cart";
import Footer from "./Footer";

export default function Header() {
    return (
        <header className={style.header}>
            <Logo />
            <Cart />
        </header>
    )
}