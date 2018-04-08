import React from "react"
import { Route, Switch } from "react-router-dom"

import ReadingList from "../views/ReadingList"
import HomePage from "../views/HomePage"
import NotFound from "../views/NotFound"
import "../styles/reset"

const App = () => (
	<Switch>
		<Route exact path="/books" component={ReadingList} />
		<Route exact path="/home" component={HomePage} />
		<Route component={NotFound} />
	</Switch>
)

export default App
