import React from 'react'

class Events extends React.Component{
	state={
		username:""
	}
	handleChange=()=>{
		alert()
	}
	render(){
		return(
			<div>
			<input onChange={this.handleChange} 
			 placeholder=" enter username"/>
			</div>
			)
	}

}
export default Events