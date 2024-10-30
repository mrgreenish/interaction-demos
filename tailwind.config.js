module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	screens: {
  		xs: '320px',
  		sm: '414px',
  		md: '768px',
  		lg: '1024px',
  		lm: '1200px',
  		xl: '1440px',
  		'2xl': '1536px',
  		'3xl': '1700px'
  	},
  	fontFamily: {
  		helvetica: ["Helvetica Now Text W05", "sans-serif"],
  		helveticaLight: ["Helvetica Now Text W05 Light", "sans-serif"],
  		helveticaNowLight: ["Helvetica Now Text W01 Light", "sans-serif"]
  	},
  	extend: {
  		fontSize: {
  			xs: '.75rem',
  			sm: '.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '1.75rem',
  			'4xl': '1.875rem',
  			'5xls': '2rem',
  			'5xl': '2.25rem',
  			'6xl': '2.375rem',
  			'7xl': '2.5rem',
  			'8xl': '3rem',
  			'9xl': '4rem',
  			full: '100%',
  			basic: 'var(--font-size-base)'
  		},
  		maxWidth: {
  			'1/2': '50%',
  			xs: '270px',
  			s: '465px'
  		},
  		lineClamp: {
  			'1': '1',
  			'2': '2',
  			'3': '3',
  			'4': '4',
  			'5': '5',
  			'7': '7',
  			'8': '8',
  			'9': '9',
  			'10': '10'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	colors: {
  		blue: {
  			'100': '#7C8AAE'
  		},
  		purple: {
  			'400': '#8181bd',
  			'500': '#5550af'
  		},
  		black: '#000',
  		transparent: 'transparent',
  		'brand-blue': {
  			'100': '#004ec2',
  			'200': '#003584'
  		},
  		white: '#fff',
  		sun: {
  			'100': '#d79b00'
  		},
  		sunset: {
  			'100': '#FF6428',
  			'200': '#B2380A'
  		},
  		concrete: '#4a5155',
  		eggshell: {
  			'100': '#F4F0EE',
  			'200': '#DA09FF'
  		},
  		sky: {
  			'100': '#003584',
  			'200': '#DA09FF'
  		},
  		meadow: {
  			'100': '#99D497',
  			'200': '#257A22',
  			'300': '#DA09FF',
  			'400': '#DA09FF',
  			'500': '#DA09FF'
  		},
  		green: {
  			'100': '#D2E9C8'
  		},
  		yellow: {
  			'100': '#FAC850'
  		},
  		grid: {
  			'100': '#6e96b0',
  			'200': '#5a7b91'
  		},
  		ocean: {
  			'100': '#DA09FF',
  			'200': '#3C8CFA',
  			'300': '#6DA9FB',
  			'400': '#2E6FC8'
  		},
  		eucaliptise: {
  			'100': '#469cab',
  			'200': '#3B6275'
  		},
  		grey: {
  			'100': '#505050',
  			'200': '#2D2D2D',
  			'300': '#575756',
  			'400': '#616160',
  			'500': '#e0dedB',
  			'600': '#dfdfdf'
  		},
  		warmgray: {
  			'100': '#998E83'
  		},
  		pink: {
  			'100': '#ffe6e9',
  			'200': '#ffcdd4',
  			'300': '#ffb3bf',
  			'400': '#ff99aa',
  			'500': '#ff8095',
  			'600': '#ff6680'
  		}
  	},
  	backgroundImage: {
  		chevron: `url(\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z' fill='%23298726'/%3E%3C/svg%3E\\");`,
  		chevronWhite: `url(\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z' fill='%23fff'/%3E%3C/svg%3E\\");`,
  		gradientFadeRight: 'linear-gradient(to left, transparent, #f9f7f3)',
  		gradientFadeLeft: 'linear-gradient(to right, transparent, #f9f7f3)'
  	},
  	spacing: {
  		'0': '0',
  		'1': '0.5rem',
  		'2': '1rem',
  		'3': '1.5rem',
  		'4': '2rem',
  		'5': '2.5rem',
  		'6': '3rem',
  		'7': '3.5rem',
  		'8': '4rem',
  		'9': '4.5rem',
  		'10': '5rem',
  		'11': '5.5rem',
  		'12': '6rem',
  		'13': '7rem',
  		'14': '7.5rem',
  		'15': '8rem',
  		'20': '10rem',
  		'25': '12.5rem',
  		'30': '15rem',
  		'35': '17.5rem',
  		'40': '20rem',
  		'45': '22.5rem',
  		'50': '25rem',
  		'52': '26rem',
  		'05': '0.25rem',
  		xs: '0.75rem'
  	},
  	lineHeight: {
  		'0': '0',
  		'1': '0.5em',
  		'2': '1em',
  		'3': '1.5em',
  		'4': '2em',
  		'5': '2.5em',
  		'6': '3em',
  		'7': '3.5em',
  		'8': '4em',
  		'9': '4.5em',
  		'10': '5em'
  	},
  	container: {
  		xs: '320px',
  		sm: '414px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1440px',
  		'2xl': '1536px',
  		center: 'true',
  		padding: {
  			xs: '1.75rem',
  			sm: '1.75rem',
  			md: '3rem',
  			xl: '4rem'
  		}
  	},
  	minWidth: {
  		'1/2': '50%'
  	}
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwindcss-animate")],
};
