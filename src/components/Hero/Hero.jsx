import { useState } from 'react'
import DownloadAds from '../DownloadAds/DownloadAds'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const Hero = () => {
	const [elementIsVisible, setElementIsVisible] = useState(false)

	const bg = {
		true: {
			left: "7rem",
		},
		false: {
			left: "19rem",
		},
	};
	const musicPlayer = {
		true: {
			left: "295px",
		},
		false: {
			left: "235px",
		},
	};
	const rect = {
		true: {
			left: "12rem",
		},
		false: {
			left: "13.5rem",
		},
	}
	const heart = {
		true: {
			left: "9rem",
		},
		false: {
			left: "12.5rem",
		},
	};

	return (
		<VisibilitySensor
			onChange={(isVisible) => setElementIsVisible(isVisible)}
			minTopValue={300}
		>
			<div className="hero bg-[#081730] flex items items-center justify-between px-[2rem] lg:px-[5rem] py-[6rem] md:py-[0rem] h-[auto] md:h-[36rem] rounded-b-[5rem] w-[100%] relative z-[5]">
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
				<div className="images relative w-[50%] h-[100%] hidden md:block">
					<motion.img className=" absolute bottom-[5rem] left-[19rem] mh-[100%]"
						variants={bg}
						animate={`${elementIsVisible}`}
						transition={{
							duration: 1,
							type: "ease-out",
						}}
						src={images.backgraphics} alt="backgraphics"
					/>

					<img
						src={images.p1}
						alt=""
						className="absolute bottom-[-1rem] h-[34rem] left-[13rem]"
					/>

					<motion.img className="absolute left-[235px] bottom-[85px] w-[175px]"
						variants={musicPlayer}
						animate={`${elementIsVisible}`}
						transition={{
							duration: 1,
							type: "ease-out",
						}}
						src={images.p2} alt="p2" />
					<motion.img className=" absolute bottom-[1.5rem] left-[13.5rem] w-[5rem]"
						variants={rect}
						animate={`${elementIsVisible}`}
						transition={{
							duration: 1,
							type: "ease-out",
						}}
						src={images.p3} alt="p3" />
					<motion.img className=" absolute top-[-12rem] left-[12.5rem] w-[5rem]"
						variants={heart}
						animate={`${elementIsVisible}`}
						transition={{
							duration: 1,
							type: "ease-out",
						}}
						src={images.p4} alt="p4" />
				</div>
			</div>
		</VisibilitySensor>
	)
}

export default Hero