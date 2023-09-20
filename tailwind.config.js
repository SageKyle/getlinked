/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#903aff',
					light: '#d434fe',
					border: 'rgba(255, 255, 255, 0.18)',
				},
			},
			backgroundImage: {
				gradient:
					'linear-gradient(to left, rgb(144, 58, 255), rgb(254, 52, 185))',
				'purple-glow': "url('purple-lens-flare.svg')",
			},
		},
	},
	plugins: [],
}
