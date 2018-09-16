import React, { Component } from 'react';

import './ContactPage.scss';

export default class ContactPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-sm-12 text-white text-center">
					<div className="d-flex flex-column justify-content-center align-items-center contact-wrapper p-5">
						<h1 className="text-center">Contact Me</h1>
						<p style={{ maxWidth: '700px' }}>
							Let’s chat about your next project, an awesome idea, some new
							technology, the great outdoors or whatever else might be on
							your mind.
						</p>
						<p className="social-links">
							<a href="mailto:ryan.miller.p@gmail.com" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-envelope" />
							</a>
							<a href="https://twitter.com/ryanpmiller1" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-twitter" />
							</a>
							<a href="https://www.linkedin.com/in/web-dev-ryan-miller" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin" />
							</a>
							<a href="https://github.com/ryanpmiller" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github" />
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
