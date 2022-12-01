import React from 'react'

class Demo extends React.Component{
	state={
		c:this.props.car,
		y:this.props.year
	}
	render(){
		return(
			<div>
				<p>{this.state.c} {this.state.y}</p>
				<h1>{this.props.car} {this.props.year}</h1>
			</div>
			)
	}
}
export default Demo