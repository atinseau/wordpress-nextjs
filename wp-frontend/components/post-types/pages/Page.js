import Content from 'components/block/Content';
import parse from 'html-react-parser';
import Link from "next/link"

const Page = ({ data }) => {
	console.log(data)
	return (
		<main>
			<Content raw={data.raw}/>
		</main>
	)
}

export default Page;