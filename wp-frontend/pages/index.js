import Page from "components/post-types/pages/Page"
import { getPages, qfetch } from "@request"
/**
 * 
 * Render react component with graphql request from wordpress
 * This is the root endpoint for the frontend app
 * @returns 
 */
const Home = ({ pages = [] }) => {
	return (
		<main>
			<h1>Wordpress-nextjs headless mode</h1>
			<div className="pages">
				<ul>
					{pages.map((page) => <Page data={page} key={page.id}/>)}
				</ul>
			</div>
		</main>
	)
}

export async function getStaticProps() {

	const { pages: { nodes } } = await qfetch(getPages)

	return {
		props: {
			pages: nodes
		}
	}
}

export default Home;
