import { injectGlobal } from "styled-components"
import { backgroundColor } from "./variables"

injectGlobal`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background: ${backgroundColor};
		font-family: "Roboto", sans-serif;
	}
	@font-face {
		font-family: 'Roboto';
		src: url('https://fonts.googleapis.com/css?family=Roboto');
	  }
`
