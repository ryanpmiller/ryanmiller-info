import React, { Component } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectsListingContainer from '../containers/ProjectsListingContainer';
import { scrollTo } from '../helpers/scrollTo';

import './HomePage.scss';

export default class HomePage extends Component {
	componentDidMount() {
		// TODO update to not use jQuery
		const $headings = $('.hero').find('.heading-animated');
		let count = 1;
		const maxCount = $headings.length;

		this.swapLifeRoles = setInterval(() => {
			$headings.addClass('hidden');
			$($headings[count]).removeClass('hidden');
			count = (count + 1) % maxCount;
		}, 2500);
	}

	componentWillUnmount() {
		clearInterval(this.swapLifeRoles);
	}

	linkClick() {
		window.scrollTo(0, 0);
	}

	render() {
		const heroStyle = {
			backgroundColor: 'red',
			backgroundImage: ''
		};
		return (
			<div>
				<div className="hero" style={heroStyle}>
					<div className="hero-content d-flex flex-column justify-content-center align-items-center">
						<h1 className="headline">Hi – I’m Ryan Miller and I’m a</h1>
						<h1 className="heading-animated hidden">Web Developer</h1>
						<h1 className="heading-animated hidden">Dad</h1>
						<h1 className="heading-animated hidden">Designer</h1>
						<h1 className="heading-animated hidden">Snowboarder</h1>
						<h1 className="heading-animated hidden">Problem Solver</h1>
						<h1 className="heading-animated hidden">Mountain Biker</h1>
						<h1 className="heading-animated hidden">Husband</h1>
					</div>
					<div
						className="down-arrow"
						onClick={scrollTo.bind(this, '#sectionOne')}
						role="button"
						tabIndex={0}
					>
						<span className="arrow" />
					</div>
				</div>
				<div className="container" id="sectionOne">
					<div className="row skills-section section">
						<div className="col-sm-12 text-center p-5">
							<h2>My Philosophy</h2>
							<p>I have the skills, drive and experience to bring any project to life.</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p><span className="fa fa-mobile fa-5x">&nbsp;</span></p>
							<h5>Mobile&nbsp;First</h5>
							<p>A mobile first mentality allows for a shorter and more flexible development process.</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p><span className="fa fa-wrench fa-5x">&nbsp;</span></p>
							<h5>Diverse Skill-set</h5>
							<p>Having the right tools and chops to bring ideas to life is something I take pride in.</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p><span className="fa fa-thumbs-up fa-5x">&nbsp;</span></p>
							<h5>Pixel Perfect</h5>
							<p>My foundations are in Graphic Design, an asset I bring with me to every project.</p>
						</div>
						<div className="col-sm-12 p-3" />
					</div>
				</div>
				<div className="section grey">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="p-5 text-center">
									<h2>Recent Projects<span className="glyphicon glyphicon-picture pull-right">&nbsp;</span></h2>
									<p>Check out some of the stuff I’ve been working on lately.
										Feel free to drop me a line if you have any questions!</p>
								</div>
							</div>
						</div>
						<ProjectsListingContainer postCount={3} />
						<div className="text-center p-5">
							<LinkContainer
								to={{ pathname: '/projects' }}
								onClick={this.linkClick.bind(this)}
							>
								<Button
									bsStyle="primary"
									bsSize="large"
									target="_blank"
								>
									View All Projects
								</Button>
							</LinkContainer>
						</div>
						<div className="pb-5" />
					</div>
				</div>
				<div
					className="contact-section section primary d-flex flex-column justify-content-center
					align-items-center text-white text-center p-5"
				>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div>
									<h2>Let’s work together!</h2>
									<p>I’m always looking for new opportunities and would love to discuss how I can help bring your idea to life.</p>
								</div>
								<LinkContainer
									to={{ pathname: '/contact' }}
									onClick={this.linkClick.bind(this)}
								>
									<Button
										bsSize="large"
										target="_blank"
										className="contact-me"
									>
										Get In Touch
									</Button>
								</LinkContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



// WEBPACK FOOTER //
// ./src/components/HomePage.jsx