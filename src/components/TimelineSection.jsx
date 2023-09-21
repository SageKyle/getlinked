import Styles from '../assets/styles/Timeline.module.css'

export default function TimelineSection() {
	return (
		<section className="w-full p-16">
			<div className="w-4/5 max-w-sm mx-auto my-10 text-center">
				<h4 className="text-2xl font-bold">Timeline</h4>
				<p className="text-base font-light">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>
			<ul className={`my-8 ${Styles.wrapper}`}>
				<li className="">
					<h5 className="text-2xl font-bold lg:text-right text-primary">
						Hackathon Announcement
					</h5>
					<p className="text-base font-light lg:text-right">
						The getlinked tech hackathon 1.0 is formally announced to the
						general public and teams begin to get ready to register
					</p>
					<h6
						className={`text-2xl font-bold text-primary lg:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						1
					</div>
				</li>
				{/* copy of above */}
				<li className="hidden lg:block">
					<h5 className="text-2xl font-bold lg:text-right text-primary lg:hidden">
						Hackathon Announcement
					</h5>
					<p className="text-base font-light lg:text-right lg:hidden">
						The getlinked tech hackathon 1.0 is formally announced to the
						general public and teams begin to get ready to register
					</p>
					<h6 className={`text-2xl font-bold text-primary ${Styles.date}`}>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						1
					</div>
				</li>

				<li className="">
					<h5 className="text-2xl font-bold lg:text-right text-primary lg:hidden">
						Teams Registration begins
					</h5>
					<p className="text-base font-light lg:hidden">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6 className={`text-2xl font-bold text-primary  ${Styles.date}`}>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						2
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden lg:block">
					<h5 className="text-2xl font-bold lg:text-right text-primary">
						Teams Registration begins
					</h5>
					<p className="text-base font-light">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6
						className={`text-2xl font-bold text-primary lg:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						2
					</div>
				</li>

				{/* test */}
				<li className="">
					<h5 className="text-2xl font-bold lg:text-right text-primary lg:hidden">
						Teams Registration begins
					</h5>
					<p className="text-base font-light lg:hidden">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6 className={`text-2xl font-bold text-primary  ${Styles.date}`}>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						2
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden lg:block">
					<h5 className="text-2xl font-bold lg:text-right text-primary">
						Teams Registration begins
					</h5>
					<p className="text-base font-light">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6
						className={`text-2xl font-bold text-primary lg:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						2
					</div>
				</li>
			</ul>
		</section>
	)
}
