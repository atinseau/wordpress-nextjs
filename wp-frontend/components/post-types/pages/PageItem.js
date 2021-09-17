import Link from 'next/link'
import parse from 'html-react-parser';

const PageItem = ({ data }) => {
	return (
		<Link href={data.slug}>
			<li className="page-item">
				<h3>{data.title}</h3>
				{parse(data.excerpt)}
			</li>
		</Link>
	)
}

export default PageItem;