import { getPages, getPagesBy, qfetch } from "@request"
import axios from "axios"
import PageArchive from "components/post-types/pages/Archive"
import Page from "components/post-types/pages/Page"



/**
 * 
 * Render react component with graphql request from wordpress
 * This is the root endpoint for the frontend app
 * @returns 
 */
const Home = ({ pages = [], frontPage = false }) => {

	return (
		<>
			{frontPage ? <Page data={frontPage}/> : 
				<main>
					<h1>Wordpress-nextjs headless mode</h1>
					<PageArchive pages={pages}/>
				</main>
			}
			
		</>
	)
}

export async function getStaticProps() {

	// CHECK IF THERE IS A CONFIGURED FRONT PAGE ON WORDPRESS

	const {data: isFrontPage} = await axios.get(process.env.API + "/get-front-page");
	if (isFrontPage) {
		const { pageBy } = await qfetch(getPagesBy, { slot: "/" })
		return {
			props: {
				frontPage: pageBy
			}
		}
	}

	// DATA FOR PAGE ARCHIVE

	const { pages: { nodes } } = await qfetch(getPages)

	return {
		props: {
			pages: nodes
		}
	}
}

export default Home;
