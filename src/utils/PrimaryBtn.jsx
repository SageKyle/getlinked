import { Link } from 'react-router-dom'

export default function PrimaryBtn({ text, link, extraStyles }) {
	return (
		<Link
			role="button"
			className={`w-fit bg-gradient text-white capitalize cursor-pointer px-6 py-3 text-lg font-semibold rounded lg:ml-3 hover:bg-primary hover:bg-blend-soft-light ease-in-out hover:duration-300 hover:transition-colors active:translate-y-2 ${extraStyles}`}
			to={link}
		>
			{text}
		</Link>
	)
}
