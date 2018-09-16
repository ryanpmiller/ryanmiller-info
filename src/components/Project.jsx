import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

// Dumb component
export default class Project extends Component {
	render() {
		const projectLink = '404.html';
		/* eslint no-use-before-define: 0, no-undef: 0 */
		const trackGa = () => ga('send', 'event', 'Project Details', 'Click', projectLink);

		return (
			<div>
				<header>
					<h1 className="entry-title">Project Title</h1>
				</header>
				<div className="entry-content">
					<div className="row">
						<div className="col-lg-12">
							<div className="project-detail">
								<a
									href={projectLink}
									target="_blank"
									onClick={trackGa}
								>
									<Image src="#" responsive />
								</a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">&nbsp;</div>
					</div>
					<div className="row">
						<div className="col-sm-9">
							<h3>Project Description&nbsp;&nbsp;
								<a
									href={projectLink}
									className="btn btn-primary btn-xs"
									target="_blank"
									onClick={trackGa}
								>Live demo&nbsp;&nbsp;<i className="glyphicon glyphicon-share-alt" />
								</a>
							</h3>
							<div>
								Project Description
							</div>
						</div>
						<div className="col-sm-3">
							<h3>Project Requirements</h3>
							<div>
								Project Specs
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
