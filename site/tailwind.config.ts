import { withMaterialColors } from 'tailwind-material-colors';
import type { Config } from 'tailwindcss';
import { colors } from 'tailwindcss/defaultTheme';
import tail from 'tail-material-design';
export default withMaterialColors(
	{
		content: ['./src/**/*.{html,js,svelte,ts}'],
		plugins: [tail],
		theme: {
			extend: {
				backgroundColor: { ...colors },
				colors: { ...colors },
				animation: {
					slit: 'slit-vertically 500ms linear 0s 1 normal none',
					up: 'up-motion 200ms'
				},
				keyframes: {
					'slit-vertically': {
						'0%': {
							transform: 'translateZ(-800px) rotateY(90deg)',
							opacity: '0'
						},
						'50%': {
							transform: 'translateZ(-160px) rotateY(87deg)',
							opacity: '1'
						},
						'100%': {
							transform: 'translateZ(0) rotateY(0)'
						}
					},
					'up-motion': {
						'0%': {
							height: '0',
							opacity: '0'
						}
					}
				}
			},
			fontSize: {
				'display-large': ['3.5rem', { lineHeight: '4rem' }],
				'display-medium': ['2.8rem', { lineHeight: '3.25rem' }],
				'display-small': ['2.25rem', { lineHeight: '2.75rem' }],

				'headline-large': ['2rem', { lineHeight: '2.5rem' }],
				'headline-medium': ['1.75rem', { lineHeight: '2.25rem' }],
				'headline-small': ['1.5rem', { lineHeight: '2rem' }],

				'title-large': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '500' }],
				'title-medium': [
					'1rem',
					{ lineHeight: '1.5rem', fontWeight: '500', letterSpacing: '0.15px' }
				],
				'title-small': [
					'0.875rem',
					{ lineHeight: '1.25rem', fontWeight: '500', letterSpacing: '0.1px' }
				],

				'body-large': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.15px' }],
				'body-medium': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.25px' }],
				'body-small': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.4px' }],

				'label-large': [
					'0.875rem',
					{ lineHeight: '1.25rem', fontWeight: '500', letterSpacing: '0.1px' }
				],
				'label-small': [
					'0.65rem',
					{ lineHeight: '1rem', fontWeight: '500', letterSpacing: '0.5px' }
				],
				'label-medium': [
					'0.75rem',
					{ lineHeight: '1rem', fontWeight: '500', letterSpacing: '0.5px' }
				]
			}
		}
	} satisfies Config,
	{
		primary: `#6750A4`
	}
);