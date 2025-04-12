module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
      fontFamily: {
        mojang: ['MojangABC'] // 必须与CSS中的font-family一致
      },
        colors: {
            slate: {
                900: '#0F172A',
                800: '#1E293B',
                700: '#334155',
              },
              purple: {
                400: '#C084FC',
                500: '#A855F7',
              },
              cyan: {
                400: '#22D3EE',
                500: '#06B6D4',
              }
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }