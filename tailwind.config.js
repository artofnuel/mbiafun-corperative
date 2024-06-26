/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7c35f",
        "primary-content": "#533804",
        "primary-dark": "#f5b12e",
        "primary-light": "#f9d590",

        secondary: "#5ff7c3",
        "secondary-content": "#045338",
        "secondary-dark": "#2ef5b1",
        "secondary-light": "#90f9d5",

        background: "#f4f1eb",
        foreground: "#fcfcfa",
        border: "#e8e2d6",

        copy: "#312a1c",
        "copy-light": "#826f4a",
        "copy-lighter": "#ac966d",

        success: "#5ff75f",
        warning: "#f7f75f",
        error: "#f75f5f",

        "success-content": "#045304",
        "warning-content": "#535304",
        "error-content": "#530404",
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1fb880",
//         "primary-content": "#000000",
//         "primary-dark": "#188c62",
//         "primary-light": "#2edc9c",

//         secondary: "#1f7db8",
//         "secondary-content": "#ddeef9",
//         "secondary-dark": "#185f8c",
//         "secondary-light": "#2e99dc",

//         background: "#ebf4f1",
//         foreground: "#fafcfb",
//         border: "#d6e9e2",

//         copy: "#1b3229",
//         "copy-light": "#47856e",
//         "copy-lighter": "#6aaf95",

//         success: "#1fb81f",
//         warning: "#b8b81f",
//         error: "#b81f1f",

//         "success-content": "#ddf9dd",
//         "warning-content": "#000000",
//         "error-content": "#f9dddd",
//       },
//     },
//   },
//   plugins: [],
// };
