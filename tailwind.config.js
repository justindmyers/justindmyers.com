module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Nunito Sans"', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				black: '#242424',
			},
			lineHeight: {
				tight: '1.05',
			},
			fontSize: {
				'7xl': '6rem',
			},
		},
	},
	extend: {
		screens: {
			print: { raw: 'print' },
		},
	},

	plugins: [],
};
