import React from 'react'
import "./about.css";
import Info from './components/Info'



const About = () => {
  return (
	<section className="about section" id="about">
		<h2 className="section__title"> ABOUT ME</h2>
		<span className="section__subtitle">Introduce</span>

		<div className="about__container container grid">

			<img src="https://picsum.photos/600/400" alt="" className='"about__img' />
			<div className="about__data">
				<Info />
			</div>
		</div>
	</section>
  )
}

export default About