import { gql } from "graphql-request";


const DEFAULT_PAGE = `
	slug
	title
	id
	content
	excerpt
`

export const getPagesBy = gql`
	query ($id: ID) {
		pageBy(id: $id) {
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