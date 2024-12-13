import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'gradient-highlight':
					'radial-gradient(350px at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)'
			},
			colors: {
				black: {
					500: '#3A3A40',
					800: '#1B1B1E',
					900: '#18181B'
				},
				blue: {
					400: '#00ABE7'
				}
			},
			fontFamily: {
				satoshi: ['Satoshi-Variable']
			}
		}
	},

	plugins: []
} satisfies Config;
