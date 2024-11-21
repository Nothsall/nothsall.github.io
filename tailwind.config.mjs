/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'noir': '#333333',
				'blanc': '#F6F0E2',
		},
		fontFamily: {
			'titre': ['Carena', 'sans-serif'],
			'texte': ['Inria Sans', 'sans-serif'],
		},
		},
	},
	plugins: [],
}
