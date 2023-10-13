import { motion } from 'framer-motion'
import PurpleStar from '../assets/icons/purple-star.png'
import QuestionMark from '../assets/icons/question-mark-1.svg'
import QuestionMark2 from '../assets/icons/question-mark-2.svg'
import QuestionMark3 from '../assets/icons/question-mark-3.svg'
import Star from '../assets/icons/star.svg'
import FaqImage from '../assets/images/faq.png'

export default function FAQSection() {
	return (
		<section
			className="w-full flex items-center justify-center border-b border-primary-border"
			aria-description="frequently asked questions"
		>
			<article className="w-[90%] mx-auto flex flex-col gap-4 items-center justify-center p-8 lg:px-24 py-10 lg:flex-row lg:pt-20 relative 2xl:max-w-[80%]">
				<div className="w-full flex flex-col gap-3 relative">
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 lg:w-8 mb-6 relative -left-6 top-2"
					/>
					<h4 className="text-2xl text-center font-bold lg:text-left">
						Frequently Asked
					</h4>
					<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
						Questions
					</h4>

					<p className="text-sm">
						We got answers to the questions that you might want to ask about
						getlinked Hackathon 1.0
					</p>
					<div className="space-y-4 text-sm">
						<details className="w-full mb-3 border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									Can I work on a project I started before the hackathon?
								</span>
								<span className="text-primary text-lg font-bold inline-block ml-2 font-['Montserrat',_sans-serif]">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolorsit amet consectetur adipisicing elit.
								Doloremque, quis?
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>What happens if I need help during the hackathon?</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">.</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									What happens if I don&apos;t have an idea for a project?
								</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>Can I join a team or do I have to come with one?</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>What happens after the hackathon ends</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									Can I work on a project I started before the hackathon?
								</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Iste vitae distinctio, pariatur voluptatum iusto rerum!
							</p>
						</details>
					</div>
				</div>
				<div className="w-full flex flex-col items-center justify-center relative mt-10 lg:mt-0">
					<motion.img
						initial={{ opacity: 0, y: '-150%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.1,
						}}
						layout
						src={QuestionMark}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-24 xl:h-24 relative inline-block top-4 left-1 xl:top-6 md:-left-3 md:top-8"
					/>
					<motion.img
						initial={{ opacity: 0, y: '-150%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.5,
						}}
						layout
						src={QuestionMark2}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-24 xl:h-24 absolute inline-block -top-1 left-16 md:left-[30%] md:top-2 lg:left-20 xl:left-32 2xl:left-[30%]"
					/>
					<motion.img
						initial={{ opacity: 0, y: '-150%' }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.8,
						}}
						layout
						src={QuestionMark3}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-24 xl:h-24 absolute inline-block top-4 left-4 md:left-[20%] lg:left-10 md:top-10 xl:top-6 xl:left-16 2xl:top-10 2xl:left-[20%]"
					/>
					<motion.img
						initial={{ opacity: 0, x: '100%' }}
						whileInView={{ opacity: 1, x: 0 }}
						animate={{ x: 100 }}
						transition={{
							duration: 1,
							delay: 0.9,
						}}
						layout
						src={FaqImage}
						loading="lazy"
						alt="frequently asked questions"
						className="w-full md:w-3/4 mx-auto lg:w-full aspect-square"
					/>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 absolute left-0 lg:top-1/3 lg:left-10 animate-pulse transition-all duration-200"
					/>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 absolute -top-6 right-1/4 lg:top-0 lg:right-[40%] animate-pulse transition-all duration-200"
					/>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="hidden md:inline-block h-8 opacity-40 absolute left-0 bottom-56 lg:left-20 animate-pulse transition-all duration-200"
					/>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="h-8 inline-block absolute -bottom-6 -right-6 animate-pulse transition-all duration-200"
					/>
				</div>
			</article>
		</section>
	)
}
