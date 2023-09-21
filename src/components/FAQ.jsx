import PurpleStar from '../assets/icons/purple-star.png'
import QuestionMark from '../assets/icons/question-mark-1.svg'
import QuestionMark2 from '../assets/icons/question-mark-2.svg'
import QuestionMark3 from '../assets/icons/question-mark-3.svg'
import Star from '../assets/icons/star.svg'
import FaqImage from '../assets/images/faq.png'
// import GlowImage from '../assets/images/purple-lens-flare.svg'

export default function FAQSection() {
	return (
		<section className="w-full flex items-center justify-center border-b border-primary-border">
			<article className="w-[90%] mx-auto flex flex-col gap-4 items-center justify-center px-24 py-10 lg:flex-row-reverse lg:gap-0 lg:pt-20 relative">
				<div className="w-full flex relative">
					<img
						src={QuestionMark}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-24 h-24 relative inline-block -top-16 left-[20%]"
					/>
					<img
						src={QuestionMark2}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-24 h-24 absolute inline-block -top-28 left-[36%]"
					/>
					<img
						src={QuestionMark3}
						loading="lazy"
						alt=""
						aria-hidden
						className="w-24 h-24 absolute inline-block -top-16 right-28"
					/>
					<img
						src={FaqImage}
						loading="lazy"
						alt="frequently asked questions"
						className="w-full aspect-square"
					/>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 absolute top-24 left-1/4"
					/>
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-4 absolute top-0 right-[40%]"
					/>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block h-8 opacity-40 absolute bottom-56 left-20"
					/>
					<img
						src={Star}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block absolute -bottom-6 -right-6"
					/>
				</div>
				<div className="w-full flex flex-col gap-3 relative">
					<img
						src={PurpleStar}
						alt=""
						aria-hidden
						loading="lazy"
						className="inline-block w-8 mb-6 relative -left-6 top-2"
					/>
					<h4 className="text-2xl text-center font-bold lg:text-left">
						Frequently Asked
					</h4>
					<h4 className="text-2xl text-center font-bold lg:text-left text-primary">
						Questions
					</h4>

					<p className="text-sm">
						We got answers to the questions that you might want to ask about
						getlinked Hackathon 1.0
					</p>
					<div className="space-y-4 text-sm">
						<details className="w-full mb-3 border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									Can I work on a project I started before the hackathon?
								</span>
								<span className="text-primary text-lg font-bold inline-block ml-2 font-['Montserrat',_sans-serif]">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolorsit amet consectetur adipisicing elit.
								Doloremque, quis?
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>What happens if I need help during the hackathon?</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">.</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									What happens if I don&apos;t have an idea for a project?
								</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>Can I join a team or do I have to come with one?</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>What happens after the hackathon ends</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi.
							</p>
						</details>

						<details className="w-full  border-b border-primary">
							<summary className="py-4 cursor-pointer flex items-center justify-between">
								<span>
									Can I work on a project I started before the hackathon?
								</span>
								<span className="text-primary text-2xl font-bold inline-block ml-2">
									+
								</span>
							</summary>
							<p className="mb-2 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
								sequi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Iste vitae distinctio, pariatur voluptatum iusto rerum!
							</p>
						</details>
					</div>
				</div>
			</article>
		</section>
	)
}
