import React from 'react'

const Social = () => {
  return (
	<div className="home__social">
		<a href="https://www.linkedin.com" className="home__social-icon linkedin" target="_blank" rel='noreferrer'>
			<i className="uil uil-linkedin"></i>
		</a>
		<a href="https://www.facebook.com" className="home__social-icon facebook" target="_blank" rel='noreferrer'>
			<i className="uil uil-facebook"></i>
		</a>
		<a href="https://github.com/" className="home__social-icon github" target="_blank" rel='noreferrer'>
			<i className="uil uil-github"></i>
		</a>
	</div>
  )
}

export default Social