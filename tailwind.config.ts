import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				black: {
					800: '#1B1B1E'
				}
			},
			fontFamily: {
				satoshi: ['Satoshi-Variable']
			}
		}
	},

	plugins: []
} satisfies Config;
