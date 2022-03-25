import { useState } from 'react';

import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const CenterMenu = () => {
	const btnStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
	const liStyle = 'mx-[1.5rem] hover:cursor-pointer'
	const [toggle, setToggle] = useState(false);


	return (

		<div className="menu flex relative">
			<ul className="md:flex w-[100%] justify-between flex-wrap hidden">
				{['home', 'about', 'preformer', 'shedule'].map((item) => (
					<li key={item} className={liStyle}>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<HiMenuAlt3 className='w-[50px] h-[50px] md:hidden' onClick={() => setToggle(true)} />

			{toggle && (
				<div className=' md:hidden translate-x-[32px] h-screen'>
					<motion.div className='translate-x-[-100%] w-screen h-screen bg-[#020917] absolute z-[10] top-[-2.5rem] p-[35px]'
					// whileInView={{ y: [-300, 0] }}
					// transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX className='w-[50px] h-[50px] ml-[auto]' onClick={() => setToggle(false)} />
						<ul className="mt-[5rem] mb-[4rem]">
							{['home', 'about', 'preformer', 'shedule'].map((item) => (
								<li key={item} className={`${liStyle} text-[2rem]`}>
									<a href={`#${item}`}>{item}</a>
								</li>
							))}
						</ul>

						<div className="buttons flex">
							<button className={`mr-[35px] hover:bg-[#232A4E] text-[1.5rem] ${btnStyle}`}>Log In</button>
							<button className={`bg-[#232A4E] text-[1.5rem] ${btnStyle}`}>Sign In</button>
						</div>
					</motion.div>
				</div>
			)}
		</div>

	)
}

export default CenterMenu