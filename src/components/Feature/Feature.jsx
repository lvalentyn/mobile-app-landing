
import { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Feature = ({ icon, title }) => {
	const variant = {
		true: {
			transform: "scale(1)",
		},
		false: {
			transform: "scale(0.5)",
		},
	};

	const [elementIsVisible, setElementIsVisible] = useState(false);

	return (
		<VisibilitySensor
			onChange={(isVisible) => setElementIsVisible(isVisible)}>
			< div className="feature flex items-center justify-center flex-col relative text-center mx-12" >
				<motion.div className="icon bg-[#081730] rounded-2xl p-4"
					variants={variant}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					animate={`${elementIsVisible}`}
				>
					<img
						src={require(`../../assets/${icon}.png`)}
						alt=""
						className="w-[3rem]"
					/>
				</motion.div>

				<span className="mt-5">{title}</span>
				<span className="text-[#707070] mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati porro voluptate sapiente adipisci officiis.
				</span>

				<a href="/" className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
					Learn more
				</a>
			</div >
		</VisibilitySensor>
	)
}

export default Feature