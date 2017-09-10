import React, { Component } from 'react';
import { getListOfTeams, postCreateNewTeam } from '../api.js';
import { withRouter } from 'react-router'
import '../qpaweb.css';

class Csapatok extends Component {
	constructor(){
		super();
		this.state = {
			teams: null,
		}
	}

	buttonClick = () => {
		this.props.history.push('/csapatok/new');
	}

	componentDidMount = () => {
		getListOfTeams(this.update);
	}

	update = (json) => {
		this.setState({teams: json.data});
	}

	onClick = (id) => {
		this.props.history.push('/csapat/'+id);
	}

	render(){
		var teams = [];
		if (this.state.teams) {
			for (var i = 0; i < this.state.teams.length; i++) {
				var elem = this.state.teams[i];
				teams.push(
					<CsapatRow
					key={i}
					id={elem.id}
					name={elem.name}
					score={elem.sumOfPoints}
					description={"Awesome team!"}
					onClick={this.onClick}/>

				);
			}
		}
		return(
			<div className="content" id="content">
				<div>
					<h1> Csapatok </h1>
				</div>
				<div>
					{teams}
				</div>
				<button onClick={this.buttonClick}>+</button>
			</div>

		);
	}
}

const CsapatRow = (props) => {
	return (
		<div className="content__team" onClick={()=>props.onClick(props.id)}>
			<div className="content__team-info">
				<h2><h4>Csapatnév: </h4>{props.name}</h2>
				<div><h4>Id: {props.id}</h4></div>
			</div>
				<h2><h4>Pontszám: </h4>{props.score}</h2>
			<div>
				<p>{props.description}</p>
			</div>
		</div>
	)
}

export class Csapat extends Component {
  constructor(){
    super();
    this.state = {
      id: null,
      name: null,
      score: null,
      members: null,
      joined: null,
    }
  }

	componentDidMount = () => {
		var id = this.props.match.params;

  }

  setMembers = (json) => {
    this.setState({...this.state, members: json.data});
  }

  setTeamData = (json) => {
    this.setState({...this.state, name: json.name, score: json.sumOfPoints, id: json.id,})
  }

  render(){
    var members = []
    if (this.state.members) {
      for (var i = 0; i < this.state.members.length; i++) {
        members.push(<h3>{this.state.members[i].name}</h3>);
      }
    }
    return(
			<div className="content">
      <h1>TEAM NAME</h1>
      <h1>TEAM SCORE</h1>
      <div>
      {members}
      </div>
			</div>
    );
  }
}

export class NewCsapat  extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="content">
				<h1>REGISTER NEW TEAM</h1>
			</div>
		);
	}
}

export default withRouter(Csapatok);
