/** @type {import('tailwindcss').Config} */
export default {
	darkMode:'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			    'newspaper-dark':'rgb(190,190,180)',
				'newspaper-light':'rgb(219, 188, 150)',
			},
			fontFamily:{
				'title':'"Edu AU VIC WA NT Arrows", "Yuji Mai", serif;',
			},
			height:{
				'custom':'1000px',
			},
			width:{
				'custom':'800px',
			},
			margin:{
				'customL':'800px',
				'customT':'1000px',
			}
		}
	},
	plugins: [],
}