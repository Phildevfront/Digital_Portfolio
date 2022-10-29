import React from 'react'
import "./about.css";
import Info from './Info';
import CV from '../../assets/PhilippeBAURENS-CV-2021.pdf'

const About = () => {
  return (
	<section className="about section" id="about">
		<h2 className="section__title"> ABOUT ME</h2>
		<span className="section__subtitle">Introduce</span>

		<div className="about__container container grid">

			<img src="https://picsum.photos/600/400" alt="" className='"about__img' />
			<div className="about__data">
				<Info />

				<p className="about__description">
				Après 15 ans d’expérience dans la pub en tant qu’ingénieur du son, j’ai choisi de
                faire évoluer ma carrière professionnelle dans le web.<br />
				<br />
				Fort d’une expérience de onze ans dans le secteur de la publicité pour le groupe <strong>HAVAS</strong>,
                j’ai travaillé pour de nombreux clients et marques différentes. J’ai acquis dans ce contexte une vraie capacité d’adaptation,
                de gestion projet et de travail en équipe ainsi qu’une expertise de la qualité des livrables.
				</p>

				<a download="" href={CV} className="button button--flex">Download CV <i class='bx bxs-download'></i></a>
			</div>
		</div>
	</section>
  )
}

export default About;