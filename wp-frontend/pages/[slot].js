import { getPagesBy, qfetch } from "@request";
import Page from "components/post-types/pages/Page";

const Slot = ({ data }) => {

	return (
		<Page data={data}/>
	)
}

export async function getServerSideProps({params, res}) {
	

	const slot = params.slot;
	const {pageBy: data} = await qfetch(getPagesBy, {slot})

	if (!data) {
		res.statusCode = 302
		res.setHeader('Location', `/404`)
		return { props: {}}
	}

	return {
		props: {
			data
		}
	}
}


export default Slot