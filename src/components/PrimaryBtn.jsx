import { Link } from 'react-router-dom'

export default function PrimaryBtn({ text, link, extraStyles }) {
	return (
		<button
			type="button"
			className={`bg-gradient capitalize px-6 py-3 text-lg font-semibold rounded lg:ml-3 ${extraStyles}`}
		>
			<Link to={link}>{text}</Link>
		</button>
	)
}
