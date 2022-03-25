import { images } from '../../constants';
import CenterMenu from '../CenterMenu/CenterMenu';

const Header = () => {
	const btnStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
	return (
		<div className="header bg-[#081730] flex items-center justify-between px-[2rem] lg:px-[5rem] pt-[2.4rem] text-[0.8rem] z-[10]">

			<img className="logo w-[42px] h-[42px]" src={images.muzicLogo} alt="logo" />

			<CenterMenu />

			<div className="buttons md:flex hidden">
				<button className={`mr-[35px] hover:bg-[#232A4E] ${btnStyle}`}>Log In</button>
				<button className={`bg-[#232A4E] ${btnStyle}`}>Sign In</button>
			</div>
		</div>
	)
}

export default Header