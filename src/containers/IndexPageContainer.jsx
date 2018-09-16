import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import LoadingIndicator from '../components/LoadingIndicator';
import { fetchPageIfNeeded } from '../actions';

const PAGE_NAME = 'home';

// Smart component
class IndexPageContainer extends Component {
	componentWillMount() {
		const { fetchPageIfNeeded } = this.props;
		fetchPageIfNeeded(PAGE_NAME, true /* set embed = true include all embedded media */);
	}

	render() {
		const { page } = this.props;
		let content = <HomePage page={page} />;

		if (!page) {
			content = <LoadingIndicator />;
		}
		return (
			<div>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{
		page: state.pages[PAGE_NAME]
	}
);

const mapDispatchToProps = (dispatch) => (
	{
		fetchPageIfNeeded: (pageName, embeded) => {
			dispatch(fetchPageIfNeeded(pageName, embeded));
		}
	}
);

IndexPageContainer.propTypes = {
	fetchPageIfNeeded: React.PropTypes.func.isRequired,
	page: React.PropTypes.object,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexPageContainer);




// WEBPACK FOOTER //
// ./src/containers/IndexPageContainer.jsx