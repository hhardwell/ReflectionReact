import React, { Component } from 'react';
import './stylesheets/asteroid.css';
import axios from 'axios';

class Asteroid extends Component {

	constructor() {
		super();
		this.state = {
			asteroids: [],
			asteroidsOne: [],
			asteroidsTwo: [],
			asteroidsThree: [],
		};
	}


	componentDidMount(){
		axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=ccIC4hNGEuZDB9LgxZcHfXmcruulTdC18tqJOfTA')
			.then(res => {
				console.log(Object.values(res.data.near_earth_objects)[0]);

				this.setState({
					asteroids: Object.values(res.data.near_earth_objects)[4]
				})
			})
	}

	render() {
		const asteroids = this.state.asteroids
		console.log(typeof asteroids)
		const asteroidList = (typeof asteroids !== 'undefined') ? (

			asteroids.map(asteroid => {
				return (

					<div className='asteroid post'>
						<div className= {(asteroid.is_potentially_hazardous_asteroid === true) ? (
							'asteroid-content asteroid-warning'
						) : (
							'asteroid-content'
						)}>
							<h4> Name: {asteroid.name} </h4>
							<h4>Estimated size</h4>
							<ul>
								<li className='asteroid-diameterMeter'>
									<strong>Minimum diameter in meters:</strong> {asteroid.estimated_diameter.meters.estimated_diameter_min}
								</li>
								<li className='asteroid-diameterMeter'>
									<strong>Maximum diameter in meters:</strong> {asteroid.estimated_diameter.meters.estimated_diameter_max}
								</li>
							</ul>
							<h4> Miss Distance </h4>
							<ul>
								<li> <strong>Kilometers:</strong> {asteroid.close_approach_data[0].miss_distance.kilometers} </li>
							</ul>

							<h4> Is it potentially hazardous? </h4>

							<p className='asteroid-dangerous'>
								{(asteroid.is_potentially_hazardous_asteroid === true) ? (
									'Yes'
								) : (
									'No'
								)}
							</p>
						</div>
					</div>
				)
			})


		) : (
			<div className='center'>No image currently, bear with us</div>
		)


    	return (
			<div className='bodyCont'>
					<h1 className='asteroidTitle'> Asteroids Today </h1>
					<div className='asteroidCont'>
						{asteroidList}
					</div>
			</div>
		)
	}
}

export default Asteroid;
