/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				noir: '#333333',
				blanc: '#F6F0E2',
				vert: '#22C55E',
				rouge: '#EF4444',
				jaune: '#FACC15',
			},
			fontFamily: {
				titre: ['Carena', 'sans-serif'],
				texte: ['Inria Sans', 'sans-serif'],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'::-webkit-scrollbar': {
					width: '12px',
					height: '12px',
				},
				'::-webkit-scrollbar-track': {
					background: '#F6F0E2',
					'border-radius': '10px',
				},
				'::-webkit-scrollbar-thumb': {
					'background-color': '#333333',
					'border-radius': '10px',
					'border': '2px solid #F6F0E2',
				},
				'::-webkit-scrollbar-thumb:hover': {
					'background-color': '#555555',
				},
				'html': {
					'scrollbar-width': 'thin',
					'scrollbar-color': '#333333 #F6F0E2',
				},
				'body': {
					overflow: 'overlay',
				},
			});
		},
	],
};
