// import UnderlineImage from '../assets/icons/purple-underline.png'
import BlueFlare from '../assets/images/blue-blob-with-flare.png'
import TitleImage from '../assets/images/getlinked-title.png'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<article className="w-full">
			<h2>
				Igniting a revolution in <span>HR Innovation</span>
			</h2>
			<section className="w-full grid items-center justify-between lg:grid-cols-2">
				<div className="">
					<img src={TitleImage} alt="Getlinked Tech Hackathon 1.0" />
					<p>
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</p>

					<PrimaryBtn text={'register'} link={'/register'} />

					<div className="countdown"></div>
				</div>
				<div className="w-full">
					<img
						src={BlueFlare}
						alt="blue bubble flare with a man wearing smart glasses touching virtual screen in the background"
						className="w-full"
					/>
				</div>
			</section>
		</article>
	)
}
