import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Home from './Home';
import Asteroid from './Asteroid';
import PictureOTD from './PictureOTD';

import{ BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const routing = (
	<Router>
		<div className="navCont">
			<div className="nav-buttons">
				<button type="button" name="button"><NavLink exact to='/'>Home</NavLink></button>

				<button type="button" name="button"><NavLink to='/Asteroid'>Asteroid Watcher</NavLink></button>

				<button type="button" name="button"><NavLink to='/PictureOTD'>Astronomy Picture of the Day</NavLink></button>
			</div>
		</div>
		<Route exact path='/' component={Home} />
		<Route path='/Asteroid' component={Asteroid} />
		<Route path='/PictureOTD' component={PictureOTD} />
	</Router>
);



ReactDOM.render(routing, document.getElementById('root'));
