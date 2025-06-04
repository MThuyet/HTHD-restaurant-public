/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Be Vietnam Pro"', 'sans-serif'], // <-- Override font sans mặc định
                segoeUI: ['Segoe UI', 'sans-serif'], //  vẫn giữ font này nếu cần
            },
            colors: {
                primary: '#c3551a',
                secondary: '#fccf64',
                whiteBlue: '#dbeafe',
                darkInfo: '#1e40af',
                whiteYellow: '#fef9c3',
                darkYellow: '#854d0e',
                whiteRed: '#fee2e2',
                darkRed: '#991b1b',
                whiteGreen: '#dcfce7',
                darkGreen: '#166534',
            },
        },
    },
    plugins: [],
};
