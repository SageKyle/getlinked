import { motion } from 'framer-motion'
import ModalImage from '../assets/images/congratulation.png'
import PrimaryBtn from '../utils/PrimaryBtn'

export default function RegistrationSuccessModal() {
	return (
		<aside
			role="modal"
			aria-describedby="congratulation"
			className="flex flex-col items-center justify-center fixed inset-0 bg-[#150e28] bg-opacity-90 z-50"
		>
			<motion.section
				initial={{ opacity: 0, scale: 0.1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1,
					delay: 0,
					type: 'spring',
					stiffness: 100,
				}}
				layout
				className="flex flex-col items-center justify-center gap-6 w-[85%] sm:w-[80%] max-w-lg 2xl:max-w-3xl md:px-20 p-10 text-white border border-primary-light rounded-md shadow h-fit text-sm"
			>
				<motion.img
					initial={{ opacity: 0, y: '-100%' }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						delay: 0.2,
					}}
					layout
					src={ModalImage}
					alt="congratulations"
					loading="lazy"
					className="w-3/4 max-w-md"
				/>
				<h1
					id="congratulation"
					className="font-bold text-xl text-center lg:text-2xl"
				>
					Congratulations <br /> you have successfully registered!
				</h1>
				<p>
					Yes, it was easy and you did it! <br />
					check your mail box for next step
				</p>
				<PrimaryBtn
					text={'back'}
					link={'/'}
					extraStyles={'w-full text-center'}
				/>
			</motion.section>
		</aside>
	)
}
