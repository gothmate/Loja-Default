import Link from "next/link";
import style from './page.module.sass'

export default function Logo() {
    return (
        <Link href='/'>
            <div className={style.logo}>
                Logo
            </div>
        </Link>

    )
}