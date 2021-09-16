import { gql } from "graphql-request";


const DEFAULT_PAGE = `
	slug
	title
	id
	content
	excerpt
`

export const getPagesBy = gql`
	query ($slot: String) {
		pageBy(slot: $slot) {
			${DEFAULT_PAGE}
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