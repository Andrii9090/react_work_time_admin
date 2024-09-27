const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            animation: {
                loader: 'loader 1.2s infinite linear',
            },
            keyframes: {
                loader: {
                    '0%': { transform: 'translateX(0%) scaleX(0)' },
                    '25%': { transform: 'translateX(15%) scaleX(.5)' },
                    '50%': { transform: 'translateX(60%) scaleX(1)' },
                    '75%': { transform: 'translateX(85%) scaleX(1.5)' },
                    '100%': { transform: 'translateX(100%) scaleX(2)' },
                },
            },
            transformOrigin: {
                'left-right': '0% 0%',
            },
        },
    },
    plugins: [],
}
