import Checkmark from '../assets/icons/checkmark.svg'
import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import PolicyImage from '../assets/images/policy-img.png'
import SecurityImage from '../assets/images/secure.svg'
import PrimaryBtn from '../utils/PrimaryBtn'

export default function PolicySection() {
	return (
		<section
			className="w-full flex flex-col gap-6 items-center justify-center border-y border-primary-border px-4 py-12 text-center lg:px-24 2xl:pt-28 lg:py-20 lg:flex-row lg:items-end lg:text-left relative"
			aria-description="privacy policy and terms"
		>
			<article className="w-full flex flex-col gap-1 relative lg:ml-8 md:w-[70%] lg:w-full 2xl:max-w-3xl 2xl:ml-auto 2xl:mr-0">
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 w-3 lg:w-6 absolute right-6 -top-8 lg:right-1/2 lg:-top-10 animate-pulse transition-all duration-200"
				/>
				<h4 className="text-2xl text-center font-bold lg:text-left 2xl:text-3xl">
					Privacy Policy and
				</h4>
				<h4 className="text-2xl text-center font-bold lg:text-left text-primary 2xl:text-3xl">
					Terms
				</h4>

				<p className="text-base font-light my-4 2xl:text-xl">
					Last updated on September 12, 2023
				</p>
				<p className="text-base font-light my-3 2xl:text-xl">
					Below are our privacy & policy, which outline a lot of goodies. <br />
					it&apos;s our aim to always take of our participant
				</p>
				<div className="w-[90%] flex flex-col gap-4 p-6 mx-auto my-6 border border-primary-light bg-[rgba(217,217,217,0.03)] rounded lg:w-full">
					<p className="text-xs sm:text-base font-light leading-8 my-3 2xl:text-xl">
						At getlinked tech Hackathon 1.0, we value your privacy and are
						committed to protecting your personal information. This Privacy
						Policy outlines how we collect, use, disclose, and safeguard your
						data when you participate in our tech hackathon event. By
						participating in our event, you consent to the practices described
						in this policy.
					</p>
					<h6 className="text-base font-bold text-left text-primary-light capitalize lg:text-xl 2xl:text-2xl">
						licensing policy
					</h6>

					<p className="text-base font-light text-left md:my-3 2xl:text-xl">
						Here are terms of our Standard License:
					</p>

					<p className="text-xs text-left sm:text-base font-light leading-7 sm:leading-8 my-3 flex gap-4 items-center 2xl:text-xl">
						<img src={Checkmark} alt="" aria-hidden className="w-6 h-6" />
						<span>
							The Standard License grants you a non-exclusive right to navigate
							and register for our event
						</span>
					</p>

					<p className="text-xs text-left sm:text-base font-light leading-7 sm:leading-8 my-3 flex gap-4 items-center 2xl:text-xl">
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
					className="inline-block absolute w-3 lg:w-8 -left-2 bottom-[8%] lg:bottom-[22%] lg:-left-16 animate-pulse transition-all duration-200"
				/>
			</article>
			<div className="w-[90%] min-h-[30rem] mx-auto lg:px-6 lg:my-auto lg:pb-16 flex items-center justify-center relative md:min-h-[44rem] md:w-[70%] lg:w-[90%] lg:min-h-0 xl:items-bottom xl:mb-0 2xl:max-w-3xl 2xl:mr-auto 2xl:ml-0">
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-3 lg:w-8 absolute left-2/3 lg:-left-12 top-[20%] lg:-top-[30%] animate-pulse transition-all duration-200"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 absolute -top-4 right-[20%] lg:-top-[12%] animate-pulse transition-all duration-200"
				/>
				<img
					src={SecurityImage}
					loading="lazy"
					alt=""
					aria-hidden
					className="w-4/5 h-auto absolute inline-block top-4 lg:-top-[35%] xl:-top-[10%] 2xl:w-2/3 2xl:-top-28"
				/>
				<img
					src={PolicyImage}
					loading="lazy"
					alt="privacy policy"
					className="inline-block relative mx-auto w-4/5 lg:w-full h-auto top-12 right-4 md:top-20 lg:-top-20 xl:top-20 2xl:w-2/3"
				/>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="hidden md:inline-block w-4 absolute left-1/4 bottom-1/3 lg:left-1/3 lg:bottom-[47%] xl:bottom-[36%] xl:w-6 animate-pulse transition-all duration-200"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 absolute bottom-1/4 left-20 lg:left-1/4 lg:bottom-[37%] xl:bottom-1/4 xl:w-6 animate-pulse transition-all duration-200"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block opacity-40 w-4 lg:w-8 absolute right-4 bottom-[28%] animate-pulse transition-all duration-200"
				/>
			</div>
		</section>
	)
}
