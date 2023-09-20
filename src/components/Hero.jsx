// import UnderlineImage from '../assets/icons/purple-underline.png'
import BlueFlare from '../assets/images/blue-blob-with-flare.png'
import TitleImage from '../assets/images/getlinked-title.png'
import Illustration from '../assets/images/man-wearing-smart-glasses-touching-virtual-screen.png'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<article className="w-full flex flex-col items-end justify-end pt-16 lg:h-screen border-b-2 border-primary-border glow-bg relative">
			<h2 className="mt-4 mr-6">
				Igniting a revolution in{' '}
				<span className="purple-underline">HR Innovation</span>
			</h2>
			<section className="w-full h-4/5 grid items-center justify-between lg:grid-cols-[auto_55%] pl-16">
				<div className="w-full h-auto">
					<img src={TitleImage} alt="Getlinked Tech Hackathon 1.0" />
					<p className="my-4 relative">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<PrimaryBtn text={'register'} link={'/register'} />

					<div className="countdown"></div>
				</div>
				<div className="w-full h-full relative flex items-end justify-end">
					<img
						src={BlueFlare}
						alt="blue bubble flare"
						className="inline-block w-full h-full absolute z-[2]"
					/>
					<img
						src={Illustration}
						alt="a man wearing smart glasses touching virtual screen in the background"
						className="inline-block w-full h-full absolute bottom-0 top-0 z-[1]"
					/>
				</div>
			</section>
		</article>
	)
}
