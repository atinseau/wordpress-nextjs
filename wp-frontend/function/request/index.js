import { request } from "graphql-request"

export * from "./pages"

export async function qfetch(gql) {
	return await request(process.env.ENDPOINT, gql)
}