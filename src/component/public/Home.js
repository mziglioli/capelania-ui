import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
	    const {t} = this.props;

		return (
			<div>
				"Home Page: " { t('welcome') }
			</div>
		);
	}
}
Home.propTypes = {
};
export default withTranslation()(Home)