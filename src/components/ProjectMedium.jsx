import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';

import './ProjectMedium.scss';

export default class ProjectMedium extends Component {
	render() {
		const { page } = this.props;
		/* eslint no-use-before-define: 0, no-undef: 0 */
		const trackGa = () => ga('send', 'event', 'Project Details', 'Click', projectLink);
		const columnClasses = ['col-lg-6', 'pb-5'];
		const requirements = page
			? (
				<div className="row">
					<div className="col-lg-12">
						<h6>Technologies</h6>
						<div className="project-specs">
							Project Specs
						</div>
					</div>
				</div>
			)
			: null;
		const colOne = (
			<div className={columnClasses.join(' ')}>
				<h3>Project Title</h3>
				<div>
					Project Description
				</div>
				<Button
					href="404.html"
					bsStyle="primary"
					bsSize="xs"
					target="_blank"
					onClick={trackGa}
				>Visit Website&nbsp;&nbsp;<i className="fa fa-external-link" />
				</Button>
			</div>
		);
		const colTwo = (
			<div className={columnClasses.join(' ')}>
				<a
					href={projectLink}
					target="_blank"
					onClick={trackGa}
				>
					<Image src="#" responsive />
				</a>
			</div>
		);
		// logic for left/right alternating content for Desktop
		const getContent = () => {
			if (this.props.index % 2 && document.documentElement.clientWidth > 961) {
				return (
					<div className="row">
						{colOne}
						{colTwo}
					</div>
				);
			}
			return (
				<div className="row">
					{colTwo}
					{colOne}
				</div>
			);
		};
		return (
			<span>
				{getContent()}
				{requirements}
				<div className="row">
					<div className="col-sm-12 pb-5 pt-5">
						<hr />
					</div>
				</div>
			</span>
		);
	}
}

ProjectMedium.propTypes = {
	index: React.PropTypes.number.isRequired,
	page: React.PropTypes.bool,
};
