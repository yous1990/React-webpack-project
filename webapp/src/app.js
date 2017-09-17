import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './components/loading/loading.component'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.fetchValue = this.fetchValue.bind(this);

		this.state = {
			active: 0,
			fetching: false
		};
	}

	fetchValue(){
		this.setState({fetching: true});
		fetch('http://localhost:3000/vb')
			.then(resp => resp.json())
			.then(data => {
				this.setState({fetching: false});
				this.setState({active: data.value});
			});
	}

	render() {
		let myEl = null;
		if (this.state.fetching) {
			myEl = <Loading/>;
		} else {
			myEl = (
				<div>
					<span>{this.state.active}</span>
					<button onClick={this.fetchValue} disabled={this.state.active}>Fetch Data</button>
				</div>
			);
		}
		return (
			<div>{myEl}</div>
		)

	}
}


ReactDOM.render(
<App />,
	document.getElementById('app')
);
module.hot.accept();