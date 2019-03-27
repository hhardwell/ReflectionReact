import React, { Component } from 'react';
import './stylesheets/home.css';


class Home extends Component {
  	render() {
    	return (
			<div className='bodyCont homeBodyCont' >
				<div id="title-main">
					<h1>Welcome to my NASA API calling site</h1>
					<div id="main-content">
						<p> Grab a drink, take a seat as I let you explore the universe from the comfort of your seat. </p>
						<p> On this site I will be using API built by NASA and aim to show you a variety of aspects directly from NASA themselves. </p>
						<p>I will show you the <i>Astronomy Picture of the Day</i> with an explanation below to explain the phenomenom.</p>
						<p>As well as that I will also be showcasing the <i>Near Earth Object Web Service</i> which is designed to show a list of asteroids based on their proximity to Earth.</p>
					</div>
					<div id="quote">
						<h4>Food for thought</h4>
						<div id='quoteCont'>
							<blockquote id="quotetext"><i>Imagination will often carry us to worlds that never were. But without it we go nowhere.</i>
							<span id="quote-author">- Carl Sagan</span>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
    	);
  	}
}

export default Home;
