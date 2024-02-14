/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primarycl: '#161F2C',
                mainbg: '#0F1923',
                secondarycl: '#202A39',
                bordercl:'#93ACD3',
                footertext:'#99A4B0CC',
                footerlinks:'#C0CBD5',
                btncl: '#3BC117B2',
                tablecl: '#1D2736',
                textcl: '#FFDE01'
            },
            fontFamily: {
                roboto: 'Roboto',
            },
            shadow: {
                navbarsh: '0px 0px 30px 0px #0000006B'
            }
        },
    },
    plugins: [],
}