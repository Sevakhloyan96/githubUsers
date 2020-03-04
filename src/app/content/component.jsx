import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './home';
import Persons from './person/component';


function Content() {
	return(
		<Switch>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/users">
        <Persons />
      </Route>
    </Switch>
	)
}

export default Content;