import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypewriterEffect({ textToDisplay }) {
	const displayedText = useRef(null)

	useEffect(() => {
		const typed = new Typed(displayedText.current, {
			strings: [textToDisplay],
			startDelay: 300,
			typeSpeed: 80,
			backSpeed: 100,
			backDelay: 1800,
			smartBackspace: true,
			loop: true,
		})

		return () => {
			typed.destroy()
		}
	}, [textToDisplay])
	return <span ref={displayedText}></span>
}
