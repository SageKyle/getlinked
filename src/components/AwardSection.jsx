import BronzeMedal from '../assets/icons/bronze_medal.svg'
import GoldMedal from '../assets/icons/gold_medal.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import SilverMedal from '../assets/icons/silver_medal.svg'
import Star from '../assets/icons/star.svg'
import Award from '../assets/images/award.png'

export default function AwardSection() {
	return (
		<section className="w-full flex flex-col gap-4 items-center justify-center border-b border-primary-border px-8 lg:px-24 py-20 relative">
			<img
				src={PurpleStar}
				alt=""
				aria-hidden
				loading="lazy"
				className="inline-block w-6 h-6 absolute top-16 lg:top-28 lg:left-1/4 animate-pulse transition-all duration-200"
			/>
			<div className="flex flex-col gap-2 lg:w-[40%] lg:ml-auto lg:mr-12 lg:mb-24 relative">
				<h4 className="text-2xl font-bold lg:text-left">Prices and</h4>
				<h4 className="text-2xl font-bold lg:text-left text-primary">
					rewards
				</h4>
				<p className="text-base font-light">
					Highlight of the prices or rewards for winners and for participants
				</p>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-6 h-6 absolute bottom-10 right-24 animate-pulse transition-all duration-200"
				/>
			</div>
			<article className="grid lg:grid-cols-[auto_55%] items-center lg:min-h-[25rem] relative">
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute right-6 -top-8 lg:right-1/2 lg:-top-16 animate-pulse transition-all duration-200"
				/>
				<div className="w-full p-8 pl-10 mb-auto flex items-start justify-center relative lg:-top-20">
					<img
						src={Award}
						loading="lazy"
						alt="award illustration"
						className="w-4/5 aspect-square"
					/>
				</div>
				<section className="w-full p-8 mt-8 grid grid-cols-[6rem_6rem_6rem] gap-6 items-center justify-center relative pt-16">
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block absolute -right-4 top-0 animate-pulse transition-all duration-200"
					/>
					{/* Silver Medal */}
					<div className="w-full min-h-36 sm:min-h-[15rem] flex flex-col items-center justify-end gap-2 p-6 rounded border border-primary-light bg-[rgba(212,52,254,0.12)] relative">
						<img
							src={SilverMedal}
							alt="silver medal"
							className="w-4/5 absolute inline-block -top-10"
						/>
						<h4 className="flex flex-col text-center font-bold text-base sm:text-2xl">
							<span>2nd</span>
							<span>Runner</span>
						</h4>
						<h5 className="font-bold text-base sm:text-2xl text-primary-light">
							N300,000
						</h5>
					</div>
					{/* Gold Medal */}
					<div className="w-full min-h-40 flex flex-col items-center justify-end gap-2 p-6 rounded border border-[#903AFF] bg-[rgba(144,58,255,0.12)] -top-6">
						<img
							src={GoldMedal}
							alt="gold medal"
							className="w-32 absolute inline-block -top-4"
						/>
						<h4 className="flex flex-col text-center font-bold text-base sm:text-2xl">
							<span>1st</span>
							<span>Runner</span>
						</h4>
						<h5 className="font-bold text-base sm:text-2xl text-primary">
							N400,000
						</h5>
					</div>
					{/* Bronze Medal */}
					<div className="w-full min-h-36 flex flex-col items-center justify-end gap-2 p-6 rounded border border-primary-light bg-[rgba(212,52,254,0.12)] relative">
						<img
							src={BronzeMedal}
							alt="bronze medal"
							className="w-4/5 absolute inline-block -top-10"
						/>
						<h4 className="flex flex-col text-center font-bold text-base sm:text-2xl">
							<span>3rd</span>
							<span>Runner</span>
						</h4>
						<h5 className="font-bold text-base sm:text-2xl text-primary-light">
							N150,000
						</h5>
					</div>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block opacity-40 absolute right-[30%] -bottom-8 animate-pulse transition-all duration-200"
					/>
				</section>
			</article>
		</section>
	)
}
