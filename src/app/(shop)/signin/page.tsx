'use client'
import styles from '@/app/page.module.sass'
import style from '../page.module.sass'
import { ChangeEvent, useState } from 'react'
import Link from 'next/link'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('password')

    function handleShowPassword() {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    }
    
    function handleUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }
    
    function handlePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <main className={style.mainLogin}>
            <aside className={style.aside}>
                <h1>LOGO</h1>
            </aside>
            <form className={style.form}>
                <div className={style.formLogin}>
                    <input className={styles.input} type="text" placeholder="Usuário" onChange={e => handleUsername} />
                    <input className={styles.input} type={showPassword} placeholder="Senha" onChange={e => handlePassword} />
                    <div className={style.checkboxGroup}>
                        <input className={style.checkbox} type="checkbox" onChange={handleShowPassword} /> 
                        <label>Mostrar a Senha</label>
                    </div>
                    <input className={style.btn} type="submit" value="Logar" />
                </div>
                <Link href={'/signup'}>Criar uma conta</Link>
            </form>
        </main>
    )
}