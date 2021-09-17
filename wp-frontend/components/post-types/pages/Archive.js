import PageItem from "./PageItem.js";

const PageArchive = ({ pages = [] }) => {
	return (
		<div className="pages">
			<ul>
				{pages.map((page) => <PageItem data={page} key={page.id}/>)}
			</ul>
		</div>
	)
}

export default PageArchive;