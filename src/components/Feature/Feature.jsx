

const Feature = ({ icon, title }) => {
	return (
		< div className="feature flex items-center justify-center flex-col relative text-center mx-12" >
			<div className="icon bg-[#081730] rounded-2xl p-4">
				<img
					src={require(`../../assets/${icon}.png`)}
					alt=""
					className="w-[3rem]"
				/>
			</div>

			<span className="mt-5">{title}</span>
			<span className="text-[#707070] mt-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati porro voluptate sapiente adipisci officiis.
			</span>

			<a href="/" className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
				Learn more
			</a>
		</div >
	)
}

export default Feature