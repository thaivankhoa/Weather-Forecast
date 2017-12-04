import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		// fetch weather data here
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Give a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span class="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
} 

//

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);

	// to help Dump Components work easily with Action, the Smart Components prepare
	// action callbacks through bindActionCreators()
	//  
}

// null : state, but now we dont need a state here

export default connect(null, mapDispatchToProps)(SearchBar)