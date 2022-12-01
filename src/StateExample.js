import React from 'react'

class StateExample extends React.Component{
	state={
		name:"Kalam",
		age:22
	}
	render(){
		return(
			<div>
			   <p>{this.state.name} {this.state.age}</p>
			</div>
			)
	}
}
export default StateExample