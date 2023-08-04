module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {

            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            width: {
                '400': '25rem',
                '18': '5.312rem'
            },
            height: {
                '18': '5.312rem'
            },
            padding: {
                '4/3': '0.9375rem'
            },
        },
        colors: {
            'blue-d': '#051B34',
            'blue': '#3399FF',
            'black': '#000000',
            'pink': '#ff49db',
            'orange': '#FF9C5F',
            'orange-b': '#ff8e09',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#4B4B4B',
            'gray': '#434F4C',
            'gray-light': '#747474',
            'gray-input': '#F9F9F9',
            'gray-button': '#434F4C',
            'brown': '#6c3807',
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            purple: '#3f3cbb',
            midnight: '#121063',
            metal: '#565584',
            tahiti: '#3ab7bf',
            silver: '#ecebff',
            bermuda: '#78dcca',
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
        },
        keyframes: {
            "accordion-down": {
                from: {height: 0},
                to: {height: "var(--radix-accordion-content-height)"},
            },
            "accordion-up": {
                from: {height: "var(--radix-accordion-content-height)"},
                to: {height: 0},
            },
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
        },
    },
    plugins: [
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("tailwindcss-animate")
    ],
}
