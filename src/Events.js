import {Component} from 'react'

class Events extends Component{

	state={
		username:"",
		password:""
	}
	handelClick=()=>{
		console.log(this.state.username)
		console.log(this.state.password)
	}
	handelChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	} 
	render(){
		return(
			<div>
			<input onChange={this.handelChange} 
			 placeholder="enter name" name="username"/>
			<p><input onChange={this.handelChange} 
			 placeholder="enter password"
			 name="password"/></p>
			 <button onClick={this.handelClick}>Submit</button>
			</div>
			)
	}
}
export default Events