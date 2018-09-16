import React, { Component } from 'react';
import { scrollTo } from '../helpers/scrollTo';

import './Footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer section dark-grey text-center d-flex flex-column
			justify-content-center align-items-center text-white text-center p-5"
			>
				<section className="widget text-3 widget_text">
					<div className="widget-inner">
						<div className="textwidget">
							<div className="textwidget">
								<p>
					This hand-coded website is powered by
									<a href="https://facebook.github.io/react/">React.js</a>,
									<a href="http://redux.js.org/">Redux.js</a> and
									<a href="https://v4-alpha.getbootstrap.com/">
					Bootstrap 4
									</a>.
								</p>
								<p className="social-links">
									<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-twitter" />
									</a>
									<a href="https://linkedin.com/in/web-dev-ryan-miller" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-linkedin" />
									</a>
									<a href="https://github.com/ryanpmiller" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-github" />
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>
				<p>© {new Date().getFullYear()} <a href="http://ryanmiller.info">
			Ryan Miller & ryanmiller.info
				</a>.
				</p>
				<p>
					<a role="button" tabIndex={0} onClick={scrollTo.bind(this, '#root')} href="#" className="p-2">
			Back to top
					</a>
				</p>
			</footer>
		);
	}
}



// WEBPACK FOOTER //
// ./src/components/Footer.jsx