import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ReadingList from '../components/ReadingList'
import NotFound from '../components/NotFound'

const App = () => {
	return (
		<Switch>
			<Route exact path="/reading" component={ReadingList} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default App
