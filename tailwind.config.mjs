/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'noir': '#333333',
				'blanc': '#F6F0E2',
				'vert': '#22C55E',
				'rouge': '#EF4444',
				'jaune': '#FACC15',

		},
		fontFamily: {
			'titre': ['Carena', 'sans-serif'],
			'texte': ['Inria Sans', 'sans-serif'],
		},
		},
	},
	plugins: [],
}
