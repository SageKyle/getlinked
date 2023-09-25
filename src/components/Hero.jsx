import PurpleLine from '../assets/icons/purple-underline.png'
import TitleImage from '../assets/images/getlinked-title.png'
import HeroImage from '../assets/images/hackathon-guy.png'
import useCountdownTimer from '../hooks/useCountdown'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	const targetDate = new Date('2023-10-01T00:00:00Z')
	const { timeRemaining } = useCountdownTimer(targetDate)

	return (
		<article className="w-full flex flex-col items-center justify-end gap-4 lg:items-end lg:justify-end pt-6 h-auto lg:h-[calc(100vh-8rem)] border-b-2 border-primary-border relative">
			<h2 className="w-4/5 text-center text-xl mx-auto lg:w-fit lg:mr-10 mb-auto mt-8 lg:text-3xl lg:ml-auto">
				Igniting a revolution in{' '}
				<span className="inline-block relative">
					HR Innovation
					<img
						src={PurpleLine}
						aria-hidden
						className="inline-block absolute right-0 left-0 -bottom-1 "
						alt=""
					/>
				</span>
			</h2>
			<section className="w-full h-auto px-6 mt-6 pb-0 lg:h-[90%] flex flex-col items-end justify-end lg:justify-center lg:grid lg:grid-cols-[auto_45%] lg:pb-0">
				<div className="w-full h-auto lg:h-full">
					<img
						src={TitleImage}
						alt="Getlinked Tech Hackathon 1.0"
						className="max-w-[17rem] w-full lg:max-w-none lg:ml-0"
					/>
					<p className="my-4 text-base text-center lg:text-left">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<PrimaryBtn
						text={'register'}
						link={'/register'}
						extraStyles={'mb-8 mx-auto lg:ml-0 flex'}
					/>

					<div className="countdown w-fit flex gap-4 h-10 mx-auto lg:ml-4 md:mt-auto">
						<p>{timeRemaining.days}</p>
						<p>{timeRemaining.hours}</p>
						<p>{timeRemaining.minutes}</p>
						<p>{timeRemaining.seconds}</p>
					</div>
				</div>
				<div className="w-4/5 mx-auto lg:h-full lg:ml-auto object-contain">
					<img
						src={HeroImage}
						alt="a man wearing smart glasses touching virtual screen in the background"
						className="inline-block max-h-[28rem] w-auto"
					/>
				</div>
			</section>
		</article>
	)
}
