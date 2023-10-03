import ChainIcon from '../assets/icons/chain.svg'
import FireIcon from '../assets/icons/fire.svg'
// import LightbulbIcon from '../assets/icons/lightbulb.svg'
import PurpleLine from '../assets/icons/purple-underline.png'
import HeroImage from '../assets/images/hackathon-guy.png'
import useCountdownTimer from '../hooks/useCountdown'
import TypewriterEffect from '../utils/TypewritterEffect'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	const targetDate = new Date('2023-11-18T00:00:00Z')
	const { timeRemaining } = useCountdownTimer(targetDate)

	return (
		<article className="w-full flex flex-col items-center justify-end gap-4 lg:items-end lg:justify-end pt-6 h-auto lg:h-[calc(100vh-8rem)] border-b-2 border-primary-border relative">
			<h2 className=" text-center text-base mx-auto w-fit h-5 lg:h-10 lg:mr-10 mb-auto mt-8 lg:text-3xl lg:ml-auto relative">
				<TypewriterEffect
					textToDisplay={'Igniting a Revolution in HR innovation'}
				/>

				<img
					src={PurpleLine}
					aria-hidden
					className="inline-block absolute w-[40%] right-0 left-auto -bottom-1 "
					alt=""
				/>
			</h2>
			<section className="w-full h-auto px-6 mt-6 pb-0 lg:h-[90%] flex flex-col items-end justify-end lg:justify-center lg:grid lg:grid-cols-[auto_45%] lg:pb-0 lg:px-10">
				<div className="w-full h-auto lg:h-full">
					<h2 className="hero-txt flex flex-col align-bottom justify-end text-4xl md:text-5xl font-bold text-center lg:text-left">
						{/* TODO add the lightbulb icon <img
							src={LightbulbIcon}
							alt="" 
							aria-hidden
							className="h-10 inline-block ml-auto mr-10 lg:mr-60"
						/> */}
						getlinked Tech
						<br />
						<span className="flex items-center gap-1 mx-auto lg:ml-0">
							Hackathon <span className="text-primary-light">1.0</span>
							<img src={ChainIcon} alt="" aria-hidden className="h-12" />
							<img src={FireIcon} alt="" aria-hidden className="h-8" />
						</span>
					</h2>
					<p className="my-4 text-base text-center md:my-6 md:w-1/2 md:mx-auto lg:ml-0 lg:w-4/5 lg:text-left">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<PrimaryBtn
						text={'register'}
						link={'/register'}
						extraStyles={'mb-8 mx-auto lg:ml-0 flex'}
					/>

					<div className="countdown w-fit flex gap-4 h-10 mx-auto lg:ml-4 md:mt-auto">
						<p>
							{timeRemaining.days}
							<span className="font-sans font-thin text-base">d</span>
						</p>
						<p>
							{timeRemaining.hours}
							<span className="font-sans font-thin text-base">h</span>
						</p>
						<p>
							{timeRemaining.minutes}
							<span className="font-sans font-thin text-base">m</span>
						</p>
						<p>
							{timeRemaining.seconds}
							<span className="font-sans font-thin text-base">s</span>
						</p>
					</div>
				</div>
				<div className="w-4/5 mx-auto lg:h-full lg:ml-auto object-contain">
					<img
						src={HeroImage}
						alt="a man wearing smart glasses touching virtual screen in the background"
						className="inline-block max-h-[28rem] w-auto lg:h-full"
					/>
				</div>
			</section>
		</article>
	)
}
