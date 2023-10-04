import { Link } from 'react-router-dom'

export default function PrimaryBtn({ text, link, extraStyles }) {
	return (
		<button
			type="button"
			className={`bg-gradient capitalize cursor-pointer px-6 py-3 text-lg font-semibold rounded lg:ml-3 hover:bg-primary transition-all active:translate-y-2 ${extraStyles}`}
		>
			<Link to={link}>{text}</Link>
		</button>
	)
}
