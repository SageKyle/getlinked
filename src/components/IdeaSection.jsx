import { motion } from 'framer-motion'
import ArrowIcon from '../assets/icons/arrow.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Idea from '../assets/images/idea-illustration.png'

export default function IdeaSection() {
	return (
		<section
			className="w-full grid gap-4 items-center justify-center border-b border-primary-border px-8 py-10 lg:grid-cols-2 lg:max-h-[80vh] overflow-hidden"
			id="overview"
			aria-describedby="idea-section"
		>
			<motion.div
				initial={{ opacity: 0, x: '-100%', rotate: '-60deg' }}
				whileInView={{ opacity: 1, x: 0, rotate: '0deg' }}
				transition={{ duration: 1 }}
				layout
				viewport={{ once: true }}
				className="w-full pl-6 flex flex-col relative mb-2 md:mb-8 lg:mb-0"
			>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-6 h-6 absolute top-1/3 -left-3 animate-pulse transition-all duration-200"
				/>
				<img
					src={Idea}
					loading="lazy"
					alt="idea lightbulb illustration"
					className="w-4/5 max-w-xs mx-auto py-6 aspect-square"
				/>
				<img
					src={ArrowIcon}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block lg:absolute h-10 lg:right-20 bottom-2"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: '100%' }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				layout
				viewport={{ once: true }}
				className="w-full flex flex-col gap-2 md:gap-3 relative"
			>
				<h4
					className="text-xl md:text-2xl text-center font-bold lg:text-left"
					id="idea-section"
				>
					Introduction to getlinked
				</h4>
				<h4 className="text-xl md:text-2xl text-center font-bold lg:text-left text-primary">
					tech Hackathon 1.0
				</h4>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute h-4 -right-2 md:right-20 top-6 animate-pulse transition-all duration-200"
				/>
				<p className=" text-xs md:text-base font-light">
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you&apos;re a coding
					genius, a design maverick, or a concept wizard, you&apos;ll have the
					chance to transform your ideas into reality. Solving real-world
					problems, pushing the boundaries of technology, and creating solutions
					that can change the world, that&apos;s what we&apos;re all about!
				</p>
			</motion.div>
		</section>
	)
}
