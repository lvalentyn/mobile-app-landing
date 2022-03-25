import DownloadAds from '../DownloadAds/DownloadAds'
import { images } from '../../constants'

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
			<div className="images relative w-[50%]">
				<img className=" absolute top-[-8rem] left-[19rem]" src={images.backgraphics} alt="backgraphics" />
				<img className=" absolute top-[-15rem] left-[13rem] h-[34rem]" src={images.p1} alt="p1" />
				<img className=" absolute top-[94rem] left-[235rem] w-[175rem]" src={images.p2} alt="p2" />
				<img className=" absolute top-[12rem] left-[13rem] w-[5rem]" src={images.p3} alt="p3" />
				<img className=" absolute top-[-12rem] left-[12.5rem] w-[5rem]" src={images.p4} alt="p4" />
			</div>
		</div>
	)
}

export default Hero