import { images } from "../../constants"
import Feature from "../Feature/Feature"

const Experience = () => {
	return (
		<div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
			<img className="w-[5rem]" src={images.path318} alt="path318" />
			<div className="headline mt-7 flex flex-col items-center text-[2rem]">
				<span>An Amazing App Can Change Your Daily Life</span>
				<span>
					<b>Music Experience</b>
				</span>
			</div>

			<div className="features flex items-center justify-around mt-[6rem] w-[100%]">
				<Feature icon='Group2' title='For Live music' />
				<Feature icon='musicicon' title='For daily music' />
				<Feature icon='Group4' title='For artists' />
			</div>
		</div>
	)
}

export default Experience