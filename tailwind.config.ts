
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Premium color palette
				premium: {
					50: '#faf8f3',
					100: '#f4f0e6',
					200: '#e8dfc7',
					300: '#d9caa3',
					400: '#c8b17d',
					500: '#b8975f',
					600: '#a07f52',
					700: '#856745',
					800: '#6b533c',
					900: '#574532',
				},
				gold: {
					50: '#fffdf2',
					100: '#fffadb',
					200: '#fff2b8',
					300: '#ffe680',
					400: '#ffd24d',
					500: '#d4af37',
					600: '#b8941f',
					700: '#927819',
					800: '#785f1a',
					900: '#644e1c',
				},
				sage: {
					50: '#f6f8f7',
					100: '#e3e9e5',
					200: '#c7d2cc',
					300: '#a1b5a8',
					400: '#7a9584',
					500: '#5f7a68',
					600: '#4a6153',
					700: '#3d5044',
					800: '#324138',
					900: '#2a3530',
				},
				therapeutic: {
					blue: '#1e3a8a',
					sage: '#374151',
					warm: '#d4af37',
					cream: '#faf8f3',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
				'heading': ['Playfair Display', 'serif'],
				'sans': ['Crimson Text', 'Times New Roman', 'serif'],
				'body': ['Crimson Text', 'Georgia', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'gentle-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			letterSpacing: {
				'wider': '0.05em',
				'widest': '0.1em',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
