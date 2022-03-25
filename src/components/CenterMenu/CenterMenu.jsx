const CenterMenu = () => {
	const liStyle = 'mr-[3rem] hover:cursor-pointer'
	return (
		<div className="menu flex">
			<ul className="flex w-[100%] justify-between">
				{['home', 'about', 'preformer', 'shedule'].map((item) => (
					<li key={item} className={liStyle}>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CenterMenu