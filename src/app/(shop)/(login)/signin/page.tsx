'use client'
import styles from '@/app/page.module.sass'
import style from '../../page.module.sass'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Link from 'next/link'
import Sign from '../page'
import SessionContext from '@/data/context/SessionContext';
import { getLogin } from '@/api/gets'

export default function Login() {

    const session = useContext(SessionContext)
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

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        session.username = username
        session.password = password
        if(!session.isLoggedIn) {
            const login = await getLogin(session.username, session.password)
            console.log(login.msg)
        } else {
            return
        }
    }

    return (
			<Sign>
				<SessionContext.Provider value={session}>
					<form className={style.form} onSubmit={e => handleSubmit(e)}>
						<div className={style.formLogin}>
							<input
								className={styles.input}
								type='text'
								placeholder='Usuário'
								onChange={(e) => handleUsername(e)}
							/>
							<input
								className={styles.input}
								type={showPassword}
								placeholder='Senha'
								onChange={(e) => handlePassword(e)}
							/>
							<div className={style.checkboxGroup}>
								<input
									className={style.checkbox}
									type='checkbox'
									onChange={handleShowPassword}
								/>
								<label>Mostrar a Senha</label>
							</div>
							<input className={style.btn} type='submit' value='Logar' />
						</div>
						<Link href={'/signup'}>Criar uma conta</Link>
					</form>
				</SessionContext.Provider>
			</Sign>
		);
}