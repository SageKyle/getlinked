import ArrowIcon from '../assets/icons/arrow.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Idea from '../assets/images/idea-illustration.png'

export default function IdeaSection() {
	return (
		<section className="w-full grid gap-4 items-center justify-center border-b border-primary-border px-24 py-10 lg:grid-cols-2 lg:max-h-[80vh]">
			<div className="w-full pl-10 flex relative">
				<img
					src={PurpleStar}
					alt=""
					loading="lazy"
					className="inline-block w-6 h-6 absolute top-1/3 -left-3"
				/>
				<img
					src={Idea}
					loading="lazy"
					alt="idea lightbulb illustration"
					className="w-4/5 py-6 aspect-square"
				/>
				<img
					src={ArrowIcon}
					alt=""
					loading="lazy"
					className="inline-block absolute right-20 bottom-2"
				/>
			</div>
			<div className="w-full flex flex-col gap-3 relative">
				<h4 className="text-2xl text-center font-bold lg:text-left">
					Introduction to getlinked
				</h4>
				<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
					tech Hackathon 1.0
				</h4>
				<img
					src={PurpleStar}
					alt=""
					loading="lazy"
					className="inline-block absolute right-4 top-6"
				/>
				<p className="text-base font-light">
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you&apos;re a coding
					genius, a design maverick, or a concept wizard, you&apos;ll have the
					chance to transform your ideas into reality. Solving real-world
					problems, pushing the boundaries of technology, and creating solutions
					that can change the world, that&apos;s what we&apos;re all about!
				</p>
			</div>
		</section>
	)
}
