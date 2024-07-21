'use client'
import styles from '@/app/page.module.sass'
import style from '../page.module.sass'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Auth from '@/data/model/Auth'
import Link from 'next/link'

export default function Signup() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPwd, setRepeatPwd] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [showPassword, setShowPassword] = useState('password')
    const [hidden, setHidden] = useState(true)

    function handleName(e: ChangeEvent<HTMLInputElement>) {
        setFullName(e.target.value)
    }
    
    function handleEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handleShowPassword() {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    }
    
    function handleRepeatPwd(e: ChangeEvent<HTMLInputElement>) {
        setRepeatPwd(e.target.value)
    }

    function handleUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }
    
    function handlePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(fullName.length === 0) {
            alert("Nome completo é obrigatório")
            return
        } 
        if(email.length === 0) {
            alert("Email é obrigatório")
            return
        } 
        if(username.length === 0) {
            alert("Usuário é obrigatório")
            return
        } 
        if(password.length > 7 && hidden === true) {
            const loginInfo: Auth =  {
                username: username,
                password: password,
                email: email,
                fullName: fullName,
                admin: false,
                employee: false
            }
            console.log(loginInfo)
            // aqui vai fazer o request
            return
        }
        password !== repeatPwd ? alert('Verifique se as senhas conferem') :
        alert("A senha precisa ter pelo menos 8 caracteres")

    }

    useEffect(() => {
        repeatPwd !== password ? setHidden(false) : setHidden(true)
    }, [repeatPwd, password])

    return (
        <main className={style.mainLogin}>
            <aside className={style.aside}>
                <h1>LOGO</h1>
            </aside>
            <form className={style.form} onSubmit={e => handleSubmit(e)}>
                <div className={style.formLogin}>
                    <input className={styles.input} type="text" placeholder="Nome Completo" onChange={e => handleName(e)} />
                    <input className={styles.input} type="text" placeholder="E-mail" onChange={e => handleEmail(e)} />
                    <input className={styles.input} type="text" placeholder="Usuário" onChange={e => handleUsername(e)} />
                    <input className={styles.input} type={showPassword} placeholder="Senha" onChange={e => handlePassword(e)} />
                    <input className={styles.input} type={showPassword} placeholder="Repetir Senha" onChange={e => handleRepeatPwd(e)} />
                    <div className={style.checkboxGroup}>
                        <input className={style.checkbox} type="checkbox" onChange={handleShowPassword} /> 
                        <label>Mostrar a Senha</label>
                    </div>
                    <div className={style.hiddenAlert} hidden={hidden}>
                        <p>As senhas precisam ser iguais.</p>
                    </div>
                    <input className={style.btn} type="submit" value="Logar" />
                    <Link href={'/signin'}>Voltar para a tela de login</Link>
                </div>
            </form>
        </main>
    )
}