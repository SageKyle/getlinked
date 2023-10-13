import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CloseNav from '../assets/icons/close-nav.svg'
import Hamburger from '../assets/icons/hamburger.svg'
import Logo from '../assets/icons/logo.svg'
import BGGlow from '../assets/images/purple-lens-flare.png'
import PrimaryBtn from '../utils/PrimaryBtn'

export default function Navbar() {
	const [showNav, toggleShowNav] = useState(false)
	return (
		<header
			className={`w-full text-lg justify-between capitalize flex items-center py-8 px-6 lg:px-16 relative border-b border-primary-border`}
		>
			<img
				src={BGGlow}
				aria-hidden
				loading="lazy"
				className="hidden lg:inline-block absolute w-1/2 object-cover top-0 left-[18%]"
				alt=""
			/>
			<NavLink to={'/'}>
				<img src={Logo} className="inline-block mr-auto" alt="getlinked" />
			</NavLink>
			<nav className="w-full flex items-center justify-end lg:w-fit">
				<article
					role="navigation"
					className={`flex items-center justify-center gap-4 absolute inset-0 w-full flex-col transition-all duration-500 ease-in-out bg-[#150e28] lg:static lg:bg-transparent lg:h-auto lg:flex-row lg:w-fit ${
						showNav
							? 'translate-y-0 z-10 h-screen'
							: '-translate-y-[30rem] -z-[5] lg:translate-y-0 lg:z-auto'
					}`}
				>
					<img
						src={CloseNav}
						onClick={() => toggleShowNav(false)}
						alt="close navbar"
						className="inline-block absolute right-20 top-16 lg:hidden"
					/>
					<ul
						className={`flex flex-col items-start gap-8 lg:flex-row list-none`}
					>
						<li>
							<HashLink smooth to={'/#timeline'}>
								timeline
							</HashLink>
						</li>
						<li>
							<HashLink smooth to={'/#overview'}>
								overview
							</HashLink>
						</li>
						<li>
							<HashLink smooth to={'/#faq'}>
								FAQs
							</HashLink>
						</li>
						<li>
							<NavLink to={'/contact'}>contact</NavLink>
						</li>
					</ul>
					<PrimaryBtn text={'register'} link={'/register'} />
				</article>

				<img
					src={Hamburger}
					onClick={() => toggleShowNav(true)}
					alt="open navbar"
					className="inline-block cursor-pointer h-4  lg:hidden"
				/>
			</nav>
		</header>
	)
}
