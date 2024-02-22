import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3563E9",
			dark: "#0A196F",
			light: "#658DF1",
			100: "#D6E4FD",
			200: "#AEC8FC",
			300: "#85A8F8",
			400: "#658DF1",
			600: "#264BC8",
			700: "#1A37A7",
			800: "#102587",
			900: "#0A196F",
		},
		secondary: {
			main: "#1A202C",
			dark: "#040815",
			light: "#596780",
			100: "#E0E9F4",
			200: "#C3D4E9",
			300: "#90A3BF",
			400: "#596780",
			600: "#131825",
			700: "#0D121F",
			800: "#080C19",
			900: "#040815",
		},
		error: {
			main: "#ED3F3F",
		},
		common: {
			white: "#fff",
			black: "#000",
			smokeWhite: "#f5f5f5",
			information: "#54A6FF",
		},
	},
	typography: {
		fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
		h1: {
			fontSize: "3.2rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2.5rem",
			fontWeight: 600,
		},
		h3: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		h4: {
			fontSize: "2rem",
			fontWeight: 600,
			color: "#596780",
		},
		h5: {
			fontSize: "1.5rem",
			fontWeight: 600,
		},
		h6: {
			fontSize: "1.2rem",
			fontWeight: 600,
		},
		body1: {
			fontSize: "2rem",
			fontWeight: 400,
			color: "#596780",
		},
		body2: {
			fontSize: "1.2rem",
			fontWeight: 400,
			color: "#596780",
		},
		caption: {
			fontSize: "1.2rem",
			fontWeight: 400,
			color: "#90A3BF",
		},
		subtitle1: {
			fontSize: "1.8rem",
			fontWeight: 400,
			color: "#90A3BF",
		},
		subtitle2: {
			fontSize: "1.8rem",
			fontWeight: 400,
			color: "#596780",
		},
		sale: {
			fontSize: "1.4rem",
			fontWeight: 600,
			color: "#90A3BF",
			textDecoration: "line-through",
		},
		button: {
			fontSize: "1.4rem",
			fontWeight: 600,
			textTransform: "capitalize",
		},
		a:{
			fontSize:"2rem"
		}
		
	},
	components: {
		MuiListItemText: {
		  styleOverrides: {
			root: {
			  fontSize: "4rem", // Adjust the font size here
			},
		  },
		},
	  },	
});
export default theme;
