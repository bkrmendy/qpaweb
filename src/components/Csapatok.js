import React, { Component } from 'react';
import { getListOfTeams } from '../api.js';
import { withRouter } from 'react-router'
import '../qpaweb.css';

class Csapatok extends Component {
	constructor(){
		super();
		this.state = {
			teams: null,
		}
	}

	onClick = () => {
		alert("added new team");
	}

	componentDidMount = () => {
		getListOfTeams(this.update);
	}

	update = (json) => {
		this.setState({teams: json.data});
	}



	render(){
		var teams = [];
		if (this.state.teams) {
			for (var i = 0; i < this.state.teams.length; i++) {
				var elem = this.state.teams[i];
				teams.push(<CsapatRow key={i} name={elem.name} score={elem.sumOfPoints} description={"Awesome team!"} />);
			}
		}
		return(
			<div className="content" id="content">
				<div>
					<h1> Csapatok </h1>
					<button onClick={this.onClick}>+</button>
				</div>
				<div>
					{teams}
				</div>
			</div>
		);
	}
}

const CsapatRow = (props) => {
	return (
		<div>
			<div>
				<h1>{props.name}</h1>
				<h1>{props.score}</h1>
			</div>
			<div>
				<p>{props.description}</p>
			</div>
		</div>
	)
}

export default withRouter(Csapatok);
