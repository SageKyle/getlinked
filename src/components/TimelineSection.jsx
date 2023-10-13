import Styles from '../assets/styles/Timeline.module.css'

export default function TimelineSection() {
	return (
		<section className="w-full p-8 lg:p-16" id="timeline">
			<div className="w-4/5 max-w-sm mx-auto my-10 text-center">
				<h4 className="text-2xl font-bold">Timeline</h4>
				<p className="text-base font-light">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>
			<ul className={`my-12 lg:mt-24 ${Styles.wrapper}`}>
				<li className={`ml-14 md:ml-0 ${Styles.sideborder}`}>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary">
						Hackathon Announcement
					</h5>
					<p className="text-xs md:text-base font-light md:text-right">
						The getlinked tech hackathon 1.0 is formally announced to the
						general public and teams begin to get ready to register
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary md:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4 bg-gradient grid place-content-center place-items-center mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						1
					</div>
				</li>
				{/* copy of above */}
				<li className="hidden md:block" aria-hidden>
					<h5 className="text-2xl font-bold md:text-right text-primary md:hidden">
						Hackathon Announcement
					</h5>
					<p className="text-base font-light md:hidden">
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

				<li className={`ml-14 md:ml-0 ${Styles.sideborder}`}>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary md:hidden">
						Teams Registration begins
					</h5>
					<p className="text-xs md:text-base font-light md:hidden">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary  ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						2
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden md:block" aria-hidden>
					<h5 className="text-2xl font-bold text-primary">
						Teams Registration begins
					</h5>
					<p className="text-base font-light">
						Interested teams can now show their interest in the getlinked tech
						hackathon 1.0 2023 by proceeding to register
					</p>
					<h6
						className={`text-2xl font-bold text-primary md:hidden ${Styles.date}`}
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

				<li className={`ml-14 md:ml-0 ${Styles.sideborder}`}>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary">
						Teams Registration ends
					</h5>
					<p className="text-xs md:text-base font-light">
						Interested Participants are no longer Allowed to register
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary md:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center  mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						3
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden md:block" aria-hidden>
					<h5 className="text-2xl font-bold md:text-right text-primary md:hidden">
						Teams Registration ends
					</h5>
					<p className="text-base font-light md:hidden">
						Interested Participants are no longer Allowed to register
					</p>
					<h6 className={`text-2xl font-bold text-primary ${Styles.date}`}>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						3
					</div>
				</li>

				<li className={`ml-14 md:ml-0 ${Styles.sideborder}`}>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary md:hidden">
						Announcement of accepted teams and ideas
					</h5>
					<p className="text-xs md:text-base font-light md:hidden">
						All teams whom idea has been accepted into getlinked tech hackathon
						1.0 2023 are formally announced
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary  ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center  mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						4
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden md:block" aria-hidden>
					<h5 className="text-2xl font-bold text-primary">
						Announcement of accepted teams and ideas
					</h5>
					<p className="text-base font-light">
						All teams whom idea has been accepted into getlinked tech hackathon
						1.0 2023 are formally announced
					</p>
					<h6
						className={`text-2xl font-bold text-primary md:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						4
					</div>
				</li>

				<li className={`ml-14 md:ml-0 ${Styles.sideborder}`}>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary">
						Getlinked Hackathon 1.0 officially begins
					</h5>
					<p className="text-xs md:text-base font-light">
						Accepted teams can now proceed to build their ground breaking skill
						driven solutions
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary md:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						5
					</div>
				</li>

				{/* copy of above */}
				<li className="hidden md:block" aria-hidden>
					<h5 className="text-2xl font-bold md:text-right text-primary md:hidden">
						Getlinked Hackathon 1.0 officially begins
					</h5>
					<p className="text-base font-light md:hidden">
						Accepted teams can now proceed to build their ground breaking skill
						driven solutions
					</p>
					<h6 className={`text-2xl font-bold text-primary ${Styles.date}`}>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						5
					</div>
				</li>
				<li
					className={`ml-14 md:ml-0 bg-[#150e28] drop-shadow-md ${Styles.sideborder}`}
				>
					<h5 className="text-lg md:text-2xl font-bold md:text-right text-primary md:hidden">
						Demo day
					</h5>
					<p className="text-xs md:text-base font-light md:hidden">
						Teams get the opportunity to pitch their projects to judges. The
						winner of the hackathon will also be announced on this day
					</p>
					<h6
						className={`text-lg md:text-2xl font-bold text-primary  ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center mb-6 md:mb-0 -ml-14 md:ml-0 ${Styles.circle}`}
						aria-hidden
					>
						6
					</div>
				</li>

				{/* copy of above */}
				<li
					className="hidden md:block relative bg-[#150e28] drop-shadow-md z-[-1]"
					aria-hidden
				>
					<h5 className="text-2xl font-bold md:text-right text-primary">
						Demo day
					</h5>
					<p className="text-base font-light">
						Teams get the opportunity to pitch their projects to judges. The
						winner of the hackathon will also be announced on this day
					</p>
					<h6
						className={`text-2xl font-bold text-primary md:hidden ${Styles.date}`}
					>
						November 18, 2023
					</h6>
					<div
						className={`font-semibold h-12 aspect-square rounded-full p-4  bg-gradient grid place-content-center place-items-center ${Styles.circle}`}
						aria-hidden
					>
						6
					</div>
				</li>
			</ul>
		</section>
	)
}
