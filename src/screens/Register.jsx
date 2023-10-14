import PurpleStar from '../assets/icons/purple-star.png'
import Star from '../assets/icons/star.svg'
import IllustrationImg from '../assets/images/3d-graphic-designer-showing-thumbs-up.png'

export default function Register() {
	return (
		<section
			aria-description="registration page"
			className="grid my-10 tex-white lg:grid-cols-[auto_58%] lg:w-[90%] lg:mx-auto relative"
		>
			<div className="w-full flex flex-col items-center justify-center 2xl:max-w-2xl relative">
				<h1
					id="register"
					className="block ml-10 md:ml-20 lg:hidden text-primary-light capitalize text-2xl font-bold mb-6 self-start"
				>
					register
				</h1>
				<img
					src={IllustrationImg}
					loading="lazy"
					alt="register for the Getlinked Hackathon 1.0"
					className="w-full"
				/>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 h-4 md:w-6 md:h-6 absolute top-2/3 right-10 lg:top-[60%]"
				/>
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="hidden md:inline-block w-4 h-4 opacity-40 md:w-6 md:h-6 absolute bottom-40 left-10"
				/>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="hidden md:inline-block w-4 h-4 md:w-6 md:h-6 absolute top-40 left-10"
				/>
			</div>
			<form className="relative px-10 w-full md:px-20 md:py-16 lg:rounded-xl lg:shadow lg:bg-[rgba(255,_255,_255,_0.03)] 2xl:max-w-2xl relative">
				<img
					src={Star}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block w-4 h-4 opacity-40 md:w-6 md:h-6 absolute top-28 left-4 lg:left-2/3 lg:top-4"
				/>
				<h1
					id="register"
					className="hidden lg:block text-primary-light capitalize text-xl font-bold mb-6"
				>
					register
				</h1>
				<small className="text-center w-full inline-block text-sm my-2 lg:text-left">
					Be a part of this movement!
				</small>
				<h2 className="text-white mb-6 uppercase text-center text-xl font-semibold lg:text-left lg:text-2xl">
					create your account
				</h2>
				<fieldset className="flex flex-col lg:flex-row w-full gap-4 mb-6 text-sm lg:gap-10">
					<label className="w-full grid gap-1">
						<span>Team&apos;s Name</span>
						<input
							type="text"
							required
							name="teamName"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Enter the name of your group"
						/>
					</label>
					<label className="w-full grid gap-1">
						<span>Phone</span>
						<input
							type="tel"
							required
							name="phone"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Enter the your phone number"
						/>
					</label>
				</fieldset>
				<fieldset className="flex flex-col lg:flex-row w-full gap-4 text-sm lg:gap-10 mb-6">
					<label className="w-full grid gap-1">
						<span className="capitalize">Email</span>
						<input
							type="email"
							required
							name="email"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="Enter your email address"
						/>
					</label>
					<label className="w-full grid gap-1">
						<span className="capitalize">Project topic</span>
						<input
							type="text"
							required
							name="projectTopic"
							className="w-full py-2 px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
							autoComplete="on"
							placeholder="What is your team project topic"
						/>
					</label>
				</fieldset>
				<fieldset className="flex w-full gap-4 mb-4 text-sm lg:gap-10">
					<label className="w-full grid gap-1">
						<span className="capitalize">Category</span>
						<select
							required
							name="category"
							className="w-full py-2 px-3 md:px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
						>
							<option value="">Select your category</option>
						</select>
					</label>

					<label className="w-[43%] lg:w-full grid gap-1">
						<span className="capitalize">Group size</span>
						<select
							required
							name="groupSize"
							className="w-full p-2 lg:px-4 bg-transparent border rounded focus:outline-0 focus:border-primary-light [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
						>
							<option value="">Select</option>
						</select>
					</label>
				</fieldset>
				<p className="text-primary-light text-xs md:text-sm italic">
					Please review your registration details before submitting
				</p>
				<label className="flex gap-2 items-center my-2">
					<input
						type="checkbox"
						name="agree"
						id="agree"
						className="relative focus:outline-0 after:block after:absolute after:inset-0 after:bg-[#150e28] after:border after:border-white after:rounded checked:after:hidden"
					/>
					<span className="text-xs md:text-sm">
						I agreed with the event terms and conditions and privacy policy
					</span>
				</label>
				<button
					type="button"
					className="bg-gradient font-semibold text-xl rounded py-4 px-8 mt-6 capitalize flex justify-center w-3/4 mx-auto lg:w-full cursor-pointer hover:bg-primary hover:bg-blend-soft-light ease-in-out hover:duration-300 hover:transition-colors active:translate-y-2"
				>
					register now
				</button>
				<img
					src={PurpleStar}
					alt=""
					aria-hidden
					loading="lazy"
					className="inline-block lg:hidden w-2 h-2 md:w-4 md:h-4 absolute bottom-1/3 right-8"
				/>
			</form>
			<img
				src={Star}
				alt=""
				aria-hidden
				loading="lazy"
				className="hidden lg:inline-block md:w-4 md:h-4 absolute -bottom-4 right-20"
			/>
		</section>
	)
}
