
import Footer from 'components/block/Footer'
import Header from 'components/block/Header'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
	return <>
		<Header/>
		<Component {...pageProps} />
		<Footer/>
	</>
}

export default MyApp
