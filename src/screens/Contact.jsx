import { motion } from 'framer-motion'
import FacebookIcon from '../assets/icons/facebook.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import TwitterIcon from '../assets/icons/twitter.svg'
import Navbar from '../components/Navbar'

export default function Contact() {
	return (
		<>
			<Navbar />
			<section
				aria-description="contact page"
				className="grid my-10 tex-white lg:grid-cols-[auto_58%] lg:w-[90%] lg:mx-auto relative"
			>
				<motion.div
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						delay: 0,
						type: 'spring',
						stiffness: 100,
					}}
					layout
					viewport={{ once: true }}
					className="w-full hidden lg:flex flex-col items-center justify-center 2xl:max-w-2xl relative"
				>
					<h1 className="block text-primary-light capitalize text-3xl font-bold mb-6 mr-10">
						get in touch
					</h1>
					<section
						className="flex flex-col gap-5 items-start text-sm"
						aria-description="contact address"
					>
						<h4 className="text-lg">
							Contact <br /> Information
						</h4>
						<p className="">
							27,Alara Street <br />
							Yaba 100012
							<br /> Lagos State
						</p>
						<div className="flex gap-2">
							<span>Call Us :</span>
							<a href="tel:+2347067981819" className="hover:text-primary">
								07067981819
							</a>
						</div>
						<p>
							We are open from Monday-Friday <br />
							08:00am - 05:00pm
						</p>
						<h6 className=" font-bold text-primary-light capitalize">
							share on
						</h6>
						<div className="flex items-center gap-4 -mt-4">
							<a
								href="https//:instagram.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={InstagramIcon}
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Instagram"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Twitter (X)"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Facebook"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on LinkedIn"
									loading="lazy"
									title="Follow us on LinkedIn"
								/>
							</a>
						</div>
					</section>

					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 h-4 md:w-6 md:h-6 absolute top-2/3 right-10 lg:top-[60%]"
					/>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="hidden md:inline-block w-4 h-4 opacity-40 md:w-6 md:h-6 absolute bottom-40 left-10"
					/>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="hidden md:inline-block w-4 h-4 md:w-6 md:h-6 absolute top-40 left-10"
					/>
				</motion.div>
				<form className="relative px-10 w-full md:px-20 md:py-16 lg:rounded-xl lg:shadow lg:bg-[rgba(255,_255,_255,_0.03)] 2xl:max-w-2xl text-sm">
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 h-4 opacity-40 md:w-6 md:h-6 absolute top-28 left-4 lg:left-2/3 lg:top-4"
					/>
					<motion.h1
						initial={{ opacity: 0, y: '100%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.1,
						}}
						layout
						id="contact"
						className="block text-primary-light capitalize text-2xl font-semibold font-['Clash_Display']"
					>
						Questions or need assistance? <br />
						Let us know!
					</motion.h1>
					<small className="w-full inline-block text-sm my-6">
						Contact us for any questions regarding the event
					</small>
					<motion.label
						initial={{ opacity: 0, y: '-100%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.1,
						}}
						layout
						className="w-full block mb-4"
					>
						<input
							type="text"
							required
							name="name"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Your name"
						/>
					</motion.label>
					<motion.label
						initial={{ opacity: 0, y: '-100%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.3,
						}}
						layout
						className="w-full block mb-4"
					>
						<input
							type="email"
							required
							name="email"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Your email address"
						/>
					</motion.label>
					<motion.label
						initial={{ opacity: 0, y: '-100%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.6,
						}}
						layout
						className="w-full block mb-4"
					>
						<input
							type="tel"
							required
							name="topic"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Your phone number"
						/>
					</motion.label>

					<motion.label
						initial={{ opacity: 0, y: '-100%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.8,
						}}
						layout
						className="flex gap-2 items-center my-2"
					>
						<textarea
							name="message"
							placeholder="Message"
							className="relative resize-none h-32 w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
						/>
					</motion.label>
					<motion.button
						initial={{ opacity: 0, x: '100%' }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
							delay: 0.9,
							type: 'spring',
							stiffness: 100,
						}}
						layout
						type="button"
						className="bg-gradient font-semibold text-xl rounded mt-10 py-4 px-8 capitalize flex justify-center w-3/4 mx-auto lg:w-1/2 cursor-pointer hover:bg-primary hover:bg-blend-soft-light ease-in-out hover:duration-300 hover:transition-colors active:translate-y-2"
					>
						register now
					</motion.button>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block lg:hidden w-2 h-2 md:w-4 md:h-4 absolute bottom-1/3 right-8"
					/>

					<aside className="flex flex-col items-center justify-center gap-4 mt-16 lg:hidden">
						<h6 className="text-sm font-bold text-primary-light capitalize">
							share on
						</h6>
						<div className="flex items-center gap-4">
							<a
								href="https//:instagram.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={InstagramIcon}
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Instagram"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Twitter (X)"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on Facebook"
									loading="lazy"
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
									className="hover:[transform:scale(1.1)]"
									alt="follow us on LinkedIn"
									loading="lazy"
									title="Follow us on LinkedIn"
								/>
							</a>
						</div>
					</aside>
				</form>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="hidden lg:inline-block md:w-4 md:h-4 absolute -bottom-4 right-20"
				/>
			</section>
		</>
	)
}
