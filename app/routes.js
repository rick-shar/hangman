import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={Game} />
		<Route path="/about" component={About} />
	</Switch>
);
