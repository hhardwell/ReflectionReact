import React, { Component } from 'react';
import './stylesheets/apod.css';
import axios from 'axios';

class PictureOTD extends Component {

	state = {
		apod: [ ],
	};

	componentDidMount(){
		axios.get('https://api.nasa.gov/planetary/apod?hd=True&api_key=ccIC4hNGEuZDB9LgxZcHfXmcruulTdC18tqJOfTA')
			.then(res => {
				this.setState({
					apod: res.data
				});
			});
	}

	render() {
		const apod = this.state.apod
		const postList = (typeof apod !== 'undefined') ? (

			<div className='apod card'>
				<div className='card-content'>
					<h2>Astronomy Picture of the Day </h2>
					<span className='card-title'>{apod.title}</span>
					<div className='apodImageCont'>
						<img className='apodPic' src={apod.hdurl} alt='daily space'/>
					</div>
					<p>{apod.explanation}</p>
				</div>
			</div>

		) : (
			<div className='center'>No image currently, bear with us</div>
		)

    	return (
			<div className='bodyCont apodBodyCont'>
				{postList}
			</div>
		)
	}
}

export default PictureOTD;
