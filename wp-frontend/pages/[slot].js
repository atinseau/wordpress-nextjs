
const Slot = ({ data }) => {
	
	console.log(data)

	return (
		<h1>salut</h1>
	)
}

export function getServerSideProps({params}) {
	// res.statusCode = 302
	// res.setHeader('Location', `/`)

	console.log(params.slot)

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