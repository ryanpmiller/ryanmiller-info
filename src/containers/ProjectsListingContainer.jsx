import React, { Component } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';

class ProjectsListingContainer extends Component {
	render() {
		return (
			<span>
				<LoadingIndicator text="Loading Projects..." />
			</span>
		);
	}
}

export default (ProjectsListingContainer);
