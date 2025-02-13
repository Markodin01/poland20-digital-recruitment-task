import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		fontFamily: {
			autonomous: 'var(--font-autonomous)',
			lato: 'var(--font-lato)',
		},
		extend: {
			colors: {
				plWhite: '#e4e2dd',
				plBlack: '#070907',
				plPink: '#C72AC4',
				plBlue: '#2C0F6C',
				plDarkGrey: '#8b7a8f',
			},
			backgroundImage: {
				'pink-gradient': 'linear-gradient(90deg, rgba(117, 29, 149, 1) 0%, rgba(63, 0, 97, 1) 100%)',
				'primary-gradient': 'linear-gradient(180deg, #2C0F6C, #C72AC4)',
			},
			screens: {
				xs: '420px',
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-out',
				'fade-out': 'fadeOut 1s ease-in',
				slide: 'slide var(--duration, 30s) linear infinite',
				desktopSubMenu: 'desktopSubMenu 300ms ease-in-out forwards',
				'card-hover': 'cardHover 300ms ease-out forwards',
				'slide-up': 'slideUp 400ms ease-out forwards',
				'gradient-shine': 'gradientShine 2s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				slide: {
					to: { transform: 'translateX(-50%)' },
				},
				desktopSubMenu: {
					'0%': { opacity: '0', transform: 'translate(-50%,-10rem)' },
					'50%': { opacity: '0', transform: 'translate(-50%,10rem)' },
					'100%': { opacity: '1', transform: 'translate(-50%,14.5rem)' },
				},
				cardHover: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-8px)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				gradientShine: {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
			},
		},
	},
} satisfies Config;

export default config;
