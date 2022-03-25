import { useState } from "react"
import { images } from "../../constants"
import MusicPlayer from "../MusicPlayer/MusicPlayer"
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor"

const Search = () => {

	const [elementIsVisible, setElementIsVisible] = useState(false);
	const bg = {
		true: {
			left: "-44rem",
		},
		false: {
			left: "-50rem",
		},
	};
	const redimg = {
		true: {
			left: "18rem",
		},
		false: {
			left: "16rem",
		},
	};
	const musicimg = {
		true: {
			left: "2rem",
		},
		false: {
			left: "6rem",
		},
	};

	return (
		<div className="search relative h-[65rem] px-[2rem] lg:px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[3] flex items-center justify-between rounded-b-[5rem] overflow-hidden">
			<div className="left flex-1 hidden md:block">
				<motion.img className="absolute top-[22rem] left-[-47rem] "
					variants={bg}
					animate={`${elementIsVisible}`}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					src={images.backgraphics} alt="backgraphics" />
				<motion.img className="absolute w-[16rem] top-[26rem]" src={images.d1} alt="d1" />
				<motion.img className="w-[9rem] absolute top-[32.7rem] left-[7rem]" src={images.d2} alt="d2" />
				<motion.img className="w-[9rem] top-[33rem] left-[17rem] absolute"
					variants={redimg}
					animate={`${elementIsVisible}`}
					transition={{
						duration: 1.2,
						type: "ease-out",
					}}
					src={images.d3} alt="d3" />
				<motion.img className="w-[17rem] top-[50rem] left-[2rem] absolute"
					variants={musicimg}
					animate={`${elementIsVisible}`}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					src={images.d4} alt="d4" />
			</div>
			<div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] z-[2]">
				<div className="searchbar flex justify-start w-[100%]">
					<input
						type="text"
						placeholder="Enter the keyword or URL"
						className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
					/>

					<button className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
						<img
							src={images.search}
							alt="search"
							className="w-[1.5rem]"
						/>
					</button>
				</div>

				<div className="tild flex justify-start mt-7 items-center w-[100%]">
					<img
						src={images.path318}
						alt="path318"
						className="w-[5rem]"
					/>
				</div>

				<div className="detail flex flex-col mt-5 text-4xl">
					<span>Search Music by</span>
					<span>
						<b>Name or Direct URL</b>
					</span>
					<span className="text-sm mt-3 text-[#4D586A]">
						Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
						eget. Vestibulum ullamcorper <br /> volutpat varius.
					</span>
				</div>

				<VisibilitySensor
					onChange={(isVisible) => setElementIsVisible(isVisible)}
				>
					<MusicPlayer />
				</VisibilitySensor >

			</div>
		</div>


	)
}

export default Search