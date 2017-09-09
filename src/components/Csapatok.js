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
		this.props.history.push('/csapat/new');
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
					<button onClick={this.buttonClick}>+</button>
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
		<div onClick={()=>props.onClick(props.id)}>
			<div>
				<h1>{props.name}</h1>
				<h1>{props.score}</h1>
				<h1>{props.id}</h1>
			</div>
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

  componentDidMount(){
    var id = this.props.match.params.id;
    //update state here
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
			<div>
      <h1>{this.state.name}</h1>
      <h1>{this.state.score}</h1>
      <div>
      {members}
      </div>
			</div>
    );
  }
}

export class NewCsapat  extends Component {

}

export default withRouter(Csapatok);
