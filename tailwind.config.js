/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
				"colors": {
					"bitter": {
						50: "#FDEFED",
						100: "#FBE2DF",
						200: "#F8C5BF",
						300: "#F4A49A",
						400: "#F0887A",
						500: "#ED6A5A",
						600: "#E6351E",
						700: "#AF2513",
						800: "#78190D",
						900: "#3C0D07"
					},
					"marian": {
						50: "#E5EBF5",
						100: "#CBD8EB",
						200: "#98B0D7",
						300: "#6489C4",
						400: "#3E65A2",
						500: "#2B4570",
						600: "#223758",
						700: "#192942",
						800: "#111B2C",
						900: "#080E16"
					},
					"xanthous": {
						50: "#FEF8EB",
						100: "#FEF1D7",
						200: "#FDE3AF",
						300: "#FCD588",
						400: "#FBC965",
						500: "#FABC3C",
						600: "#F4A506",
						700: "#B37905",
						800: "#775103",
						900: "#3C2802"
					},
					"seagreen": {
						50: "#DEFDEF",
						100: "#B7FADC",
						200: "#75F5BB",
						300: "#2DF099",
						400: "#0EC874",
						500: "#09814A",
						600: "#07693D",
						700: "#054C2C",
						800: "#04341E",
						900: "#02180E"
					},
					"snow": {
						50: "#FFFFFF",
						100: "#FFFFFF",
						200: "#FFFFFF",
						300: "#FFFFFF",
						400: "#FFFFFF",
						500: "#FFFFFF",
						600: "#CCCCCC",
						700: "#999999",
						800: "#666666",
						900: "#333333"
					}
				}
			},
    fontFamily: {
      sans: ["Figtree", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("preline/plugin")],
};
