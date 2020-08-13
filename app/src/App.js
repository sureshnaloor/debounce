import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = { q: '', _searches: [] };

	changeQuery = (event) => {
		this.setState({ q: event.target.value }, () => {
			this.autocompleteSearch();
		});
	};

	autocompleteSearch = () => {
		this._fetch(this.state.q);
	};

	_fetch = (q) => {
		const _searches = this.state._searches || [];
		_searches.push(q);
		this.setState({ _searches });
	};

	render() {
		const _searches = this.state._searches || [];

		return (
			<>
				<input
					placeholder="Type something here"
					type="text"
					value={this.state.q}
					onChange={this.changeQuery}
				></input>
				<hr />
				<ol>
					{' '}
					{_searches.map((s, index) => {
						return <li key={s + index}> {s} </li>;
					})}{' '}
				</ol>{' '}
			</>
		);
	}
}

export default Appls;
