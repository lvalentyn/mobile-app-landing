import DownloadAds from '../DownloadAds/DownloadAds'

const Hero = () => {
	return (
		<div className="wrapper bg-[#081730] flex items items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
			<div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
				<span>Experience The</span> <span><b>Best Quality Music</b></span>
				<span className="text-[15px] text-[#525D6E]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptate! <br />
					Lorem ipsum dolor sit amet.
				</span>
				<div className="">
					<span className="text-[13px]">Download now on iOS and Android</span>
					<DownloadAds />
				</div>
			</div>
			<div className="images">Images</div>
		</div>
	)
}

export default Hero