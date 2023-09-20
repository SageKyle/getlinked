import { NavLink } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import utils from '../assets/styles/Helpers.module.css'
import Styles from '../assets/styles/Navbar.module.css'
import PrimaryBtn from './PrimaryBtn'

export default function Navbar() {
	return (
		<header
			className={`${utils.flexContainer} ${Styles.container} text-lg font-semibold justify-between capitalize`}
		>
			<NavLink to={'/'}>
				<img src={Logo} className="" alt="getlinked" />
			</NavLink>
			<nav className={`${utils.flexContainer} ${Styles.navWrapper}`}>
				<ul className={`${utils.flexContainer} ${Styles.navSection}`}>
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
