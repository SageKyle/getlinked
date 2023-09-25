import { useEffect, useState } from 'react'

export default function useCountdownTimer(targetDate) {
	// const targetDate = new Date('2023-10-01T00:00:00Z')
	// console.log(targetDate)
	// const delayedTimeRemaining = useMemo(
	// 	() => getTimeRemaining(targetDate),
	// 	[targetDate]
	// )
	const [timeRemaining, setTimeRemaining] = useState(
		getTimeRemaining(targetDate)
	)

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimeRemaining(getTimeRemaining(targetDate))
		}, 1000)

		return () => clearInterval(timerInterval)
	}, [targetDate])

	return { timeRemaining }
}
function getTimeRemaining(targetDate) {
	const now = new Date()
	const target = new Date(targetDate)
	const timeDifference = target - now

	const seconds = Math.floor((timeDifference / 1000) % 60)
	const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
	const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

	return {
		days,
		hours,
		minutes,
		seconds,
	}
}
