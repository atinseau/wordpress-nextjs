import Head from 'next/head'
import Menu from './Menu'

const Header = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="nextjs-wordpress" key={title} />
			</Head>

			<header>
				<Menu></Menu>
				{children}
			</header>
		</>
	)
}

export default Header