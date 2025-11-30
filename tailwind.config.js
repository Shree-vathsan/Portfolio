/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                terminal: {
                    bg: '#1a1b26', // Dark background
                    text: '#a9b1d6', // Light text
                    green: '#9ece6a',
                    red: '#f7768e',
                    yellow: '#e0af68',
                    blue: '#7aa2f7',
                    purple: '#bb9af7',
                    cyan: '#7dcfff',
                    gray: '#565f89',
                }
            },
            fontFamily: {
                mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
                'marquee-reverse': 'marquee-reverse 25s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
