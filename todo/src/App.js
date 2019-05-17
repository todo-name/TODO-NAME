import React from 'react';
import Landing from './Landing';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<Router>
			<Switch>
				<Route path="/" component={Landing}/>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
