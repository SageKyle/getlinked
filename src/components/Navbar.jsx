import { NavLink } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import PrimaryBtn from './PrimaryBtn'

export default function Navbar() {
	return (
		<header
			className={`w-full text-lg justify-between capitalize flex items-center py-8 px-16`}
		>
			<NavLink to={'/'}>
				<img src={Logo} className="" alt="getlinked" />
			</NavLink>
			<nav className={` flex items-center gap-10 `}>
				<ul className={` flex items-center gap-8`}>
					<li>
						<NavLink to={''}>timeline</NavLink>
					</li>
					<li>
						<NavLink to={''}>overview</NavLink>
					</li>
					<li>
						<NavLink to={''}>FAQs</NavLink>
					</li>
					<li>
						<NavLink to={''}>contact</NavLink>
					</li>
				</ul>
				<div className="">
					<PrimaryBtn text={'register'} link={'/register'} />
					{/* <button type="button">logout</button> */}
				</div>
			</nav>
		</header>
	)
}
