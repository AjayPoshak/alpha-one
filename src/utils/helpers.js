import axios from "axios"

export function makeAPICall(url, method = "GET") {
	console.log(typeof url, url)
	const options = {
		url: `${process.env.BASE_URL}${url}`,
		method
	}
	return axios(options)
		.then(response => Promise.resolve(response.data))
		.catch(err => Promise.reject(err))
}

export function renderFullPage(html, preloadedState) {
	return `
		<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Demo</title>
	</head>
	<body>
		<div id="root">${html}</div>
	</body>
	<script>
	window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
	</script>
	<script src="build/client/main.bundle.js"></script>
</html>
`
}

export function handleRender(req, res, html, preloadedState) {
	// Send the rendered page back to client
	res.send(renderFullPage(html, preloadedState))
	res.end()
}
