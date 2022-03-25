import DownloadAds from '../DownloadAds/DownloadAds'
import { images } from '../../constants'

const Download = () => {
	return (
		<div className="download flex flex-col items-center justify-start px-[2rem] lg:px-[5rem] bg-[#020917] h-[auto] md:h-[48rem] pt-[18rem] pb-[8rem] md:pb-[0] mt-[-10rem] relative z-[2] rounded-b-[5rem] text-center">
			<img src={images.path318} alt="path318" className="w-[5rem]" />
			<div className="headline mt-7 flex flex-col items-center text-[2rem]">
				<span>Download The Best Music</span>
				<span>
					<b>App Now!</b>
				</span>
				<span className="text-[1rem] text-gray-400 lg:px-[15rem] text-center mt-[1rem]">
					Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
					Vestibulum ullamcorper volutpat varius.
				</span>
			</div>
			<div className="mt-14">
				<DownloadAds />
			</div>
		</div>
	)
}

export default Download