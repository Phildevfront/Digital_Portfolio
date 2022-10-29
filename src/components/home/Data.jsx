import React from 'react'
import './Data.css'
import Hello from './hand-hello.png'

const Data = () => {
  return (
	<div className="home__data">
		<h1 className="home__title">Philippe Baurens
			<img className='hello__hand' src={Hello} alt="say hello"/>
		</h1>
		<h3 className="home__subtitle">Front-Developer</h3>
		<p className="home__description">I'm front-developer based in Paris, and I'm very passionnate and deddicated to my work.</p>
		<a href="#contact" className="button buton--flex" id="">
			Say Hello
			<i className="uil uil-message"></i>
		</a>

	</div>
  )
}

export default Data