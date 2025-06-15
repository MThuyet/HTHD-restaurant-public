/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Segoe UI', 'sans-serif'],
                pacifico: ['Pacifico', 'sans-serif'],
            },
            colors: {
                primary: '#C3551A',
                secondary: '#FCCF64',

                whiteBlue: '#DBEAFE',
                darkBlue: '#1E40AF',

                whiteYellow: '#FEF9C3',
                darkYellow: '#854D0E',

                whiteRed: '#FEE2E2',
                darkRed: '#991B1B',

                whiteGreen: '#DCFCE7',
                darkGreen: '#166534',

                whitePurple: '#F3E8FF',
                darkPurple: '#6B21A8',

                bgBlue: '#F1F5FB',
                textPrimary: '#333333',
            },
        },
    },
    plugins: [],
};
