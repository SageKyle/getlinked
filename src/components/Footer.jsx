import { Link } from 'react-router-dom'
import FacebookIcon from '../assets/icons/facebook.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import LocationIcon from '../assets/icons/location.svg'
import Logo from '../assets/icons/logo.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import TwitterIcon from '../assets/icons/twitter.svg'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center gap-6 text-base font-light p-16 relative">
			<img
				src={Star}
				alt=""
				aria-hidden
				className="inline-block w-6 left-24 top-24 absolute"
			/>
			<img
				src={Star}
				alt=""
				aria-hidden
				className="inline-block opacity-40 w-4 right-1/3 top-24 absolute"
			/>
			<article className="flex flex-col md:flex-row gap-6 flex-wrap  justify-evenly w-full relative">
				<section className="flex flex-col items-start justify-start w-1/4">
					<img src={Logo} alt="getlinked" className="h-6" />

					<p className="text-base font-light my-4">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>

					<div className="mt-8 p-2 flex text-base font-light">
						<Link to={'#'} className="pr-2 border-r-2 border-primary-light">
							Terms of Use
						</Link>
						<Link to={'#'} className="pl-2">
							Privacy Policy
						</Link>
					</div>
				</section>
				<section className="flex flex-col gap-2">
					<h4 className="text-xl font-bold lg:text-left text-primary">
						Useful Links
					</h4>
					<Link to={'#'} className="py-2">
						Overview
					</Link>
					<Link to={'#'} className="py-2">
						Timeline
					</Link>
					<Link to={'#'} className="py-2">
						FAQs
					</Link>
					<Link to={'#'} className="py-2">
						Register
					</Link>

					<div className="flex items-center gap-4">
						<h6 className="text-lg font-bold lg:text-left text-primary">
							Follow Us
						</h6>
						<a
							href="https//:instagram.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img
								src={InstagramIcon}
								alt="follow us on Instagram"
								title="Follow us on Instagram"
							/>
						</a>
						<a
							href="https//:twitter.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img
								src={TwitterIcon}
								alt="follow us on Twitter (X)"
								title="Follow us on Twitter (X)"
							/>
						</a>
						<a
							href="https//:facebook.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img
								src={FacebookIcon}
								alt="follow us on Facebook"
								title="Follow us on Facebook"
							/>
						</a>
						<a
							href="https//:linkedin.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img
								src={LinkedinIcon}
								alt="follow us on LinkedIn"
								title="Follow us on LinkedIn"
							/>
						</a>
					</div>
				</section>
				<section className="flex flex-col gap-5 items-start">
					<h4 className="text-lg font-bold lg:text-left text-primary">
						Contact Us
					</h4>
					<div className="flex items-center gap-4">
						<img src={PhoneIcon} alt="tel" />
						<a href="tel:+2346707653444">+234 6707653444</a>
					</div>
					<div className="flex items-baseline gap-4">
						<img src={LocationIcon} alt="tel" />
						<p>
							27,Alara Street <br />
							Yaba 100012
							<br /> Lagos State
						</p>
					</div>
				</section>
			</article>
			<p className="w-fit mx-auto mt-9">
				All rights reserved. &copy; getlinked Ltd.
			</p>
			<img
				src={PurpleStar}
				alt=""
				aria-hidden
				className="inline-block w-4 right-[51%] bottom-24 absolute"
			/>
			<img
				src={Star}
				alt=""
				aria-hidden
				className="inline-block w-4 right-16 bottom-40 absolute"
			/>
		</footer>
	)
}
