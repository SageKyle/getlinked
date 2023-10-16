import LibertyLogo from '../../assets/icons/liberty-company-logo.png'
import LibertyPayLogo from '../../assets/icons/liberty-pay-logo.png'
import PayboxLogo from '../../assets/icons/paybox-logo.png'
import PurpleStar from '../../assets/icons/purple-star.png'
import Star from '../../assets/icons/star.svg'
import VuzualLogo from '../../assets/icons/vizual-plus.png'
import WinwiseLogo from '../../assets/icons/winwise-logo.png'
import WisperLogo from '../../assets/icons/wisper-logo.png'
import BGGlow from '../../assets/images/purple-lens-flare.png'

export default function PartnersSection() {
	return (
		<section
			className="w-full flex flex-col items-center justify-center gap-16 relative py-16"
			aria-describedby="partners-heading"
		>
			<img
				src={BGGlow}
				loading="lazy"
				alt=""
				aria-hidden
				className="w-full absolute inline-block [transform:rotate(-90deg)] opacity-70 top-2 -left-20 -z-[1] md:-left-40 md:-top-20 lg:-top-20 lg:-left-1/5 lg:w-4/5"
			/>
			<div className="w-4/5 mx-auto md:w-[40%] text-center">
				<h3 className="text-2xl font-bold mb-4" id="partners-heading">
					Partners and Sponsors
				</h3>
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
				className="inline-block w-4 h-4 md:w-6 md:h-6 absolute top-48 left-[15%]"
			/>

			<article className="w-[90%] mx-auto px-6 py-6 relative grid grid-cols-3 items-center justify-center rounded border border-primary-light bg-[rgba(255,255,255,0.01)] md:max-w-md lg:max-w-[80%] lg:px-40 lg:py-28">
				<div className="w-full h-24 flex items-center justify-center  p-6 box-item-1">
					<img
						src={LibertyLogo}
						alt="liberty  company logo"
						title="Liberty"
						className="inline-block object-contain object-center h-full mx-auto"
					/>
				</div>
				<div className="w-full h-24 flex items-center justify-center p-6 box-item-2">
					<img
						src={LibertyPayLogo}
						alt="liberty pay company logo"
						title="LibertyPay"
						className="inline-block object-contain object-center h-full mx-auto"
					/>
				</div>

				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 h-4 md:w-6 md:h-6 absolute top-2 right-[90%] lg:top-16 lg:right-[41%]"
				/>

				<div className="w-full h-24 flex items-center justify-center p-6">
					<img
						src={WinwiseLogo}
						alt="winwise company logo"
						title="WinWise"
						className="inline-block h-full object-contain object-center mx-auto"
					/>
				</div>

				<div className="w-full h-24 flex items-center justify-center p-6 box-right">
					<img
						src={WisperLogo}
						alt="Wispersms company logo"
						title="Wispersms"
						className="inline-block h-full object-contain object-center mx-auto"
					/>
				</div>

				<div className="w-full h-24 flex items-center p-6">
					<img
						src={PayboxLogo}
						alt="paybox company logo"
						title="Paybox"
						className="h-full justify-center object-contain mx-auto"
					/>
				</div>

				<div className="w-full h-24 flex items-center justify-center p-6 box-top-left">
					<img
						src={VuzualLogo}
						alt="vuzual company logo"
						title="Vuzual"
						className="inline-block object-contain object-center h-full mx-auto"
					/>
				</div>

				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4
					h-4 md:w-6 md:h-6 absolute right-[10%] bottom-2 lg:bottom-10 lg:right-[40%]"
				/>
			</article>
			<img
				src={BGGlow}
				loading="lazy"
				alt=""
				aria-hidden
				className="w-full absolute inline-block opacity-70 -bottom-40 -right-40 [transform:rotate(90deg)] -z-[1] md:-bottom-10 md:-right-52 lg:-bottom-1/3 lg:-right-1/4 lg:w-4/5 lg:opacity-60"
			/>
		</section>
	)
}
