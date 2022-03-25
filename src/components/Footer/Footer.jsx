import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons"
import CenterMenu from '../CenterMenu/CenterMenu'

function Footer() {
	const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
	return (
		<div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[1]">
			<CenterMenu />
			<div className="flex w-[100%] justify-center mt-14">
				<a href="/" className={SocialStyle}>
					<Facebook />
				</a>
				<a href="/" className={SocialStyle}>
					<Twitter />
				</a>
				<a href="/" className={SocialStyle}>
					<YouTube />
				</a>
				<a href="/" className={`${SocialStyle} mr-[0]`}>
					<LinkedIn />
				</a>
			</div>
			<span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
				Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
				Vestibulum ullamcorper volutpat varius.
			</span>
		</div>
	);
}

export default Footer;