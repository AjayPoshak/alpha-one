import React from "react"
import { Route, Switch } from "react-router-dom"
import ReadingList from "../components/ReadingList"
import HomePage from "../components/HomePage"
import NotFound from "../components/NotFound"

const App = () => (
	<Switch>
		<Route exact path="/reading" component={ReadingList} />
		<Route exact path="/" component={HomePage} />
		<Route component={NotFound} />
	</Switch>
)

export default App
