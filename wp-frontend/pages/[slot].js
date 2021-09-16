import { getPagesBy, qfetch } from "@request";

const Slot = ({ data }) => {
	
	console.log(data)

	return (
		<h1>voici le contenu de la page</h1>
	)
}

export async function getServerSideProps({params}) {
	// res.statusCode = 302
	// res.setHeader('Location', `/`)

	const slot = params.slot;

	const data = await qfetch(getPagesBy, { slot })

	return {
		props: {
			data: {
				id: "salut"
			}
		}
	}
}

// export function getStaticPaths (e) {
// 	return {
// 		paths: [],
// 		fallback: 'blocking'
// 	}
// }

// export async function getStaticProps (context) {
// 	console.log(context)
// 	return {
// 		props: {
			
// 		}
// 	}
// }

export default Slot