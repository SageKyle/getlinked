import Star from '../assets/icons/star.svg'
import BGGlow from '../assets/images/purple-lens-flare.png'
import RulesImage from '../assets/images/solving-puzzle.png'

export default function RulesSection() {
	return (
		<section
			className="w-full flex flex-col gap-4 items-center justify-center border-b border-primary-border px-8 lg:px-24 py-10 lg:flex-row-reverse lg:max-h-[80vh] relative"
			aria-description="rules and regulations"
		>
			<img
				src={BGGlow}
				loading="lazy"
				alt=""
				aria-hidden
				className="w-full absolute inline-block [transform:rotate(-90deg)] opacity-70 -top-10 -left-20 -z-[1] md:-left-40 md:-top-20 lg:-top-1/2 lg:-left-1/5 lg:w-3/4 lg:opacity-50"
			/>
			<div className="w-full pl-10 flex relative">
				<img
					src={RulesImage}
					loading="lazy"
					alt="idea lightbulb illustration"
					className="w-full max-w-xl mx-auto aspect-square"
				/>
			</div>
			<div className="w-full flex flex-col gap-3 relative">
				<h4 className="text-2xl text-center font-bold lg:text-left">
					Rules and
				</h4>
				<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
					Guidelines
				</h4>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 w-4 absolute right-0 top-8 lg:right-1/2 lg:top-2 animate-pulse transition-all duration-200"
				/>
				<p className="text-xs text-center md:text-base font-light lg:text-left">
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you&apos;re a coding
					genius, a design maverick, or a concept wizard, you&apos;ll have the
					chance to transform your ideas into reality. Solving real-world
					problems, pushing the boundaries of technology, and creating solutions
					that can change the world, that&apos;s what we&apos;re all about!
				</p>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block h-4 absolute -bottom-6 right-3/4 lg:h-10 lg:-right-6 animate-pulse transition-all duration-200"
				/>
			</div>
			<img
				src={BGGlow}
				loading="lazy"
				alt=""
				aria-hidden
				className="w-full absolute inline-block opacity-70 bottom-10 -right-40 [transform:rotate(90deg)] -z-[1] md:-bottom-10 md:-right-52 lg:-bottom-2/3 lg:-right-1/4 lg:w-3/4 lg:opacity-60"
			/>
		</section>
	)
}
