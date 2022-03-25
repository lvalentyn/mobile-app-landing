import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons"
import CenterMenu from '../CenterMenu/CenterMenu'

function Footer() {
	const SocialStyle = "rounded-full border-2 border-whit p-2 mx-[2.5rem] mt-[4rem]"
	return (
		<div className=" footer flex flex-col items-center justify-start px-[2rem] lg:px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[1]">
			<div className="hidden md:block" >
				<CenterMenu />
			</div>
			<div className="flex w-[100%] justify-center flex-wrap">
				<a href="/" className={SocialStyle}>
					<Facebook />
				</a>
				<a href="/" className={SocialStyle}>
					<Twitter />
				</a>
				<a href="/" className={SocialStyle}>
					<YouTube />
				</a>
				<a href="/" className={`${SocialStyle}`}>
					<LinkedIn />
				</a>
			</div>
			<span className="text-[1rem] text-gray-400 lg:px-[15rem] text-center mt-[4rem]">
				Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
				Vestibulum ullamcorper volutpat varius.
			</span>
		</div>
	);
}

export default Footer;