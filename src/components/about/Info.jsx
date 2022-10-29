import React from 'react'

const Info = () => {
  return (
	<div className="about__info grid">
    <div className="about__box">
    <i class='bx bx-award' ></i>
      <h3 className="about__title">Experience</h3>
      <span className="about__subtitle"><strong>2 years</strong></span>
    </div>
    <div className="about__box">
    <i class='bx bx-briefcase-alt-2' ></i>
      <h3 className="about__title">Completed</h3>
      <span className="about__subtitle">Many projects</span>
    </div>
    <div className="about__box">
    <i class='bx bx-group'></i>
      <h3 className="about__title">Service</h3>
      <span className="about__subtitle">24/7</span>
    </div>
  </div>
  )
}

export default Info;