module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#181A20', // main background
        sidebar: '#101114', // sidebar background
        card: '#23262F', // card background
        border: '#353945', // border color
        accent: '#DCFF7FFD', // accent (lime/green)
        accent2: '#F4FFB0', // lighter accent
        kpiCard: '#23262F',
        kpiBorder: '#353945',
        kpiTitle: '#B1B5C3',
        kpiValue: '#F4F5F6',
        text: '#F4F5F6',
        textSecondary: '#B1B5C3',
        yellow: '#FFD600',
        graphLine: '#C6FF4F',
        graphHighlight: '#F4FFB0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
      },
      borderRadius: {
        'md': '6px',
        'lg': '10px',
      },
      boxShadow: {
        card: '0px 4px 32px rgba(23, 25, 31, 0.12)',
      },
    },
  },
  plugins: [],
} 