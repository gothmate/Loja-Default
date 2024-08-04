import style from './page.module.sass';

export default function Sign(props: any) {
	return (
		<main className={style.mainLogin}>
			<aside className={style.aside}>
				<h1>LOGO</h1>
			</aside>
			{props.children}
		</main>
	);
}
