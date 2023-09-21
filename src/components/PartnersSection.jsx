import LibertyLogo from '../assets/icons/liberty-company-logo.png'
import LibertyPayLogo from '../assets/icons/liberty-pay-logo.png'
import PayboxLogo from '../assets/icons/paybox.png'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import VuzualLogo from '../assets/icons/vizual-plus.png'
import WinwiseLogo from '../assets/icons/winwise-logo.png'
import WisperLogo from '../assets/icons/wisper-logo.png'

export default function PartnersSection() {
	return (
		<section className="w-full flex flex-col items-center justify-center gap-16 relative py-16">
			<div className="w-[40%] text-center">
				<h3 className="text-2xl font-bold mb-4">Partners and Sponsors</h3>
				<p className="text-base fon-thin leading-6">
					Getlinked Hackathon 1.0 is honored to have the following major
					companies as its partners and sponsors
				</p>
			</div>
			<img
				src={PurpleStar}
				alt=""
				aria-hidden
				loading="lazy"
				className="inline-block w-6 h-6 absolute top-48 left-[15%]"
			/>

			<article className="w-4/5 px-40 py-28 relative grid grid-cols-3 items-center justify-center rounded border border-primary-light bg-[rgba(255,255,255,0.01)]">
				<div className="w-full h-[10rem] flex items-center justify-center object-contain object-center p-10 box-item-1">
					<img
						src={LibertyLogo}
						alt="liberty  company logo"
						title="Liberty"
						className="inline-block h-full"
					/>
				</div>
				<div className="w-full h-[10rem] flex items-center justify-center object-contain object-center p-10 box-item-2">
					<img
						src={LibertyPayLogo}
						alt="liberty pay company logo"
						title="LibertyPay"
						className="inline-block"
					/>
				</div>

				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-6 h-6 absolute top-16 right-[41%]"
				/>

				<div className="w-full h-[10rem] flex items-center justify-center object-contain object-center p-10">
					<img
						src={WinwiseLogo}
						alt="winwise company logo"
						title="WinWise"
						className="inline-block h-full"
					/>
				</div>

				<div className="w-full h-[10rem] flex items-center justify-center object-contain object-center p-10 box-right">
					<img
						src={WisperLogo}
						alt="Wispersms company logo"
						title="Wispersms"
						className="inline-block h-full"
					/>
				</div>

				<div className="w-full h-[10rem] flex items-center justify-center object-contain  p-10">
					<img
						src={PayboxLogo}
						alt="paybox company logo"
						title="Paybox"
						className="w-full h-auto"
					/>
				</div>

				<div className="w-full h-[10rem] flex items-center justify-center object-contain object-center p-10 box-top-left">
					<img
						src={VuzualLogo}
						alt="vuzual company logo"
						title="Vuzual"
						className="inline-block my-auto"
					/>
				</div>

				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-6 h-6 absolute bottom-10 right-[40%]"
				/>
			</article>
		</section>
	)
}
