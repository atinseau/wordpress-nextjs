import { request } from "graphql-request"

export * from "./pages"

export async function qfetch(gql, option = {}) {
	return await request(process.env.ENDPOINT, gql, option)
}