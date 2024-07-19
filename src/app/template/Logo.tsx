import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";
import style from './page.module.sass'

export default function Logo() {
    return (
        <Link href='/'>
            <div className={style.logo}>
                <div className={style.letters}>A Z</div>
                <IconBrandAmazon size={35} stroke={1} />
            </div>
        </Link>

    )
}