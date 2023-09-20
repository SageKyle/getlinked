import Circle from '../assets/icons/circle.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import CriteriaImage from '../assets/images/checking-criteria.png'
import PrimaryBtn from './PrimaryBtn'

export default function CritieriaSection() {
	return (
		<section className="w-full grid gap-4 items-center justify-center border-b border-primary-border px-24 py-14 lg:grid-cols-2">
			<div className="w-full pl-10 flex relative">
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute -top-16 left-32"
				/>
				<img
					src={Circle}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-20 h-20 absolute top-2 left-24 -z-[1]"
				/>
				<img
					src={CriteriaImage}
					loading="lazy"
					alt="judging criteria"
					className="w-4/5 py-6 aspect-square flex"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 absolute right-1/2 bottom-1/2"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute right-20 bottom-2"
				/>
			</div>
			<div className="w-full flex flex-col gap-3 relative text-sm">
				<h4 className="text-2xl text-center font-bold leading-3 lg:text-left">
					Judging Criteria
				</h4>
				<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
					key attributes
				</h4>
				<p className="mb-1 mt-2">
					<span className=" text-base font-semibold text-primary">
						Innovation and Creativity:
					</span>{' '}
					Evaluate the uniqueness and creativity of the solution. Consider
					whether it addresses a real-world problem in a novel way or introduces
					innovative features.
				</p>

				<p className="mb-1">
					<span className="text-base font-semibold text-primary">
						Functionality:
					</span>{' '}
					Assess how well the solution works. Does it perform its intended
					functions effectively and without major issues? Judges would consider
					the completeness and robustness of the solution.
				</p>

				<p className="mb-1">
					<span className="text-base font-semibold text-primary">
						Impact and Relevance:
					</span>{' '}
					Determine the potential impact of the solution in the real world. Does
					it address a significant problem, and is it relevant to the target
					audience? Judges would assess the potential social, economic, or
					environmental benefits.
				</p>

				<p className=" mb-2">
					<span className="text-base font-semibold text-primary">
						Technical Complexity:
					</span>{' '}
					Evaluate the technical sophistication of the solution. Judges would
					consider the complexity of the code, the use of advanced technologies
					or algorithms, and the scalability of the solution.
				</p>

				<p className="mb-3">
					<span className="text-base font-semibold text-primary">
						Adherence to Hackathon Rules:
					</span>{' '}
					Judges will Ensure that the team adhered to the rules and guidelines
					of the hackathon, including deadlines, use of specific technologies or
					APIs, and any other competition-specific requirements.
				</p>

				<PrimaryBtn text={'learn more'} link={'/'} extraStyles={'w-fit'} />
			</div>
		</section>
	)
}
