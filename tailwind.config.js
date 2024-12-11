import withMT from "@material-tailwind/react/utils/withMT";
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});


// import { defineConfig } from 'tailwindcss';

// export default defineConfig({
//   content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

// import { defineConfig } from 'tailwindcss';

// export default defineConfig({
//   content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Include the correct file paths
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });