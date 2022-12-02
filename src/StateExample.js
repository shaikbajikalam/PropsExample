import React from 'react'

class StateExample extends React.Component{
	state={
		name:"Kalam",
		age:22,
		Employees:[
			{id:1,name:"emp1"},
			{id:2,name:"emp2"}
			]
	}
	render(){
		return(
			<div>
			<p>{this.state.name} {this.state.age}</p>
			{
				this.state.Employees.map((emp)=>(
					<div>
					   <p>{emp.id}</p>
					   <p>{emp.name}</p>
					</div>
					))
			}
			 
			 {/*<p>{this.state.Employees[0].id} &nbsp;
			      {this.state.Employees[0].name}
			   </p>
			   <p>
			   	  {this.state.Employees[1].id} &nbsp;
			   	  {this.state.Employees[1].name}
			   </p>*/}
			</div>
			)
	}
}
export default StateExample