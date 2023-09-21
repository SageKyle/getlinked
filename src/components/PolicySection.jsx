import Checkmark from '../assets/icons/checkmark.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import PolicyImage from '../assets/images/policy-img.png'
import SecurityImage from '../assets/images/secure.svg'
import PrimaryBtn from './PrimaryBtn'

export default function PolicySection() {
	return (
		<section className="w-full flex flex-col gap-6 items-center justify-center border-y border-primary-border px-24 py-20 lg:flex-row-reverse lg:items-end relative">
			<div className="w-[90%] px-10 pb-16 flex items-center relative">
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute -left-12 -top-[30%]"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 absolute right-[20%] -top-[12%]"
				/>
				<img
					src={SecurityImage}
					loading="lazy"
					alt=""
					aria-hidden
					className="w-[90%] h-auto absolute inline-block -top-[35%] "
				/>
				<img
					src={PolicyImage}
					loading="lazy"
					alt="privacy policy"
					className="w-[96%] h-auto"
				/>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 absolute left-1/3 bottom-[47%]"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 absolute left-1/4 bottom-[37%]"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 absolute right-4 bottom-[28%]"
				/>
			</div>
			<div className="w-full flex flex-col gap-1 relative lg:ml-8">
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 w-8 absolute right-1/2 -top-4"
				/>
				<h4 className="text-2xl text-center font-bold lg:text-left">
					Privacy Policy and
				</h4>
				<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
					Terms
				</h4>

				<p className="text-base font-light my-4">
					Last updated on September 12, 2023
				</p>
				<p className="text-base font-light my-3">
					Below are our privacy & policy, which outline a lot of goodies. <br />
					it&apos;s our aim to always take of our participant
				</p>
				<div className="w-full flex flex-col gap-4 p-10 my-6 border border-primary-light bg-[rgba(217,217,217,0.03)]">
					<p className="text-base font-light leading-8 my-3">
						At getlinked tech Hackathon 1.0, we value your privacy and are
						committed to protecting your personal information. This Privacy
						Policy outlines how we collect, use, disclose, and safeguard your
						data when you participate in our tech hackathon event. By
						participating in our event, you consent to the practices described
						in this policy.
					</p>
					<h6 className="text-base font-bold text-primary-light capitalize">
						licensing policy
					</h6>

					<p className="text-base font-light my-3">
						Here are terms of our Standard License:
					</p>

					<p className="text-base font-light leading-8 my-3 flex gap-4 items-center">
						<img src={Checkmark} alt="" aria-hidden className="w-6 h-6" />
						<span>
							The Standard License grants you a non-exclusive right to navigate
							and register for our event
						</span>
					</p>

					<p className="text-base font-light leading-8 my-3 flex gap-4 items-center">
						<img src={Checkmark} alt="" aria-hidden className="w-6 h-6" />
						<span>
							You are licensed to use the item available at any free source
							sites, for your project developement
						</span>
					</p>
					<div className="w-fit mx-auto">
						<PrimaryBtn text={'read more'} link={'/'} extraStyles={'px-8'} />
					</div>
				</div>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block absolute bottom-[22%] -left-16"
				/>
			</div>
		</section>
	)
}
