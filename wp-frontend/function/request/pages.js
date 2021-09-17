import { gql } from "graphql-request";


const DEFAULT_PAGE = `
	slug
	title
	id
	raw
	excerpt
`

export const getPagesBy = gql`
	query ($slot: String) {
		pageBy(uri: $slot) {
			${DEFAULT_PAGE}
			author {
				node {
					name
					avatar {
						url
					}
				}
			}
		}
	}
`

export const getPages = gql`
	query {
		pages {
			nodes {
				${DEFAULT_PAGE}
			}
		}
	}
`