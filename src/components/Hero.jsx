// import UnderlineImage from '../assets/icons/purple-underline.png'
import PurpleLine from '../assets/icons/purple-underline.png'
import BlueFlare from '../assets/images/blue-blob-with-flare.png'
import TitleImage from '../assets/images/getlinked-title.png'
import Illustration from '../assets/images/man-wearing-smart-glasses-touching-virtual-screen.png'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
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
			<section className="w-full h-auto px-6 mt-6 pb-0 lg:h-[90%] flex flex-col items-center justify-end lg:justify-center lg:grid lg:grid-cols-[auto_55%] lg:pb-0">
				<div className="w-full h-auto lg:h-full">
					<img
						src={TitleImage}
						alt="Getlinked Tech Hackathon 1.0"
						className="max-w-[17rem] object-contain w-full lg:max-w-none lg:ml-0"
					/>
					<p className="my-4 text-base">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<PrimaryBtn text={'register'} link={'/register'} />

					<div className="countdown"></div>
				</div>
				<div className="w-4/5 h-[26rem] mx-auto lg:h-full relative flex lg:items-end lg:justify-end mt-auto">
					<img
						src={BlueFlare}
						alt="blue bubble flare"
						className="inline-block w-full h-full absolute z-[2]"
					/>
					<img
						src={Illustration}
						alt="a man wearing smart glasses touching virtual screen in the background"
						className="inline-block w-full h-full absolute left-0 right-0 lg:left-auto lg:right-auto lg:bottom-0 lg:top-0 z-[1]"
					/>
				</div>
			</section>
		</article>
	)
}
