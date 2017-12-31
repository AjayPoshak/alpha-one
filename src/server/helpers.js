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
	<script src="http://localhost:8080/build/client/app.bundle.js"></script>
</html>
`
}

export function handleRender(req, res, html, preloadedState) {
	// Send the rendered page back to client
	res.send(renderFullPage(html, preloadedState))
	res.end()
}
